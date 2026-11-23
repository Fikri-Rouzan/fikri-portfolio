import { Suspense } from "react";
import type { Metadata } from "next";
import { getDocumentBySlug } from "@/data/documents";
import {
  PreviewContent,
  PreviewFallback,
  PreviewProps,
} from "@/components/preview/preview-content";

export async function generateMetadata({
  params,
  searchParams,
}: PreviewProps): Promise<Metadata> {
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

export default function DocumentPreviewPage({
  params,
  searchParams,
}: PreviewProps) {
  return (
    <Suspense fallback={<PreviewFallback />}>
      <PreviewContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}
