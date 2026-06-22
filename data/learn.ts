export const learnTopics = [
  {
    slug: "what-is-rag",
    title: "What is RAG?",
    body: "Retrieval-Augmented Generation connects a language model to external knowledge sources. The retriever finds relevant evidence, and the model uses that evidence to answer with better grounding, accuracy, traceability, and domain relevance.",
  },
  {
    slug: "why-rag-emerged",
    title: "Why RAG emerged",
    body: "RAG emerged because model weights cannot reliably contain every private, current, or specialized fact. Retrieval lets knowledge be updated independently from the model.",
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs fine-tuning",
    body: "RAG is generally suitable when information changes or must be cited. Fine-tuning is generally suitable for behavior, tone, formatting, or domain patterns rather than constantly changing facts.",
  },
  {
    slug: "rag-vs-long-context",
    title: "RAG vs long-context models",
    body: "Long context can hold more material, but retrieval still helps select relevant evidence, reduce cost, improve traceability, and manage very large collections.",
  },
  {
    slug: "rag-patterns",
    title: "Naive, advanced, modular, graph, agentic, and multimodal RAG",
    body: "Naive RAG retrieves chunks directly. Advanced RAG adds query rewriting, hybrid search, reranking, and evaluation. Modular RAG separates components. Graph, agentic, and multimodal RAG add relationships, tool use, and multiple content types.",
  },
  {
    slug: "core-concepts",
    title: "Core concepts",
    body: "Important concepts include chunking, embeddings, vector databases, hybrid search, metadata, reranking, query rewriting, retrieval evaluation, hallucination control, and citations.",
  },
  {
    slug: "strengths-limitations",
    title: "Strengths and limitations",
    body: "RAG improves grounding and updateability, but it can still fail through bad ingestion, weak retrieval, stale sources, prompt injection, poor evaluation, or unsupported generation.",
  },
  {
    slug: "common-mistakes",
    title: "Common mistakes",
    body: "Common mistakes include chunking everything the same way, ignoring metadata, skipping evaluation, trusting top-k retrieval blindly, failing to manage permissions, and not showing sources to users.",
  },
  {
    slug: "best-practices",
    title: "Best practices",
    body: "Start with a narrow use case, curate sources, keep metadata, evaluate retrieval and answers separately, use reranking for noisy corpora, add citations, monitor failures, and define human escalation.",
  },
];
