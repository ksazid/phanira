type ProductDetailProps = {
  name: string;
  category: string;
  headline: string;
  intro: string;
  promise: string;
  steps: string[];
  capabilities: Array<{ title: string; body: string }>;
  audience: string;
};

const Arrow = () => <span aria-hidden="true">→</span>;

export default function ProductDetail({
  name,
  category,
  headline,
  intro,
  promise,
  steps,
  capabilities,
  audience,
}: ProductDetailProps) {
  return (
    <main className="product-page">
      <header className="product-header shell">
        <a className="wordmark" href="/" aria-label="Phanira home">PHANIRΛ</a>
        <a className="back-link" href="/#portfolio">BACK TO PORTFOLIO <Arrow /></a>
      </header>

      <section className="product-hero">
        <div className="shell product-hero-grid">
          <div>
            <div className="eyebrow light-text">PHANIRA PRODUCT / {category}</div>
            <h1>{name}</h1>
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
            <div className="eyebrow">A PHANIRA COMPANY</div>
            <h2>Useful intelligence.<br/>Clearer next steps.</h2>
          </div>
          <a className="btn dark" href="/#portfolio">EXPLORE OUR PRODUCTS <Arrow /></a>
        </div>
      </section>
    </main>
  );
}
