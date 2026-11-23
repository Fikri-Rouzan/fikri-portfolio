import { Suspense } from "react";
import { NavbarContent } from "./navbar-content";

export function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarContent />
    </Suspense>
  );
}
