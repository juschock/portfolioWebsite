import type { Metadata } from "next";
import Link from "next/link";
import ProjectPreview, { type PreviewKind } from "../components/ProjectPreview";

export const metadata: Metadata = { title: "Work", description: "Selected software products, systems, dashboards, and web experiences by Joshua Uschock." };

type Project = {
  name: string;
  type: string;
  copy: string;
  tags: string[];
  href: string;
  link: string;
  preview: PreviewKind;
};

const products: Project[] = [
  { name:"Tide & Timber", type:"Interactive bilingual media concept", copy:"A cinematic English-and-Spanish editorial experience combining instant language switching, synchronized audio text, mobile-safe single-play video, responsive storytelling, and custom media controls.", tags:["Next.js","Bilingual UX","Timed audio","Responsive media"], href:"https://tide-and-timber-demo.juschock.chatgpt.site", link:"Experience the live build", preview:"tide" },
  { name:"SunSun", type:"Multilingual publishing platform", copy:"A bright multilingual content experience bringing English, Spanish, French, Hindi, Bengali, and Tamil into one expressive interface.", tags:["Next.js","TypeScript","Internationalization","Editorial UI"], href:"https://www.sunsun.ai", link:"Visit SunSun", preview:"sunsun" },
  { name:"PrepperGo", type:"Consumer SaaS platform", copy:"A preparedness platform bringing planning, inventories, resources, alerts, and subscriptions into one coherent product experience.", tags:["Next.js","Product engineering","Data modeling","Stripe"], href:"https://www.preppergo.com/", link:"Visit PrepperGo", preview:"prepper" },
  { name:"Racoben Local AI", type:"Local engineering system", copy:"A private, local-first engineering workspace for scoped application work, serialized inference, reviewable diffs, verification, approvals, and controlled commits.", tags:["Python","Local LLMs","Systems design","Developer tooling"], href:"https://github.com/juschock", link:"GitHub profile", preview:"racoben" },
  { name:"CauseBrief", type:"Productized service platform", copy:"A structured brief-to-deliverable workflow for small nonprofits and local campaigns, pairing a simple customer experience with a rigorous internal production system.", tags:["Next.js","Workflow design","Payments","Human QA"], href:"https://github.com/juschock/CauseBrief", link:"View repository", preview:"studio" },
  { name:"File Management Dashboard", type:"Administrative web application", copy:"A data-dense file operations interface exploring secure organization, search, metadata, and high-volume administrative workflows.", tags:["Next.js","Prisma","Dashboard UI","Data tables"], href:"https://github.com/juschock/file_management_dashbrd", link:"View repository", preview:"ops" },
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
              <ProjectPreview kind={project.preview} />
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
            <Link className="work-card" href="/lab/ops"><ProjectPreview kind="ops" /><div className="work-card-copy"><div className="eyebrow">SRE command center</div><h3>Northstar Operations</h3><p>Service health, deployments, incident signals, and operator actions in a compact responsive dashboard.</p><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/field"><ProjectPreview kind="field" /><div className="work-card-copy"><div className="eyebrow">Field service platform</div><h3>Field Atlas</h3><p>A map-led dispatch surface paired with a mobile technician workflow.</p><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/studio"><ProjectPreview kind="studio" /><div className="work-card-copy"><div className="eyebrow">Service business website</div><h3>Common Ground Studio</h3><p>An editorial, conversion-focused website with an entirely different composition and rhythm.</p><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/finance"><ProjectPreview kind="finance" /><div className="work-card-copy"><div className="eyebrow">Financial analytics</div><h3>Signal Ledger</h3><p>Portfolio monitoring with restrained data visualization and fast scenario switching.</p><span className="view-link">Open live concept →</span></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
