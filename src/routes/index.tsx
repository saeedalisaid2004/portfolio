import { createFileRoute } from "@tanstack/react-router";
import saeedImg from "@/assets/saeed.jpg";
import smartFarmImg from "@/assets/sf-hero.png";
import sfSignInImg from "@/assets/sf-signin.png";
import sfCtaImg from "@/assets/sf-cta.png";
import { Github, Mail, Linkedin, ArrowRight, ExternalLink, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saeed Ali — Frontend Engineer" },
      { name: "description", content: "Frontend engineer focused on React, TypeScript, and clean component architecture." },
      { property: "og:title", content: "Saeed Ali — Frontend Engineer" },
      { property: "og:description", content: "React & TypeScript engineer based in Cairo, Egypt." },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 96 },
  { name: "Framer Motion", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "GraphQL", level: 75 },
  { name: "Figma", level: 82 },
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "20+", label: "Happy clients" },
  { value: "∞", label: "Cups of coffee" },
];

const projects = [
  { title: "Design System Kit", desc: "Reusable React + TS component library with theming and a11y baked in.", tags: ["React", "TypeScript", "Storybook"] },
  { title: "Realtime Dashboard", desc: "API-driven analytics dashboard with charts, filters, and live updates.", tags: ["Next.js", "GraphQL", "Tailwind"] },
  { title: "Motion Landing", desc: "High-conversion marketing site with rich micro-interactions.", tags: ["React", "Framer Motion"] },
  { title: "Headless Commerce", desc: "Pixel-precise storefront wired to a headless backend.", tags: ["Next.js", "TypeScript"] },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-gradient text-xl font-bold tracking-tight">Saeed Ali</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="mailto:saeedalisaid2004@gmail.com" className="bg-gradient-brand text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full shadow-glow hover:opacity-90 transition">
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-radial-glow overflow-hidden pt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="flex items-center gap-3 mb-6 text-xs tracking-widest text-muted-foreground font-mono uppercase">
            <span className="h-px w-10 bg-border" /> Frontend Engineer / Cairo, Egypt
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight">
            SAEED <span className="text-gradient">ALI</span>
          </h1>
          <p className="mt-4 text-xs tracking-widest text-muted-foreground font-mono uppercase">
            Frontend Engineer / Cairo, Egypt
          </p>
          <p className="mt-8 text-lg text-foreground">Saeed Ali builds delightful frontend interfaces.</p>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
            Frontend engineer focused on React, TypeScript, and clean component architecture.
            I craft fast, scalable, and maintainable API-driven products with thoughtful UX and pixel-precise UI.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Cairo, Egypt", "React", "TypeScript"].map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/saeedalisaid2004" target="_blank" rel="noreferrer" className="bg-gradient-brand text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-glow hover:opacity-90 transition inline-flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="mailto:saeedalisaid2004@gmail.com" className="bg-secondary border border-border font-semibold px-6 py-3 rounded-full hover:bg-muted transition inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="#projects" className="border border-border font-semibold px-6 py-3 rounded-full hover:bg-secondary transition inline-flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/SaeedAli_CV.pdf" download className="border border-border font-semibold px-6 py-3 rounded-full hover:bg-secondary transition inline-flex items-center gap-2">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-brand blur-3xl opacity-40" />
            <img
              src={saeedImg}
              alt="Portrait of Saeed Ali"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-2 border-primary/40 shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest font-mono uppercase text-primary mb-4">About</p>
        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl">A developer who cares about the details.</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <p className="text-muted-foreground leading-relaxed">
            I specialize in turning complex problems into intuitive, performant interfaces. From design systems to micro-interactions, I obsess over every pixel and every millisecond.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently focused on React, TypeScript, and modern animation — building products that feel as good as they look.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-radial-glow">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest font-mono uppercase text-primary mb-4">Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold">Tools of the trade.</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground font-mono">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-gradient-brand rounded-full" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest font-mono uppercase text-primary mb-4">Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold">Selected work.</h2>

        <article className="mt-12 group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden bg-secondary">
              <img
                src={smartFarmImg}
                alt="Smart Farm AI dashboard preview"
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-brand text-primary-foreground text-xs font-semibold shadow-glow">
                Featured
              </span>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-3xl font-bold">Smart Farm AI</h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition shrink-0" />
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                AI-powered farm management platform with crop recommendation, animal weight tracking,
                fruit quality analysis, and real-time IoT sensor reports. Graduation project — Faculty
                of Cairo Higher Institute.
              </p>
              <div className="mt-6 grid grid-cols-4 gap-3 text-center">
                {[
                  { v: "10K+", l: "Active Farms" },
                  { v: "50+", l: "AI Models" },
                  { v: "99%", l: "Accuracy" },
                  { v: "24/7", l: "Support" },
                ].map((s) => (
                  <div key={s.l} className="p-2 rounded-lg bg-secondary border border-border">
                    <div className="text-sm font-bold text-gradient">{s.v}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["AI/ML", "IoT", "React", "Dashboard"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
              </div>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-radial-glow">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Open to frontend engineering roles, internships, and collaboration on API-driven products.
        </p>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          If you need a frontend engineer who thinks about architecture, performance, and maintainability together, let's connect.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:saeedalisaid2004@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
            <Mail className="w-4 h-4" /> saeedalisaid2004@gmail.com
          </a>
          <a href="https://github.com/saeedalisaid2004" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/Saeedalisaeed2004" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Saeed Ali. Built with care.
      </footer>
    </div>
  );
}
