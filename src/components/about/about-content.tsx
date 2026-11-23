"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT_BIO, ABOUT_STATS, ABOUT_ACTIONS } from "@/data/about";
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
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full border-2 border-border bg-main text-white font-mono text-[11px] sm:text-xs font-bold shadow-shadow-sm">
          <UserRound
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
            aria-hidden="true"
          />
          ABOUT ME
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading tracking-tight mb-2 sm:mb-3 text-balance">
          Muhammad Fikri Rouzan Ash Shidik
        </h1>
        <p className="font-mono text-sm lg:text-base text-foreground/80 max-w-xl text-pretty">
          An overview of my background, technical expertise, and journey in the
          tech space.
        </p>
      </div>

      {/* Profile photo & Bio grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        <div className="md:col-span-4 flex flex-col justify-between gap-5">
          {/* Profile image */}
          <div className="relative w-full flex-1 min-h-96 md:min-h-110 rounded-base border-2 border-border bg-secondary-background overflow-hidden shadow-shadow">
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
              <FaEnvelope
                className="w-4 h-4 text-foreground shrink-0"
                aria-hidden="true"
              />
              <a
                href="mailto:fikrirzn@gmail.com"
                translate="no"
                className="truncate py-1 font-bold text-foreground/80 hover:underline cursor-pointer"
              >
                fikrirzn@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm overflow-hidden">
              <FaMapPin
                className="w-4 h-4 text-foreground shrink-0"
                aria-hidden="true"
              />
              <span className="truncate font-bold text-foreground/80">
                South Tangerang, Indonesia
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col justify-between gap-5">
          {/* Description card */}
          <div className="p-5 sm:p-6 lg:p-8 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-center gap-4 flex-1">
            {ABOUT_BIO.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-5 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col justify-between gap-1"
              >
                <span className="font-mono text-xs text-foreground/70 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-heading font-bold text-lg sm:text-2xl text-main tabular-nums">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs sm:text-sm font-bold">
                      {action.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />
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
