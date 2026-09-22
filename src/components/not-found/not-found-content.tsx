"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FileQuestion } from "lucide-react";

export function NotFoundContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center"
    >
      {/* Icon badge */}
      <div className="p-4 rounded-full border-2 border-border bg-main text-white shadow-[4px_4px_0px_0px_var(--border)] mb-6">
        <FileQuestion className="w-10 h-10" />
      </div>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
        404 - Page Not Found
      </h1>
      <p className="font-mono text-sm text-foreground/80 max-w-md mb-8 leading-relaxed">
        Oops! The page or document you are looking for doesn&apos;t exist or has
        been moved.
      </p>

      <motion.div
        whileHover={{
          x: -2,
          y: -4,
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm font-bold shadow-shadow hover:shadow-[6px_6px_0px_0px_var(--border)] cursor-pointer"
        >
          RETURN TO HOME
        </Link>
      </motion.div>
    </motion.div>
  );
}
