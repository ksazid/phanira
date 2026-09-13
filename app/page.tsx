import LivingHorizon from "./LivingHorizon";

const Arrow = () => <span aria-hidden="true">→</span>;

const IconPeople = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="17" cy="16" r="6"/><circle cx="31" cy="18" r="5"/><path d="M7 38c0-8 5-13 10-13s10 5 10 13M25 38c0-6 3-10 8-10 4 0 8 4 8 10"/></svg>
);
const IconIdea = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 28c-3-2-5-6-5-10a13 13 0 1 1 26 0c0 4-2 8-6 11-2 2-3 4-3 7h-8c0-3-1-6-4-8Z"/><path d="M20 41h8M24 2v5M5 18h5M38 18h5M10 7l4 4M38 7l-4 4"/></svg>
);
const IconChip = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="12" width="24" height="24" rx="2"/><path d="M18 18h12v12H18zM4 17h8M4 24h8M4 31h8M36 17h8M36 24h8M36 31h8M17 4v8M24 4v8M31 4v8M17 36v8M24 36v8M31 36v8"/></svg>
);
const IconBars = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 37V25M20 37V18M30 37V11M40 37V6"/></svg>;
const IconBolt = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 3 10 27h14l-5 18 19-25H25z"/></svg>;
const IconBook = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 9c7-2 13 0 18 5v26c-5-5-11-7-18-5V9Zm36 0c-7-2-13 0-18 5v26c5-5 11-7 18-5V9Z"/></svg>;
const IconLayers = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 6 17 9-17 9-17-9 17-9Zm-17 19 17 9 17-9M7 34l17 8 17-8"/></svg>;
const IconCube = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 5 16 9v20l-16 9-16-9V14l16-9Zm0 0v19m16-10-16 10L8 14m16 10v19"/></svg>;

export default function Home() {
  return (
    <main>
      <LivingHorizon />
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Phanira home">PHANIRΛ</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#vision">Vision</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="shell hero-inner">
          <div className="hero-kicker">PEOPLE &nbsp;&nbsp; IDEAS &nbsp;&nbsp; TECHNOLOGY &nbsp;&nbsp; A BRIGHTER TOMORROW</div>
          <div className="hero-copy">
            <h1>Ideas into<br/>existence.</h1>
            <p>Phanira builds intelligent products<br className="desktop"/> that turn complex problems into useful,<br className="desktop"/> scalable experiences.</p>
            <div className="hero-actions">
              <a className="btn light" href="#portfolio">EXPLORE PORTFOLIO <Arrow /></a>
              <a className="btn ghost" href="#vision">A BRIGHTER TOMORROW</a>
            </div>
          </div>
          <div className="hero-side">—<br/>A MORE<br/>INTELLIGENT<br/>TOMORROW</div>
          <div className="hero-bottom-left">BOLDER IDEAS<br/>BRIGHTER PEOPLE<br/>A KINDER TOMORROW</div>
          <div className="hero-bottom-right">IDEAS TRAVEL FURTHER<br/>TOGETHER <span/></div>
        </div>
      </section>

      <section className="portfolio section-light" id="portfolio">
        <div className="shell">
          <div className="section-head portfolio-head">
            <div>
              <div className="eyebrow">OUR PORTFOLIO</div>
              <h2>Independent brands.<br/>A shared purpose.</h2>
            </div>
            <p>We build and support mission-driven companies<br/>that tackle important problems through technology.</p>
            <a className="text-link" href="#portfolio-grid">VIEW ALL <Arrow /></a>
          </div>

          <div className="portfolio-grid" id="portfolio-grid">
            <article className="brand-card kairo-card">
              <div className="card-content">
                <h3 className="kairo-logo">KAIRO</h3>
                <div className="subbrand">A PHANIRA COMPANY</div>
                <p>AI content intelligence that turns brand context and live signals into evidence-backed ideas.</p>
                <a className="card-link" href="/products/kairo" aria-label="Learn more about Kairo">LEARN MORE <Arrow /></a>
              </div>
              <div className="card-art art-kairo" aria-hidden="true" />
            </article>
            <article className="brand-card citizen-card">
              <div className="card-content">
                <h3 className="citizen-logo">CitizenAI</h3>
                <div className="subbrand">A PHANIRA COMPANY</div>
                <p>Personalised citizenship learning that adapts from first diagnostic to pass-ready preparation.</p>
                <a className="card-link" href="/products/citizenai" aria-label="Learn more about CitizenAI">LEARN MORE <Arrow /></a>
              </div>
              <div className="card-art art-citizen" aria-hidden="true" />
            </article>
            <article className="brand-card next-card">
              <div className="card-content">
                <h3 className="next-logo">What’s next?</h3>
                <div className="subbrand">A PHANIRA COMPANY</div>
                <p>Different problems. The same belief: useful technology should make a meaningful difference.</p>
                <span className="card-status">MORE IN DEVELOPMENT</span>
              </div>
              <div className="card-art art-next" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      <section className="belief" id="vision">
        <div className="belief-overlay" />
        <div className="shell belief-grid">
          <div>
            <div className="eyebrow light-text">THE BELIEF</div>
            <h2>A more intelligent, open<br/>and prosperous world is possible —<br/>when good ideas are given the<br/>chance to exist.</h2>
            <div className="belief-note">—<br/>IDEAS CREATE OPPORTUNITY.<br/>OPPORTUNITY BUILDS A BRIGHTER TOMORROW.</div>
          </div>
          <div className="belief-values">
            <span>INTELLIGENT</span><span>AMBITIOUS</span><span>REFINED</span><span>INVENTIVE</span><span>ENDURING</span>
          </div>
          <div className="belief-side">A MORE<br/>INTELLIGENT<br/>TOMORROW</div>
        </div>
      </section>

      <section className="why section-light" id="about">
        <div className="shell">
          <div className="why-top">
            <div>
              <div className="eyebrow">WHY PHANIRA</div>
              <h2>People. Ideas. Technology.</h2>
            </div>
            <p>We bring together exceptional people, bold ideas, and<br/>advanced technology to build a more open, prosperous<br/>and human future.</p>
          </div>
          <div className="why-grid">
            <article><IconPeople/><h3>People</h3><p>Built around human needs,<br/>outcomes, and trust.</p></article>
            <article><IconIdea/><h3>Ideas</h3><p>Shaped by clear thinking,<br/>creativity, and conviction.</p></article>
            <article><IconChip/><h3>Technology</h3><p>Delivered through intelligent<br/>systems and scalable products.</p></article>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="shell">
          <div className="cap-head">
            <div><div className="eyebrow light-text">OUR CAPABILITIES</div><h2>From insight to impact.</h2></div>
            <p>We combine strategy, technology, and operational<br/>expertise to turn ambitious ideas into enduring products.</p>
            <div className="cap-side">A BROADER<br/>TOMORROW<br/>IS A BRIGHTER<br/>TOMORROW.</div>
          </div>
          <div className="cap-grid">
            <article><IconBars/><h3>Brand intelligence</h3><p>Deeper insight.<br/>Stronger brands.</p></article>
            <article><IconBolt/><h3>AI workflows</h3><p>Smarter systems.<br/>Greater leverage.</p></article>
            <article><IconBook/><h3>Learning experiences</h3><p>More understanding.<br/>A more open world.</p></article>
            <article><IconLayers/><h3>Product strategy</h3><p>From idea to impact.</p></article>
            <article><IconCube/><h3>Scalable systems</h3><p>Built for what’s next.</p></article>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta-overlay" />
        <div className="shell cta-inner">
          <div className="eyebrow light-text">LET’S BUILD TOGETHER</div>
          <h2>Build what’s next.</h2>
          <p>We create products, systems, and experiences<br/>that help good ideas take shape.</p>
          <a className="btn light" href="mailto:hello@phanira.com">GET IN TOUCH <Arrow /></a>
          <div className="cta-side">—<br/>PEOPLE<br/>IDEAS<br/>TECHNOLOGY<br/>A BRIGHTER TOMORROW</div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <a className="wordmark footer-logo" href="#top" aria-label="Back to top">PHANIRΛ</a>
          <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#portfolio">Portfolio</a><a href="#vision">Vision</a><a href="#contact">Contact</a></nav>
          <div className="footer-domain">PHANIRA.COM</div>
          <div className="footer-tagline">A MORE INTELLIGENT TOMORROW.</div>
        </div>
      </footer>
    </main>
  );
}
