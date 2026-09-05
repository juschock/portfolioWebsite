"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const clauses = [
  { id: 1, section: "4.2", title: "Service availability", risk: "high", text: "Provider will maintain 99.99% monthly availability across all production services, excluding no scheduled maintenance windows.", issue: "Conflicts with Exhibit C, which allows four hours of scheduled maintenance per month." },
  { id: 2, section: "6.1", title: "Security notification", risk: "medium", text: "Provider shall notify Customer of a confirmed security incident without undue delay.", issue: "No objective notification deadline is defined." },
  { id: 3, section: "8.4", title: "Data return", risk: "low", text: "Customer data will be made available in a commonly readable format for thirty days following termination.", issue: "Aligned with the transition schedule and data-retention policy." },
  { id: 4, section: "11.3", title: "Liability cap", risk: "high", text: "Aggregate liability will not exceed fees paid during the preceding three-month period.", issue: "Cybersecurity indemnity is included in the general cap." },
  { id: 5, section: "13.2", title: "Automatic renewal", risk: "medium", text: "The agreement renews for successive one-year terms unless either party gives ninety days notice.", issue: "Notice window precedes the annual pricing review." },
];

export default function ContractExperience() {
  const [selected, setSelected] = useState(clauses[0].id);
  const [filter, setFilter] = useState("all");
  const [resolved, setResolved] = useState<number[]>([3]);
  const [compare, setCompare] = useState(false);
  const visible = useMemo(() => clauses.filter((clause) => filter === "all" || clause.risk === filter), [filter]);
  const clause = clauses.find((item) => item.id === selected) ?? clauses[0];

  return (
    <main className="contract-app">
      <header className="contract-header"><div><strong>CLAUSEMAP</strong><span>Contract intelligence workbench</span></div><div className="contract-search">⌕ Search obligations, terms, or sections</div><Link href="/projects">Portfolio ↗</Link></header>
      <div className="contract-filebar"><div><span>MASTER SERVICES AGREEMENT</span><strong>Northstar Analytics × Harbor Systems</strong></div><div><small>Last analyzed</small><strong>Today · 14:36</strong></div><button onClick={() => setCompare((value) => !value)}>{compare ? "Close comparison" : "Compare exhibits"}</button><button className="contract-export">Export review</button></div>
      <div className={`contract-layout ${compare ? "is-comparing" : ""}`}>
        <aside className="contract-nav">
          <div className="contract-summary"><span>Review status</span><strong>{resolved.length} / {clauses.length}</strong><small>issues resolved</small><i><b style={{width:`${resolved.length / clauses.length * 100}%`}} /></i></div>
          <div className="contract-filters"><span>Risk level</span>{["all","high","medium","low"].map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item === "all" ? "All findings" : `${item[0].toUpperCase()}${item.slice(1)} risk`}<small>{item === "all" ? clauses.length : clauses.filter((clauseItem) => clauseItem.risk === item).length}</small></button>)}</div>
          <div className="contract-sections"><span>Documents</span><button className="active">Master Services Agreement <small>32 pages</small></button><button>Exhibit A · Scope <small>12 pages</small></button><button>Exhibit C · SLA <small>8 pages</small></button></div>
        </aside>

        <section className="contract-document">
          <div className="contract-doc-head"><span>MASTER SERVICES AGREEMENT</span><small>Page 14 of 32</small></div>
          <article><p className="contract-recital">This Master Services Agreement is entered into as of September 1, 2026, by and between Northstar Analytics, Inc. and Harbor Systems, LLC.</p><h1>{clause.section} {clause.title}</h1><p>The parties agree that the services described herein will be governed by the operating requirements and commercial terms contained in this Agreement.</p><blockquote className={`risk-${clause.risk}`}><mark>{clause.text}</mark><button aria-label="Open finding">{clause.risk === "high" ? "!" : clause.risk === "medium" ? "△" : "✓"}</button></blockquote><p>All service-level calculations will be performed using the monitoring records maintained by Provider and made available to Customer upon reasonable request.</p><h2>{Number(clause.section) + .1} Measurement and reporting</h2><p>Provider will deliver a monthly service report identifying availability, incident response, material service degradation, and planned corrective actions.</p></article>
          {compare ? <div className="contract-compare"><div><span>EXHIBIT C · RELATED LANGUAGE</span><strong>Scheduled maintenance</strong></div><p>Up to four hours of scheduled maintenance per calendar month will be excluded from availability calculations when seven days&apos; notice is provided.</p><mark>Potential conflict with Section 4.2</mark></div> : null}
        </section>

        <aside className="contract-findings">
          <div className="finding-head"><span>Findings</span><small>{visible.length} shown</small></div>
          <div className="finding-list">{visible.map((item) => <button className={`${selected === item.id ? "active" : ""} ${resolved.includes(item.id) ? "resolved" : ""}`} onClick={() => setSelected(item.id)} key={item.id}><span className={`risk-dot ${item.risk}`} /><div><small>Section {item.section} · {item.risk} risk</small><strong>{item.title}</strong><p>{item.issue}</p></div></button>)}</div>
          <div className="finding-detail"><span className={`finding-badge ${clause.risk}`}>{clause.risk} risk</span><h2>{clause.issue}</h2><p>Review the cited language and related provision before accepting this obligation.</p><button onClick={() => setResolved((current) => current.includes(clause.id) ? current.filter((id) => id !== clause.id) : [...current, clause.id])}>{resolved.includes(clause.id) ? "Reopen finding" : "Mark resolved"}</button></div>
        </aside>
      </div>
      <footer className="demo-disclosure contract-disclosure">Interactive document-review prototype · Synthetic agreement and findings</footer>
    </main>
  );
}
