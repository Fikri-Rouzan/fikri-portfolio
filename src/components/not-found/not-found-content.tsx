"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FileQuestion, Home } from "lucide-react";

export function NotFoundContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[70dvh] flex flex-col items-center justify-center p-4 text-center"
    >
      {/* Icon badge */}
      <div className="p-3 sm:p-4 rounded-full border-2 border-border bg-main text-white shadow-shadow mb-5 sm:mb-6">
        <FileQuestion className="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
      </div>

      <h1 className="font-heading text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
        404 &ndash; Page Not Found
      </h1>
      <p className="font-mono text-sm lg:text-base text-foreground/80 max-w-md mb-6 sm:mb-8 leading-relaxed text-pretty">
        This page doesn&apos;t exist or has been moved. Head back to the home
        page to keep exploring.
      </p>

      <motion.div
        whileHover={{
          x: -2,
          y: -3,
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.96 }}
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm font-bold shadow-shadow hover:shadow-shadow-lg cursor-pointer"
        >
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
