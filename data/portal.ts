export const portalIndex = [
  {
    title: "What is RAG?",
    href: "/learn#what-is-rag",
    type: "concept",
    summary: "Definition, purpose, and the grounding role of Retrieval-Augmented Generation.",
    tags: ["beginner", "definition", "grounding"],
  },
  {
    title: "RAG vs fine-tuning",
    href: "/learn#rag-vs-fine-tuning",
    type: "concept",
    summary: "When to retrieve knowledge and when to adapt model behavior.",
    tags: ["architecture", "model strategy", "decision"],
  },
  {
    title: "Tools directory",
    href: "/tools",
    type: "directory",
    summary: "Search RAG platforms, orchestration frameworks, vector databases, evaluation tools, and document processing tools.",
    tags: ["tools", "comparison", "platforms"],
  },
  {
    title: "Dify guide",
    href: "/dify",
    type: "guide",
    summary: "How Dify fits into RAG application building, workflows, knowledge bases, and agents.",
    tags: ["dify", "no-code", "workflow"],
  },
  {
    title: "Architectures",
    href: "/architectures",
    type: "reference",
    summary: "Basic, advanced, hybrid, metadata-aware, graph, agentic, multimodal, local, and enterprise RAG patterns.",
    tags: ["architecture", "design", "patterns"],
  },
  {
    title: "Implementation playbook",
    href: "/implementation",
    type: "playbook",
    summary: "A practical lifecycle for planning, building, testing, launching, and maintaining RAG systems.",
    tags: ["implementation", "roadmap", "production"],
  },
  {
    title: "Evaluation center",
    href: "/evaluation",
    type: "playbook",
    summary: "How to evaluate retrieval, answer faithfulness, citations, latency, safety, and business outcomes.",
    tags: ["evaluation", "metrics", "quality"],
  },
  {
    title: "Glossary",
    href: "/glossary",
    type: "reference",
    summary: "Searchable definitions for embeddings, vector databases, reranking, grounding, Graph RAG, and more.",
    tags: ["terms", "glossary", "learning"],
  },
];

export const personaPathways = [
  {
    persona: "Beginner",
    promise: "Understand RAG without getting buried in infrastructure.",
    start: ["/learn", "/glossary", "/tutorials#first-rag-system"],
    needs: ["Plain definitions", "Visual pipeline", "Common mistakes", "Glossary"],
    recommendedSections: ["Learn RAG", "Glossary", "Tutorials"],
  },
  {
    persona: "Developer",
    promise: "Choose components and build a maintainable pipeline.",
    start: ["/architectures", "/tools", "/implementation"],
    needs: ["Chunking strategy", "Vector store choice", "Retrieval tests", "Observability"],
    recommendedSections: ["Architectures", "Tools", "Evaluation"],
  },
  {
    persona: "AI engineer",
    promise: "Move from prototype to measurable production quality.",
    start: ["/evaluation", "/comparisons/rag-evaluation-tools-compared", "/architectures#enterprise-rag-observability"],
    needs: ["Regression sets", "Trace analysis", "Faithfulness metrics", "Latency and cost monitoring"],
    recommendedSections: ["Evaluation", "Comparisons", "Enterprise RAG"],
  },
  {
    persona: "Educator",
    promise: "Teach RAG concepts, source literacy, and responsible use.",
    start: ["/use-cases/education", "/learn", "/tutorials"],
    needs: ["Conceptual examples", "Classroom-friendly tools", "Citation literacy", "Privacy notes"],
    recommendedSections: ["Education use case", "Learn", "Tutorials"],
  },
  {
    persona: "Librarian / information professional",
    promise: "Connect metadata, documentary authority, and retrieval quality.",
    start: ["/use-cases/libraries-documentation-centers", "/architectures#metadata-aware-rag", "/evaluation"],
    needs: ["Metadata filtering", "Provenance", "OCR and parsing", "Recall and precision"],
    recommendedSections: ["Libraries use case", "Metadata-aware RAG", "Evaluation"],
  },
  {
    persona: "Decision-maker",
    promise: "Assess value, risk, governance, and tool fit.",
    start: ["/comparisons", "/implementation", "/editorial-principles"],
    needs: ["Vendor-neutral comparisons", "Risk controls", "Production readiness", "Governance"],
    recommendedSections: ["Comparisons", "Implementation", "Editorial principles"],
  },
];

export const stackLayers = [
  {
    layer: "Knowledge sources",
    purpose: "Authoritative documents, records, webpages, databases, tickets, policies, and archives.",
    decisions: ["Ownership", "freshness", "permissions", "format quality", "source authority"],
  },
  {
    layer: "Ingestion and parsing",
    purpose: "Convert files into structured text, tables, page references, images, and metadata.",
    decisions: ["OCR quality", "layout handling", "deduplication", "language detection", "update cadence"],
  },
  {
    layer: "Chunking and metadata",
    purpose: "Create retrievable units that preserve meaning, context, and source traceability.",
    decisions: ["Chunk size", "overlap", "section boundaries", "page numbers", "access labels"],
  },
  {
    layer: "Embeddings and indexing",
    purpose: "Represent chunks for semantic retrieval and store them with searchable metadata.",
    decisions: ["Embedding model", "vector database", "hybrid indexing", "namespace strategy", "re-indexing"],
  },
  {
    layer: "Retrieval and reranking",
    purpose: "Find relevant evidence, filter it, and order the best context for generation.",
    decisions: ["Top-k", "hybrid weighting", "metadata filters", "reranker", "query rewriting"],
  },
  {
    layer: "Generation and citations",
    purpose: "Assemble prompts, instruct the model, generate answers, and cite source passages.",
    decisions: ["Prompt policy", "source display", "unsupported-answer behavior", "model choice", "tone"],
  },
  {
    layer: "Evaluation and operations",
    purpose: "Measure quality, detect regressions, monitor traces, and improve the system over time.",
    decisions: ["Golden questions", "faithfulness checks", "human review", "telemetry", "feedback loops"],
  },
];

export const implementationRoadmap = [
  {
    phase: "1. Frame the use case",
    outcome: "A narrow, measurable problem statement with users, source authority, and risk level defined.",
    checklist: ["Name the user group", "Define allowed sources", "List unacceptable failures", "Choose success metrics"],
  },
  {
    phase: "2. Prepare knowledge",
    outcome: "A curated corpus with ownership, metadata, update cadence, and access rules.",
    checklist: ["Remove obsolete duplicates", "Normalize formats", "Add metadata", "Record source authority"],
  },
  {
    phase: "3. Build retrieval",
    outcome: "A retrieval pipeline that can find relevant evidence before answer generation.",
    checklist: ["Test chunking", "Compare vector and hybrid search", "Add filters", "Inspect misses"],
  },
  {
    phase: "4. Generate with guardrails",
    outcome: "Answers cite sources, admit uncertainty, and avoid unsupported claims.",
    checklist: ["Require citations", "Handle no-answer cases", "Separate instructions from retrieved text", "Display source snippets"],
  },
  {
    phase: "5. Evaluate and launch",
    outcome: "A measured system with regression tests, tracing, human review, and operational ownership.",
    checklist: ["Create a test set", "Measure faithfulness", "Review latency and cost", "Define escalation"],
  },
  {
    phase: "6. Improve continuously",
    outcome: "A maintained knowledge service that learns from failures and source updates.",
    checklist: ["Monitor failed queries", "Refresh stale content", "Track user feedback", "Retest after changes"],
  },
];

export const evaluationMetrics = [
  {
    name: "Retrieval recall",
    question: "Did the system find the evidence needed to answer?",
    method: "Use labeled questions with expected source passages or expert-reviewed relevant documents.",
  },
  {
    name: "Retrieval precision",
    question: "Were the retrieved passages actually relevant?",
    method: "Review top results, track irrelevant chunks, and compare before/after chunking or reranking changes.",
  },
  {
    name: "Answer faithfulness",
    question: "Is the answer supported by the retrieved context?",
    method: "Check generated claims against sources with human review and RAG-specific evaluation tools.",
  },
  {
    name: "Citation usefulness",
    question: "Can users verify important claims quickly?",
    method: "Inspect whether citations point to the right source, page, section, or passage.",
  },
  {
    name: "No-answer behavior",
    question: "Does the system refuse or ask for clarification when evidence is missing?",
    method: "Test ambiguous, adversarial, and out-of-scope questions.",
  },
  {
    name: "Operational quality",
    question: "Is the system fast, affordable, monitored, and maintainable?",
    method: "Track latency, cost, error rates, trace coverage, data freshness, and update success.",
  },
];

export const riskControls = [
  ["Permission leakage", "Apply document-level access controls before retrieval, not only after generation."],
  ["Stale knowledge", "Track last-updated metadata and create refresh workflows for high-authority sources."],
  ["Prompt injection", "Treat retrieved text as untrusted content and keep system instructions separate."],
  ["Unsupported answers", "Require citation-backed claims and define a no-answer policy."],
  ["Bad OCR or parsing", "Sample parsed output visually and preserve source page references."],
  ["Overconfident automation", "Use human review for legal, medical, financial, policy, or high-impact decisions."],
];

export const ragFaq = [
  ["Is RAG a database?", "No. RAG is an architecture pattern that uses retrieval systems, databases, prompts, and language models together."],
  ["Does RAG eliminate hallucinations?", "No. It reduces unsupported generation when retrieval and prompting are well designed, but evaluation and guardrails remain necessary."],
  ["Do I always need a vector database?", "Not always. Small systems can start with simpler indexes, and many production systems benefit from hybrid keyword plus vector retrieval."],
  ["Is long context enough?", "Long context helps, but retrieval still helps select evidence, reduce noise, control cost, and preserve traceability."],
  ["Should I use Dify?", "Dify is a strong candidate when you want a platform and visual workflow layer. Code frameworks may fit better for deeply custom pipelines."],
];
