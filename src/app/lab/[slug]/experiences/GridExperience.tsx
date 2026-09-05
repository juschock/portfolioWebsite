"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type EventKey = "clear" | "storm" | "demand" | "equipment";

const nodes = [
  { id: 1, name: "North Hydro", x: 12, y: 20, type: "source" }, { id: 2, name: "Arbor 230", x: 34, y: 16, type: "sub" },
  { id: 3, name: "West Junction", x: 24, y: 48, type: "sub" }, { id: 4, name: "Central Load", x: 51, y: 45, type: "load" },
  { id: 5, name: "East Solar", x: 79, y: 21, type: "source" }, { id: 6, name: "Ridge 115", x: 73, y: 52, type: "sub" },
  { id: 7, name: "South District", x: 43, y: 78, type: "load" }, { id: 8, name: "Harbor Load", x: 82, y: 78, type: "load" },
];
const edges = [[1,2],[1,3],[2,4],[3,4],[3,7],[4,6],[4,7],[5,6],[6,8],[7,8]];

export default function GridExperience() {
  const [event, setEvent] = useState<EventKey>("storm");
  const [isolated, setIsolated] = useState<number[]>([6]);
  const [selected, setSelected] = useState(6);
  const [restored, setRestored] = useState(71);

  const stats = useMemo(() => {
    const penalty = event === "storm" ? 18 : event === "demand" ? 9 : event === "equipment" ? 13 : 0;
    return { served: Math.min(100, restored - penalty + isolated.length * 2), frequency: (59.98 - penalty * .006).toFixed(2), reserve: Math.max(3, 24 - penalty), alerts: event === "clear" ? 1 : 3 + isolated.length };
  }, [event, isolated.length, restored]);

  const toggleIsolation = (id: number) => setIsolated((current) => current.includes(id) ? current.filter((node) => node !== id) : [...current, id]);

  return (
    <main className="grid-app">
      <header className="grid-header"><div><i /> <strong>GRIDLINE</strong><span>Resilience command</span></div><nav><button className="active">Network</button><button>Forecast</button><button>Restoration</button></nav><Link href="/projects">Portfolio ↗</Link></header>
      <section className="grid-status"><div><span>REGIONAL OPERATING STATE</span><h1>{event === "clear" ? "System stable" : "Constrained operations"}</h1></div><div className="grid-stat"><span>Load served</span><strong>{stats.served}%</strong></div><div className="grid-stat"><span>Frequency</span><strong>{stats.frequency} <small>Hz</small></strong></div><div className="grid-stat"><span>Reserve</span><strong>{stats.reserve}%</strong></div><div className="grid-stat"><span>Open alerts</span><strong>{stats.alerts}</strong></div></section>
      <div className="grid-layout">
        <aside className="grid-scenarios"><span className="grid-label">Stress scenario</span>{(["clear","storm","demand","equipment"] as EventKey[]).map((item) => <button className={event === item ? "active" : ""} onClick={() => setEvent(item)} key={item}><i className={item} /><div><strong>{item === "clear" ? "Blue-sky baseline" : item === "storm" ? "Severe storm" : item === "demand" ? "Demand surge" : "Equipment loss"}</strong><small>{item === "clear" ? "Normal topology" : item === "storm" ? "Wind + lightning" : item === "demand" ? "+22% regional load" : "Transformer T-14"}</small></div></button>)}<div className="grid-actions"><span className="grid-label">Operator actions</span><button onClick={() => setRestored((value) => Math.min(100, value + 8))}>Advance restoration +8%</button><button onClick={() => setIsolated([])}>Close cleared breakers</button></div></aside>

        <section className="grid-network">
          <div className="grid-network-toolbar"><div><strong>Mid-Atlantic control area</strong><span>230 kV / 115 kV topology</span></div><div><span><i className="source" /> Generation</span><span><i className="sub" /> Substation</span><span><i className="load" /> Load</span></div></div>
          <div className={`grid-canvas scenario-${event}`}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{edges.map(([a,b]) => { const start = nodes.find((node) => node.id === a)!; const end = nodes.find((node) => node.id === b)!; const offline = isolated.includes(a) || isolated.includes(b); return <line key={`${a}-${b}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} className={offline ? "offline" : "online"} />; })}</svg>
            {nodes.map((node) => <button key={node.id} onClick={() => setSelected(node.id)} className={`grid-node ${node.type} ${isolated.includes(node.id) ? "isolated" : ""} ${selected === node.id ? "selected" : ""}`} style={{left:`${node.x}%`,top:`${node.y}%`}}><i /><span>{node.name}</span><small>{isolated.includes(node.id) ? "ISOLATED" : node.type === "source" ? `${82 + node.id * 7} MW` : `${34 + node.id * 4} MW`}</small></button>)}
            {event === "storm" ? <div className="storm-band"><span>STORM FRONT</span></div> : null}
          </div>
        </section>

        <aside className="grid-inspector"><span className="grid-label">Asset detail</span><h2>{nodes.find((node) => node.id === selected)?.name}</h2><p>Asset {selected.toString().padStart(3,"0")} · Remote switching enabled</p><dl><div><dt>State</dt><dd>{isolated.includes(selected) ? "Isolated" : "Energized"}</dd></div><div><dt>Load</dt><dd>{42 + selected * 4} MW</dd></div><div><dt>Voltage</dt><dd>{selected % 2 ? "230" : "115"} kV</dd></div><div><dt>Risk</dt><dd>{event === "clear" ? "Low" : "Elevated"}</dd></div></dl><button className="grid-primary" onClick={() => toggleIsolation(selected)}>{isolated.includes(selected) ? "Return to service" : "Isolate asset"}</button><div className="grid-log"><span className="grid-label">Decision log</span><p><time>14:32</time> Crew 12 dispatched to Ridge 115</p><p><time>14:26</time> Harbor feeder transferred</p><p><time>14:18</time> Storm threshold exceeded</p></div></aside>
      </div>
      <footer className="demo-disclosure grid-disclosure">Interactive resilience simulation · Synthetic infrastructure data</footer>
    </main>
  );
}
