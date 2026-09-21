import type { Metadata } from "next";
import ExtensionPage from "../components/ExtensionPage";

export const metadata: Metadata = {
  title: "Contact Phanira",
  description: "Contact Phanira about products, partnerships, ideas, and opportunities to build what comes next.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ExtensionPage
    path="/contact"
    eyebrow="LET’S BUILD TOGETHER"
    title="Build what’s next."
    description="Tell us what you are trying to understand, validate, improve, or bring into existence."
    cards={[
      { title: "Product enquiry", body: "Ask about Kairo, CitizenAI, Venture Blueprint, or a product currently in development." },
      { title: "Partnership", body: "Explore a partnership, pilot, distribution opportunity, or a useful source of expertise." },
      { title: "An idea", body: "Share an early problem or idea that may benefit from evidence before execution." },
    ]}
  >
    <section className="extension-section section-light">
      <div className="shell extension-section-grid">
        <div>
          <div className="eyebrow">START A CONVERSATION</div>
          <h2>Useful questions welcome.</h2>
        </div>
        <div>
          <p className="extension-section-lede light-lede">Email us with the context, the problem, and the next step you are considering.</p>
          <div className="extension-actions"><a className="btn dark" data-analytics-event="contact_email" href="mailto:hello@phanira.com">EMAIL PHANIRA <span aria-hidden="true">→</span></a></div>
        </div>
      </div>
    </section>
  </ExtensionPage>;
}
