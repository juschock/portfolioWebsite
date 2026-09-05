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
            <h1 className="display">Complex systems. Clear products. One accountable engineer.</h1>
            <p className="hero-lead">I design, build, and operate ambitious digital products—from the interface and data model to the cloud beneath them.</p>
            <div className="button-row">
              <Link className="button button-accent" href="/projects">View selected work <span aria-hidden="true">↗</span></Link>
              <Link className="button button-on-dark" href="/contact">Discuss a project</Link>
            </div>
            <div className="hero-credentials" aria-label="Career highlights">
              <span>Amazon S3</span><span>Oracle</span><span>Booz Allen</span><span>U.S. Army</span>
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
          <div><strong>15+ years</strong><span>Building and operating systems</span></div>
          <div><strong>Amazon S3</strong><span>Three years in specialized regions</span></div>
          <div><strong>AWS Advanced Networking</strong><span>Specialty certified</span></div>
          <div><strong>10 years</strong><span>United States Army</span></div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <header className="section-intro">
            <div className="eyebrow">Selected work</div>
            <h2 className="section-title">Real products, deliberate interfaces, production-minded engineering.</h2>
            <p className="lead">A flagship consumer platform and two focused web experiences—each built around a different interaction problem.</p>
          </header>

          <div className="case-study-list">
            <a className="case-study case-study-featured" href="https://www.preppergo.com/" target="_blank" rel="noreferrer">
              <div className="case-study-visual">
                <ProjectPreview imageSrc="/projects/preppergo-home.jpg" imageAlt="The live PrepperGo homepage and readiness dashboard" objectPosition="center top" />
              </div>
              <div className="case-study-copy">
                <div>
                  <span className="project-status">Live product</span>
                  <div className="eyebrow">Consumer SaaS</div>
                  <h3>PrepperGo</h3>
                  <p>A calm household-readiness platform that turns inventory data into runway estimates, priorities, and next actions—with subscription, permissions, and data integrity engineered as part of the product.</p>
                </div>
                <div className="project-proof" aria-label="PrepperGo proof points">
                  <div><strong>199</strong><span>unit tests</span></div>
                  <div><strong>260+</strong><span>browser checks</span></div>
                  <div><strong>End to end</strong><span>product ownership</span></div>
                </div>
                <span className="view-link">Open PrepperGo <span aria-hidden="true">↗</span></span>
              </div>
            </a>

            <div className="supporting-cases">
              <a className="supporting-case" href="https://tide-and-timber-demo.juschock.chatgpt.site" target="_blank" rel="noreferrer">
                <div className="supporting-case-visual"><ProjectPreview kind="tide" /></div>
                <div className="supporting-case-copy">
                  <div className="project-heading-row"><span className="project-status project-status-concept">Interactive build</span><span>Bilingual media</span></div>
                  <h3>Tide &amp; Timber</h3>
                  <p>Instant EN/ES switching, a precisely timed 40-second audio sequence, and mobile-safe media state.</p>
                  <span className="view-link">Experience the build <span aria-hidden="true">↗</span></span>
                </div>
              </a>

              <a className="supporting-case" href="https://www.sunsun.ai" target="_blank" rel="noreferrer">
                <div className="supporting-case-visual"><ProjectPreview kind="sunsun" /></div>
                <div className="supporting-case-copy">
                  <div className="project-heading-row"><span className="project-status">Live platform</span><span>Multilingual publishing</span></div>
                  <h3>SunSun</h3>
                  <p>One responsive publishing experience across English, Spanish, French, Hindi, Bengali, and Tamil.</p>
                  <span className="view-link">Visit SunSun <span aria-hidden="true">↗</span></span>
                </div>
              </a>
            </div>
          </div>

          <div className="section-action"><Link className="text-link" href="/projects">See the complete project index <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section lab-launchpad-section">
        <div className="site-shell">
          <header className="lab-launchpad-heading">
            <div><div className="eyebrow">Interactive systems lab</div><h2 className="section-title">Don’t just view the work. Operate it.</h2></div>
            <p className="lead">Five live demonstrations spanning real-time analysis, decision support, 3D simulation, infrastructure, and document intelligence.</p>
          </header>
          <div className="lab-launchpad">
            <Link href="/lab/mars"><span>01 · 3D simulation</span><strong>Ares Traverse</strong><small>Drive the Mars rover</small><i aria-hidden="true">↗</i></Link>
            <Link href="/lab/markets"><span>02 · Streaming data</span><strong>VectorAlpha</strong><small>Read the market replay</small><i aria-hidden="true">↗</i></Link>
            <Link href="/lab/civic"><span>03 · Decision support</span><strong>CivicForge</strong><small>Plan a city scenario</small><i aria-hidden="true">↗</i></Link>
            <Link href="/lab/grid"><span>04 · Infrastructure</span><strong>Gridline</strong><small>Operate the power grid</small><i aria-hidden="true">↗</i></Link>
            <Link href="/lab/contracts"><span>05 · Document systems</span><strong>ClauseMap</strong><small>Review an agreement</small><i aria-hidden="true">↗</i></Link>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="site-shell proof-layout">
          <div>
            <div className="eyebrow eyebrow-on-dark">Why the work holds up</div>
            <h2 className="section-title">The polish is visible. The rigor is underneath.</h2>
          </div>
          <div className="proof-ledger">
            <div><span>01</span><p><strong>One owner across the stack.</strong> Product decisions stay connected to architecture, delivery, and operations.</p></div>
            <div><span>02</span><p><strong>Production habits from day one.</strong> Testing, observability, security, and failure states are part of the build—not cleanup work.</p></div>
            <div><span>03</span><p><strong>Direct senior collaboration.</strong> No handoff maze. The person shaping the solution is the person engineering it.</p></div>
          </div>
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
