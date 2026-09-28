"use client";

import { FolderSearch } from "lucide-react";

export function ProjectEmptyState() {
  return (
    <div className="p-10 sm:p-14 rounded-base border-2 border-border bg-secondary-background shadow-shadow flex flex-col items-center justify-center text-center my-8">
      <div className="p-3 rounded-base border-2 border-border bg-background mb-4">
        <FolderSearch className="w-8 h-8 text-foreground/60" />
      </div>
      <h3 className="font-heading text-lg mb-2">No Projects Found</h3>
      <p className="font-mono text-xs sm:text-sm text-foreground/70 max-w-sm">
        Try adjusting your search query or selecting a different category
        filter.
      </p>
    </div>
  );
}
