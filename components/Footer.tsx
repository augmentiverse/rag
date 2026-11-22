import Link from "next/link";

export function Footer() {
  return <footer className="rag-footer">
    <div className="rag-footer-inner">
      <div className="rag-footer-top">
        <div>
          <Link href="/" className="rag-footer-logo">AI<span>·</span>RAG</Link>
          <p className="rag-footer-description">A reference hub for knowledge retrieval and trustworthy artificial intelligence. Explore practical RAG learning, architectures, tools and evaluation methods.</p>
        </div>
        <div className="rag-footer-links">
          <div><h2>Explore</h2><Link href="/learn">Learn RAG</Link><Link href="/architectures">Architectures</Link><Link href="/tools">Tools directory</Link></div>
          <div><h2>Practice</h2><Link href="/dify">Dify</Link><Link href="/tutorials">Tutorials</Link><Link href="/evaluation">Evaluation</Link></div>
          <div><h2>Reference</h2><Link href="/resources">Resources</Link><Link href="/comparisons">Comparisons</Link><Link href="/editorial-principles">Editorial principles</Link></div>
        </div>
      </div>
      <div className="rag-footer-bottom"><span>© {new Date().getFullYear()} AI·RAG · Reference Hub</span><span>Grounded knowledge · Verifiable sources</span></div>
    </div>
  </footer>;
}
