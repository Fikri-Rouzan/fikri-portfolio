"use client";

import { FolderSearch } from "lucide-react";

interface ProjectEmptyStateProps {
  onReset: () => void;
}

export function ProjectEmptyState({ onReset }: ProjectEmptyStateProps) {
  return (
    <div
      role="status"
      className="p-8 sm:p-14 rounded-base border-2 border-border bg-secondary-background shadow-shadow flex flex-col items-center justify-center text-center my-6 sm:my-8"
    >
      <div className="p-2.5 sm:p-3 rounded-base border-2 border-border bg-background mb-4">
        <FolderSearch
          className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/60"
          aria-hidden="true"
        />
      </div>
      <h3 className="font-heading font-bold text-base sm:text-lg mb-2">
        No Projects Found
      </h3>
      <p className="font-mono text-xs sm:text-sm text-foreground/70 max-w-sm mb-5 text-pretty">
        Try a different search term or category.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="px-4 py-2 rounded-base border-2 border-border bg-main text-white font-mono text-xs sm:text-sm font-bold shadow-shadow-sm hover:shadow-shadow cursor-pointer"
      >
        Reset Filters
      </button>
    </div>
  );
}
