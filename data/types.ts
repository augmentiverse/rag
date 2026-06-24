export type ToolCategory =
  | "orchestration"
  | "RAG platform"
  | "vector database"
  | "embedding model"
  | "reranker"
  | "observability"
  | "evaluation"
  | "document parsing"
  | "no-code/low-code"
  | "local AI"
  | "agent workflow";

export type Tool = {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  mainUseCase: string;
  openSource: "yes" | "partial" | "no" | "verify";
  selfHosting: "yes" | "partial" | "no" | "verify";
  cloud: "yes" | "partial" | "no" | "verify";
  targetUsers: string[];
  integrations: string[];
  strengths: string[];
  limitations: string[];
  pricingNote: string;
  websiteUrl: string;
  documentationUrl: string;
  githubUrl?: string;
  lastVerified: string;
  tags: string[];
  suitability: string[];
};

export type GlossaryTerm = {
  term: string;
  definition: string;
  related: string[];
};

export type Resource = {
  title: string;
  type: "official docs" | "research paper" | "blog" | "dataset" | "benchmark" | "course" | "GitHub" | "community";
  description: string;
  url: string;
};

export type ResearchReference = {
  title: string;
  authors: string;
  published: string;
  publisher: string;
  kind: "research paper" | "official documentation" | "book" | "technical article" | "community discussion" | "report";
  topics: string[];
  url?: string;
  versionNote?: string;
  verification: "verified primary" | "verified publisher" | "reader supplied";
  note: string;
};

export type Architecture = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
  recommendedTools: string[];
  advantages: string[];
  limitations: string[];
  whenToUse: string;
};

export type UseCase = {
  slug: string;
  title: string;
  problem: string;
  whyRagHelps: string;
  recommendedArchitecture: string;
  relevantTools: string[];
  risks: string[];
  evaluationCriteria: string[];
};

export type Comparison = {
  slug: string;
  title: string;
  items: string[];
  rows: {
    criterion: string;
    values: string[];
  }[];
  summary: string;
};
