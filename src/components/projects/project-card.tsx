"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { Github } from "@thesvg/react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        whileHover={{
          x: -2,
          y: -3,
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        className="rounded-base border-2 border-border bg-secondary-background shadow-shadow hover:shadow-shadow-lg flex flex-col overflow-hidden group"
      >
        {/* Banner image */}
        <div className="relative aspect-video w-full border-b-2 border-border overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Year badge */}
          <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-base border-2 border-border bg-main text-white font-mono text-[11px] sm:text-xs font-bold shadow-shadow-sm tabular-nums">
            {project.year}
          </div>
        </div>

        {/* Action bar */}
        <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-2 flex items-center justify-between gap-2 border-b border-border/40">
          <span className="px-2.5 py-1 rounded-base border-2 border-border bg-background text-foreground font-mono text-[11px] sm:text-xs tracking-wider uppercase shadow-shadow-sm">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub Repository`}
                whileHover={{
                  x: -1,
                  y: -2,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-shadow-sm hover:shadow-shadow-md flex items-center justify-center cursor-pointer"
              >
                <Github
                  variant="mono"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live Demo`}
                whileHover={{
                  x: -1,
                  y: -2,
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-shadow-sm hover:shadow-shadow-md flex items-center justify-center cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-2">
            <h3 className="font-heading font-bold text-base sm:text-xl text-foreground text-balance wrap-break-word">
              {project.title}
            </h3>
            <p className="font-sans text-sm text-foreground/80 leading-relaxed line-clamp-5 text-pretty">
              {project.description}
            </p>
          </div>

          {/* Tech stack pills */}
          <ul className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="px-2 py-0.5 rounded border border-border bg-background text-foreground font-mono text-[11px] sm:text-xs shadow-shadow-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
