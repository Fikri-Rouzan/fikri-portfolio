import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Fikri Rouzan Ash Shidik",
    template: "%s | Muhammad Fikri Rouzan Ash Shidik",
  },
  description: "My personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col font-sans bg-background text-foreground relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
            {children}
          </main>
          <Navbar />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
