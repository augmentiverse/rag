export const tutorials = [
  {
    slug: "first-rag-system",
    title: "Build your first RAG system conceptually",
    steps: ["Choose a narrow question domain", "Collect trusted documents", "Chunk documents by structure", "Create embeddings", "Store vectors with metadata", "Retrieve top candidates", "Assemble prompt context", "Generate answer with citations", "Evaluate failures"],
  },
  {
    slug: "rag-chatbot-with-dify",
    title: "Build a RAG chatbot with Dify",
    steps: ["Create a Dify workspace", "Create or import a knowledge base", "Upload representative documents", "Configure retrieval settings", "Create a chat app", "Connect the knowledge base", "Test answers and citations", "Add guardrails and review logs"],
  },
  {
    slug: "local-rag-ollama-vector-db",
    title: "Build a local RAG prototype with Ollama and a vector database",
    steps: ["Install a local model runtime", "Select an embedding model", "Parse a small document set", "Store embeddings in Chroma or Qdrant", "Retrieve context for a question", "Send context to a local model", "Inspect latency and answer quality"],
  },
  {
    slug: "evaluate-rag-system",
    title: "Evaluate a RAG system",
    steps: ["Create a test question set", "Label expected sources", "Measure retrieval recall", "Check answer faithfulness", "Review citations", "Track regressions over time", "Combine automated metrics with expert review"],
  },
  {
    slug: "improve-retrieval-quality",
    title: "Improve retrieval quality",
    steps: ["Inspect failed queries", "Revise chunking", "Add metadata filters", "Try hybrid search", "Add reranking", "Rewrite ambiguous queries", "Re-evaluate against the same set"],
  },
  {
    slug: "add-citations",
    title: "Add citations to RAG answers",
    steps: ["Keep stable source IDs", "Preserve page or section metadata", "Pass source metadata into the prompt", "Ask for claim-level citations", "Reject unsupported claims", "Show source snippets in the UI"],
  },
  {
    slug: "design-knowledge-base",
    title: "Design a knowledge base for RAG",
    steps: ["Define authority levels", "Remove obsolete duplicates", "Normalize document formats", "Choose metadata schema", "Design update workflows", "Test representative questions", "Document ownership"],
  },
];
