import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience" };

const roles = [
  ["2025—Now","Field / SRE Engineer","Government technology program","Hands-on reliability and platform engineering across AWS, Kubernetes, on-premises infrastructure, DNS, proxies, networking, software delivery, and automation in a high-trust environment."],
  ["2023—2024","Founder · CEO / CTO","LoneCypressAI","Founded and led an applied AI engineering company. Owned technical strategy, product architecture, client discovery, software delivery, deployment, and operations from first conversation through production."],
  ["2023","Senior DevOps Engineer","Accenture Federal Services","Developed Helm charts, autoscaling, and Jenkins delivery pipelines for Kubernetes application deployments; built automation in Python and JavaScript."],
  ["2023","Senior Network Engineer","Oracle Cloud Infrastructure","Worked on cloud-native infrastructure and network engineering, improving deployment workflows, operational consistency, and systems automation."],
  ["2022—2023","Lead Engineer, DevOps","Booz Allen Hamilton","Built automated delivery systems with Docker, Kubernetes, Helm, Argo CD, Rancher, Jenkins, and Python; supported data engineering workflows with Apache NiFi."],
  ["2019—2022","Systems Development Engineer","Amazon Web Services","Built and operated secure, scalable systems supporting Amazon S3 in specialized AWS regions, with extensive Python, JavaScript, serverless, automation, and operational ownership."],
  ["2009—2019","Arabic Linguist · Instructor · Special Operations","United States Army","Served for ten years, including assignments with 5th Special Forces Group and the Defense Language Institute, two combat deployments, and recognition with the Bronze Star."],
];

export default function ExperiencePage() {
  return (
    <>
      <section className="site-shell page-hero"><div className="page-hero-grid"><div><div className="eyebrow">Experience</div><h1 className="page-title">Engineering with<br />operational weight.</h1></div><p className="lead">The through-line is ownership: understanding the mission, building the system, operating it under real constraints, and improving what comes next.</p></div></section>
      <section className="site-shell section section-rule">
        <div className="career-list">
          {roles.map(([date,role,company,copy]) => <article className="career-row" key={role+company}><time>{date}</time><div><h3>{role}</h3><span className="company">{company}</span></div><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="quote-band"><div className="site-shell"><p>Software engineering, infrastructure, networking, security, and product work are <span>one connected system.</span></p></div></section>
      <section className="site-shell section">
        <div className="section-head"><div><div className="eyebrow">Working stack</div><h2 className="section-title">Tools in service<br />of outcomes.</h2></div><p className="lead">Python, TypeScript, React, Next.js, Linux, AWS, Kubernetes, Docker, Terraform, Ansible, Helm, Argo CD, Jenkins, GitHub, GitLab, SQL, and modern AI engineering systems.</p></div>
        <div className="capability-grid">
          <article className="capability"><span className="capability-number">CERTIFICATION</span><div><h3>AWS Advanced Networking — Specialty</h3><p>Validated depth across hybrid networks, routing, connectivity, security, automation, and troubleshooting.</p></div></article>
          <article className="capability"><span className="capability-number">CERTIFICATION</span><div><h3>CompTIA Security+</h3><p>Security foundations applied through years of real systems, federal, military, and production engineering work.</p></div></article>
          <article className="capability"><span className="capability-number">PRACTICE</span><div><h3>Full lifecycle ownership</h3><p>Discovery, architecture, implementation, delivery, operations, incident response, and continual improvement.</p></div></article>
        </div>
      </section>
    </>
  );
}
