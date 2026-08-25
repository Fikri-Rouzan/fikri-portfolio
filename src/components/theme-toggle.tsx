"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const handleToggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative group">
      <motion.button
        onClick={handleToggle}
        aria-label="Toggle Theme"
        whileHover={{
          x: -2,
          y: -4,
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.98 }}
        className="w-9 h-9 rounded-base border-2 border-border bg-background text-foreground shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-[4px_4px_0px_0px_var(--border)] hover:bg-main hover:text-white flex items-center justify-center cursor-pointer"
      >
        <Sun className="w-4 h-4 block dark:hidden" />
        <Moon className="w-4 h-4 hidden dark:block" />
      </motion.button>

      {/* Tooltip */}
      <span className="absolute -bottom-8 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono rounded border border-border opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 shadow-[2px_2px_0px_0px_var(--border)] whitespace-nowrap">
        <span className="block dark:hidden">Dark Mode</span>
        <span className="hidden dark:block">Light Mode</span>
      </span>
    </div>
  );
}
