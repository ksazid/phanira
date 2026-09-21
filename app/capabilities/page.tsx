import type { Metadata } from "next";
import ExtensionPage from "../components/ExtensionPage";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Phanira combines product strategy, AI workflows, learning experiences, brand intelligence, and scalable systems.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return <ExtensionPage
    path="/capabilities"
    eyebrow="OUR CAPABILITIES"
    title="From insight to impact."
    description="We combine strategy, technology, and operational expertise to turn ambitious ideas into enduring products."
    dark
    cards={[
      { title: "Brand intelligence", body: "Deeper insight and stronger brand decisions through context, signals, and evidence." },
      { title: "AI workflows", body: "Smarter systems that reduce repetitive work and create greater leverage for teams." },
      { title: "Learning experiences", body: "Focused journeys that help people understand what matters and know what to do next." },
      { title: "Product strategy", body: "A clearer path from an early idea to a useful, testable product decision." },
      { title: "Scalable systems", body: "Reliable foundations built to support the next stage of a product’s growth." },
      { title: "Evidence-led decisions", body: "A practical preference for learning from real signals before committing time and capital." },
    ]}
  />;
}
