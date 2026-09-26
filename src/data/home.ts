import { ElementType } from "react";
import { ArrowUpRight, FileText } from "lucide-react";

export interface CtaButton {
  label: string;
  href: string;
  icon: ElementType;
  iconPosition?: "left" | "right";
  variant: "primary" | "secondary";
  isExternal?: boolean;
}

export const HOME_CTA_BUTTONS: CtaButton[] = [
  {
    label: "View Projects",
    href: "/projects",
    icon: ArrowUpRight,
    iconPosition: "right",
    variant: "primary",
    isExternal: false,
  },
  {
    label: "View CV",
    href: "/preview/cv-muhammad-fikri-rouzan-ash-shidik",
    icon: FileText,
    iconPosition: "left",
    variant: "secondary",
    isExternal: false,
  },
];
