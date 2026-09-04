export type PreviewKind =
  | "tide"
  | "sunsun"
  | "prepper"
  | "racoben"
  | "ops"
  | "field"
  | "studio"
  | "finance"
  | "systems";

function TidePreview() {
  return (
    <div className="tide-preview">
      <div className="tide-preview-topline">
        <span>TIDE &amp; TIMBER</span>
        <span>EN&nbsp;&nbsp;|&nbsp;&nbsp;ES</span>
      </div>
      <div className="tide-preview-copy">
        <span>Field notes · Sound No. 04</span>
        <strong>Follow the quiet trail.</strong>
        <p>Listen where forest meets water.</p>
      </div>
      <div className="tide-preview-player">
        <span className="preview-play">▶</span>
        <span className="preview-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
        <span>00:40</span>
      </div>
    </div>
  );
}

function SunSunPreview() {
  return (
    <div className="sunsun-preview">
      <div className="sunsun-preview-head"><strong>SunSun</strong><span>Stories across languages</span></div>
      <div className="sunsun-preview-orbit"><i /><b>सूरज</b></div>
      <div className="sunsun-preview-grid"><span>English</span><span>Español</span><span>Français</span><span>தமிழ்</span></div>
    </div>
  );
}

function PrepperPreview() {
  return (
    <div className="prepper-preview">
      <div className="prepper-preview-nav"><strong>PREPPERGO</strong><span>MY PLAN</span></div>
      <div className="prepper-preview-title"><span>Household readiness</span><strong>72%</strong></div>
      <div className="prepper-progress"><i /></div>
      <div className="prepper-checks"><span><i>✓</i> Water &amp; food</span><span><i>✓</i> Documents</span><span><i>·</i> Communication plan</span></div>
    </div>
  );
}

function RacobenPreview() {
  return (
    <div className="racoben-preview">
      <div className="racoben-preview-bar"><span>R / ENGINEERING</span><span>LOCAL · PRIVATE</span></div>
      <div className="racoben-preview-flow"><span>Scope</span><i>→</i><span>Build</span><i>→</i><span>Verify</span></div>
      <div className="racoben-preview-code"><span>01</span><b>task.run(&#123;</b><em>controlled: true</em><b>&#125;)</b></div>
      <div className="racoben-preview-status"><i /> Ready for review</div>
    </div>
  );
}

function SystemsPreview({ kind }: { kind: PreviewKind }) {
  const labels: Record<string, [string, string, string]> = {
    ops: ["Uptime", "Services", "Deploys"],
    finance: ["Value", "Signals", "Risk"],
    field: ["Teams", "Jobs", "Routes"],
    studio: ["Pages", "Leads", "Launch"],
    systems: ["Status", "Jobs", "Latency"],
  };
  const values: Record<string, [string, string, string]> = {
    ops: ["99.98%", "42", "18"],
    finance: ["$2.48M", "12", "Low"],
    field: ["12", "18", "04"],
    studio: ["08", "31", "Ready"],
    systems: ["Healthy", "1,284", "42ms"],
  };
  const currentLabels = labels[kind] ?? labels.systems;
  const currentValues = values[kind] ?? values.systems;

  return (
    <div className="mini-window">
      <div className="mini-bar"><i className="mini-dot" /><i className="mini-dot" /><i className="mini-dot" /></div>
      <div className="mini-body">
        <div className="mini-side" />
        <div className="mini-content">
          <div className="mini-metrics">
            {currentLabels.map((label, index) => <div className="mini-metric" key={label}>{label}<br /><b>{currentValues[index]}</b></div>)}
          </div>
          <div className="mini-chart" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectPreview({ kind = "systems" }: { kind?: PreviewKind }) {
  return (
    <div className={`preview preview-${kind}`} aria-hidden="true">
      {kind === "tide" ? <TidePreview /> :
        kind === "sunsun" ? <SunSunPreview /> :
        kind === "prepper" ? <PrepperPreview /> :
        kind === "racoben" ? <RacobenPreview /> :
        <SystemsPreview kind={kind} />}
    </div>
  );
}
