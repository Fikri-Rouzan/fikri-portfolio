import { ElementType } from "react";
import {
  FaHouse,
  FaUser,
  FaBriefcase,
  FaFolder,
  FaEnvelope,
} from "react-icons/fa6";

export interface NavItem {
  label: string;
  href: string;
  icon: ElementType;
  isSpecial?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: FaHouse },
  { label: "About", href: "/about", icon: FaUser },
  { label: "Experience", href: "/experience", icon: FaBriefcase },
  { label: "Projects", href: "/projects", icon: FaFolder },
  { label: "Contact", href: "/contact", icon: FaEnvelope, isSpecial: true },
];
