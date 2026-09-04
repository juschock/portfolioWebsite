import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="site-shell section">
      <div className="contact-panel">
        <div><div className="eyebrow" style={{color:"#21120d"}}>Start a conversation</div><h1 className="page-title">Bring me the hard problem.</h1><p>I’m open to select senior engineering, architecture, DevOps/SRE, platform, product development, and technical leadership engagements. Share the mission, the constraints, and what “done” needs to mean.</p><p><strong>Based in Herndon, Virginia · available remotely and across the DC metro area.</strong></p></div>
        <div className="contact-links">
          <a href="mailto:joshua.uschock@gmail.com"><span>Email</span><span>↗</span></a>
          <a href="https://linkedin.com/in/joshuauschock" target="_blank" rel="noreferrer"><span>LinkedIn</span><span>↗</span></a>
          <a href="https://github.com/juschock" target="_blank" rel="noreferrer"><span>GitHub</span><span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
