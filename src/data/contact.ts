import { ElementType } from "react";
import { FaEnvelope, FaMapPin } from "react-icons/fa6";
import { Linkedin, Github } from "@thesvg/react";

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: ElementType;
  variant?: "mono" | "default";
  isExternal?: boolean;
}

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
