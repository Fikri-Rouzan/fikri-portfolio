import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A timeline of my professional experience, key milestones, and career journey.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
