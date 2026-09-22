import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for project inquiries, collaborations, or technical opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
