import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FolderOpen,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { siteData, skills, projects } from "@/lib/site-data";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

const skillIcons = {
  HTML: "https://cdn.simpleicons.org/html5/E34F26",
  CSS: "https://cdn.simpleicons.org/css/1572B6",
  JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  React: "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  "Express.js": "https://cdn.simpleicons.org/express/FFFFFF",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  Git: "https://cdn.simpleicons.org/git/F05032",
  GitHub: "https://cdn.simpleicons.org/github/FFFFFF",
  Vite: "https://cdn.simpleicons.org/vite/646CFF",
  "Better Auth": "https://cdn.simpleicons.org/betterauth/FFFFFF",
  "shadcn/ui": "https://cdn.simpleicons.org/shadcnui/FFFFFF",
  daisyUI: "https://cdn.simpleicons.org/daisyui/1AD1A5",
  HeroUI: "https://cdn.simpleicons.org/heroui/FFFFFF",
  Bootstrap: "https://cdn.simpleicons.org/bootstrap/7952B3",
 "NoSQL": "https://cdn.simpleicons.org/databricks/FFFFFF",
};

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-window">
        <div className="window-top">
          <span />
          <span />
          <span />
          <i>ST. / WORKSPACE</i>
        </div>
        {type === "market" ? (
          <div className="market-preview">
            <span className="preview-kicker">TODAY&apos;S MARKET</span>
            <strong>বাজার দর</strong>
            <div className="market-lines">
              <b>
                Rice <em>৳ 68/kg</em>
              </b>
              <b>
                Eggs <em>৳ 12/pc</em>
              </b>
              <b>
                Oil <em>৳ 175/L</em>
              </b>
            </div>
          </div>
        ) : type === "fitness" ? (
          <div className="fitness-preview">
            <span className="preview-kicker">WEEKLY ACTIVITY</span>
            <strong>Keep moving.</strong>
            <div className="chart-bars">
              {[30, 55, 40, 75, 50, 88, 65].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        ) : type === "books" ? (
          <div className="books-preview">
            <span className="preview-kicker">YOUR NEXT CHAPTER</span>
            <strong>Find your next read.</strong>
            <div className="book-row">
              <i />
              <i />
              <i />
            </div>
          </div>
        ) : (
          <div className="stack-preview">
            <span className="preview-kicker">DEVELOPER TOOLKIT</span>
            <strong>Build with clarity.</strong>
            <div className="stack-chips">
              <i>React</i>
              <i>Next.js</i>
              <i>Node.js</i>
            </div>
          </div>
        )}
      </div>
      <span className="visual-orb" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-shell" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="status-dot" /> FULL-STACK DEVELOPER
            </p>
            <h1>
              Building <span>modern web</span> experiences.
            </h1>
            <p className="hero-description">
              I turn ideas into real-world web applications, from intuitive
              interfaces to functional backend systems, using modern web
              technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <FolderOpen size={18} /> View Projects{" "}
                <ArrowDownRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <i /> Available for opportunities
              </span>
              <span>Based in Bangladesh · Open to remote</span>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual-wrap" delay={120}>
          <div className="portrait-frame">
            {siteData.portraitSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={siteData.portraitSrc} alt="Portrait of SM Tawfiq" />
            ) : (
              <div className="portrait-placeholder">
                <div className="portrait-monogram">
                  ST<span>.</span>
                </div>
                <span className="portrait-caption">
                  YOUR PORTRAIT GOES HERE
                </span>
              </div>
            )}
            <span className="portrait-corner corner-one" />
            <span className="portrait-corner corner-two" />
          </div>
          <div className="floating-note">
            <Code2 size={17} />
            <span>Ideas → Interfaces → Impact</span>
          </div>
          <div className="hero-index">
            01 <span>/ 05</span>
          </div>
        </Reveal>
        <a
          href="#about"
          className="scroll-indicator"
          aria-label="Scroll to About section"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="section-shell about-section section-space" id="about">
        <Reveal className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>
            Building.
            <br />
            Learning.
            <br />
            <span>Improving.</span>
          </h2>
          <span className="heading-line" />
        </Reveal>
        <Reveal className="about-content" delay={100}>
          <p className="about-lead">
            I&apos;m a Full-Stack Developer passionate about building modern,
            user-friendly web applications.
          </p>
          <p className="body-copy">
            I enjoy turning ideas into practical solutions using modern web
            technologies. From thoughtful interfaces to functional backend
            systems, I like making products that are useful, clear, and
            enjoyable to use.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-icon">
                <Layers3 size={22} />
              </span>
              <div>
                <h3>Full-Stack Development</h3>
                <p>Connecting clean UI with reliable functionality.</p>
              </div>
            </div>
            <div className="highlight">
              <span className="highlight-icon">
                <FolderOpen size={22} />
              </span>
              <div>
                <h3>Real Projects</h3>
                <p>Learning by building and improving practical products.</p>
              </div>
            </div>
          </div>
          <a className="text-link" href="#projects">
            Explore my work <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      <section className="skills-section section-space" id="skills">
        <div className="section-shell">
          <Reveal className="section-intro">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>
              My Tech <span>Stack.</span>
            </h2>
            <p className="body-copy">
              Tools and technologies I use to build web applications.
            </p>
          </Reveal>
          <div className="skills-groups">
            {Object.entries(skills).map(([category, list], index) => (
              <Reveal className="skill-group" key={category} delay={index * 80}>
                <h3 className="skill-category">{category}</h3>
                <div className="skill-grid">
                  {list.map((skill) => (
                    <div className="skill-item" key={skill}>
                      <span className="skill-logo" aria-hidden="true">
                        {skillIcons[skill] && (
                          <img
                            src={skillIcons[skill]}
                            alt=""
                            width="24"
                            height="24"
                          />
                        )}
                      </span>
                      <span>{skill}</span>
                    </div>
                  ))}{" "}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-shell projects-section section-space"
        id="projects"
      >
        <Reveal className="section-intro">
          <p className="eyebrow">WHAT I&apos;VE BUILT</p>
          <h2>
            Featured <span>Projects.</span>
          </h2>
          <p className="body-copy">
            A selection of projects I&apos;ve built with modern web
            technologies.
          </p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              className="project-card"
              key={project.name}
              delay={index % 2 ? 100 : 0}
            >
              <ProjectVisual type={project.visual} />
              <div className="project-content">
                <div className="project-title-row">
                  <span className="project-number">{project.number} / 04</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    className="project-link github-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub <ArrowDownRight size={14} />
                  </a>
                  <a
                    className="project-link demo-link"
                    href={project.demo}
                    target={
                      project.demo.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.demo.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <ArrowDownRight size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="all-projects-row">
          <a
            className="button button-outline"
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
          >
            View All Projects <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="contact-section section-space" id="contact">
        <div className="section-shell contact-layout">
          <Reveal className="contact-copy">
            <p className="eyebrow">LET&apos;S CONNECT</p>
            <h2>
              Let&apos;s Build
              <br />
              <span>Something</span>
              <br />
              Together.
            </h2>
            <p className="body-copy">
              Have a project in mind or want to work together? I&apos;d love to
              hear from you.
            </p>
            <div className="contact-links">
              <a href={`mailto:${siteData.email}`}>
                <span>
                  <Mail size={18} />
                </span>
                <div>
                  <small>EMAIL ME</small>
                  <strong>{siteData.email}</strong>
                </div>
                <ArrowDownRight size={16} />
              </a>
              <a href={siteData.github} target="_blank" rel="noreferrer">
                <span>
                  <Github size={18} />
                </span>
                <div>
                  <small>GITHUB</small>
                  <strong>github.com/tawfiqb69</strong>
                </div>
                <ArrowDownRight size={16} />
              </a>
              <a href={siteData.linkedin} target="_blank" rel="noreferrer">
                <span>
                  <Linkedin size={18} />
                </span>
                <div>
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </div>
                <ArrowDownRight size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={100}>
            <div className="form-heading">
              <span>01 — SAY HELLO</span>
              <MessageCircle size={20} />
            </div>
            <ContactForm email={siteData.email} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
