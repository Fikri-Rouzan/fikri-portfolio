"use client";

import * as React from "react";
import { playRetroBlip } from "@/lib/sound";

export function SoundProvider() {
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if the clicked element is an interactive element
      const interactiveElement = target.closest(
        "button, a, [role='button'], input[type='submit'], .cursor-pointer",
      );

      if (interactiveElement) {
        playRetroBlip();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
