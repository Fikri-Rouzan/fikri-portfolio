"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, FileText } from "lucide-react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export function PdfModal({ isOpen, onClose, title, pdfUrl }: PdfModalProps) {
  // Close modal with Escape key & prevent body scroll when modal is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Generate the preview page URL
  const previewPageUrl = `/certificates/preview?title=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(pdfUrl)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-4xl h-[85vh] rounded-base border-2 border-border bg-background shadow-[8px_8px_0px_0px_var(--border)] flex flex-col overflow-hidden z-10"
          >
            {/* Modal header */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b-2 border-border bg-secondary-background flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-hidden">
                <FileText className="w-5 h-5 text-main shrink-0" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
                  {title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Open in new page */}
                <a
                  href={previewPageUrl}
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-[2px_2px_0px_0px_var(--border)] transition-colors flex items-center justify-center"
                  title="Open in new page"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-[#ff4d50] hover:text-white shadow-[2px_2px_0px_0px_var(--border)] transition-colors flex items-center justify-center cursor-pointer"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 w-full bg-secondary-background/50 relative">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-none"
                title={title}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
