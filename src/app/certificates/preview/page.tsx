import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BackToExperiencesButton } from "@/components/back-to-experiences-button";

interface Props {
  searchParams: Promise<{
    title?: string;
    url?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const pageTitle = params.title
    ? decodeURIComponent(params.title)
    : "Certificate Preview";

  return {
    title: pageTitle,
    description: `Certificate preview for ${pageTitle}`,
  };
}

export default async function CertificatePreviewPage({ searchParams }: Props) {
  const params = await searchParams;
  const title = params.title
    ? decodeURIComponent(params.title)
    : "Certificate Preview";
  const url = params.url ? decodeURIComponent(params.url) : "";

  if (!url) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center font-mono">
        <h1 className="text-3xl font-bold mb-2">Certificate Not Found</h1>
        <p className="text-sm text-foreground/70 mb-4">
          No valid certificate URL was provided.
        </p>
        <BackToExperiencesButton />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Header bar */}
      <header className="px-4 py-3 sm:px-6 border-b-2 border-border bg-secondary-background flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <Link
            href="/experiences"
            className="p-1.5 sm:p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-[2px_2px_0px_0px_var(--border)] transition-colors flex items-center justify-center shrink-0"
            title="Back to experiences"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <h1 className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
            {title}
          </h1>
        </div>
      </header>

      {/* PDF iframe */}
      <main className="flex-1 w-full h-full bg-secondary-background/30">
        <iframe
          src={`${url}#toolbar=1&navpanes=0`}
          className="w-full h-full border-none"
          title={title}
        />
      </main>
    </div>
  );
}
