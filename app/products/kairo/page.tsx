import type { Metadata } from "next";
import ProductDetail from "../ProductDetail";

export const metadata: Metadata = {
  title: "Kairo — AI Content Intelligence",
  description: "Kairo is AI content intelligence that turns brand context and live discovery into evidence-backed content opportunities.",
  alternates: { canonical: "/products/kairo" },
  openGraph: { title: "Kairo — AI Content Intelligence | Phanira", description: "Kairo turns brand context and live discovery into evidence-backed content opportunities.", url: "/products/kairo", type: "website" },
};

export default function KairoPage() {
  return (
    <ProductDetail
      slug="kairo"
      name="KAIRO"
      category="AI CONTENT INTELLIGENCE"
      headline="From brand context to evidence-backed content opportunities."
      intro="Kairo helps brands understand themselves, discover what is gaining attention, and turn those signals into content worth creating."
      promise="Less guessing. More context, evidence and momentum."
      steps={["Brand Brain", "Hunter", "Discover", "Create", "Publish", "Learn"]}
      audience="For teams and creators who want a repeatable content system instead of starting from a blank page every time."
      capabilities={[
        {
          title: "Understand the brand",
          body: "Build a living Brand Brain from sources such as a website and connected social profiles, then use that context across the workflow.",
        },
        {
          title: "Find real opportunities",
          body: "Hunter looks for relevant trends, outliers and evidence so recommendations have a reason to exist, not just an AI-generated theme.",
        },
        {
          title: "Create with context",
          body: "Turn opportunities into posts, carousels, reels and campaigns while keeping the brand, format and underlying evidence connected.",
        },
        {
          title: "Close the learning loop",
          body: "Publish, observe performance and feed useful signals back into future discovery and content decisions.",
        },
      ]}
    />
  );
}
