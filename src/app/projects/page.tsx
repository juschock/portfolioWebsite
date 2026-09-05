import type { Metadata } from "next";
import Link from "next/link";
import ProjectPreview, { type PreviewKind } from "../components/ProjectPreview";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software products, platforms, dashboards, and interactive web experiences by Joshua Uschock.",
};

type Project = {
  name: string;
  type: string;
  status: string;
  role: string;
  contribution: string;
  copy: string;
  proof: string;
  tags: string[];
  href: string;
  link: string;
  preview?: PreviewKind;
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
};

const products: Project[] = [
  {
    name: "PrepperGo",
    type: "Consumer SaaS",
    status: "Live product",
    role: "Product & engineering lead",
    contribution: "Product architecture, data modeling, interface system, subscriptions, and deployment.",
    copy: "A household-readiness platform that turns supply lists into useful answers: food and water runway, attention items, expirations, and clear next actions.",
    proof: "199 unit tests · 260+ browser checks · PostgreSQL and RLS-backed",
    tags: ["Next.js", "Product engineering", "Data modeling", "Stripe"],
    href: "https://www.preppergo.com/",
    link: "Visit PrepperGo",
    imageSrc: "/projects/preppergo-dashboard.jpg",
    imageAlt: "The live PrepperGo dashboard showing household readiness tools",
    objectPosition: "center top",
  },
  {
    name: "Tide & Timber",
    type: "Bilingual media experience",
    status: "Interactive build",
    role: "Designer & front-end engineer",
    contribution: "Instant EN/ES switching, timestamped audio text, custom media controls, and mobile-safe playback behavior.",
    copy: "A cinematic English-and-Spanish editorial experience built to demonstrate the exact media interactions required by a bilingual book-and-music platform.",
    proof: "2 languages · 40-second timed sequence · single-play media state",
    tags: ["Next.js", "Bilingual UX", "Timed audio", "Responsive media"],
    href: "https://tide-and-timber-demo.juschock.chatgpt.site",
    link: "Experience the live build",
    preview: "tide",
  },
  {
    name: "SunSun",
    type: "Multilingual publishing",
    status: "Live platform",
    role: "Full-stack engineer",
    contribution: "Responsive publishing system, multilingual content architecture, and editorial interface design.",
    copy: "A multilingual content experience bringing English, Spanish, French, Hindi, Bengali, and Tamil into one expressive product.",
    proof: "6 languages · responsive editorial system",
    tags: ["Next.js", "TypeScript", "Internationalization", "Editorial UI"],
    href: "https://www.sunsun.ai",
    link: "Visit SunSun",
    preview: "sunsun",
  },
  {
    name: "Racoben Local AI",
    type: "Private engineering system",
    status: "Active development",
    role: "Creator & systems engineer",
    contribution: "Controlled agent workflows, serialized inference, reviewable diffs, verification gates, and local execution.",
    copy: "A local-first engineering workspace for scoped application work where every change remains inspectable, verifiable, and under operator control.",
    proof: "Local-first · controlled execution · reviewable diffs",
    tags: ["Python", "Local LLMs", "Systems design", "Developer tooling"],
    href: "https://github.com/juschock",
    link: "GitHub profile",
    preview: "racoben",
  },
  {
    name: "CauseBrief",
    type: "Service workflow platform",
    status: "Product system",
    role: "Product architect & engineer",
    contribution: "Brief intake, deterministic production workflow, payments, and human quality control.",
    copy: "A structured brief-to-deliverable workflow for small nonprofits and local campaigns, pairing a simple customer surface with rigorous production controls.",
    proof: "Deterministic workflow · human quality gate",
    tags: ["Next.js", "Workflow design", "Payments", "Human QA"],
    href: "https://github.com/juschock/CauseBrief",
    link: "View repository",
    preview: "studio",
  },
  {
    name: "File Management Dashboard",
    type: "Administrative application",
    status: "Open source",
    role: "Full-stack engineer",
    contribution: "Secure organization, search, metadata, and high-volume administrative workflows.",
    copy: "A data-dense file operations interface designed around fast retrieval, legible metadata, and practical administration.",
    proof: "Searchable metadata · high-volume administration",
    tags: ["Next.js", "Prisma", "Dashboard UI", "Data tables"],
    href: "https://github.com/juschock/file_management_dashbrd",
    link: "View repository",
    preview: "ops",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="site-shell page-hero">
        <div className="page-kicker-row"><span>Selected work · 2011—2026</span><span>Products · Platforms · Experiments</span></div>
        <div className="page-hero-grid">
          <h1 className="page-title">A career spent making complex systems usable.</h1>
          <p className="lead">Production products, cloud platforms, internal tools, infrastructure programs, and interface experiments—designed and engineered across the stack.</p>
        </div>
      </section>

      <section className="site-shell section project-index" id="products">
        <header className="index-heading">
          <div><div className="eyebrow">Products &amp; platforms</div><h2>Selected builds</h2></div>
          <p>A closer look at how product decisions, technical architecture, and interface design come together across the work.</p>
        </header>

        <div className="project-list">
          {products.map((project, index) => (
            <article className="project-row" key={project.name}>
              <div className="project-row-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-media">
                <ProjectPreview
                  kind={project.preview}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  objectPosition={project.objectPosition}
                />
              </div>
              <div className="project-copy">
                <div>
                  <div className="project-heading-row"><span className="project-status">{project.status}</span><span>{project.type}</span></div>
                  <h2>{project.name}</h2>
                  <p className="project-summary">{project.copy}</p>
                  <p className="project-proofline">{project.proof}</p>
                  <dl className="project-detail-list">
                    <div><dt>Role</dt><dd>{project.role}</dd></div>
                    <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
                  </dl>
                  <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-links"><a href={project.href} target="_blank" rel="noreferrer">{project.link} <span aria-hidden="true">↗</span></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-subtle">
        <div className="site-shell">
          <header className="index-heading">
            <div><div className="eyebrow">Interactive systems lab</div><h2>Five new technical experiences</h2></div>
            <p>Working demonstrations of real-time data, geospatial decisions, 3D simulation, infrastructure resilience, and document intelligence.</p>
          </header>
          <div className="work-grid">
            <Link className="work-card work-card-feature" href="/lab/mars"><ProjectPreview kind="mars" /><div className="work-card-copy"><div className="eyebrow">Browser-based 3D simulation · Playable</div><h3>Ares Traverse</h3><p>Drive a rover across a procedural Martian surface with real vehicle movement, terrain response, follow-camera behavior, mission waypoints, and live telemetry.</p><span className="view-link">Drive the rover <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/markets"><ProjectPreview kind="markets" /><div className="work-card-copy"><div className="eyebrow">Streaming market intelligence · Interactive</div><h3>VectorAlpha</h3><p>A deterministic live-market replay with symbol switching, animated time-series data, order-book depth, and decision signals.</p><span className="view-link">Open market terminal <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/civic"><ProjectPreview kind="civic" /><div className="work-card-copy"><div className="eyebrow">Urban decision support · Interactive</div><h3>CivicForge</h3><p>Test housing, transit, green-space, and parcel-level zoning decisions while projected outcomes update immediately.</p><span className="view-link">Plan a scenario <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/grid"><ProjectPreview kind="grid" /><div className="work-card-copy"><div className="eyebrow">Critical infrastructure · Simulation</div><h3>Gridline</h3><p>Stress a regional power network, isolate assets, and sequence restoration while service and reserve metrics respond.</p><span className="view-link">Operate the grid <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/contracts"><ProjectPreview kind="contracts" /><div className="work-card-copy"><div className="eyebrow">Document intelligence · Workbench</div><h3>ClauseMap</h3><p>Trace contract risks to exact language, compare related provisions, filter findings, and resolve a review.</p><span className="view-link">Review an agreement <span aria-hidden="true">→</span></span></div></Link>
          </div>

          <header className="index-heading archive-heading">
            <div><div className="eyebrow">Earlier explorations</div><h2>Additional interface range</h2></div>
            <p>Focused concepts spanning operations, field service, financial analytics, and conversion-led web design.</p>
          </header>
          <div className="work-grid">
            <Link className="work-card" href="/lab/ops"><ProjectPreview kind="ops" /><div className="work-card-copy"><div className="eyebrow">SRE command center · Concept</div><h3>Northstar Operations</h3><p>Service health, deployments, incident signals, and operator actions in a compact responsive dashboard.</p><span className="view-link">Open concept <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/field"><ProjectPreview kind="field" /><div className="work-card-copy"><div className="eyebrow">Field service platform · Concept</div><h3>Field Atlas</h3><p>A map-led dispatch surface paired with a mobile technician workflow.</p><span className="view-link">Open concept <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/studio"><ProjectPreview kind="studio" /><div className="work-card-copy"><div className="eyebrow">Service website · Concept</div><h3>Common Ground Studio</h3><p>An editorial, conversion-focused website with an intentionally different rhythm.</p><span className="view-link">Open concept <span aria-hidden="true">→</span></span></div></Link>
            <Link className="work-card" href="/lab/finance"><ProjectPreview kind="finance" /><div className="work-card-copy"><div className="eyebrow">Financial analytics · Concept</div><h3>Signal Ledger</h3><p>Portfolio monitoring with restrained data visualization and fast scenario switching.</p><span className="view-link">Open concept <span aria-hidden="true">→</span></span></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
