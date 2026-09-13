import type { Metadata } from "next";
import ProductDetail from "../ProductDetail";

export const metadata: Metadata = {
  title: "CitizenAI — Phanira",
  description: "CitizenAI is personalised citizenship learning that adapts from diagnostic to pass-ready preparation.",
};

export default function CitizenAIPage() {
  return (
    <ProductDetail
      name="CitizenAI"
      category="LEARNING & CIVIC INTELLIGENCE"
      headline="A clearer path from first diagnostic to Pass Ready."
      intro="CitizenAI turns a broad citizenship syllabus into a focused learning journey shaped around what each learner knows, misses and needs next."
      promise="Learn what matters. Know what to do next. Build readiness with confidence."
      steps={["Welcome", "Diagnostic", "Result", "Home", "Learning", "Pass Ready"]}
      audience="For citizenship learners who need a focused route through the material rather than another generic course or question bank."
      capabilities={[
        {
          title: "Start with a diagnostic",
          body: "Establish a practical starting point before prescribing content, so learning begins with the learner rather than the syllabus order.",
        },
        {
          title: "Personalise the journey",
          body: "Use diagnostic results and progress to surface the topics, explanations and practice that deserve attention next.",
        },
        {
          title: "Make progress visible",
          body: "Keep the learner oriented with a clear home, focused learning states and an understandable path toward readiness.",
        },
        {
          title: "Move toward Pass Ready",
          body: "Bring knowledge, practice and confidence together into a final readiness state that tells the learner where they stand.",
        },
      ]}
    />
  );
}
