import Link from "next/link";
import ProjectPreview from "./components/ProjectPreview";

const careers = [
  ["2025—Now", "Field / SRE Engineer", "Government technology program", "Operating across AWS, Kubernetes, on-prem infrastructure, networking, automation, and production reliability."],
  ["2023—2024", "Founder & Principal Engineer", "LoneCypressAI", "Led product engineering, client delivery, systems design, development, deployment, and applied AI programs."],
  ["2023", "Senior DevOps / Network Engineer", "Accenture Federal Services · Oracle", "Built Kubernetes delivery systems and cloud-native network automation across secure environments."],
  ["2022—2023", "Lead DevOps Engineer", "Booz Allen Hamilton", "Automated container platforms, CI/CD, GitOps, and data engineering workflows."],
  ["2019—2022", "Systems Development Engineer", "Amazon Web Services", "Built and operated secure, highly available systems for Amazon S3 in specialized AWS regions."],
];

export default function Home() {
  return (
    <>
      <section className="site-shell hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">U.S.-based engineer · product builder · systems operator</div>
            <h1 className="display hero-title">Sharp interfaces.<br /><span>Serious engineering.</span></h1>
          </div>
          <aside className="hero-aside">
            <div className="availability"><i className="availability-dot" /> Select engagements · Northern Virginia / remote</div>
            <p className="lead">I design and build digital products that pair a strong visual point of view with dependable engineering—from media-rich websites to cloud platforms and production systems.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/projects">Explore the work →</Link>
              <Link className="button button-secondary" href="/contact">Discuss a project</Link>
            </div>
          </aside>
        </div>
        <div className="hero-strip">
          <div className="hero-stat"><strong>15+ years</strong><span>Programming and systems work</span></div>
          <div className="hero-stat"><strong>AWS · Oracle</strong><span>Hyperscale cloud experience</span></div>
          <div className="hero-stat"><strong>Full-stack · SRE</strong><span>Interface to infrastructure</span></div>
          <div className="hero-stat"><strong>U.S.-based</strong><span>One accountable technical lead</span></div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-shell">
          <div className="section-head">
            <div><div className="eyebrow">Engineering practice</div><h2 className="section-title">From first diagram<br />to production.</h2></div>
            <p className="lead">The value is not a stack of tools. It is the ability to take an ambiguous problem, find the system underneath it, and deliver something durable.</p>
          </div>
          <div className="capability-grid">
            <article className="capability"><span className="capability-number">01 / SYSTEMS</span><div><h3>Cloud, platforms<br />& reliability</h3><p>AWS, Kubernetes, networking, infrastructure as code, observability, CI/CD, incident response, and operational design.</p></div></article>
            <article className="capability"><span className="capability-number">02 / SOFTWARE</span><div><h3>Products, APIs<br />& automation</h3><p>Python and TypeScript systems, integrations, internal tools, deterministic workflows, and full-stack product development.</p></div></article>
            <article className="capability"><span className="capability-number">03 / EXPERIENCE</span><div><h3>Dashboards, SaaS<br />& web platforms</h3><p>Responsive product interfaces, administrative surfaces, data-rich dashboards, websites, and design systems built to feel considered.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-shell">
          <div className="section-head">
            <div><div className="eyebrow">Selected work</div><h2 className="section-title">Built around the idea.<br />Never the template.</h2></div>
            <p className="lead">Multilingual platforms, interactive media, practical SaaS, and interface systems—each shaped around its audience and technical constraints.</p>
          </div>
          <div className="work-grid">
            <a className="work-card work-card-featured" href="https://tide-and-timber-demo.juschock.chatgpt.site" target="_blank" rel="noreferrer"><ProjectPreview kind="tide" /><div className="work-card-copy"><div className="eyebrow">Featured · bilingual media experience</div><h3>Tide &amp; Timber</h3><p>A cinematic English-and-Spanish editorial experience with instant language switching, synchronized audio text, mobile-safe single-play video, and custom media controls.</p><div className="tag-row"><span className="tag">Bilingual UX</span><span className="tag">Timed audio</span><span className="tag">Responsive media</span></div><span className="view-link">Experience the live build ↗</span></div></a>
            <a className="work-card" href="https://www.sunsun.ai" target="_blank" rel="noreferrer"><ProjectPreview kind="sunsun" /><div className="work-card-copy"><div className="eyebrow">Multilingual publishing platform</div><h3>SunSun</h3><p>An expressive publishing experience bringing six languages into one clear, responsive interface.</p><div className="tag-row"><span className="tag">Next.js</span><span className="tag">Internationalization</span><span className="tag">Editorial UI</span></div><span className="view-link">Visit SunSun ↗</span></div></a>
            <a className="work-card" href="https://www.preppergo.com/" target="_blank" rel="noreferrer"><ProjectPreview kind="prepper" /><div className="work-card-copy"><div className="eyebrow">Consumer SaaS platform</div><h3>PrepperGo</h3><p>A practical preparedness platform unifying planning, inventories, resources, alerts, and subscriptions.</p><div className="tag-row"><span className="tag">Product engineering</span><span className="tag">Data modeling</span><span className="tag">Stripe</span></div><span className="view-link">Visit PrepperGo ↗</span></div></a>
            <Link className="work-card" href="/lab/ops"><ProjectPreview kind="ops" /><div className="work-card-copy"><div className="eyebrow">Interactive concept · dashboard</div><h3>Northstar Operations</h3><p>An incident-aware service health and deployment command center for reliability teams.</p><div className="tag-row"><span className="tag">SRE</span><span className="tag">Data visualization</span><span className="tag">Responsive UI</span></div><span className="view-link">Open live concept →</span></div></Link>
          </div>
          <div style={{marginTop:24}}><Link className="button button-secondary" href="/projects">See all projects and concepts →</Link></div>
        </div>
      </section>

      <section className="quote-band"><div className="site-shell"><p>Architecture is only useful when it survives contact with <span>production, people, and change.</span></p></div></section>

      <section className="section">
        <div className="site-shell">
          <div className="section-head"><div><div className="eyebrow">Experience</div><h2 className="section-title">Built in demanding<br />environments.</h2></div><p className="lead">A career spanning military service, hyperscale cloud, federal technology, startup leadership, and hands-on product engineering.</p></div>
          <div className="career-list">
            {careers.map(([date, role, company, copy]) => <article className="career-row" key={role}><time>{date}</time><div><h3>{role}</h3><span className="company">{company}</span></div><p>{copy}</p></article>)}
          </div>
          <div style={{marginTop:28}}><Link className="button button-secondary" href="/experience">Full experience →</Link></div>
        </div>
      </section>
    </>
  );
}
