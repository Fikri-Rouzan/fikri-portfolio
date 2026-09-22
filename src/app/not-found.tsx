import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found/not-found-content";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page or document you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
