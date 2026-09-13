type ProductDetailProps = {
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
      <div className="venture-card-logo product-detail-brand" aria-label="Venture Blueprint">
        <span className="venture-card-logo-primary">VΞNTURE</span>
        <span className="venture-card-logo-secondary">BLUEPRINT</span>
      </div>
    );
  }

  if (name === "KAIRO") {
    return <div className="kairo-logo product-detail-brand" aria-label="Kairo">KAIRO</div>;
  }

  if (name === "CitizenAI") {
    return <div className="citizen-logo product-detail-brand" aria-label="CitizenAI">CitizenAI</div>;
  }

  return <h1>{name}</h1>;
};

export default function ProductDetail({
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
            <p>{audience}</p>
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
          <a className="btn dark" href="/#products">EXPLORE OUR PRODUCTS <Arrow /></a>
        </div>
      </section>
    </main>
  );
}
