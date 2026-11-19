import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Cpu, Github, Linkedin, Mail, Radio, Sparkles, Terminal, Workflow } from "lucide-react";
import { projects, capabilities } from "@/lib/site-data";

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return <div className="section-label"><span>{index}</span><span className="section-line" />{children}</div>;
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <nav className="nav shell">
        <a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span><span>DURVESH<br/><small>JADHAV / PORTFOLIO</small></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Selected work</a><a href="#capabilities">Capabilities</a><a href="#contact">Contact</a></div>
        <a className="availability" href="#contact"><span className="pulse"/> OPEN TO OPPORTUNITIES</a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> INDEPENDENT ENGINEER · DEVELOPER · BUILDER</div>
          <h1>Ideas into<br/><em>engineered</em><br/>reality<span className="accent">.</span></h1>
          <p className="hero-description">I explore the space where software, electronics and intelligent systems meet — designing, building and testing ideas that solve real problems.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href="#contact">Get in touch <ArrowDownRight size={15}/></a></div>
          <div className="hero-meta"><span><b>01</b> / CURIOUS BY DESIGN</span><span>BASED IN INDIA <span className="india-dot">●</span></span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract engineering orbital illustration">
          <div className="visual-top"><span>FIG. 001 — SYSTEMS THINKING</span><span>ENGINEERING / INDIA</span></div>
          <div className="orbital orbital-a"/><div className="orbital orbital-b"/><div className="orbital orbital-c"/>
          <div className="core"><div className="core-inner"><Cpu size={43} strokeWidth={1.1}/><span>BUILD<br/>ITERATE<br/>REPEAT</span></div></div>
          <div className="orbit-node node-a"><Radio size={15}/></div><div className="orbit-node node-b"><Workflow size={15}/></div><div className="orbit-node node-c"><Terminal size={15}/></div>
          <div className="visual-bottom"><span>HARDWARE × SOFTWARE</span><span className="visual-coord">DJ—001</span></div>
        </div>
        <div className="scroll-cue"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="ticker" aria-label="Areas of exploration"><div className="ticker-track">{["ENGINEERING", "SOFTWARE SYSTEMS", "ARTIFICIAL INTELLIGENCE", "ELECTRONICS", "PRODUCT THINKING", "ENGINEERING", "SOFTWARE SYSTEMS", "ARTIFICIAL INTELLIGENCE"].map((x,i)=><span key={i}>{x}<i>✳</i></span>)}</div></section>

      <section className="section shell about" id="about">
        <SectionLabel index="01">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid"><h2>Not just interested<br/>in how things <em>work.</em><br/><span className="muted-heading">I want to build them.</span></h2><div className="about-copy"><p className="lead">I’m Durvesh — an engineering student and independent builder with a deep interest in creating useful technology.</p><p>My work moves between code and physical systems: from full-stack applications and AI experiments to embedded electronics, robotics and interactive worlds. I enjoy taking a problem apart, understanding its moving pieces, and bringing a thoughtful solution to life.</p><div className="about-foot"><span className="mini-index">CURRENT MODE</span><span><span className="pulse"/> LEARNING · PROTOTYPING · SHIPPING</span></div></div></div>
      </section>

      <section className="section shell work" id="work">
        <SectionLabel index="02">SELECTED WORK</SectionLabel>
        <div className="section-heading"><h2>Things I’m<br/><em>bringing to life.</em></h2><p>A selection of projects across software, AI, robotics and creative technology. Each one is a place to experiment, learn and push an idea further.</p></div>
        <div className="project-grid">{projects.map((project, i)=><article className={`project-card project-${i+1}`} key={project.name}><div className="project-card-top"><span>PROJECT / 0{i+1}</span><span className="project-arrow"><ArrowUpRight size={17}/></span></div><div className="project-art"><div className="art-grid"/><div className={`art-symbol symbol-${i+1}`}>{project.symbol}</div><span className="art-code">{project.code}</span></div><div className="project-info"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="section capabilities-section" id="capabilities"><div className="shell"><SectionLabel index="03">WHAT I WORK WITH</SectionLabel><div className="capabilities-layout"><h2>Curiosity is<br/>the <em>toolkit.</em></h2><div className="capability-list">{capabilities.map((item,i)=><div className="capability" key={item.title}><span className="cap-number">0{i+1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="cap-icon">{item.icon}</span></div>)}</div></div></div></section>

      <section className="section shell contact" id="contact"><SectionLabel index="04">START A CONVERSATION</SectionLabel><div className="contact-panel"><div><div className="eyebrow"><span className="eyebrow-line"/> HAVE AN IDEA IN MIND?</div><h2>Let’s make<br/><em>something matter.</em></h2><p>Have a project, collaboration, opportunity or an interesting problem? I’d be glad to hear about it.</p><a className="button button-primary" href="mailto:contact@durveshjadhav.devs.surf">Send an email <Mail size={16}/></a></div><div className="contact-side"><span className="contact-orbit"><Sparkles size={30}/></span><span className="mini-index">DIRECT CONTACT</span><a href="mailto:contact@durveshjadhav.devs.surf">contact@durveshjadhav.devs.surf <ArrowUpRight size={14}/></a><span className="mini-index social-label">ELSEWHERE</span><div className="social-links"><a href="https://github.com/jadhavdurvesh" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a></div></div></div></section>

      <footer className="footer shell"><a className="brand footer-brand" href="#home"><span className="brand-mark">D<span>.</span></span><span>DURVESH<br/><small>JADHAV / PORTFOLIO</small></span></a><span>DESIGNED WITH INTENT. BUILT WITH CURIOSITY.</span><a href="#home">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} DURVESH JADHAV</span></footer>
    </main>
  );
}
