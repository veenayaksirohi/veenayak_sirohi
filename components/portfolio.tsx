"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  type LucideIcon,
  X,
} from "lucide-react";

const siteBase =
  process.env.NODE_ENV === "production" ? "/veenayak_sirohi" : "";
const resumePath = `${siteBase}/veenayak_Resume.pdf`;
const githubUrl = "https://github.com/veenayaksirohi/";
const linkedinUrl = "https://www.linkedin.com/in/veenayaksirohi/";

const skills = [
  { title: "Programming & Scripting", items: ["Python", "Bash"] },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS EKS",
      "EC2",
      "IAM",
      "VPC",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Git",
      "Ansible",
    ],
  },
  {
    title: "Security & DevSecOps",
    items: [
      "SonarQube",
      "Trivy",
      "OWASP ZAP",
      "DefectDojo",
      "TruffleHog",
      "Gitleaks",
      "Nmap",
      "Burp Suite",
    ],
  },
  { title: "Monitoring & Observability", items: ["Prometheus", "Grafana"] },
  {
    title: "Operating Systems & Networking",
    items: ["Linux", "TCP/IP", "DNS", "DHCP", "Routing", "Switching"],
  },
  {
    title: "Backend Development & Testing",
    items: [
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "pytest",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
];

const devSecOpsTools = [
  "AWS EKS",
  "Terraform",
  "Docker",
  "GitHub Actions",
  "Kubernetes",
  "SonarQube",
  "Trivy",
  "OWASP ZAP",
  "DefectDojo",
  "Prometheus",
  "Grafana",
];

const securityChecks = [
  "Secret scanning, static analysis, dependency analysis and SBOM generation",
  "Container image and infrastructure-as-code scanning",
  "Dynamic application security testing and vulnerability management",
];

const additionalProjects = [
  {
    title: "Currency Converter App — Real-Time Currency Exchange",
    category: "Frontend · Utility",
    description:
      "A responsive currency converter with exchange-rate lookup, currency search, and conversion between currencies.",
    technologies: ["React", "Vite", "Tailwind CSS", "Currency API"],
    image: "CurrencyConverter.png",
    repository:
      "https://github.com/veenayaksirohi/WebDev_Projects/tree/master/currencyConverter",
  },
  {
    title: "Parallax Webpage — Responsive Parallax Experience",
    category: "Frontend · Visual Design",
    description:
      "A responsive webpage using parallax backgrounds, CSS effects, and alternating content sections.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Transforms"],
    image: "Parallax-Webpage.png",
    repository:
      "https://github.com/veenayaksirohi/WebDev_Projects/tree/master/Parallax%20Webpage",
  },
];

const experience = [
  {
    role: "DevOps Engineer",
    company: "SarvaGram",
    employment: "Full-time",
    date: "October 2026 – Present",
    location: "Pune District, Maharashtra, India · On-site",
    url: "https://www.linkedin.com/company/30883397/",
    logo: null,
    description:
      "Working as a DevOps Engineer at SarvaGram, contributing to DevOps and cloud infrastructure responsibilities.",
    current: true,
  },
  {
    role: "Python Trainee",
    company: "Impressico Business Solutions",
    employment: "Internship",
    date: "April 2025 – June 2025",
    location: "Noida, Uttar Pradesh, India · On-site",
    url: "https://www.linkedin.com/company/446999/",
    logo: `${siteBase}/impressico-logo.png`,
    description:
      "Worked across backend API development, database access, authentication, containerization, and automated testing.",
    current: false,
  },
];

const education = [
  {
    program:
      "PGCP-ITISS — Post Graduate Certificate Programme in IT Infrastructure, Systems and Security",
    institution: "C-DAC, SunBeam Institute of Information Technology",
    detail: "Batch February 2026 · 250/280 marks · 89.29%",
    logo: `${siteBase}/cdac-logo.png`,
  },
  {
    program: "B.Tech in Computer Science and Engineering",
    institution: "G.L. Bajaj Group of Institutions",
    detail:
      "Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh · 2025 · 67.3% · Greater Noida, Uttar Pradesh",
    logo: `${siteBase}/LogoGLBajaj.jpg`,
  },
  {
    program: "Class XII — Science, CBSE",
    institution: "Dewan Public School, Hapur",
    detail: "2021 · 79.8%",
    logo: `${siteBase}/dewan.png`,
  },
  {
    program: "Class X, CBSE",
    institution: "Dewan Public School, Hapur",
    detail: "2019 · 76.4%",
    logo: `${siteBase}/dewan.png`,
  },
];

const cdacModules = [
  ["Fundamentals of Computer Networks", "36/40"],
  ["Operating System and Administration", "38/40"],
  ["IT Infrastructure Management and DevOps", "39/40"],
  ["Network Defense and Countermeasures & Compliance Audit", "33/40"],
  ["Cyber Forensics and Public Key Infrastructure", "33/40"],
  ["Security Concepts", "37/40"],
  ["Programming Concepts", "34/40"],
];

type Certification = {
  title: string;
  issuer: string;
  certificateFile?: string;
  logoFile?: string;
};

const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    logoFile: "cisco-logo.svg",
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker",
    logoFile: "docker-logo.svg",
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    logoFile: "nptel.jpg",
    certificateFile:
      "Programming, Data Structures And Algorithms Using Python_page1.jpg",
  },
  {
    title: "Fundamentals of Cloud Security",
    issuer: "Palo Alto Networks (Beacon)",
    certificateFile: "Fundamentals of Cloud Security _ Beacon_page1.jpg",
    logoFile: "palo-alto-networks-logo-png_seeklogo-384891.png",
  },
  {
    title: "Fundamentals of Network Security",
    issuer: "Palo Alto Networks (Beacon)",
    certificateFile: "Fundamentals of Network Security _ Beacon_page1.jpg",
    logoFile: "palo-alto-networks-logo-png_seeklogo-384891.png",
  },
  {
    title: "The Fundamentals of SOC (Security Operations Center)",
    issuer: "Palo Alto Networks (Beacon)",
    certificateFile:
      "The Fundamentals of SOC (Security Operations Center) _ Beacon_page1.jpg",
    logoFile: "palo-alto-networks-logo-png_seeklogo-384891.png",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Palo Alto Networks (Beacon)",
    certificateFile: "Introduction to Cybersecurity _ Beacon_page1.jpg",
    logoFile: "palo-alto-networks-logo-png_seeklogo-384891.png",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-zinc-400">{description}</p>
      )}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon?: LucideIcon;
  image?: string;
  highlights?: string[];
  repository?: string;
  featured?: boolean;
};

function ProjectCard({
  title,
  category,
  description,
  technologies,
  icon: Icon = ShieldCheck,
  image,
  highlights,
  repository,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden border border-zinc-700 bg-[#101312]">
      <div className="relative aspect-[16/9] w-full bg-zinc-900">
        {image ? (
          <Image
            src={`${siteBase}/${image}`}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center"
            aria-hidden="true"
          >
            <Icon className="text-orange-300" size={48} strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-300">
            {category}
          </p>
          {featured && (
            <span className="shrink-0 text-xs text-zinc-500">
              Featured project
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="mt-3 leading-7 text-zinc-300">{description}</p>
        {highlights && (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="text-orange-400" aria-hidden="true">
                  /
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-5">
          <Tags items={technologies} />
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded bg-orange-400 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-300"
            >
              View Project <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 300);

    window.addEventListener("scroll", updateVisibility);
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const navItems = [
    ["about", "About"],
    ["work", "Experience"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["education", "Education"],
    ["certifications", "Certifications"],
    ["contact", "Contact"],
  ];

  return (
    <div className="min-h-screen bg-[#101312] text-zinc-100 selection:bg-orange-400 selection:text-zinc-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101312]/95 backdrop-blur">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="font-semibold tracking-tight text-white"
            onClick={() => setMenuOpen(false)}
          >
            VS<span className="text-orange-400">.</span>
            <span className="sr-only"> Veenayak Sirohi</span>
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href={resumePath}
              download="Veenayak-Sirohi-Resume.pdf"
              className="inline-flex items-center gap-2 rounded bg-orange-400 px-3 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-300"
            >
              <Download size={15} aria-hidden="true" /> Resume
            </a>
          </div>
          <button
            type="button"
            className="rounded p-2 text-zinc-200 hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#101312] px-5 py-3 md:hidden">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1">
              {navItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href={resumePath}
                download="Veenayak-Sirohi-Resume.pdf"
                className="col-span-2 mt-1 inline-flex items-center gap-2 rounded bg-orange-400 px-3 py-2 text-sm font-semibold text-zinc-950"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="hero"
          className="relative isolate flex min-h-[720px] scroll-mt-16 items-center overflow-hidden border-b border-white/10 pt-16"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
            <div className="animate-[fadeIn_.7s_ease-out_both]">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-3 py-1.5 text-sm text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" /> DevOps
                Engineer · SarvaGram
              </p>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Veenayak <span className="text-orange-400">Sirohi</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                I am a DevOps Engineer at SarvaGram with a background in
                Computer Science and CDAC PGCP-ITISS. I work with cloud
                infrastructure, CI/CD automation, containerization,
                infrastructure as code, monitoring, and application security. I
                enjoy building secure, reliable, and automated software delivery
                workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded bg-orange-400 px-5 py-3 font-semibold text-zinc-950 transition-colors hover:bg-orange-300"
                >
                  View Projects <ArrowDownRight size={17} />
                </a>
                <a
                  href={resumePath}
                  download="Veenayak-Sirohi-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded border border-zinc-600 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:border-zinc-300 hover:bg-white/5"
                >
                  <Download size={17} /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded border border-zinc-600 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:border-zinc-300 hover:bg-white/5"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-7 flex items-center gap-5">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Github size={17} /> GitHub Profile <ArrowUpRight size={14} />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Linkedin size={17} /> LinkedIn Profile{" "}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <aside
              className="flex items-center gap-4 border-l border-orange-300/40 py-4 pl-5 lg:block lg:pl-8"
              aria-label="Portrait and current focus"
            >
              <div className="relative h-32 w-28 shrink-0 overflow-hidden border border-zinc-700 sm:h-40 sm:w-36 lg:h-72 lg:w-full lg:max-w-[300px]">
                <Image
                  src={`${siteBase}/profile-avatar.jpg`}
                  alt="Portrait of Veenayak Sirohi"
                  fill
                  priority
                  sizes="(min-width: 1024px) 300px, 144px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                  Current focus
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug text-zinc-100 lg:mt-5 lg:text-2xl">
                  Cloud infrastructure
                  <br />
                  CI/CD automation
                  <br />
                  DevSecOps & observability
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin size={15} className="text-orange-400" /> Pune,
                  Maharashtra, India
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[.6fr_1.4fr]">
            <SectionHeading eyebrow="Profile" title="About me" />
            <div className="max-w-3xl text-base leading-8 text-zinc-300">
              <p>
                Based in Hapur, Uttar Pradesh, and currently working in Pune, I
                am a DevOps Engineer at SarvaGram contributing to cloud
                infrastructure and automation. My background includes a B.Tech
                in Computer Science and C-DAC PGCP-ITISS in IT Infrastructure,
                Systems and Security.
              </p>
              <p className="mt-4">
                I work with AWS, Docker, Kubernetes, Terraform, and GitHub
                Actions, and am interested in CI/CD, DevSecOps, monitoring,
                cloud infrastructure, and security automation.
              </p>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-20 border-b border-white/10 bg-[#151917]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading
              eyebrow="Career"
              title="Professional experience"
              description="Current role first, followed by previous experience."
            />
            <div className="space-y-5">
              {experience.map((job) => (
                <article
                  key={job.company}
                  className={`border-l-2 ${job.current ? "border-orange-400" : "border-zinc-700"} bg-[#101312] p-5 sm:p-7`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {job.logo && (
                        <div className="relative flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden rounded border border-zinc-700 bg-white p-2">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            fill
                            sizes="96px"
                            className="object-contain p-2"
                          />
                        </div>
                      )}
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">
                            {job.role}
                          </h3>
                          {job.current && (
                            <span className="rounded border border-orange-300/30 bg-orange-300/10 px-2 py-1 text-xs font-medium text-orange-200">
                              Current role
                            </span>
                          )}
                        </div>
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-1 font-medium text-orange-300 hover:text-orange-200"
                        >
                          {job.company}
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400">{job.date}</p>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    {job.employment} · {job.location}
                  </p>
                  <p className="mt-5 max-w-4xl leading-7 text-zinc-300">
                    {job.description}
                  </p>
                  {job.current ? null : (
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
                      <li>Flask REST APIs with request validation</li>
                      <li>PostgreSQL and query indexing</li>
                      <li>JWT authentication and role-based access control</li>
                      <li>Docker, pytest, and GitHub Actions</li>
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading
              eyebrow="Toolkit"
              title="Technical skills"
              description="Tools and technologies across cloud, delivery automation, application security, and backend development."
            />
            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
                <div
                  key={group.title}
                  className="border-t border-zinc-700 pt-4"
                >
                  <h3 className="mb-4 text-base font-semibold text-zinc-100">
                    {group.title}
                  </h3>
                  <Tags items={group.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 border-b border-white/10 bg-[#151917]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects"
              description="DevSecOps, AI-assisted fact-checking, and web development projects."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              <ProjectCard
                title="AnzenOps — End-to-End DevSecOps CI/CD Pipeline With Observability"
                category="DevSecOps · Observability"
                description="Built an end-to-end DevSecOps CI/CD pipeline for a three-tier React, Flask, and PostgreSQL application deployed on Amazon EKS. Automated infrastructure provisioning with Terraform and application build and deployment using GitHub Actions. Integrated secret scanning, static code analysis, software composition analysis, SBOM generation, container image and Infrastructure-as-Code scanning, and dynamic application security testing. Used DefectDojo for vulnerability management and Prometheus and Grafana for monitoring Kubernetes and application performance."
                technologies={devSecOpsTools}
                highlights={securityChecks}
                repository="https://github.com/Siddhantkpatil/DevSecOps_CdacProject"
                featured
              />
              <ProjectCard
                title="Fake News Detection System — AI-Powered Video Fact-Checking"
                category="AI · Backend"
                description="Developed an AI-based video fact-checking system that processes uploaded videos, converts speech into text using Whisper, identifies important claims using BERT, and verifies claims using Perplexity AI and external sources. Built Flask APIs and a simple user interface to automate video processing and display verification results."
                technologies={[
                  "Python",
                  "Flask",
                  "Whisper",
                  "BERT",
                  "Perplexity AI",
                ]}
                icon={BriefcaseBusiness}
              />
              {additionalProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  repository={project.repository}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="scroll-mt-20 border-b border-white/10"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading eyebrow="Education" title="Academic background" />
            <div className="grid gap-4 md:grid-cols-2">
              {education.map((item, index) => (
                <article
                  key={item.program}
                  className="border border-zinc-700 bg-[#151917] p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded border border-zinc-700 bg-white p-2">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">
                        {index === 0
                          ? "Postgraduate"
                          : index === 1
                            ? "Undergraduate"
                            : "School"}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                        {item.program}
                      </h3>
                      <p className="mt-2 text-zinc-300">{item.institution}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  {index === 0 && (
                    <details className="mt-4 border-t border-zinc-700 pt-3 text-sm">
                      <summary className="cursor-pointer font-medium text-orange-300">
                        View module results
                      </summary>
                      <ul className="mt-3 space-y-2 text-zinc-400">
                        {cdacModules.map(([module, marks]) => (
                          <li
                            key={module}
                            className="flex justify-between gap-4"
                          >
                            <span>{module}</span>
                            <span className="shrink-0 text-zinc-300">
                              {marks}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="certifications"
          className="scroll-mt-20 border-b border-white/10 bg-[#151917]"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading
              eyebrow="Professional learning"
              title="Certifications"
            />
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <li
                  key={`${certification.issuer}-${certification.title}`}
                  className="flex min-h-24 flex-col border border-zinc-700 bg-[#101312] p-5"
                >
                  <div className="flex items-start gap-3">
                    {certification.logoFile ? (
                      <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded bg-white p-1">
                        <Image
                          src={`${siteBase}/${certification.logoFile}`}
                          alt={`${certification.issuer} logo`}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>
                    ) : (
                      <ShieldCheck
                        className="mt-0.5 shrink-0 text-orange-400"
                        size={19}
                      />
                    )}
                    <div className="min-w-0">
                      <h3 className="font-medium leading-snug text-white">
                        {certification.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-400">
                        {certification.issuer}
                      </p>
                    </div>
                  </div>
                  {certification.certificateFile && (
                    <a
                      href={`${siteBase}/certificate_img/${encodeURIComponent(certification.certificateFile)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200"
                    >
                      Verify Credential <ArrowUpRight size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Contact"
              title="Get in touch"
              description="For professional enquiries, reach me using any of the links below."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:veenayaksirohi@gmail.com"
                className="flex items-center gap-3 border border-zinc-700 p-4 transition-colors hover:border-orange-300/60"
              >
                <Mail className="text-orange-400" size={19} />
                <span>
                  <span className="block text-xs text-zinc-400">Email</span>
                  <span className="mt-1 block text-sm text-zinc-200">
                    veenayaksirohi@gmail.com
                  </span>
                </span>
              </a>
              <a
                href="tel:+917302223304"
                className="flex items-center gap-3 border border-zinc-700 p-4 transition-colors hover:border-orange-300/60"
              >
                <Phone className="text-orange-400" size={19} />
                <span>
                  <span className="block text-xs text-zinc-400">Phone</span>
                  <span className="mt-1 block text-sm text-zinc-200">
                    +91 73022 23304
                  </span>
                </span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-zinc-700 p-4 transition-colors hover:border-orange-300/60"
              >
                <Linkedin className="text-orange-400" size={19} />
                <span>
                  <span className="block text-xs text-zinc-400">LinkedIn</span>
                  <span className="mt-1 block text-sm text-zinc-200">
                    veenayaksirohi
                  </span>
                </span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-zinc-700 p-4 transition-colors hover:border-orange-300/60"
              >
                <Github className="text-orange-400" size={19} />
                <span>
                  <span className="block text-xs text-zinc-400">GitHub</span>
                  <span className="mt-1 block text-sm text-zinc-200">
                    veenayaksirohi
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Veenayak Sirohi · DevOps Engineer</p>
          <p>
            Hapur, Uttar Pradesh, India · Working in Pune, Maharashtra, India
          </p>
        </div>
      </footer>
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded border border-orange-300 bg-orange-400 text-zinc-950 shadow-lg transition-colors hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
