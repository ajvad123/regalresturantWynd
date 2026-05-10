import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const { default: serverHandler } = await import("../src/server.ts");

    const origin = `http://${req.headers.host ?? "localhost"}`;
    const url = new URL(req.url || "/", origin);
    const originalPath = url.searchParams.get("originalPath");
    if (originalPath) {
      url.searchParams.delete("originalPath");
      url.pathname = originalPath;
    }

    const request = new Request(url.toString(), {
      method: req.method,
      headers: req.headers as HeadersInit,
      body:
        req.method !== "GET" && req.method !== "HEAD" && req.body
          ? typeof req.body === "string"
            ? req.body
            : JSON.stringify(req.body)
          : undefined,
    });

    const response = await serverHandler.fetch(request, {}, {});

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.status(response.status);
    res.send(await response.text());
  } catch (error) {
    console.error("SSR Error:", error);
    res.status(500).send(`Internal Server Error\n${error}`);
  }
};

