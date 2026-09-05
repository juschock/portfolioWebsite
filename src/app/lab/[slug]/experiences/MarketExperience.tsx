"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const symbols = {
  NVDA: { base: 178.42, drift: 0.34, volume: "42.8M" },
  MSFT: { base: 512.08, drift: 0.16, volume: "18.1M" },
  AMZN: { base: 236.74, drift: -0.11, volume: "31.6M" },
  TSLA: { base: 347.26, drift: 0.51, volume: "89.4M" },
};

type SymbolKey = keyof typeof symbols;

function seedSeries(base: number) {
  return Array.from({ length: 54 }, (_, index) => base + Math.sin(index / 5) * 2.1 + Math.cos(index / 2.8) * 0.7 + index * 0.055);
}

export default function MarketExperience() {
  const [symbol, setSymbol] = useState<SymbolKey>("NVDA");
  const [running, setRunning] = useState(true);
  const [tick, setTick] = useState(0);
  const config = symbols[symbol];
  const series = useMemo(() => seedSeries(config.base).map((value, index) => value + Math.sin((tick + index) * 0.37) * 0.22), [config.base, tick]);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setTick((current) => current + 1), 900);
    return () => window.clearInterval(timer);
  }, [running]);

  const min = Math.min(...series);
  const max = Math.max(...series);
  const points = series.map((value, index) => `${(index / (series.length - 1)) * 100},${92 - ((value - min) / (max - min)) * 78}`).join(" ");
  const price = series.at(-1) ?? config.base;
  const change = ((price - series[0]) / series[0]) * 100;

  return (
    <main className="market-app">
      <header className="market-topbar">
        <div><strong>VECTOR<span>ALPHA</span></strong><small>Market intelligence</small></div>
        <div className="market-clock"><i className={running ? "live" : ""} /> {running ? "MARKET REPLAY LIVE" : "REPLAY PAUSED"}</div>
        <Link href="/projects">Portfolio ↗</Link>
      </header>

      <section className="market-tape" aria-label="Market watchlist">
        {(Object.keys(symbols) as SymbolKey[]).map((item, index) => (
          <button className={symbol === item ? "active" : ""} onClick={() => setSymbol(item)} key={item}>
            <span>{item}</span><strong>${(symbols[item].base + Math.sin(tick * 0.2 + index) * 0.6).toFixed(2)}</strong><em>{index === 2 ? "−0.42%" : `+${(0.38 + index * 0.27).toFixed(2)}%`}</em>
          </button>
        ))}
      </section>

      <div className="market-layout">
        <section className="market-primary">
          <div className="market-title-row">
            <div><span>NASDAQ · USD</span><h1>{symbol}</h1></div>
            <div className="market-price"><strong>${price.toFixed(2)}</strong><span className={change >= 0 ? "positive" : "negative"}>{change >= 0 ? "+" : ""}{change.toFixed(2)}%</span></div>
          </div>
          <div className="market-chart">
            <div className="market-chart-grid" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={`${symbol} simulated intraday price chart`}>
              <defs><linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#48e0b5" stopOpacity=".28" /><stop offset="1" stopColor="#48e0b5" stopOpacity="0" /></linearGradient></defs>
              <polygon points={`0,100 ${points} 100,100`} fill="url(#marketFill)" />
              <polyline points={points} fill="none" stroke="#48e0b5" strokeWidth="1.15" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="market-last" style={{ top: `${92 - ((price - min) / (max - min)) * 78}%` }}>${price.toFixed(2)}</span>
          </div>
          <div className="market-controls"><button onClick={() => setRunning((value) => !value)}>{running ? "Pause replay" : "Resume replay"}</button><span>09:30</span><span>11:00</span><span>13:00</span><span>15:00</span><span>16:00</span></div>
        </section>

        <aside className="market-sidebar">
          <section><div className="market-panel-head"><h2>Signal matrix</h2><span>Now</span></div><div className="signal-list"><div><span>Momentum</span><strong className="positive">Bullish</strong></div><div><span>Volume anomaly</span><strong>1.8×</strong></div><div><span>30-day correlation</span><strong>0.74 SPY</strong></div><div><span>Session volume</span><strong>{config.volume}</strong></div></div></section>
          <section><div className="market-panel-head"><h2>Order book</h2><span>Level II</span></div><div className="book-head"><span>Bid</span><span>Size</span><span>Ask</span></div>{[1,2,3,4,5].map((row) => <div className="book-row" key={row}><span>${(price - row * .04).toFixed(2)}</span><i style={{width:`${78-row*9}%`}} /><small>{(1200 + row * 417).toLocaleString()}</small><span>${(price + row * .05).toFixed(2)}</span></div>)}</section>
          <section><div className="market-panel-head"><h2>Event radar</h2><span>3 signals</span></div><div className="market-event"><time>14:08</time><p><strong>Volume acceleration</strong><br />Buy-side flow exceeds 20-day baseline.</p></div><div className="market-event"><time>13:42</time><p><strong>Sector divergence</strong><br />Semiconductors outperform broad technology.</p></div></section>
        </aside>
      </div>
      <footer className="demo-disclosure">Interactive portfolio demonstration · Deterministic market replay · Not investment advice</footer>
    </main>
  );
}
