import type { Metadata } from "next";
import { ExperiencesContent } from "@/components/experiences/experiences-content";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "A timeline of milestones and professional experiences in my career.",
};

export default function ExperiencesPage() {
  return <ExperiencesContent />;
}
