import type { Metadata } from "next";
import ProductDetail from "../ProductDetail";

export const metadata: Metadata = {
  title: "Venture Blueprint — Evidence-Led Idea Validation",
  description: "Venture Blueprint validates early ideas with market evidence, demand signals, monetisation logic, risk scoring and a clear Go, Refine, or Stop recommendation.",
  alternates: { canonical: "/products/venture-blueprint" },
  openGraph: { title: "Venture Blueprint — Evidence-Led Idea Validation | Phanira", description: "Venture Blueprint helps founders validate ideas before significant time and capital are committed.", url: "/products/venture-blueprint", type: "website" },
};

export default function VentureBlueprintPage() {
  return (
    <ProductDetail
      slug="venture-blueprint"
      name="Venture Blueprint"
      category="IDEA VALIDATION & VENTURE INTELLIGENCE"
      headline="Evidence before execution."
      intro="Venture Blueprint validates an idea before significant time and capital are committed. It combines structured problem validation, market evidence, competitive context, monetisation signals and MVP planning into a clear venture decision."
      promise="Go, Refine, or Stop — with evidence behind the decision."
      steps={["Frame the idea", "Problem & persona", "Market evidence", "Demand & MRR", "MVP & risk", "Decision"]}
      audience="For founders and product teams who want to reduce guesswork before building — using Phanira's Idea Validation Framework to move from concept to a defensible next step."
      capabilities={[
        {
          title: "Problem & persona validation",
          body: "Clarify the target problem, who experiences it, how painful or frequent it is, what people do today, and whether the proposed idea solves something important enough to matter.",
        },
        {
          title: "Market & competitive evidence",
          body: "Collect demand signals, category evidence, competitor patterns, substitutes, positioning gaps and differentiation signals so the opportunity is grounded in the real market.",
        },
        {
          title: "Monetisation & MRR gate",
          body: "Test business-model logic, pricing assumptions, willingness-to-pay evidence, comparable revenue signals and recurring-revenue potential before treating traction as credible.",
        },
        {
          title: "MVP, risk & final decision",
          body: "Define the smallest testable product, score key risks, challenge assumptions through advisory review, sequence validation stages and finish with a clear Go, Refine, or Stop recommendation.",
        },
      ]}
      brandStyle="venture-blueprint"
    />
  );
}
