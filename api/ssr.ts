import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Dynamically import the server entry
    const { default: serverHandler } = await import("../dist/server/index.js");

    // Create a proper Request object
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
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

    // Call the server handler's fetch method
    const response = await serverHandler.fetch(request, {}, {});

    // Copy headers from response
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Set status
    res.status(response.status);

    // Send body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error("SSR Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

