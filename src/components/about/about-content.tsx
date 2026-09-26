"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT_BIO, ABOUT_STATS } from "@/data/about";
import { ABOUT_ACTIONS } from "@/data/about";
import { MilestonesSection } from "@/components/about/milestones-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
import { UserRound, ArrowUpRight } from "lucide-react";
import { FaEnvelope, FaMapPin } from "react-icons/fa6";

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
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-xs font-bold shadow-shadow-sm">
          <UserRound className="w-3.5 h-3.5 text-white" />
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

      {/* Profile photo & Bio grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        <div className="md:col-span-4 flex flex-col justify-between gap-5">
          {/* Profile image */}
          <div className="relative w-full flex-1 min-h-110 rounded-base border-2 border-border bg-secondary-background overflow-hidden shadow-shadow">
            <Image
              src="/assets/about/profile.png"
              alt="Muhammad Fikri Rouzan Ash Shidik"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center"
            />
          </div>

          {/* Email & Location */}
          <div className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm overflow-hidden">
              <FaEnvelope className="w-4 h-4 text-foreground shrink-0" />
              <a
                href="mailto:fikrirzn@gmail.com"
                className="truncate font-bold text-foreground/80 hover:underline cursor-pointer"
              >
                fikrirzn@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm overflow-hidden">
              <FaMapPin className="w-4 h-4 text-foreground shrink-0" />
              <span className="truncate font-bold text-foreground/80">
                South Tangerang, Indonesia
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col justify-between gap-5">
          {/* Description card */}
          <div className="p-6 sm:p-8 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-center gap-4 flex-1">
            {ABOUT_BIO.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-between gap-1"
              >
                <span className="font-mono text-xs text-foreground/70 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-heading font-bold text-xl sm:text-2xl text-main">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ABOUT_ACTIONS.map((action) => {
              const Icon = action.icon;

              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.isExternal ? "_blank" : undefined}
                  rel={action.isExternal ? "noopener noreferrer" : undefined}
                  whileHover={{
                    x: -2,
                    y: -3,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground hover:bg-main hover:text-white shadow-shadow flex items-center justify-between gap-2 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      className="w-4 h-4 shrink-0"
                      variant={action.iconVariant}
                    />
                    <span className="font-mono text-xs sm:text-sm font-bold">
                      {action.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievements & Milestones section */}
      <MilestonesSection />

      {/* Tech stack section */}
      <TechStackSection />
    </motion.section>
  );
}
