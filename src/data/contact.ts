import { ElementType } from "react";
import { ContactFormData } from "@/lib/schemas/contact";
import { FaEnvelope, FaMapPin } from "react-icons/fa6";
import { Linkedin, Github } from "@thesvg/react";

export interface FormFieldConfig {
  name: keyof ContactFormData;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  autoComplete?: string;
  rows?: number;
  fullWidth?: boolean;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: ElementType;
  variant?: "mono";
  isExternal?: boolean;
}

export const FORM_FIELDS: FormFieldConfig[] = [
  {
    name: "name",
    label: "Name *",
    type: "text",
    placeholder: "Your Name",
    autoComplete: "name",
    fullWidth: false,
  },
  {
    name: "email",
    label: "Email *",
    type: "email",
    placeholder: "your.email@example.com",
    autoComplete: "email",
    fullWidth: false,
  },
  {
    name: "subject",
    label: "Subject *",
    type: "text",
    placeholder: "e.g. Project Inquiry / Collaboration",
    autoComplete: "off",
    fullWidth: true,
  },
  {
    name: "message",
    label: "Message *",
    type: "textarea",
    placeholder: "Tell me about your project, timeline, or inquiry...",
    autoComplete: "off",
    rows: 5,
    fullWidth: true,
  },
];

export const CONTACTS: ContactItem[] = [
  {
    label: "Email",
    value: "fikrirzn@gmail.com",
    href: "mailto:fikrirzn@gmail.com",
    icon: FaEnvelope,
    isExternal: false,
  },
  {
    label: "LinkedIn",
    value: "fikrirouzan",
    href: "https://www.linkedin.com/in/fikrirouzan",
    icon: Linkedin,
    isExternal: true,
  },
  {
    label: "GitHub",
    value: "Fikri-Rouzan",
    href: "https://github.com/Fikri-Rouzan",
    icon: Github,
    variant: "mono",
    isExternal: true,
  },
  {
    label: "Location",
    value: "South Tangerang, Indonesia",
    icon: FaMapPin,
    isExternal: false,
  },
];
