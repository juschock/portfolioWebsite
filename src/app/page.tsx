import Link from "next/link";

function ProductPreview({ tone = "" }: { tone?: string }) {
  return (
    <div className={"preview " + tone} aria-hidden="true">
      <div className="mini-window">
        <div className="mini-bar"><i className="mini-dot" /><i className="mini-dot" /><i className="mini-dot" /></div>
        <div className="mini-body">
          <div className="mini-side" />
          <div className="mini-content">
            <div className="mini-metrics"><div className="mini-metric">Uptime<br /><b>99.98%</b></div><div className="mini-metric">Services<br /><b>42</b></div><div className="mini-metric">Deploys<br /><b>18</b></div></div>
            <div className="mini-chart" />
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <div className="eyebrow">Principal engineer · product builder · operator</div>
            <h1 className="display hero-title">Complex systems.<br /><span>Clear outcomes.</span></h1>
          </div>
          <aside className="hero-aside">
            <div className="availability"><i className="availability-dot" /> Select engagements · Northern Virginia / remote</div>
            <p className="lead">I design, build, and operate reliable software—from cloud infrastructure and developer platforms to SaaS products and polished web experiences.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/projects">Explore the work →</Link>
              <Link className="button button-secondary" href="/contact">Discuss a project</Link>
            </div>
          </aside>
        </div>
        <div className="hero-strip">
          <div className="hero-stat"><strong>15+ years</strong><span>Programming and systems work</span></div>
          <div className="hero-stat"><strong>AWS · Oracle</strong><span>Hyperscale cloud experience</span></div>
          <div className="hero-stat"><strong>DevOps · SRE</strong><span>Production engineering depth</span></div>
          <div className="hero-stat"><strong>Founder-led</strong><span>One accountable technical lead</span></div>
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
            <div><div className="eyebrow">Selected work</div><h2 className="section-title">Products and<br />interface systems.</h2></div>
            <p className="lead">A mix of shipped products and clearly labeled concept builds that demonstrate product range without pretending experiments were client engagements.</p>
          </div>
          <div className="work-grid">
            <Link className="work-card" href="/projects#products"><ProductPreview tone="preview-blue" /><div className="work-card-copy"><div className="eyebrow">Shipped product ecosystem</div><h3>Racoben Product Suite</h3><p>Deterministic software tools and productized services designed, built, and operated under one engineering umbrella.</p><div className="tag-row"><span className="tag">Next.js</span><span className="tag">Systems design</span><span className="tag">Product engineering</span></div><span className="view-link">View portfolio →</span></div></Link>
            <Link className="work-card" href="/lab/ops"><ProductPreview tone="preview-red" /><div className="work-card-copy"><div className="eyebrow">Interactive concept · dashboard</div><h3>Northstar Operations</h3><p>An incident-aware service health and deployment command center for reliability teams.</p><div className="tag-row"><span className="tag">SRE</span><span className="tag">Data visualization</span><span className="tag">Responsive UI</span></div><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/field"><ProductPreview tone="preview-sand" /><div className="work-card-copy"><div className="eyebrow">Interactive concept · field app</div><h3>Field Atlas</h3><p>A mobile-first operations surface that coordinates technicians, work orders, and live service territory.</p><div className="tag-row"><span className="tag">Mobile UI</span><span className="tag">Operations</span><span className="tag">Workflow design</span></div><span className="view-link">Open live concept →</span></div></Link>
            <Link className="work-card" href="/lab/studio"><ProductPreview /><div className="work-card-copy"><div className="eyebrow">Interactive concept · website</div><h3>Common Ground Studio</h3><p>A conversion-led service website with a distinctly editorial visual system and mobile-native composition.</p><div className="tag-row"><span className="tag">Web design</span><span className="tag">Brand system</span><span className="tag">Responsive build</span></div><span className="view-link">Open live concept →</span></div></Link>
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
