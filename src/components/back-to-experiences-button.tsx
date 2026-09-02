"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function BackToExperiencesButton() {
  return (
    <motion.div
      whileHover={{
        x: -2,
        y: -4,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href="/experiences"
        className="inline-flex items-center justify-center px-4 py-2 rounded-base border-2 border-border bg-main text-white text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)] hover:shadow-[4px_4px_0px_0px_var(--border)] cursor-pointer"
      >
        Back to Experiences
      </Link>
    </motion.div>
  );
}
