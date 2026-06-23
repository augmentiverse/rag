export const sectionGuides = {
  learn: [
    {
      title: "Beginner path",
      items: ["Read the definition of RAG.", "Study the pipeline from documents to citations.", "Learn the difference between RAG, fine-tuning, and long context.", "Use the glossary whenever a term is unfamiliar."],
    },
    {
      title: "Expert path",
      items: ["Compare naive, advanced, modular, graph, agentic, and multimodal RAG.", "Design an evaluation set before changing models.", "Measure retrieval separately from generation.", "Track source freshness and access-control behavior."],
    },
  ],
  tools: [
    {
      title: "Tool categories explained",
      items: ["Platforms provide application workflows and UI.", "Frameworks provide code-level orchestration.", "Vector databases store and search embeddings.", "Parsers prepare documents.", "Rerankers improve retrieved evidence order.", "Observability tools expose traces and failures."],
    },
    {
      title: "Selection checklist",
      items: ["Define your users and source corpus.", "Decide cloud, self-hosted, or hybrid.", "Test retrieval on your own data.", "Verify licensing and pricing officially.", "Check who will maintain updates and evaluation."],
    },
  ],
  architectures: [
    {
      title: "Architecture reading method",
      items: ["Start with the simplest pattern that can solve the use case.", "Add hybrid search when exact terms matter.", "Add metadata filters when authority, language, date, or permissions matter.", "Add reranking when top results are noisy.", "Add observability before production release."],
    },
  ],
  resources: [
    {
      title: "Source quality rules",
      items: ["Prefer official documentation for tool behavior.", "Prefer primary research for scientific claims.", "Avoid unverified benchmark claims.", "Record last-verified dates for tool pages.", "Use community tutorials only after checking against official docs."],
    },
  ],
  implementation: [
    {
      title: "Production-readiness checklist",
      items: ["Source ownership exists.", "Access control is enforced before retrieval.", "Evaluation questions exist.", "Logs and traces are available.", "No-answer behavior is tested.", "A human escalation path exists."],
    },
  ],
  evaluation: [
    {
      title: "Evaluation layers",
      items: ["Retrieval: did the system find the right evidence?", "Grounding: is the answer supported?", "Citation: can users verify claims?", "Safety: does it refuse unsupported questions?", "Operations: is it fast, affordable, and monitored?"],
    },
  ],
  tutorials: [
    {
      title: "How to learn from tutorials",
      items: ["Run tutorials with a tiny corpus first.", "Write down every setting you change.", "Compare retrieval before and after each change.", "Save failed questions as future evaluation cases."],
    },
  ],
  useCases: [
    {
      title: "How to adapt use cases",
      items: ["Replace example questions with your real user questions.", "Map risks to your institution or business rules.", "Choose architecture only after understanding source authority.", "Define evaluation criteria before launch."],
    },
  ],
  comparisons: [
    {
      title: "How to read comparisons",
      items: ["Compare categories, not only brands.", "Separate ease of use from long-term maintainability.", "Check self-hosting and data-governance needs.", "Run a pilot on your corpus before choosing."],
    },
  ],
  glossary: [
    {
      title: "How to use terms correctly",
      items: ["Retrieval quality is not the same as answer quality.", "Grounding means source support, not guaranteed truth.", "Citations should point to verifiable evidence.", "Evaluation should combine metrics and expert review."],
    },
  ],
};

export const difyInstallGuide = [
  {
    title: "Option 1: Use Dify Cloud",
    body: "Best for quickly testing Dify without running infrastructure. Create an account, configure model providers, build an app, add a knowledge base, and pilot with a small document set.",
    steps: ["Open Dify Cloud", "Create a workspace", "Configure a model provider", "Create a chat app or workflow", "Create a knowledge base", "Upload test documents", "Test retrieval before publishing"],
    links: [{ title: "Dify Cloud", href: "https://cloud.dify.ai/" }, { title: "Dify documentation", href: "https://docs.dify.ai/" }],
  },
  {
    title: "Option 2: Self-host with Docker Compose",
    body: "Best for local evaluation or controlled environments. The official GitHub quick start says to install Docker and Docker Compose, enter the repository's docker directory, copy the environment file, and start services.",
    steps: ["Install Docker and Docker Compose", "Clone the official Dify repository", "Open the repository folder", "Run: cd docker", "Run: cp .env.example .env", "Run: docker compose up -d", "Open: http://localhost/install", "Complete initialization in the browser"],
    links: [{ title: "Dify GitHub repository", href: "https://github.com/langgenius/dify" }, { title: "Dify self-hosting docs", href: "https://docs.dify.ai/" }],
  },
  {
    title: "Option 3: Production deployment",
    body: "Best for teams that need reliability, backups, monitoring, and access control. Treat production as an infrastructure project, not just a demo install.",
    steps: ["Review official deployment docs", "Plan domain, TLS, backups, and storage", "Configure environment variables", "Connect model providers securely", "Set up monitoring and logs", "Test upgrades in staging first"],
    links: [{ title: "Dify documentation", href: "https://docs.dify.ai/" }, { title: "Dify GitHub releases", href: "https://github.com/langgenius/dify/releases" }],
  },
];

export const difyUsagePlaybook = [
  {
    title: "Build a knowledge-base chatbot",
    steps: ["Create a Chat App.", "Create a Knowledge Base.", "Upload a small authoritative document set.", "Check parsing and chunking.", "Use Test Retrieval to inspect retrieved chunks.", "Connect the knowledge base to the app.", "Ask known questions and check citations.", "Publish only after reviewing failed answers."],
  },
  {
    title: "Build a workflow app",
    steps: ["Create a Workflow or Chatflow.", "Define inputs.", "Add retrieval or knowledge-base nodes.", "Add model generation nodes.", "Add conditional logic for missing evidence.", "Test each node separately.", "Publish and monitor logs."],
  },
  {
    title: "Operate a Dify RAG app",
    steps: ["Review logs weekly.", "Collect user feedback.", "Update stale documents.", "Retest retrieval after each source update.", "Check model-provider cost and latency.", "Document app ownership and escalation rules."],
  },
];
