"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/lab/")) return null;
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <span>© {new Date().getFullYear()} Joshua R. Uschock · Herndon, Virginia</span>
        <div className="footer-links">
          <a href="https://github.com/juschock" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://linkedin.com/in/joshuauschock" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
