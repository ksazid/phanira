import type { Metadata } from "next";
import ExtensionPage from "../components/ExtensionPage";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Phanira products for brand intelligence, citizenship learning, and evidence-led idea validation.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <ExtensionPage
    path="/products"
    eyebrow="OUR PRODUCTS"
    title="Independent products. A shared purpose."
    description="Phanira builds and supports mission-driven products that tackle important problems through technology."
    cards={[
      { title: "Kairo", body: "AI content intelligence that turns brand context and live signals into evidence-backed content opportunities." },
      { title: "CitizenAI", body: "Personalised citizenship learning that adapts from first diagnostic to pass-ready preparation." },
      { title: "Venture Blueprint", body: "Idea validation that combines market evidence, demand signals, monetisation logic, and MVP planning." },
    ]}
  >
    <section className="extension-section section-light">
      <div className="shell extension-actions">
        <a className="btn dark" href="/products/kairo">EXPLORE KAIRO <span aria-hidden="true">→</span></a>
        <a className="btn dark" href="/products/citizenai">EXPLORE CITIZENAI <span aria-hidden="true">→</span></a>
        <a className="btn dark" href="/products/venture-blueprint">EXPLORE VENTURE BLUEPRINT <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </ExtensionPage>;
}
