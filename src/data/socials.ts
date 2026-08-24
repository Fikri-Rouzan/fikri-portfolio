import { ElementType } from "react";
import { Mail } from "lucide-react";
import { Linkedin, Github } from "@thesvg/react";

export interface SocialContact {
  name: string;
  href: string;
  ariaLabel: string;
  icon: ElementType;
  variant?: "mono" | "default";
  isExternal?: boolean;
}

export const SOCIAL_CONTACTS: SocialContact[] = [
  {
    name: "Email",
    href: "mailto:fikrirzn@gmail.com",
    ariaLabel: "Email",
    icon: Mail,
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
