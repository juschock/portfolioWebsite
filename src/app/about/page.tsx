import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="site-shell page-hero"><div className="eyebrow">About Joshua</div><h1 className="page-title">One engineer.<br />A wide field of view.</h1></section>
      <section className="site-shell section section-rule">
        <div className="about-grid">
          <Image className="portrait" src="/1689704103838.jpeg" alt="Joshua Uschock" width={780} height={975} priority />
          <div>
            <p className="story">I am a software and systems engineer in Herndon, Virginia. My work sits where product engineering, infrastructure, networking, security, and operations meet—the part of the map where clean diagrams encounter real users and production constraints.</p>
            <p className="lead">Before technology, I spent ten years in the U.S. Army as an Arabic linguist, Special Operations team member, and instructor. Since then I have built systems at AWS, led DevOps programs at Booz Allen, worked in cloud networking at Oracle, supported federal platforms, and founded an engineering company.</p>
            <p className="lead">That path shaped how I work: stay calm, get the ground truth, make the system legible, and own the outcome.</p>
            <div className="detail-grid">
              <div className="detail-block"><h3>What I build</h3><p>Cloud platforms, developer tooling, automation, SaaS products, dashboards, internal systems, and high-quality web experiences.</p></div>
              <div className="detail-block"><h3>How I work</h3><p>Directly with stakeholders, hands-on in the code, explicit about tradeoffs, and accountable from architecture through operations.</p></div>
              <div className="detail-block"><h3>What I value</h3><p>Reliability, clarity, security, durable simplicity, useful documentation, and software that respects the people operating it.</p></div>
              <div className="detail-block"><h3>Outside the stack</h3><p>Husband, father, veteran, lifelong learner, and builder of independent products through Racoben Engineering.</p></div>
            </div>
            <div className="button-row" style={{marginTop:36}}><Link className="button button-primary" href="/contact">Start a conversation →</Link><Link className="button button-secondary" href="/experience">See experience</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
