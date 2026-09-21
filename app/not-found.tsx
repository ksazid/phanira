import Link from "next/link";

export default function NotFound() {
  return (
    <main className="extension-page">
      <section className="extension-hero"><div className="shell extension-hero-grid"><div><div className="eyebrow light-text">404</div><h1>That page does not exist.</h1></div><p className="extension-lede">Return to Phanira and continue exploring the ideas we are bringing to life.</p></div></section>
      <div className="shell extension-actions"><Link className="btn light" href="/">RETURN HOME <span aria-hidden="true">→</span></Link></div>
    </main>
  );
}
