import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocumentBySlug } from "@/data/documents";
import { BackButton } from "@/components/back-button";

interface Props {
  params: Promise<{
    file: string;
  }>;
  searchParams: Promise<{
    title?: string;
    url?: string;
  }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { file } = await params;
  const sParams = await searchParams;
  const doc = getDocumentBySlug(file, sParams.title, sParams.url);

  if (!doc) {
    return {
      title: "404 - Page Not Found",
    };
  }

  return {
    title: `Document Preview - ${doc.title}`,
    description: `Document preview for ${doc.title}`,
  };
}

export default async function DocumentPreviewPage({
  params,
  searchParams,
}: Props) {
  const { file } = await params;
  const sParams = await searchParams;
  const doc = getDocumentBySlug(file, sParams.title, sParams.url);

  if (!doc) {
    notFound();
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Header bar */}
      <header className="px-4 py-3 sm:px-6 border-b-2 border-border bg-secondary-background flex items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <BackButton />
          <h1 className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
            {doc.title}
          </h1>
        </div>
      </header>

      {/* PDF viewer */}
      <main className="flex-1 w-full h-full bg-secondary-background/30">
        <iframe
          src={`${doc.fileUrl}#toolbar=1&navpanes=0`}
          className="w-full h-full border-none"
          title={doc.title}
        />
      </main>
    </div>
  );
}
