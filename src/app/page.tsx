import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  description: "Muhammad Fikri Rouzan Ash Shidik's personal portfolio website.",
};

export default function HomePage() {
  return <HomeContent />;
}
