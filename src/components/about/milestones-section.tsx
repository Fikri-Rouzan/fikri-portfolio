"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  EDUCATION_DATA,
  CERTIFICATION_DATA,
  PUBLICATION_DATA,
} from "@/data/about";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Building2,
  FileText,
  ExternalLink,
} from "lucide-react";

const MotionLink = motion.create(Link);

type MilestoneTab = "education" | "certification" | "publication";

const TABS: { id: MilestoneTab; label: string; icon: typeof Award }[] = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certification", label: "Certifications", icon: Award },
  { id: "publication", label: "Publications", icon: BookOpen },
];

// Collapses text to 4 lines and shows a toggle only when the text overflows
function ExpandableText({ text }: { text: string }) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = React.useState(false);
  const [isClamped, setIsClamped] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || expanded) return;

    // Fires once on observe, then again whenever the width changes
    const observer = new ResizeObserver(() => {
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded, text]);

  return (
    <div className="flex flex-col items-start gap-1.5 pt-2 border-t border-border/40">
      <p
        ref={ref}
        className={`font-sans text-sm sm:text-base text-foreground/85 leading-relaxed text-pretty ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {text}
      </p>
      {(isClamped || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="font-mono text-xs sm:text-sm font-bold text-main hover:underline cursor-pointer"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

const TAB_CLASS =
  "flex items-center gap-2 px-4 py-2.5 rounded-base font-mono text-xs sm:text-sm font-bold border-2 border-border shadow-shadow-sm cursor-pointer";

export function MilestonesSection() {
  const [activeTab, setActiveTab] = React.useState<MilestoneTab>("education");

  const sortedCertifications = React.useMemo(() => {
    return [...CERTIFICATION_DATA].sort((a, b) => b.id - a.id);
  }, []);

  const sortedPublications = React.useMemo(() => {
    return [...PUBLICATION_DATA].sort((a, b) => b.id - a.id);
  }, []);

  return (
    <div className="flex flex-col gap-5 sm:gap-6 my-4 sm:my-6">
      <div className="relative flex items-center justify-center my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-border" />
        </div>
        <h2 className="relative px-4 bg-background font-mono text-xs sm:text-sm font-bold text-foreground/80 tracking-wider uppercase">
          Milestones & Achievements
        </h2>
      </div>

      {/* Tab navigation bar */}
      <div className="w-full overflow-x-auto scrollbar-none pb-2 -mb-2">
        <div
          role="group"
          aria-label="Milestone categories"
          className="flex items-center gap-3 min-w-max"
        >
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                whileTap={{ scale: 0.95 }}
                className={`${TAB_CLASS} ${
                  isActive
                    ? "bg-main text-white"
                    : "bg-secondary-background text-foreground hover:bg-background"
                }`}
              >
                <TabIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Tab content display */}
      <AnimatePresence mode="wait">
        {activeTab === "education" ? (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="p-4 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-3 sm:gap-4"
              >
                {/* Univ Name & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="min-w-0 font-heading font-bold text-base sm:text-xl text-foreground text-balance">
                    {edu.university}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/75 shrink-0">
                    <Calendar
                      className="w-3.5 h-3.5 text-main shrink-0"
                      aria-hidden="true"
                    />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Major & GPA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-main">
                    <GraduationCap
                      className="w-4 h-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{edu.major}</span>
                  </div>
                  <div className="w-fit px-2.5 py-0.5 rounded-base border-2 border-border bg-background font-mono text-xs font-bold shadow-shadow-sm tabular-nums">
                    GPA: {edu.gpa}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed pt-2 border-t border-border/40 text-pretty">
                  {edu.description}
                </p>
              </div>
            ))}
          </motion.div>
        ) : activeTab === "certification" ? (
          <motion.div
            key="certification"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {sortedCertifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-3 sm:gap-4"
              >
                {/* Title */}
                <h3 className="font-heading font-bold text-base sm:text-xl text-foreground text-balance">
                  {cert.title}
                </h3>

                {/* Issuer organization */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-foreground/80">
                  <Building2
                    className="w-4 h-4 text-foreground/70 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{cert.issuer}</span>
                </div>

                {/* Issue date */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/70">
                  <Calendar
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{cert.issueDate}</span>
                </div>

                {/* Skills pills */}
                <ul className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {cert.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[11px] sm:text-xs shadow-shadow-xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* View certificate */}
                <div className="pt-1">
                  <MotionLink
                    href={`/preview/${cert.slug}`}
                    whileHover={{
                      x: -1,
                      y: -2,
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit px-3 py-1.5 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm shadow-shadow-sm hover:shadow-shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Certificate</span>
                  </MotionLink>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="publication"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-4"
          >
            {sortedPublications.map((pub) => (
              <div
                key={pub.id}
                className="p-4 sm:p-6 rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow flex flex-col gap-3 sm:gap-4"
              >
                {/* Title */}
                <h3 className="font-heading font-bold text-base sm:text-xl text-foreground text-balance">
                  {pub.title}
                </h3>

                {/* Publisher */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-foreground/80">
                  <Building2
                    className="w-4 h-4 text-foreground/70 shrink-0"
                    aria-hidden="true"
                  />
                  <span translate="no">{pub.publisher}</span>
                </div>

                {/* Date added */}
                <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-foreground/70">
                  <Calendar
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Added {pub.dateAdded}</span>
                </div>

                {/* Abstract */}
                <ExpandableText text={pub.abstract} />

                {/* Skills pills */}
                <ul className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {pub.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[11px] sm:text-xs shadow-shadow-xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* DOI link */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-1">
                  <MotionLink
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: -1,
                      y: -2,
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit px-3 py-1.5 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm shadow-shadow-sm hover:shadow-shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Publication</span>
                  </MotionLink>
                  <span
                    translate="no"
                    className="font-mono text-xs sm:text-sm text-foreground/70 break-all"
                  >
                    DOI: {pub.doi}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
