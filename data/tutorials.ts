export type TutorialLevel = "Beginner" | "Intermediate" | "Advanced";

export type Tutorial = {
  slug: string;
  title: string;
  subtitle: string;
  level: TutorialLevel;
  duration: string;
  outcome: string;
  audience: string[];
  tools: string[];
  prerequisites: string[];
  steps: {
    title: string;
    body: string;
    checklist: string[];
  }[];
  code?: {
    language: string;
    label: string;
    snippet: string;
  };
  officialResources: {
    title: string;
    url: string;
    type: "official docs" | "official video channel" | "official course" | "paper";
    note: string;
  }[];
  nextSteps: string[];
};

export const tutorials: Tutorial[] = [
  {
    slug: "complete-rag-knowledge-assistant",
    title: "Complete tutorial: build a trustworthy RAG knowledge assistant",
    subtitle: "A full end-to-end tutorial for planning, building, testing, and improving a RAG system without pretending API keys or production infrastructure are already solved.",
    level: "Beginner",
    duration: "90-120 min",
    outcome: "A working conceptual and implementation-ready blueprint for a source-grounded document Q&A assistant.",
    audience: ["beginners", "developers", "educators", "librarians", "AI project leads"],
    tools: ["Dify or LangChain", "document parser", "embedding model", "vector database", "evaluation checklist"],
    prerequisites: ["A small set of trusted documents", "Basic understanding of LLM prompts", "A model provider or local model plan", "A decision about cloud vs local deployment"],
    steps: [
      {
        title: "Define the assistant's job",
        body: "Start with a narrow use case. A RAG assistant should have a clear domain, allowed sources, target users, and a no-answer policy.",
        checklist: ["Name the user group", "List accepted source types", "Write five questions it must answer", "Write five questions it must refuse or escalate"],
      },
      {
        title: "Prepare the knowledge base",
        body: "Collect authoritative documents, remove duplicates, record metadata, and decide how updates will be handled.",
        checklist: ["Keep source URLs or file IDs", "Add owner, date, type, language, and access metadata", "Remove obsolete copies", "Record source authority"],
      },
      {
        title: "Parse and chunk documents",
        body: "Convert documents into text while preserving useful structure. Chunk by section, page, heading, or semantic unit rather than blindly splitting every fixed number of characters.",
        checklist: ["Inspect parsed text manually", "Preserve page numbers", "Try 500-1,200 token chunks", "Use overlap only when it helps continuity"],
      },
      {
        title: "Create embeddings and index chunks",
        body: "Use an embedding model to represent each chunk and store vectors with metadata in a vector database or platform knowledge base.",
        checklist: ["Choose embedding model", "Store source metadata with each chunk", "Index a small corpus first", "Keep re-indexing reproducible"],
      },
      {
        title: "Retrieve evidence",
        body: "For each user question, retrieve candidate passages. Start simple, then compare vector search, keyword search, hybrid search, and reranking.",
        checklist: ["Inspect top retrieved chunks", "Test exact names and acronyms", "Add metadata filters", "Record missed-source failures"],
      },
      {
        title: "Assemble the prompt",
        body: "Pass retrieved context to the model with instructions that separate system rules from source text. Treat retrieved content as data, not as instructions.",
        checklist: ["Require citations", "Tell the model to say when evidence is missing", "Limit context to relevant passages", "Protect against prompt injection"],
      },
      {
        title: "Generate answers with citations",
        body: "The user interface should expose answer text, source snippets, document titles, and page or section references where possible.",
        checklist: ["Show source title", "Show passage preview", "Link to original document when allowed", "Avoid uncited factual claims"],
      },
      {
        title: "Evaluate before launch",
        body: "Create a small but representative test set. Score retrieval separately from generation so you know whether failures come from missing evidence or answer synthesis.",
        checklist: ["Measure retrieval recall", "Review answer faithfulness", "Check citation accuracy", "Test out-of-scope questions"],
      },
      {
        title: "Improve and maintain",
        body: "RAG is a maintained knowledge service. Watch failed queries, stale sources, permission issues, and changes in user behavior.",
        checklist: ["Add trace logging", "Schedule source refresh", "Review low-confidence answers", "Retest after every retrieval change"],
      },
    ],
    code: {
      language: "ts",
      label: "Framework-neutral RAG flow",
      snippet: `type Chunk = { text: string; source: string; page?: number };

async function answerWithRag(question: string) {
  const candidates = await retriever.search(question, {
    topK: 12,
    filters: { status: "approved" },
  });

  const context = await reranker.keepBest(question, candidates, { topK: 5 });

  const answer = await model.generate({
    system: "Answer only from supplied sources. Say when evidence is missing.",
    user: question,
    context: context.map((chunk: Chunk) => ({
      text: chunk.text,
      citation: [chunk.source, chunk.page].filter(Boolean).join(" p. "),
    })),
  });

  return {
    answer: answer.text,
    citations: answer.citations,
    retrievedSources: context,
  };
}`,
    },
    officialResources: [
      {
        title: "LangChain official RAG tutorial",
        url: "https://docs.langchain.com/oss/python/langchain/rag",
        type: "official docs",
        note: "Official tutorial covering indexing, retrieval, generation, and RAG agents.",
      },
      {
        title: "LlamaIndex official introduction to RAG",
        url: "https://developers.llamaindex.ai/python/framework/understanding/rag/",
        type: "official docs",
        note: "Official conceptual guide to RAG with LlamaIndex.",
      },
      {
        title: "LangChain official YouTube channel",
        url: "https://www.youtube.com/@LangChain",
        type: "official video channel",
        note: "Use the channel search for current RAG, LangGraph, and LangSmith tutorials.",
      },
      {
        title: "LlamaIndex official YouTube channel",
        url: "https://www.youtube.com/@LlamaIndex",
        type: "official video channel",
        note: "Use the channel search for current RAG, agents, evaluation, and data framework videos.",
      },
    ],
    nextSteps: ["Try the same corpus with hybrid search", "Add reranking", "Create a regression test set", "Compare Dify, LangChain, and LlamaIndex implementations"],
  },
  {
    slug: "rag-chatbot-with-dify",
    title: "Build a RAG chatbot with Dify",
    subtitle: "Use Dify as a visual platform for a knowledge-base-backed assistant.",
    level: "Beginner",
    duration: "45-75 min",
    outcome: "A Dify chatbot connected to a curated knowledge base with retrieval settings and source review.",
    audience: ["educators", "teams", "no-code builders", "public institutions"],
    tools: ["Dify", "knowledge base", "model provider"],
    prerequisites: ["Dify workspace", "Sample documents", "Model provider configured"],
    steps: [
      { title: "Create the workspace and app", body: "Start with a chat application so users can ask questions conversationally.", checklist: ["Create workspace", "Create chat app", "Name the assistant", "Define scope"] },
      { title: "Create a knowledge base", body: "Upload a small, trusted document set first. Do not start with a messy archive.", checklist: ["Upload documents", "Review parsed text", "Add metadata if available", "Exclude obsolete files"] },
      { title: "Configure retrieval", body: "Adjust retrieval settings and test whether the correct passages appear before improving prompts.", checklist: ["Test known questions", "Inspect retrieved chunks", "Tune top-k", "Enable citations if available"] },
      { title: "Publish and review", body: "Share with a small group and collect failed questions before broader release.", checklist: ["Review logs", "Add no-answer guidance", "Document update workflow", "Plan evaluation"] },
    ],
    officialResources: [
      { title: "Dify official documentation", url: "https://docs.dify.ai/", type: "official docs", note: "Primary source for current Dify features and deployment details." },
      { title: "Dify official website", url: "https://dify.ai/", type: "official docs", note: "Use for current product positioning and plan verification." },
    ],
    nextSteps: ["Add evaluation questions", "Compare with Flowise", "Document model and retrieval settings"],
  },
  {
    slug: "local-rag-ollama-vector-db",
    title: "Build a local RAG prototype with Ollama and a vector database",
    subtitle: "A privacy-oriented learning path for running a small RAG prototype locally.",
    level: "Intermediate",
    duration: "60-90 min",
    outcome: "A local prototype plan using local models plus Chroma or Qdrant.",
    audience: ["developers", "students", "privacy-sensitive teams"],
    tools: ["Ollama", "Chroma or Qdrant", "local embedding model"],
    prerequisites: ["A machine with enough memory for local models", "Command-line comfort", "Small document set"],
    steps: [
      { title: "Choose local models", body: "Pick a chat model and embedding model that fit your hardware.", checklist: ["Check model license", "Test latency", "Document hardware limits", "Avoid sensitive data until security is reviewed"] },
      { title: "Index sample documents", body: "Parse a small corpus and store embeddings in a local vector database.", checklist: ["Chunk documents", "Store metadata", "Run retrieval tests", "Inspect missed queries"] },
      { title: "Connect retrieval to generation", body: "Send only the best retrieved context to the local model and cite sources.", checklist: ["Limit context size", "Add source IDs", "Handle no-answer cases", "Log failures"] },
    ],
    officialResources: [
      { title: "Ollama official documentation", url: "https://github.com/ollama/ollama/tree/main/docs", type: "official docs", note: "Official docs for running local models with Ollama." },
      { title: "Chroma documentation", url: "https://docs.trychroma.com/", type: "official docs", note: "Official vector database docs for local prototyping." },
      { title: "Qdrant documentation", url: "https://qdrant.tech/documentation/", type: "official docs", note: "Official vector database docs for local or production retrieval." },
    ],
    nextSteps: ["Try hybrid search", "Measure latency", "Move from prototype corpus to governed corpus"],
  },
  {
    slug: "evaluate-rag-system",
    title: "Evaluate a RAG system",
    subtitle: "Build a practical evaluation loop for retrieval quality, answer faithfulness, and citations.",
    level: "Intermediate",
    duration: "45-90 min",
    outcome: "A reusable evaluation checklist and first regression set.",
    audience: ["AI engineers", "QA teams", "researchers", "project leads"],
    tools: ["Ragas", "TruLens", "Phoenix / Arize", "Langfuse"],
    prerequisites: ["At least 20 representative questions", "Known authoritative sources", "Access to logs or traces"],
    steps: [
      { title: "Create a question set", body: "Include easy, hard, ambiguous, out-of-scope, and adversarial questions.", checklist: ["Label expected sources", "Include no-answer cases", "Cover important personas", "Version the set"] },
      { title: "Test retrieval first", body: "Score whether the right evidence appears before evaluating answer style.", checklist: ["Measure recall", "Inspect top-k noise", "Check filters", "Compare reranking"] },
      { title: "Test generation", body: "Check whether answers are faithful, complete, well cited, and appropriately uncertain.", checklist: ["Review factual claims", "Check citations", "Flag unsupported synthesis", "Track refusal quality"] },
    ],
    officialResources: [
      { title: "Ragas documentation", url: "https://docs.ragas.io/", type: "official docs", note: "Official documentation for RAG evaluation workflows." },
      { title: "Langfuse documentation", url: "https://langfuse.com/docs", type: "official docs", note: "Official docs for tracing and evaluating LLM applications." },
      { title: "Phoenix documentation", url: "https://docs.arize.com/phoenix", type: "official docs", note: "Official docs for traces, evaluation, and observability." },
    ],
    nextSteps: ["Automate regression checks", "Add human review", "Track retrieval failures over time"],
  },
  {
    slug: "improve-retrieval-quality",
    title: "Improve retrieval quality",
    subtitle: "Diagnose and improve weak search results before blaming the model.",
    level: "Advanced",
    duration: "45-75 min",
    outcome: "A practical improvement plan for chunking, metadata, hybrid search, and reranking.",
    audience: ["developers", "AI engineers", "search teams"],
    tools: ["vector database", "reranker", "evaluation set"],
    prerequisites: ["A working retrieval pipeline", "Failed query examples", "Ability to inspect retrieved chunks"],
    steps: [
      { title: "Classify failures", body: "Separate parsing failures, chunking failures, embedding failures, metadata failures, and reranking failures.", checklist: ["Collect failed queries", "Inspect parsed text", "Inspect top-k results", "Record cause"] },
      { title: "Tune retrieval", body: "Change one retrieval variable at a time and retest against the same questions.", checklist: ["Try hybrid search", "Adjust chunk size", "Add metadata filters", "Compare rerankers"] },
      { title: "Protect improvements", body: "Turn successful fixes into regression tests so future changes do not undo them.", checklist: ["Version test set", "Store expected sources", "Track recall", "Review drift"] },
    ],
    officialResources: [
      { title: "LangChain RAG tutorial", url: "https://docs.langchain.com/oss/python/langchain/rag", type: "official docs", note: "Shows indexing and retrieval/generation structure." },
      { title: "LlamaIndex RAG guide", url: "https://developers.llamaindex.ai/python/framework/understanding/rag/", type: "official docs", note: "Explains RAG concepts through a data framework lens." },
    ],
    nextSteps: ["Add reranking", "Evaluate metadata filters", "Introduce observability traces"],
  },
  {
    slug: "add-citations",
    title: "Add citations to RAG answers",
    subtitle: "Design answer traceability so users can verify claims quickly.",
    level: "Beginner",
    duration: "30-60 min",
    outcome: "A citation pattern that connects generated claims to source passages.",
    audience: ["developers", "educators", "librarians", "public institutions"],
    tools: ["source metadata", "prompt template", "UI source panel"],
    prerequisites: ["Source IDs", "Document titles", "Page or section metadata"],
    steps: [
      { title: "Preserve citation metadata", body: "Citations cannot be added reliably at the end if source information is lost during ingestion.", checklist: ["Store source ID", "Store title", "Store page or section", "Keep snippet text"] },
      { title: "Prompt for source-grounded claims", body: "Ask the model to cite only retrieved sources and admit when sources do not support an answer.", checklist: ["Require citations", "Ban unsupported claims", "Show no-answer behavior", "Test confusing sources"] },
      { title: "Design the UI", body: "Users should see enough source context to judge whether an answer is credible.", checklist: ["Show snippets", "Link originals when allowed", "Indicate dates", "Display authority or source type"] },
    ],
    officialResources: [
      { title: "Original RAG paper", url: "https://arxiv.org/abs/2005.11401", type: "paper", note: "Foundational paper introducing retrieval-augmented generation with non-parametric memory." },
    ],
    nextSteps: ["Add claim-level citations", "Evaluate citation correctness", "Add source freshness labels"],
  },
  {
    slug: "design-knowledge-base",
    title: "Design a knowledge base for RAG",
    subtitle: "Information architecture for reliable retrieval.",
    level: "Beginner",
    duration: "45-75 min",
    outcome: "A governed knowledge-base plan with source authority, metadata, and update rules.",
    audience: ["librarians", "documentalists", "business owners", "public institutions"],
    tools: ["metadata schema", "document inventory", "source policy"],
    prerequisites: ["Document collection", "Owner or subject expert", "Basic metadata fields"],
    steps: [
      { title: "Inventory sources", body: "List documents, owners, dates, formats, authority, and access rules.", checklist: ["Identify owners", "Mark authoritative sources", "Remove duplicates", "Flag sensitive content"] },
      { title: "Design metadata", body: "Metadata lets retrieval respect time, authority, language, jurisdiction, and access rights.", checklist: ["Date", "department", "language", "document type", "access label"] },
      { title: "Plan maintenance", body: "A RAG system becomes stale unless source updates and removals are routine.", checklist: ["Assign owner", "Set refresh cadence", "Track deprecations", "Retest after updates"] },
    ],
    officialResources: [
      { title: "Dify documentation", url: "https://docs.dify.ai/", type: "official docs", note: "Official reference for current Dify knowledge-base capabilities." },
      { title: "Unstructured documentation", url: "https://docs.unstructured.io/", type: "official docs", note: "Official documentation for parsing documents before indexing." },
    ],
    nextSteps: ["Create a metadata template", "Test metadata filters", "Write an editorial source policy"],
  },
];
