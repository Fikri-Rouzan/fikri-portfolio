"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="p-1.5 sm:p-2 rounded-base border-2 border-border bg-background text-foreground hover:bg-main hover:text-white shadow-shadow-sm transition-colors flex items-center justify-center shrink-0 cursor-pointer"
      title="Go back"
    >
      <ArrowLeft className="w-4 h-4" />
    </button>
  );
}
