"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { TypingRoles } from "@/components/home/typing-roles";
import { TechMarquee } from "@/components/home/tech-marquee";
import { GithubContributions } from "@/components/home/github-contributions";

export function HomeContent() {
  const cvPreviewUrl = "/preview/cv-muhammad-fikri-rouzan-ash-shidik";

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="py-6 sm:py-10 flex flex-col gap-8"
    >
      {/* Hero section */}
      <div className="flex flex-col items-start gap-4 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight text-foreground leading-tight">
          Hi, I&apos;m Muhammad Fikri Rouzan Ash Shidik.
        </h1>

        <TypingRoles />

        <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
          Final-year Informatics Engineering student at Syarif Hidayatullah
          State Islamic University Jakarta with hands-on experience in data
          science and full-stack web development. Proficient in Python, SQL,
          React, and Laravel, focusing on building practical, scalable, and
          data-driven applications.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <motion.div
            whileHover={{
              x: -2,
              y: -4,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/projects"
              className="px-5 py-3 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm font-bold shadow-shadow hover:shadow-shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              x: -2,
              y: -4,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={cvPreviewUrl}
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-main hover:text-white font-mono text-xs sm:text-sm font-bold shadow-shadow hover:shadow-shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View CV</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <TechMarquee />

      {/* GitHub activity section */}
      <GithubContributions />
    </motion.section>
  );
}
