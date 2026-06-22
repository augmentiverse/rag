import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolFilter } from "@/components/ToolFilter";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "RAG Tools Directory",
  description: "Search and filter a structured directory of RAG platforms, orchestration frameworks, vector databases, rerankers, observability tools, and evaluation tools.",
};

export default function ToolsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tools" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Directory" title="RAG tools directory" description="Filter tools by category, open-source status, hosting model, and likely fit. Pricing and exact feature claims should be verified from official sources before procurement." />
        <div className="mt-8">
          <ToolFilter tools={tools} />
        </div>
      </section>
    </>
  );
}
