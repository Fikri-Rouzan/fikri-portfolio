import { ElementType } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { Linkedin, Github } from "@thesvg/react";

export interface SocialContact {
  name: string;
  href: string;
  ariaLabel: string;
  icon: ElementType;
  variant?: "mono";
  isExternal?: boolean;
}

export const SOCIAL_CONTACTS: SocialContact[] = [
  {
    name: "Email",
    href: "mailto:fikrirzn@gmail.com",
    ariaLabel: "Email",
    icon: FaEnvelope,
    isExternal: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fikrirouzan",
    ariaLabel: "LinkedIn",
    icon: Linkedin,
    isExternal: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Fikri-Rouzan",
    ariaLabel: "GitHub",
    icon: Github,
    variant: "mono",
    isExternal: true,
  },
];
