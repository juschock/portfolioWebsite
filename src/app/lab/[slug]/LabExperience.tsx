"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const loading = () => <div className="lab-loading">Loading interactive experience…</div>;
const MarketExperience = dynamic(() => import("./experiences/MarketExperience"), { loading });
const CivicExperience = dynamic(() => import("./experiences/CivicExperience"), { loading });
const MarsExperience = dynamic(() => import("./experiences/MarsExperience"), { loading, ssr: false });
const GridExperience = dynamic(() => import("./experiences/GridExperience"), { loading });
const ContractExperience = dynamic(() => import("./experiences/ContractExperience"), { loading });

export type LabKind = "ops" | "finance" | "field" | "studio" | "markets" | "civic" | "mars" | "grid" | "contracts";

const configs = {
  ops: {
    brand: "NORTHSTAR / OPS", eyebrow: "Production overview", title: "All systems", subtitle: "Live service health across the platform",
    metrics: [["Availability","99.98%"],["Active services","42"],["Deployments","18"],["Open incidents","2"]],
    bars: [38,54,47,70,62,82,69,91,74,66,85,78], chart: "Requests by hour",
    events: ["api-gateway deployed to production","Search latency returned to baseline","Worker pool scaled to 24 nodes","Certificate rotation completed"],
  },
  finance: {
    brand: "SIGNAL / LEDGER", eyebrow: "Portfolio intelligence", title: "Market position", subtitle: "A clear view across accounts and scenarios",
    metrics: [["Net value","$2.48M"],["Daily change","+$18.4K"],["Cash position","14.2%"],["Risk score","Moderate"]],
    bars: [42,47,44,59,55,63,68,61,76,71,88,93], chart: "Portfolio value · 12 months",
    events: ["Allocation drift detected in Growth","Quarterly contribution posted","Treasury yield threshold reached","Tax reserve moved to target"],
  },
};

function Topbar({ brand }: { brand: string }) {
  return <header className="lab-topbar"><span className="lab-brand">{brand}</span><Link className="lab-back" href="/projects">← Back to Joshua’s portfolio</Link></header>;
}

function Dashboard({ kind }: { kind: "ops" | "finance" }) {
  const config = configs[kind];
  const [view, setView] = useState("Overview");
  return (
    <div className="lab-shell">
      <Topbar brand={config.brand} />
      <div className="dashboard">
        <aside className="dash-sidebar"><div className="eyebrow">{kind === "ops" ? "Workspace / Core" : "Household / Primary"}</div><nav className="dash-nav">{["Overview","Activity","Reports","Automations","Settings"].map(item => <button key={item} className={view === item ? "active" : ""} onClick={() => setView(item)}>{item}</button>)}</nav></aside>
        <main className="dash-main">
          <div className="dash-head"><div><div className="eyebrow">{config.eyebrow} · {view}</div><h1>{config.title}</h1><p>{config.subtitle}</p></div><div className="dash-actions"><button onClick={() => setView("Reports")}>Export</button><button onClick={() => setView("Activity")}>View activity</button></div></div>
          <div className="metric-grid">{config.metrics.map(([label,value]) => <div className="metric-card" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
          <div className="dash-grid">
            <section className="dash-panel"><h2>{config.chart}</h2><div className="bar-chart">{config.bars.map((h,i) => <i className="bar" key={i} style={{height:h+"%"}} />)}</div></section>
            <section className="dash-panel"><h2>Recent signals</h2><div className="event-list">{config.events.map((event,i) => <div className="event" key={event}><i style={{background:i === 1 ? "#ee5f36" : undefined}} /><p><strong>{event}</strong><br />{i+2} minutes ago</p></div>)}</div></section>
          </div>
        </main>
      </div>
    </div>
  );
}

function Field() {
  const [selected, setSelected] = useState(0);
  const tasks = [["HVAC inspection","8:30 AM · Reston"],["Panel replacement","11:15 AM · Vienna"],["Final walkthrough","2:40 PM · Arlington"]];
  return <div className="lab-shell"><Topbar brand="FIELD / ATLAS" /><div className="field-demo"><div className="field-layout"><div className="field-map"><div className="field-map-label">12 technicians · 18 jobs today</div></div><div className="phone"><div className="phone-screen"><div className="eyebrow">Friday · Route 04</div><h1>Good morning, Alex.</h1><p className="muted">Three jobs assigned · 42 miles</p>{tasks.map((task,i) => <button onClick={() => setSelected(i)} className="task-card" key={task[0]} style={{width:"100%",textAlign:"left",borderColor:selected === i ? "#ee5f36" : undefined}}><strong>{i+1}. {task[0]}</strong><span>{task[1]}</span></button>)}<button className="button button-primary" style={{width:"100%",marginTop:20}}>Start route →</button></div></div></div></div></div>;
}

function Studio() {
  return <div className="lab-shell"><Topbar brand="COMMON / GROUND" /><div className="site-demo"><nav className="site-demo-nav"><strong>Common Ground Studio</strong><div className="site-demo-links"><span>Work</span><span>Process</span><span>Studio</span><span>Contact</span></div></nav><div className="site-demo-hero"><div><div className="eyebrow">Brand, web & environments</div><h1>Make your place<br /><em>mean something.</em></h1><p>We shape identities and digital spaces for organizations doing grounded, human work. Strategy first. Distinctive design. Nothing added without a reason.</p><div className="button-row"><button className="button button-primary">See selected work →</button><button className="button button-secondary">Our approach</button></div></div><div className="site-demo-card"><span className="eyebrow" style={{color:"#f4c970"}}>Project 07 · Public space</span><span className="number">7:14</span><h2>A neighborhood identity built around the hour the street comes alive.</h2></div></div></div></div>;
}

export default function LabExperience({ kind }: { kind: LabKind }) {
  if (kind === "markets") return <MarketExperience />;
  if (kind === "civic") return <CivicExperience />;
  if (kind === "mars") return <MarsExperience />;
  if (kind === "grid") return <GridExperience />;
  if (kind === "contracts") return <ContractExperience />;
  if (kind === "ops" || kind === "finance") return <Dashboard kind={kind} />;
  if (kind === "field") return <Field />;
  return <Studio />;
}
