"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["Work", "/projects"], ["Experience", "/experience"], ["About", "/about"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/lab/")) return null;
  return (
    <header className="site-header">
      <nav className="site-shell nav-wrap" aria-label="Primary navigation">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          <span className="wordmark-mark">JU</span><span>Joshua Uschock</span>
        </Link>
        <button className="menu-button" aria-expanded={open} aria-controls="primary-navigation-links" aria-label={`${open ? "Close" : "Open"} navigation menu`} onClick={() => setOpen((current) => !current)}>{open ? "Close" : "Menu"}</button>
        <div className={"nav-links " + (open ? "open" : "")} id="primary-navigation-links">
          {links.map(([label, href]) => <Link className="nav-link" aria-current={pathname === href ? "page" : undefined} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="nav-link nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a conversation ↗</Link>
        </div>
      </nav>
    </header>
  );
}
