import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my technical projects, full-stack applications, machine learning pipelines, and practical software solutions.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
