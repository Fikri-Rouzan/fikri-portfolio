import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for collaborations or project inquiries.",
};

export default function ContactPage() {
  return <ContactContent />;
}
