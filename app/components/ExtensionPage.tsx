import type { ReactNode } from "react";
import StructuredData from "./StructuredData";
import { siteUrl } from "../site-config";

type ExtensionCard = { title: string; body: string };

type ExtensionPageProps = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  cards?: ExtensionCard[];
  children?: ReactNode;
  dark?: boolean;
};

export default function ExtensionPage({ path, title, description, eyebrow, cards, children, dark = false }: ExtensionPageProps) {
  return (
    <main className="extension-page">
      <header className="product-header shell">
        <a className="wordmark" href="/" aria-label="Phanira home">PHANIRΛ</a>
        <a className="back-link" href="/products">EXPLORE PRODUCTS <span aria-hidden="true">→</span></a>
      </header>
      <section className="extension-hero">
        <div className="shell extension-hero-grid">
          <div>
            <div className="eyebrow light-text">{eyebrow}</div>
            <h1>{title}</h1>
          </div>
          <p className="extension-lede">{description}</p>
        </div>
      </section>
      {cards?.length ? (
        <section className={`extension-section${dark ? " extension-section-dark" : ""}`}>
          <div className="shell">
            <div className="extension-grid">
              {cards.map((card, index) => (
                <article className="extension-card" key={card.title}>
                  <div className="extension-index">0{index + 1}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {children}
      <footer className="footer">
        <div className="shell footer-inner">
          <a className="wordmark footer-logo" href="/" aria-label="Phanira home">PHANIRΛ</a>
          <nav aria-label="Footer navigation">
            <a href="/about">About</a><a href="/products">Products</a><a href="/capabilities">Capabilities</a><a href="/contact">Contact</a>
          </nav>
          <div className="footer-domain">PHANIRA.COM</div>
          <div className="footer-tagline">A MORE INTELLIGENT TOMORROW.</div>
        </div>
      </footer>
      <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", name: title, description, url: `${siteUrl}${path}` }} />
    </main>
  );
}
