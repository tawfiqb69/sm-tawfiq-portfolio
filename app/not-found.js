import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-shell">
      <p className="eyebrow"><span className="status-dot" /> WRONG TURN</p>
      <h1>404<span>.</span></h1>
      <h2>Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link className="button button-primary" href="/"><ArrowLeft size={17} /> Back to Home</Link>
    </main>
  );
}
