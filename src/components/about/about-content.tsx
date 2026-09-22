"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { MilestonesSection } from "@/components/about/milestones-section";
import { TechStackSection } from "@/components/about/tech-stack-section";

export function AboutContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="py-4 sm:py-8 flex flex-col gap-8"
    >
      {/* Header */}
      <div className="mb-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-[2px_2px_0px_0px_var(--border)]">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          ABOUT ME
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading tracking-tight mb-3">
          Muhammad Fikri Rouzan Ash Shidik
        </h1>
        <p className="font-mono text-sm text-foreground/80 max-w-xl">
          An overview of my background, technical expertise, and journey in the
          tech space.
        </p>
      </div>

      {/* Profile photo & bio grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Profile image container */}
        <div className="md:col-span-4 flex flex-col">
          <div className="relative w-full h-full min-h-95 sm:min-h-110 rounded-base border-2 border-border bg-secondary-background overflow-hidden shadow-shadow">
            <Image
              src="/assets/about/profile.png"
              alt="Muhammad Fikri Rouzan Ash Shidik"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col justify-between gap-5">
          {/* Description card */}
          <div className="p-6 sm:p-8 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-center gap-4 flex-1">
            <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed">
              Final-year Informatics Engineering student at Syarif Hidayatullah
              State Islamic University Jakarta with hands-on experience in data
              science and full-stack web development. Proficient in Python, SQL,
              React, and Laravel, focusing on building practical, scalable, and
              data-driven applications.
            </p>
            <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed">
              Throughout my academic journey and hands-on projects, I have
              developed practical expertise across modern frontend frameworks,
              backend API architectures, and machine learning pipelines. I
              continuously adapt to emerging tech ecosystems, maintaining a
              strong focus on writing clean and maintainable code.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-between gap-1">
              <span className="font-mono text-xs text-foreground/70 uppercase tracking-wider">
                Started Journey
              </span>
              <span className="font-heading font-bold text-xl sm:text-2xl text-main">
                2023
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-between gap-1">
              <span className="font-mono text-xs text-foreground/70 uppercase tracking-wider">
                Current GPA
              </span>
              <span className="font-heading font-bold text-xl sm:text-2xl text-main">
                3.77 / 4.00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & milestones section */}
      <MilestonesSection />

      {/* Tech stack section */}
      <TechStackSection />
    </motion.section>
  );
}
