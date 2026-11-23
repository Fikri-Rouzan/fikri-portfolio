"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleToggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative group">
      <motion.button
        type="button"
        onClick={handleToggle}
        aria-label="Toggle Theme"
        whileHover={{
          x: -2,
          y: -3,
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.96 }}
        className="size-9 rounded-base border-2 border-border bg-background text-foreground shadow-shadow-sm hover:shadow-shadow hover:bg-main hover:text-white flex items-center justify-center cursor-pointer"
      >
        <Sun className="w-4 h-4 block dark:hidden" aria-hidden="true" />
        <Moon className="w-4 h-4 hidden dark:block" aria-hidden="true" />
      </motion.button>

      {/* Tooltip */}
      <span
        aria-hidden="true"
        className="hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-neutral-900 text-white text-[11px] font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-10 shadow-shadow-sm whitespace-nowrap"
      >
        <span className="block dark:hidden">Dark Mode</span>
        <span className="hidden dark:block">Light Mode</span>
      </span>
    </div>
  );
}
