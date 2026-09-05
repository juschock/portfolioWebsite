"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const districts = ["North Commons", "River Ward", "Midtown", "East Junction"];
const parcels = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  district: districts[index % districts.length],
  type: (["housing", "commercial", "civic", "green"] as const)[(index * 7) % 4],
}));

export default function CivicExperience() {
  const [district, setDistrict] = useState(districts[0]);
  const [density, setDensity] = useState(58);
  const [transit, setTransit] = useState(64);
  const [green, setGreen] = useState(32);
  const [changed, setChanged] = useState<number[]>([]);

  const metrics = useMemo(() => ({
    homes: Math.round(1180 + density * 47 + changed.length * 84),
    trips: Math.round(18 + transit * .51 - density * .08),
    revenue: (21.4 + density * .18 + transit * .07).toFixed(1),
    canopy: Math.round(13 + green * .34),
  }), [density, transit, green, changed.length]);

  function toggleParcel(id: number) {
    setChanged((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
  }

  return (
    <main className="civic-app">
      <header className="civic-header"><div><strong>CIVICFORGE</strong><span>Planning Decision Lab</span></div><nav><button className="active">Scenario</button><button>Evidence</button><button>Compare</button></nav><Link href="/projects">Joshua’s portfolio ↗</Link></header>
      <div className="civic-command"><div><span>Scenario 07</span><h1>Connected neighborhoods</h1></div><div className="civic-score"><small>Composite score</small><strong>{Math.round((density + transit + green) / 3)}</strong><span>/ 100</span></div><button onClick={() => { setDensity(58); setTransit(64); setGreen(32); setChanged([]); }}>Reset scenario</button></div>

      <div className="civic-layout">
        <aside className="civic-controls">
          <div className="civic-control-head"><span>Decision inputs</span><small>Updates instantly</small></div>
          <label>Housing capacity <output>{density}%</output><input type="range" min="20" max="95" value={density} onChange={(event) => setDensity(Number(event.target.value))} /></label>
          <label>Transit investment <output>{transit}%</output><input type="range" min="10" max="95" value={transit} onChange={(event) => setTransit(Number(event.target.value))} /></label>
          <label>Green-space target <output>{green}%</output><input type="range" min="10" max="70" value={green} onChange={(event) => setGreen(Number(event.target.value))} /></label>
          <div className="civic-districts"><span>Focus district</span>{districts.map((item) => <button className={district === item ? "active" : ""} key={item} onClick={() => setDistrict(item)}>{item}<small>{parcels.filter((parcel) => parcel.district === item).length} parcels</small></button>)}</div>
          <div className="civic-legend"><span><i className="housing" /> Housing</span><span><i className="commercial" /> Commerce</span><span><i className="civic" /> Civic</span><span><i className="green" /> Green</span></div>
        </aside>

        <section className="civic-map-panel">
          <div className="civic-map-toolbar"><div><strong>{district}</strong><span>2040 scenario · Click parcels to test rezoning</span></div><div><button className="active">Land use</button><button>Transit</button><button>Equity</button></div></div>
          <div className="civic-map" aria-label="Interactive conceptual parcel map">
            <div className="civic-river" />
            <div className="civic-road road-one" /><div className="civic-road road-two" />
            {parcels.map((parcel) => <button aria-label={`Toggle parcel ${parcel.id + 1}`} key={parcel.id} onClick={() => toggleParcel(parcel.id)} className={`parcel ${changed.includes(parcel.id) ? "changed" : parcel.type}`} style={{ opacity: parcel.district === district ? 1 : .47 }}><span>{changed.includes(parcel.id) ? "+" : ""}</span></button>)}
            <div className="transit-line"><i /><i /><i /><i /></div>
          </div>
        </section>

        <aside className="civic-results">
          <div className="civic-control-head"><span>Projected outcomes</span><small>Year 2040</small></div>
          <div className="civic-metric"><span>New homes</span><strong>{metrics.homes.toLocaleString()}</strong><small>+{Math.round(density * 1.6)}% capacity</small></div>
          <div className="civic-metric"><span>Car trips reduced</span><strong>{metrics.trips}%</strong><small>Weekday average</small></div>
          <div className="civic-metric"><span>Annual tax base</span><strong>${metrics.revenue}M</strong><small>Net new revenue</small></div>
          <div className="civic-metric"><span>Tree canopy</span><strong>{metrics.canopy}%</strong><small>Target coverage</small></div>
          <div className="civic-tradeoffs"><h2>Tradeoffs to review</h2><p><span>Housing affordability</span><strong className="good">Improves</strong></p><p><span>Infrastructure load</span><strong>Moderate</strong></p><p><span>Displacement risk</span><strong className={density > 72 ? "warn" : "good"}>{density > 72 ? "Elevated" : "Contained"}</strong></p></div>
        </aside>
      </div>
      <footer className="demo-disclosure civic-disclosure">Interactive planning prototype · Synthetic scenario data</footer>
    </main>
  );
}
