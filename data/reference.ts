export const officialSourceLinks = [
  { title: "Original RAG paper", href: "https://arxiv.org/abs/2005.11401", note: "Foundational research paper for Retrieval-Augmented Generation." },
  { title: "LangChain RAG tutorial", href: "https://docs.langchain.com/oss/python/langchain/rag", note: "Official implementation tutorial for indexing, retrieval, generation, and agents." },
  { title: "LlamaIndex RAG guide", href: "https://developers.llamaindex.ai/python/framework/understanding/rag/", note: "Official conceptual and framework guide for data-connected LLM applications." },
  { title: "Dify documentation", href: "https://docs.dify.ai/", note: "Official source for Dify apps, knowledge bases, workflows, models, and deployment." },
  { title: "Haystack documentation", href: "https://docs.haystack.deepset.ai/", note: "Official docs for component-based search, QA, and RAG pipelines." },
  { title: "Ragas documentation", href: "https://docs.ragas.io/", note: "Official RAG evaluation framework documentation." },
  { title: "Langfuse documentation", href: "https://langfuse.com/docs", note: "Official docs for LLM tracing, prompt management, and evaluation." },
  { title: "Phoenix documentation", href: "https://docs.arize.com/phoenix", note: "Official docs for LLM tracing, evaluation, and observability." },
];

export const learnDeepDives = [
  {
    title: "A simple RAG example",
    body: "A university policy assistant receives the question: 'Can graduate students borrow interlibrary loan books?' The retriever searches approved library policy pages, finds the relevant borrowing rule, and passes that passage to the model. The answer cites the policy page instead of relying on model memory.",
    steps: ["User asks a question", "Retriever searches approved sources", "Relevant passages are selected", "Model answers only from those passages", "UI shows citations"],
  },
  {
    title: "When RAG is the wrong tool",
    body: "RAG is not a cure for every AI problem. If the task is pure classification, style transfer, translation, or extraction from a single provided document, retrieval may add unnecessary complexity.",
    steps: ["Check whether external knowledge is needed", "Check whether sources must be updated", "Check whether citations matter", "Choose simpler patterns when retrieval adds no value"],
  },
  {
    title: "A strong first project",
    body: "The best first RAG project is narrow, source-rich, and easy to evaluate: an internal policy assistant, course-material Q&A bot, support documentation assistant, or research-paper explorer.",
    steps: ["Limit the domain", "Start with 20-100 trusted documents", "Write test questions before launch", "Review failures with subject experts"],
  },
];

export const difyDetailedWorkflow = [
  {
    title: "Plan the app",
    body: "Define the assistant's audience, allowed source collection, answer tone, escalation policy, and unacceptable failure modes before touching settings.",
  },
  {
    title: "Prepare the knowledge base",
    body: "Upload a small approved corpus first. Check how Dify parses files, then revise document formatting or metadata before scaling up.",
  },
  {
    title: "Tune retrieval",
    body: "Ask known questions and inspect whether retrieved passages contain the evidence. Adjust retrieval settings before changing the model.",
  },
  {
    title: "Design answer behavior",
    body: "Tell the app to cite sources, admit uncertainty, and avoid answering outside the knowledge base when evidence is missing.",
  },
  {
    title: "Pilot with real users",
    body: "Release to a small user group, review logs, collect failed questions, update sources, and only then expand usage.",
  },
];

export const architectureExamples: Record<string, { example: string; buildSteps: string[]; sourceLinks: string[] }> = {
  "basic-rag": {
    example: "A course assistant that answers only from lecture notes, syllabus documents, and reading lists.",
    buildSteps: ["Select trusted course files", "Chunk by headings or lessons", "Embed chunks", "Retrieve top passages", "Generate answer with citations", "Review common student questions"],
    sourceLinks: ["LangChain RAG tutorial", "LlamaIndex RAG guide"],
  },
  "advanced-rag-reranking": {
    example: "A support assistant that retrieves many candidate passages, then reranks them so the most specific troubleshooting step appears first.",
    buildSteps: ["Collect failed retrieval examples", "Retrieve a larger candidate set", "Add a reranker", "Compare answer faithfulness", "Track latency impact"],
    sourceLinks: ["Cohere documentation", "Jina AI documentation"],
  },
  "hybrid-search-rag": {
    example: "A legal monitoring system that must match exact regulation numbers and also understand semantic descriptions of obligations.",
    buildSteps: ["Index keywords and embeddings", "Tune score fusion", "Add jurisdiction metadata", "Rerank top results", "Evaluate exact-reference queries"],
    sourceLinks: ["Elasticsearch documentation", "OpenSearch documentation", "Weaviate documentation"],
  },
  "metadata-aware-rag": {
    example: "A public-administration assistant that retrieves only current procedures for the user's department and language.",
    buildSteps: ["Define metadata schema", "Enforce metadata at ingestion", "Apply filters before retrieval", "Display source authority", "Audit access rules"],
    sourceLinks: ["Qdrant documentation", "Pinecone documentation"],
  },
  "agentic-rag": {
    example: "A research assistant that searches papers, checks definitions, calls a calculator, and synthesizes a sourced answer.",
    buildSteps: ["Define allowed tools", "Add planning constraints", "Log every tool call", "Limit retries", "Evaluate multi-step failures"],
    sourceLinks: ["LangChain documentation", "Dify documentation"],
  },
  "graph-rag": {
    example: "An institutional knowledge explorer that connects people, projects, policies, departments, and documents.",
    buildSteps: ["Extract entities", "Curate relationships", "Link graph nodes to passages", "Retrieve graph neighborhoods", "Validate relationship quality"],
    sourceLinks: ["LlamaIndex documentation"],
  },
  "multimodal-rag": {
    example: "An archive assistant that searches scanned PDFs, tables, handwritten forms, and image captions.",
    buildSteps: ["Run OCR and layout parsing", "Extract tables and figures", "Preserve page images", "Create text and visual indexes", "Evaluate provenance"],
    sourceLinks: ["Unstructured documentation", "LlamaIndex documentation"],
  },
  "local-private-rag": {
    example: "A classroom or lab prototype running local documents, local embeddings, and a local model on controlled hardware.",
    buildSteps: ["Install local model runtime", "Choose local vector store", "Index non-sensitive documents", "Measure hardware limits", "Review privacy assumptions"],
    sourceLinks: ["Ollama documentation", "Chroma documentation", "Qdrant documentation"],
  },
  "enterprise-rag-observability": {
    example: "A company-wide assistant with access controls, trace logs, evaluation dashboards, source owners, and release gates.",
    buildSteps: ["Define governance owners", "Connect identity and permissions", "Add tracing", "Build test sets", "Monitor feedback and regressions"],
    sourceLinks: ["Langfuse documentation", "Phoenix documentation", "Ragas documentation"],
  },
};

export const useCasePlaybooks: Record<string, { exampleQuestions: string[]; stepByStep: string[]; usefulSources: string[] }> = {
  education: {
    exampleQuestions: ["What readings are required for week 4?", "How should I cite the final project sources?", "What does the syllabus say about late submissions?"],
    stepByStep: ["Start with one course", "Index syllabus and approved readings", "Add citation display", "Test with students and teachers", "Review privacy and academic-integrity rules"],
    usefulSources: ["Dify documentation", "LangChain RAG tutorial", "LlamaIndex RAG guide"],
  },
  "libraries-documentation-centers": {
    exampleQuestions: ["Which archives contain records about this topic?", "What is the most recent policy document?", "Which collection has digitized scans?"],
    stepByStep: ["Inventory collections", "Normalize metadata", "Use hybrid search", "Preserve provenance", "Evaluate recall with librarians"],
    usefulSources: ["Unstructured documentation", "Elasticsearch documentation", "Weaviate documentation"],
  },
  "scientific-research": {
    exampleQuestions: ["Which papers support this claim?", "What methods are commonly used for this task?", "Where do these two studies disagree?"],
    stepByStep: ["Collect papers and abstracts", "Preserve citation metadata", "Use reranking", "Separate evidence from synthesis", "Add expert review"],
    usefulSources: ["Original RAG paper", "LlamaIndex RAG guide", "Ragas documentation"],
  },
  "public-administration": {
    exampleQuestions: ["Which form should a citizen use?", "What is the current procedure?", "Which office handles this request?"],
    stepByStep: ["Use official sources only", "Add date and jurisdiction metadata", "Define escalation", "Review legal wording", "Log unanswered questions"],
    usefulSources: ["Dify documentation", "Langfuse documentation", "Ragas documentation"],
  },
  enterprises: {
    exampleQuestions: ["What is our current travel policy?", "Which ticket describes this known issue?", "How do I onboard a new vendor?"],
    stepByStep: ["Map systems of record", "Apply access control", "Build hybrid retrieval", "Add observability", "Create ownership and refresh workflows"],
    usefulSources: ["LangChain RAG tutorial", "Qdrant documentation", "Langfuse documentation"],
  },
  "legal-regulatory-monitoring": {
    exampleQuestions: ["Which regulation changed this month?", "What obligations apply in this jurisdiction?", "Which internal policy references this law?"],
    stepByStep: ["Preserve jurisdiction metadata", "Use exact keyword search plus semantic retrieval", "Require citations", "Add human legal review", "Track update cadence"],
    usefulSources: ["Elasticsearch documentation", "Haystack documentation", "Ragas documentation"],
  },
  "customer-support": {
    exampleQuestions: ["How do I reset this setting?", "Is this product issue known?", "What refund policy applies?"],
    stepByStep: ["Index approved support articles", "Connect ticket categories", "Add escalation rules", "Review answer tone", "Measure resolution and citation usefulness"],
    usefulSources: ["Dify documentation", "Langfuse documentation", "Qdrant documentation"],
  },
  "archives-digital-documents": {
    exampleQuestions: ["Which scanned files mention this person?", "What is the provenance of this record?", "Which documents contain this handwritten annotation?"],
    stepByStep: ["Run OCR carefully", "Preserve page images", "Add archival metadata", "Flag uncertain extraction", "Let archivists review answers"],
    usefulSources: ["Unstructured documentation", "LlamaIndex RAG guide", "Phoenix documentation"],
  },
};

export const toolDecisionQuestions = [
  "Do you need a visual platform, a code framework, or a database component?",
  "Must the system be self-hosted, cloud-hosted, or both?",
  "Who will maintain ingestion, evaluation, and source updates?",
  "Does the corpus need keyword search, vector search, or hybrid search?",
  "What traces, logs, and evaluation reports are required before launch?",
  "Which claims must be verified from official pricing or feature pages?",
];

export const comparisonHowTo = [
  "Start with user type and workflow: no-code builder, developer, research team, or enterprise platform team.",
  "Separate the application layer from retrieval infrastructure. Dify, LangChain, and vector databases solve different parts of the stack.",
  "Use a small representative corpus to compare retrieval quality before making a procurement decision.",
  "Check deployment, licensing, privacy, and pricing from official sources before final selection.",
  "Run the same evaluation questions across alternatives so comparisons are based on evidence, not impressions.",
];
