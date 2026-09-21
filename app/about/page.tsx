import type { Metadata } from "next";
import ExtensionPage from "../components/ExtensionPage";

export const metadata: Metadata = {
  title: "About Phanira",
  description: "Phanira brings together people, ideas, and technology to build useful products for complex problems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <ExtensionPage
    path="/about"
    eyebrow="WHY PHANIRA"
    title="People. Ideas. Technology."
    description="Phanira is a product company building intelligent systems and experiences that help good ideas take shape."
    cards={[
      { title: "Human needs", body: "Products begin with people, outcomes, trust, and the real context in which a decision has to be made." },
      { title: "Clear thinking", body: "Ideas are shaped through evidence, creativity, conviction, and a willingness to refine what does not hold up." },
      { title: "Useful technology", body: "Technology is a means to create more useful, scalable, and enduring experiences—not the end by itself." },
    ]}
  />;
}
