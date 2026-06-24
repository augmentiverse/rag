export const chunkingStrategies = [
  {
    name: "Fixed-size",
    bestFor: "Fast baselines, uniform prose, and early experiments.",
    method: "Split by a target token or character count, optionally with overlap.",
    watchFor: "Broken headings, tables, procedures, and arguments that cross chunk boundaries.",
    evaluateWith: "Expected-passage recall, duplicate retrieval, and answer completeness.",
  },
  {
    name: "Structure-aware",
    bestFor: "Policies, manuals, books, web pages, and documentation with meaningful headings.",
    method: "Respect sections, paragraphs, lists, tables, functions, or other document-native boundaries.",
    watchFor: "Very long sections and parser errors that erase layout or hierarchy.",
    evaluateWith: "Section-level provenance, exact-reference queries, and human inspection.",
  },
  {
    name: "Semantic",
    bestFor: "Narrative or mixed-length content where topic boundaries matter more than layout.",
    method: "Group adjacent sentences according to semantic similarity or model-assisted topic shifts.",
    watchFor: "Higher processing cost, unstable boundaries, and difficult reproducibility.",
    evaluateWith: "Intrachunk coherence, retrieval relevance, latency, and indexing cost.",
  },
  {
    name: "Parent-child",
    bestFor: "Cases that need precise matching but broader context for answer generation.",
    method: "Retrieve small child chunks, then return a larger parent section to the model.",
    watchFor: "Repeated parent context, metadata linkage errors, and oversized prompts.",
    evaluateWith: "Child retrieval recall, parent usefulness, context redundancy, and token usage.",
  },
  {
    name: "Entity or graph-based",
    bestFor: "Relationship-heavy corpora involving people, organizations, events, concepts, or dependencies.",
    method: "Create retrievable units around entities, relations, graph neighborhoods, or linked passages.",
    watchFor: "Extraction errors, graph maintenance cost, and false or missing relationships.",
    evaluateWith: "Entity coverage, relation accuracy, multi-hop questions, and provenance.",
  },
];

export const ragStrategyMatrix = [
  {
    strategy: "Prompting",
    chooseWhen: "The model already has the needed knowledge and the main problem is instructions, format, tone, or reasoning scaffolding.",
    avoidWhen: "Answers require private, rapidly changing, or citable sources.",
    combineWith: "RAG prompts still define source use, uncertainty, answer format, and citations.",
  },
  {
    strategy: "Long context",
    chooseWhen: "The relevant material is already known, fits comfortably, and must be considered together.",
    avoidWhen: "The corpus is much larger than the context window, changes frequently, or contains substantial irrelevant material.",
    combineWith: "Use retrieval to select a compact evidence set, then use long context for cross-document synthesis.",
  },
  {
    strategy: "RAG",
    chooseWhen: "Knowledge is external, private, changing, too large for a single prompt, or must be traced to sources.",
    avoidWhen: "The task needs no external knowledge or retrieval cannot access an authoritative corpus.",
    combineWith: "Use prompting for behavior and fine-tuning for stable task patterns where justified.",
  },
  {
    strategy: "Fine-tuning",
    chooseWhen: "The goal is stable behavior, style, output structure, domain language, or learned task patterns.",
    avoidWhen: "The main requirement is updating factual knowledge or producing verifiable citations.",
    combineWith: "A fine-tuned model can still retrieve current evidence through RAG.",
  },
];

export const graphRagFieldGuide = {
  limitations: [
    "Flat chunk retrieval can struggle with questions that require relationships across many documents.",
    "Global questions such as themes, trends, or organizational patterns are not always reducible to one nearest passage.",
    "Entity ambiguity, distributed evidence, and multi-hop reasoning can require explicit structure.",
    "Graph construction and global summarization add cost and do not automatically improve reasoning quality.",
  ],
  paradigms: [
    {
      title: "Graph as index",
      body: "Text remains the primary evidence, while graph links organize chunks, entities, hierarchy, or neighborhoods for better traversal and retrieval.",
    },
    {
      title: "Graph as knowledge carrier",
      body: "The graph stores claims or relationships as structured knowledge, often alongside source passages for provenance.",
    },
    {
      title: "Hybrid graph and text",
      body: "Graph traversal identifies connected evidence while vector or keyword retrieval supplies the source text used for generation and citation.",
    },
  ],
  retrievalModes: [
    ["Similarity-based", "Find semantically related nodes or linked passages."],
    ["Local or entity-centric", "Combine a focal entity, its relationships, and supporting text."],
    ["Global or community-based", "Synthesize across community summaries to answer corpus-level questions."],
    ["DRIFT or exploratory", "Use community information to broaden a local search and generate follow-up questions."],
    ["Multi-hop", "Traverse several relationships when no single passage contains the answer."],
  ],
  readinessQuestions: [
    "Do users ask relationship or multi-hop questions that flat retrieval regularly misses?",
    "Can the team define entities and relationships that matter in the domain?",
    "Will every graph claim remain linked to inspectable source evidence?",
    "Can graph extraction, updates, and deletion be operated over time?",
    "Has a simpler hybrid-search and reranking baseline been evaluated first?",
  ],
};

export const advancedRagPatterns = [
  {
    name: "Agentic RAG",
    control: "An agent plans searches, selects tools, inspects evidence, and may iterate.",
    usefulFor: "Multi-step research, tasks spanning several systems, and questions requiring adaptive retrieval.",
    principalRisk: "Unbounded loops, hidden tool errors, latency, cost, and unpredictable decision paths.",
    minimumControl: "Tool allowlists, iteration limits, trace logging, source requirements, and task-specific tests.",
  },
  {
    name: "Corrective RAG (CRAG)",
    control: "A retrieval evaluator judges whether evidence is sufficient and triggers another retrieval action when needed.",
    usefulFor: "Pipelines where the first retrieval is often incomplete, ambiguous, or off-topic.",
    principalRisk: "A weak evaluator may reject good evidence or accept bad evidence and add unnecessary searches.",
    minimumControl: "Calibrated relevance checks, explicit fallback routes, and evaluation of correction decisions.",
  },
  {
    name: "Self-RAG",
    control: "The model uses reflection or critique signals to decide when to retrieve and assess its own generation.",
    usefulFor: "Research settings exploring adaptive retrieval and generation-time self-critique.",
    principalRisk: "Self-evaluation is not independent verification and may reproduce the generator's blind spots.",
    minimumControl: "External evidence checks, held-out evaluation, and human review for high-impact use.",
  },
  {
    name: "GraphRAG",
    control: "Graph structure organizes entities, relationships, communities, or paths used during retrieval and synthesis.",
    usefulFor: "Connected knowledge, corpus-level questions, entity exploration, and multi-hop evidence.",
    principalRisk: "Incorrect graph extraction, expensive indexing, stale relationships, and reasoning unsupported by source text.",
    minimumControl: "Source-linked edges, extraction audits, update workflows, and separate retrieval/reasoning evaluation.",
  },
];

export const ragFailureChain = [
  {
    stage: "Source",
    failure: "The authoritative answer is absent, stale, duplicated, contradictory, or inaccessible.",
    evidence: "Inspect corpus coverage, ownership, dates, permissions, and superseded documents.",
    fix: "Curate sources before changing models or retrieval settings.",
  },
  {
    stage: "Parsing and chunking",
    failure: "The answer exists but tables, headings, pages, or relationships were damaged during ingestion.",
    evidence: "Compare parsed chunks with the original document visually.",
    fix: "Use format-aware parsing, structure-aware chunks, and preserved provenance.",
  },
  {
    stage: "Retrieval",
    failure: "Relevant evidence is not returned or is buried under irrelevant passages.",
    evidence: "Evaluate expected-source recall and relevance of each top result.",
    fix: "Tune chunking, hybrid search, metadata filters, query rewriting, and reranking.",
  },
  {
    stage: "Context assembly",
    failure: "Good evidence is truncated, duplicated, ordered poorly, or mixed with conflicting sources.",
    evidence: "Log the exact context sent to the model.",
    fix: "Deduplicate, prioritize authority and freshness, compress carefully, and expose conflicts.",
  },
  {
    stage: "Generation and reasoning",
    failure: "The model ignores, misreads, overgeneralizes, or invents beyond the supplied evidence.",
    evidence: "Break the answer into claims and map each claim to supporting context.",
    fix: "Improve instructions, require claim support, reduce noise, or use a better-suited model.",
  },
  {
    stage: "Citation and presentation",
    failure: "The answer may be supported, but users cannot verify which source supports which claim.",
    evidence: "Test citation correctness, granularity, links, page numbers, and source snippets.",
    fix: "Preserve provenance end to end and design citations as a verification workflow.",
  },
];

export const ragTriad = [
  {
    name: "Context relevance",
    question: "Are the retrieved passages relevant to the user's question?",
    diagnose: "Low scores usually point to corpus, parsing, chunking, query, filtering, or ranking problems.",
  },
  {
    name: "Groundedness",
    question: "Is each important answer claim supported by the retrieved context?",
    diagnose: "Low scores usually point to noisy context, conflicting evidence, weak instructions, or unsupported generation.",
  },
  {
    name: "Answer relevance",
    question: "Does the final response directly and usefully answer the original question?",
    diagnose: "Low scores can occur even when the answer is grounded, for example when it is evasive, incomplete, or overly verbose.",
  },
];
