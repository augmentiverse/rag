import type { Resource } from "./types";

export const resources: Resource[] = [
  { title: "Dify Documentation", type: "official docs", description: "Official documentation for Dify apps, workflows, knowledge bases, and deployment.", url: "https://docs.dify.ai/" },
  { title: "LangChain Documentation", type: "official docs", description: "Official docs for LangChain, LangGraph, retrieval, agents, and integrations.", url: "https://python.langchain.com/docs/" },
  { title: "LlamaIndex Documentation", type: "official docs", description: "Official docs for data connectors, indexes, retrievers, workflows, and evaluation.", url: "https://docs.llamaindex.ai/" },
  { title: "Haystack Documentation", type: "official docs", description: "Official docs for building component-based AI pipelines and RAG systems.", url: "https://docs.haystack.deepset.ai/" },
  { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", type: "research paper", description: "Foundational RAG paper by Lewis et al. introducing retrieval-augmented generation for knowledge-intensive tasks.", url: "https://arxiv.org/abs/2005.11401" },
  { title: "BEIR Benchmark", type: "benchmark", description: "Benchmark suite for information retrieval evaluation across diverse datasets.", url: "https://github.com/beir-cellar/beir" },
  { title: "MS MARCO", type: "dataset", description: "Large-scale dataset commonly used in passage retrieval research. Verify task fit before use.", url: "https://microsoft.github.io/msmarco/" },
  { title: "Ragas", type: "GitHub", description: "Open-source RAG evaluation framework repository.", url: "https://github.com/explodinggradients/ragas" },
  { title: "OpenAI Cookbook: Retrieval examples", type: "GitHub", description: "Examples for building retrieval workflows with OpenAI APIs. Verify current API details in official docs.", url: "https://github.com/openai/openai-cookbook" },
  { title: "Hugging Face Community", type: "community", description: "Community hub for models, datasets, spaces, and retrieval-related discussions.", url: "https://huggingface.co/" },
];
