import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ClickParticles } from "@/components/click-particles";
import { SoundProvider } from "@/components/sound/sound-provider";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  metadataBase: new URL("https://fikri-rouzan.is-a.dev"),
  title: {
    default: "Muhammad Fikri Rouzan Ash Shidik",
    template: "%s | Muhammad Fikri Rouzan Ash Shidik",
  },
  description:
    "Personal portfolio of Muhammad Fikri Rouzan Ash Shidik, showcasing data science projects, machine learning models, full-stack web applications, and technical achievements.",
  keywords: [
    "Muhammad Fikri Rouzan Ash Shidik",
    "Fikri Rouzan",
    "Data Scientist",
    "Full-Stack Web Developer",
    "Informatics Engineering",
    "UIN Jakarta",
    "Portfolio",
  ],
  authors: [
    {
      name: "Muhammad Fikri Rouzan Ash Shidik",
      url: "https://fikri-rouzan.is-a.dev",
    },
  ],
  creator: "Muhammad Fikri Rouzan Ash Shidik",
  verification: {
    google: "Jaw0HvE8K04cVyrCvwF_z6EhYqq0tF0c-1fh4k0ogRs",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Muhammad Fikri Rouzan Ash Shidik | Data Scientist & Full-Stack Web Developer",
    description:
      "Personal portfolio showcasing data science projects, machine learning solutions, and full-stack web applications.",
    url: "https://fikri-rouzan.is-a.dev",
    siteName: "Muhammad Fikri Rouzan Ash Shidik Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fikri Rouzan Ash Shidik",
    description: "Data Scientist & Full-Stack Web Developer Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Fikri Rouzan Ash Shidik",
  alternateName: "Fikri Rouzan",
  url: "https://fikri-rouzan.is-a.dev",
  image: "https://fikri-rouzan.is-a.dev/assets/about/profile.png",
  jobTitle: ["Data Scientist", "Full-Stack Web Developer"],
  worksFor: {
    "@type": "Organization",
    name: "Syarif Hidayatullah State Islamic University Jakarta",
  },
  sameAs: [
    "https://www.linkedin.com/in/fikrirouzan",
    "https://github.com/Fikri-Rouzan",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClickParticles />
          <SoundProvider />
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
