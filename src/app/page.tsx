import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  description:
    "Personal portfolio of Muhammad Fikri Rouzan Ash Shidik, showcasing technical projects, software engineering capabilities, and professional achievements.",
};

export default function HomePage() {
  return <HomeContent />;
}
