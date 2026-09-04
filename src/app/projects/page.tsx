import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Work", description: "Selected software products, systems, dashboards, and web experiences by Joshua Uschock." };

function Preview({ tone = "" }: { tone?: string }) {
  return <div className={"preview " + tone} aria-hidden="true"><div className="mini-window"><div className="mini-bar"><i className="mini-dot" /><i className="mini-dot" /><i className="mini-dot" /></div><div className="mini-body"><div className="mini-side" /><div className="mini-content"><div className="mini-metrics"><div className="mini-metric">Status<br /><b>Healthy</b></div><div className="mini-metric">Jobs<br /><b>1,284</b></div><div className="mini-metric">Latency<br /><b>42ms</b></div></div><div className="mini-chart" /></div></div></div></div>;
}

const products = [
  { name:"Racoben Local AI", type:"Local engineering system", copy:"A private, local-first engineering workspace for scoped application work, serialized inference, reviewable diffs, verification, approvals, and controlled commits.", tags:["Python","Local LLMs","Systems design","Developer tooling"], href:"https://github.com/juschock", link:"GitHub profile", tone:"preview-blue" },
  { name:"PrepperGo", type:"Consumer SaaS platform", copy:"A preparedness platform bringing planning, inventories, resources, alerts, and subscriptions into one coherent product experience.", tags:["Next.js","Product engineering","Data modeling","Stripe"], href:"https://www.preppergo.com/", link:"Visit product", tone:"preview-sand" },
  { name:"CauseBrief", type:"Productized service platform", copy:"A structured brief-to-deliverable workflow for small nonprofits and local campaigns, pairing a simple customer experience with a rigorous internal production system.", tags:["Next.js","Workflow design","Payments","Human QA"], href:"https://github.com/juschock/CauseBrief", link:"View repository", tone:"preview-red" },
  { name:"ShipCheck", type:"Deterministic developer toolkit", copy:"A collection of focused checkers, calculators, and generators for software teams, built as static, dependable tools with machine-readable output parity.", tags:["Next.js","Static tools","Developer UX","JSON"], href:"https://github.com/juschock/racoben", link:"View ecosystem", tone:"" },
  { name:"File Management Dashboard", type:"Administrative web application", copy:"A data-dense file operations interface exploring secure organization, search, metadata, and high-volume administrative workflows.", tags:["Next.js","Prisma","Dashboard UI","Data tables"], href:"https://github.com/juschock/file_management_dashbrd", link:"View repository", tone:"preview-blue" },
  { name:"Watch Inventory Platform", type:"Inventory product", copy:"A purpose-built management surface for organizing watch collections, inventory records, and product details.", tags:["React","Node.js","Product UI","Inventory"], href:"https://github.com/juschock/watch_inventory_mngmnt_platform", link:"View repository", tone:"preview-sand" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="site-shell page-hero">
        <div className="page-hero-grid">
          <div><div className="eyebrow">Selected work · 2011—2026</div><h1 className="page-title">A body of work,<br />not a template gallery.</h1></div>
          <p className="lead">Production systems, SaaS products, internal tools, infrastructure programs, and interface experiments from a career spent building across the stack.</p>
        </div>
      </section>

      <section className="site-shell section section-rule" id="products">
        <div className="section-head"><div><div className="eyebrow">Products & platforms</div><h2 className="section-title">Shipped and<br />operational work.</h2></div><p className="lead">Representative products from independent engineering work. Some repositories remain private because the systems or client context are not public.</p></div>
        <div className="project-list">
          {products.map((project) => (
            <article className="project-row" key={project.name}>
              <Preview tone={project.tone} />
              <div className="project-copy">
                <div><div className="eyebrow">{project.type}</div><h2>{project.name}</h2><p>{project.copy}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
                <div className="project-links"><a href={project.href} target="_blank" rel="noreferrer">{project.link} ↗</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-shell">
          <div className="section-head"><div><div className="eyebrow">Interface lab</div><h2 className="section-title">Range you can<br />actually open.</h2></div><p className="lead">Purpose-built concepts showing how different product categories demand different information architecture, interaction density, and visual language.</p></div>
          <div className="work-grid">
            <Link className="work-card" href="/lab/ops"><Preview tone="preview-red" /><div className="work-card-copy"><div className="eyebrow">SRE command center</div><h3>Northstar Operations</h3><p>Service health, deployments, incident signals, and operator actions in a compact responsive dashboard.</p><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/field"><Preview tone="preview-sand" /><div className="work-card-copy"><div className="eyebrow">Field service platform</div><h3>Field Atlas</h3><p>A map-led dispatch surface paired with a mobile technician workflow.</p><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/studio"><Preview tone="preview-blue" /><div className="work-card-copy"><div className="eyebrow">Service business website</div><h3>Common Ground Studio</h3><p>An editorial, conversion-focused website with an entirely different composition and rhythm.</p><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/finance"><Preview /><div className="work-card-copy"><div className="eyebrow">Financial analytics</div><h3>Signal Ledger</h3><p>Portfolio monitoring with restrained data visualization and fast scenario switching.</p><span className="view-link">Open live concept →</span></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
