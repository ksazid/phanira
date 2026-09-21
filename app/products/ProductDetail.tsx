import StructuredData from "../components/StructuredData";
import { siteUrl } from "../site-config";

type ProductDetailProps = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  intro: string;
  promise: string;
  steps: string[];
  capabilities: Array<{ title: string; body: string }>;
  audience: string;
  brandStyle?: "venture-blueprint";
};

const Arrow = () => <span aria-hidden="true">→</span>;

const ProductHeroLogo = ({ name, brandStyle }: Pick<ProductDetailProps, "name" | "brandStyle">) => {
  if (brandStyle === "venture-blueprint") {
    return (
      <h1 className="venture-card-logo product-detail-brand" aria-label="Venture Blueprint">
        <span className="venture-card-logo-primary">VΞNTURE</span>
        <span className="venture-card-logo-secondary">BLUEPRINT</span>
      </h1>
    );
  }

  if (name === "KAIRO") {
    return <h1 className="kairo-logo product-detail-brand" aria-label="Kairo">KAIRO</h1>;
  }

  if (name === "CitizenAI") {
    return <h1 className="citizen-logo product-detail-brand" aria-label="CitizenAI">CitizenAI</h1>;
  }

  return <h1>{name}</h1>;
};

export default function ProductDetail({
  slug,
  name,
  category,
  headline,
  intro,
  promise,
  steps,
  capabilities,
  audience,
  brandStyle,
}: ProductDetailProps) {
  return (
    <main className={`product-page${brandStyle ? ` ${brandStyle}-page` : ""}`}>
      <header className="product-header shell">
        <a className="wordmark" href="/" aria-label="Phanira home">PHANIRΛ</a>
        <a className="back-link" href="/#products">BACK TO PRODUCTS <Arrow /></a>
      </header>

      <section className="product-hero">
        <div className="shell product-hero-grid">
          <div>
            <div className="eyebrow light-text">PHANIRA PRODUCT / {category}</div>
            <ProductHeroLogo name={name} brandStyle={brandStyle} />
            <p className="product-headline">{headline}</p>
          </div>
          <div className="product-intro">
            <p>{intro}</p>
            <div className="product-promise">{promise}</div>
          </div>
        </div>
      </section>

      <section className="product-flow section-light">
        <div className="shell">
          <div className="eyebrow">HOW IT WORKS</div>
          <div className="flow-row" aria-label={`${name} product flow`}>
            {steps.map((step, index) => (
              <div className="flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-capabilities">
        <div className="shell">
          <div className="product-section-head">
            <div>
              <div className="eyebrow light-text">WHAT IT DOES</div>
              <h2>Built around the outcome.</h2>
            </div>
            <div>
              <h3 className="sr-only">Who it is for</h3>
              <p>{audience}</p>
            </div>
          </div>
          <div className="product-feature-grid">
            {capabilities.map((item, index) => (
              <article key={item.title}>
                <div className="feature-index">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-close section-light">
        <div className="shell product-close-inner">
          <div>
            <div className="eyebrow">A PHANIRA PRODUCT</div>
            <h2>{brandStyle === "venture-blueprint" ? <>Evidence first.<br/>Build with conviction.</> : <>Useful intelligence.<br/>Clearer next steps.</>}</h2>
          </div>
          <div className="extension-actions">
            <a className="btn dark" href="/#products">EXPLORE OUR PRODUCTS <Arrow /></a>
            <a className="btn dark" href="/contact">DISCUSS THIS PRODUCT <Arrow /></a>
          </div>
        </div>
      </section>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        applicationCategory: category,
        description: intro,
        url: `${siteUrl}/products/${slug}`,
        brand: { "@type": "Brand", name: "Phanira" },
      }} />
    </main>
  );
}
