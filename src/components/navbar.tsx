import { Suspense } from "react";
import { NavbarContent } from "@/components/navbar/navbar-content";

export function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarContent />
    </Suspense>
  );
}
