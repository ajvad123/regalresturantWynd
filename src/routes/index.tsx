import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Experience } from "@/components/Experience";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { FloatingBook } from "@/components/FloatingBook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Regal Food Restaurant — Premium Family Dining in Vythiri, Wayanad" },
      { name: "description", content: "Best restaurant in Vythiri, Wayanad. Premium family dining with authentic Kerala & Arabian cuisine, biriyani, grills and elegant ambience." },
      { name: "keywords", content: "Best restaurant in Vythiri, Family restaurant in Wayanad, Arabian food in Vythiri, Premium dining Wayanad, Kerala biriyani Wayanad" },
      { property: "og:title", content: "Regal Food Restaurant — Vythiri, Wayanad" },
      { property: "og:description", content: "Premium family dining with Kerala & Arabian cuisine in the misty hills of Wayanad." },
      { property: "og:type", content: "restaurant" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Italiana&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Regal Food Restaurant",
          address: { "@type": "PostalAddress", streetAddress: "Vythiri", addressLocality: "Wayanad", addressRegion: "Kerala", postalCode: "673576", addressCountry: "IN" },
          servesCuisine: ["Kerala", "Arabian", "Biriyani", "Grills"],
          priceRange: "₹₹",
          telephone: "+91-98765-43210",
          openingHours: "Mo-Su 11:00-23:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-cream text-charcoal overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <FloatingBook />
    </div>
  );
}
