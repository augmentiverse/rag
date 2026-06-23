import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://rag-reference-hub.local"),
  title: {
    default: "RAG Reference Hub",
    template: "%s | RAG Reference Hub",
  },
  description:
    "A professional educational reference hub for Retrieval-Augmented Generation, RAG tools, Dify workflows, architectures, tutorials, comparisons, and practical use cases.",
  openGraph: {
    title: "RAG Reference Hub",
    description:
      "Learn RAG, compare tools, explore Dify, and design grounded AI knowledge systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased dark:text-slate-100">
        <Link
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </Link>
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
