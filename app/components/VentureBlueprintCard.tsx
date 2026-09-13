const Arrow = () => <span aria-hidden="true">→</span>;

export default function VentureBlueprintCard() {
  return (
    <article className="brand-card venture-card">
      <div className="card-content">
        <div className="venture-card-logo" aria-label="Venture Blueprint">
          <span className="venture-card-logo-primary">VΞNTURE</span>
          <span className="venture-card-logo-secondary">BLUEPRINT</span>
        </div>
        <div className="subbrand">A PHANIRA PRODUCT</div>
        <p>Idea validation that turns early concepts into evidence-backed plans.</p>
        <a
          className="card-link"
          href="/products/venture-blueprint"
          aria-label="Learn more about Venture Blueprint"
        >
          LEARN MORE <Arrow />
        </a>
      </div>
      <div className="card-art art-venture" aria-hidden="true" />
    </article>
  );
}
