import type { Metadata } from "next";
import ExtensionPage from "../components/ExtensionPage";

export const metadata: Metadata = {
  title: "Phanira Brand",
  description: "Phanira’s brand language: people, ideas, technology, and a more intelligent tomorrow.",
  alternates: { canonical: "/brand" },
};

export default function BrandPage() {
  return <ExtensionPage
    path="/brand"
    eyebrow="PHANIRA BRAND"
    title="A more intelligent tomorrow."
    description="Phanira’s public brand language is editorial, clear, ambitious, refined, inventive, and enduring."
    dark
    cards={[
      { title: "Editorial clarity", body: "Use precise, useful language. Let the idea carry the attention; avoid unnecessary jargon and inflated claims." },
      { title: "Human ambition", body: "Technology should help people make progress, understand more, and create meaningful outcomes." },
      { title: "Evidence before noise", body: "Prefer context, proof, and a clear next step over vague promises or attention for its own sake." },
    ]}
  />;
}
