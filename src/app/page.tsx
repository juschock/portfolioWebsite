import Image from "next/image";
import Link from "next/link";
import ProjectPreview from "./components/ProjectPreview";

const careers = [
  ["2025—Now", "Field / SRE Engineer", "Government technology program", "Production reliability across AWS, Kubernetes, on-prem infrastructure, networking, automation, and secure delivery."],
  ["2023—2024", "Founder & Principal Engineer", "LoneCypressAI", "Product strategy, systems design, hands-on development, deployment, and applied AI delivery."],
  ["2022—2024", "Lead & Senior DevOps Engineer", "Booz Allen · Oracle · Accenture", "Cloud-native delivery, network automation, GitOps, and Kubernetes platforms in demanding environments."],
  ["2019—2022", "Systems Development Engineer", "Amazon Web Services", "Secure, highly available systems and operational tooling for Amazon S3 in specialized AWS regions."],
];

const disciplines = [
  {
    index: "01",
    title: "Product engineering",
    copy: "Full-stack products, APIs, integrations, applied AI, and workflows built from the problem outward.",
    stack: "TypeScript · Python · React · Next.js · SQL",
  },
  {
    index: "02",
    title: "Platforms & reliability",
    copy: "Cloud systems that are observable, repeatable, secure, and ready for the people who operate them.",
    stack: "AWS · Kubernetes · Terraform · CI/CD · SRE",
  },
  {
    index: "03",
    title: "Interface systems",
    copy: "Clear dashboards and digital experiences for complex data, media, and operational decisions.",
    stack: "Design systems · Data UI · Accessibility · Media",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-on-dark">U.S.-based product, software &amp; systems engineer</div>
            <h1 className="display">I turn complex systems into clear, reliable products.</h1>
            <p className="hero-lead">Fifteen years across product engineering, cloud platforms, DevOps, SRE, and interface design—with one accountable technical lead from first decision through production.</p>
            <div className="button-row">
              <Link className="button button-accent" href="/projects">View selected work <span aria-hidden="true">↗</span></Link>
              <Link className="button button-on-dark" href="/contact">Discuss a project</Link>
            </div>
            <div className="hero-credentials" aria-label="Career highlights">
              <span>AWS</span><span>Oracle</span><span>Booz Allen</span><span>U.S. Army</span>
            </div>
          </div>

          <aside className="hero-profile">
            <div className="hero-portrait-frame">
              <Image className="hero-portrait" src="/1689704103838.jpeg" alt="Joshua Uschock" width={800} height={800} priority />
            </div>
            <div className="profile-summary">
              <div><span className="status-dot" /> Available for select engagements</div>
              <p>Herndon, Virginia · Remote / DC metro</p>
            </div>
          </aside>
        </div>
        <div className="site-shell proof-rail">
          <div><strong>15+ years</strong><span>Programming &amp; systems</span></div>
          <div><strong>Full lifecycle</strong><span>Discovery to operations</span></div>
          <div><strong>Interface to infra</strong><span>One connected system</span></div>
          <div><strong>U.S.-based</strong><span>Direct collaboration</span></div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <header className="section-intro">
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">Products with a point of view—and the engineering to hold up.</h2>
            <p className="lead">Representative work spanning consumer SaaS, bilingual media, and multilingual publishing—each shaped around the people using it and the system behind it.</p>
          </header>

          <div className="case-study-list">
            <a className="case-study" href="https://www.preppergo.com/" target="_blank" rel="noreferrer">
              <div className="case-study-visual">
                <ProjectPreview imageSrc="/projects/preppergo-home.jpg" imageAlt="The live PrepperGo homepage and readiness dashboard" objectPosition="center top" />
              </div>
              <div className="case-study-copy">
                <div>
                  <span className="project-status">Live product</span>
                  <div className="eyebrow">Consumer SaaS</div>
                  <h3>PrepperGo</h3>
                  <p>A calm household-readiness platform that turns inventory data into runway estimates, priorities, and next actions.</p>
                </div>
                <dl className="project-facts">
                  <div><dt>Role</dt><dd>Product &amp; engineering</dd></div>
                  <div><dt>Focus</dt><dd>Data modeling · UX · subscriptions</dd></div>
                </dl>
                <span className="view-link">Open PrepperGo <span aria-hidden="true">↗</span></span>
              </div>
            </a>

            <a className="case-study" href="https://tide-and-timber-demo.juschock.chatgpt.site" target="_blank" rel="noreferrer">
              <div className="case-study-visual"><ProjectPreview kind="tide" /></div>
              <div className="case-study-copy">
                <div>
                  <span className="project-status project-status-concept">Interactive build</span>
                  <div className="eyebrow">Bilingual media experience</div>
                  <h3>Tide &amp; Timber</h3>
                  <p>A cinematic English-and-Spanish experience with instant language switching, synchronized audio text, and mobile-safe media behavior.</p>
                </div>
                <dl className="project-facts">
                  <div><dt>Role</dt><dd>Design &amp; development</dd></div>
                  <div><dt>Focus</dt><dd>Bilingual UX · timed media</dd></div>
                </dl>
                <span className="view-link">Experience the live build <span aria-hidden="true">↗</span></span>
              </div>
            </a>

            <a className="case-study" href="https://www.sunsun.ai" target="_blank" rel="noreferrer">
              <div className="case-study-visual"><ProjectPreview kind="sunsun" /></div>
              <div className="case-study-copy">
                <div>
                  <span className="project-status">Live platform</span>
                  <div className="eyebrow">Multilingual publishing</div>
                  <h3>SunSun</h3>
                  <p>An expressive publishing platform that brings six languages into one responsive, legible product experience.</p>
                </div>
                <dl className="project-facts">
                  <div><dt>Role</dt><dd>Full-stack engineering</dd></div>
                  <div><dt>Focus</dt><dd>Next.js · i18n · editorial UI</dd></div>
                </dl>
                <span className="view-link">Visit SunSun <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          </div>

          <div className="section-action"><Link className="text-link" href="/projects">See the complete project index <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section section-subtle">
        <div className="site-shell practice-layout">
          <div className="practice-intro">
            <div className="eyebrow">Engineering range</div>
            <h2 className="section-title">The whole product is the system.</h2>
            <p className="lead">Good interface decisions depend on the data model. Reliable releases depend on the platform. I work across those boundaries without losing the user.</p>
          </div>
          <div className="discipline-list">
            {disciplines.map((discipline) => (
              <article className="discipline-row" key={discipline.index}>
                <span>{discipline.index}</span>
                <div><h3>{discipline.title}</h3><p>{discipline.copy}</p><small>{discipline.stack}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <header className="timeline-heading">
            <div><div className="eyebrow">Career trajectory</div><h2 className="section-title">Built in environments where the details matter.</h2></div>
            <p className="lead">A path through military service, hyperscale cloud, federal technology, startup leadership, and independent products.</p>
          </header>
          <div className="career-list">
            {careers.map(([date, role, company, copy]) => (
              <article className="career-row" key={role}>
                <time>{date}</time>
                <div><h3>{role}</h3><span className="company">{company}</span></div>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="section-action"><Link className="text-link" href="/experience">View complete experience <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="site-shell closing-cta">
        <div>
          <div className="eyebrow eyebrow-on-dark">Independent engineering practice</div>
          <h2>Bring me the hard problem.</h2>
          <p>Product development, platform engineering, DevOps/SRE, architecture, and technical leadership.</p>
        </div>
        <Link className="button button-accent" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
