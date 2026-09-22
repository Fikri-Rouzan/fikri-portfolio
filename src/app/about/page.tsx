import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my background, technical skills, and journey in software engineering and data science.",
};

export default function AboutPage() {
  return <AboutContent />;
}
