import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./mobile-fixes.css";
import "./living-horizon.css";
import "./venture-blueprint.css";
import "./extension.css";
import StructuredData from "./components/StructuredData";
import { siteDescription, siteUrl } from "./site-config";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Phanira — Ideas into existence.", template: "%s | Phanira" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Phanira",
    title: "Phanira — Ideas into existence.",
    description: siteDescription,
    url: siteUrl,
    locale: "en_GB",
  },
  twitter: { card: "summary", title: "Phanira — Ideas into existence.", description: siteDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Phanira",
          url: siteUrl,
          description: siteDescription,
          email: "hello@phanira.com",
          knowsAbout: ["AI product development", "Brand intelligence", "Learning experiences", "Product strategy", "Scalable systems"],
        }} />
        <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Phanira",
          url: siteUrl,
          description: siteDescription,
        }} />
        {children}
      </body>
    </html>
  );
}
