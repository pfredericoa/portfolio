"use client";

import React, { useState } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  ChevronDown,
  Layers,
} from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Portfolio() {
  const [lang, setLang] = useState<"PT" | "EN">("PT");

  const content = {
    PT: {
      nav: { about: "Sobre", stack: "Stack", projects: "Projetos", contact: "Contato" },
      hero: {
        greeting: "👋 Olá, sou o Pedro",
        role: "Estudante de Engenharia de Software construindo soluções com código limpo, hoje em Full Stack e amanhã também em cibersegurança.",
        btnProjects: "Ver projetos",
        btnCv: "Baixar CV"
      },
      about: {
        title: "Sobre Mim",
        text: "Cursando o 4º semestre de Engenharia de Software na UCSAL, estou construindo uma base sólida em desenvolvimento Full Stack enquanto exploro cibersegurança como próxima especialização. Gosto de entender o problema antes da linha de código.",
        pills: ["Resolução de problemas", "Aprendizado contínuo", "Atenção a boas práticas", "Trabalho em equipe"]
      },
      stack: {
        title: "Stack Tecnológica",
        subtitle: "As linguagens e ferramentas que uso no dia a dia."
      },
      projects: {
        title: "Projetos Acadêmicos",
        subtitle: "Alguns dos desafios que enfrentei na faculdade — do problema à solução.",
        items: [
          {
            name: "Sistema de Gestão Acadêmica",
            stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            problem: "Dificuldade no acompanhamento centralizado de notas e frequência dos alunos.",
            solution: "Desenvolvimento de uma aplicação web full stack com painéis dinâmicos para alunos e professores.",
            result: "Redução estimada de 30% no tempo de consulta de boletins acadêmicos.",
            github: "https://github.com",
            demo: "https://github.com"
          },
          {
            name: "Simulador de Criptografia e Redes",
            stack: ["Python", "Flask", "Tailwind CSS"],
            problem: "Necessidade de visualizar de forma prática o funcionamento de algoritmos de hash e criptografia simétrica.",
            solution: "Criação de uma interface interativa baseada em web para testar chaves de criptografia em tempo real.",
            result: "Ferramenta utilizada como apoio prático em laboratórios da faculdade.",
            github: "https://github.com",
            demo: "https://github.com"
          }
        ]
      },
      contact: {
        title: "Vamos conversar?",
        subtitle: "Aberto a oportunidades, parcerias ou só trocar uma ideia sobre tecnologia.",
        emailText: "Enviar E-mail"
      }
    },
    EN: {
      nav: { about: "About", stack: "Stack", projects: "Projects", contact: "Contact" },
      hero: {
        greeting: "👋 Hi, I'm Pedro",
        role: "Software Engineering student turning problems into clean, working code — Full Stack today, Cybersecurity next.",
        btnProjects: "View projects",
        btnCv: "Download CV"
      },
      about: {
        title: "About Me",
        text: "Currently in my 4th semester of Software Engineering at UCSAL, I am building a solid foundation in Full Stack development while exploring cybersecurity as my next specialization. I love understanding the problem deeply before writing any code.",
        pills: ["Problem solving", "Continuous learning", "Best practices", "Teamwork"]
      },
      stack: {
        title: "Tech Stack",
        subtitle: "Languages and tools I use on a daily basis."
      },
      projects: {
        title: "Academic Projects",
        subtitle: "Some of the challenges I tackled during college — from problem to solution.",
        items: [
          {
            name: "Academic Management System",
            stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            problem: "Difficulty in centralized tracking of student grades and attendance.",
            solution: "Developed a full stack web application featuring dynamic dashboards for students and faculty.",
            result: "Estimated 30% reduction in time spent checking academic reports.",
            github: "https://github.com",
            demo: "https://github.com"
          },
          {
            name: "Cryptography & Network Simulator",
            stack: ["Python", "Flask", "Tailwind CSS"],
            problem: "Need for a practical visualization tool for hash algorithms and symmetric cryptography.",
            solution: "Built an interactive web-based interface to test encryption keys in real time.",
            result: "Adopted as practical support material for college lab sessions.",
            github: "https://github.com",
            demo: "https://github.com"
          }
        ]
      },
      contact: {
        title: "Let's connect?",
        subtitle: "Open to opportunities, partnerships, or just talking about tech.",
        emailText: "Send Email"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="bg-darkBg text-white min-h-screen font-sans selection:bg-lilacGlow selection:text-black">
      
      {/* 1. Header Fixo */}
      <header className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-wider text-lilacGlow flex items-center gap-2">
            <span className="bg-cardBg px-2 py-1 rounded border border-accentPrimary">PM</span> Pedro
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-lilacGlow transition-colors">{t.nav.about}</a>
            <a href="#stack" className="hover:text-lilacGlow transition-colors">{t.nav.stack}</a>
            <a href="#projects" className="hover:text-lilacGlow transition-colors">{t.nav.projects}</a>
            <a href="#contact" className="hover:text-lilacGlow transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-accentPrimary bg-cardBg/50 hover:bg-accentPrimary transition-all text-lilacGlow"
            >
              {lang === "PT" ? "EN 🇺🇸" : "PT 🇧🇷"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-accentPrimary/20 rounded-full blur-[120px] pointer-events-none -top-20 -left-20"></div>
        
        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t.hero.greeting}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            {t.hero.role}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-cardBg border border-accentPrimary hover:border-lilacGlow text-white font-medium transition-all shadow-lg hover:shadow-lilacGlow/20 flex items-center gap-2"
            >
              {t.hero.btnProjects} <ChevronDown size={16} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-transparent border border-white/20 hover:border-lilacGlow text-gray-300 hover:text-white font-medium transition-all"
            >
              {t.hero.btnCv}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Sobre Mim + Qualidades */}
      <section id="about" className="py-24 px-6 border-t border-white/10 bg-gradient-to-b from-darkBg to-cardBg/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-lilacGlow flex items-center gap-2">
              <Terminal size={28} /> {t.about.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.about.text}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Soft Skills</h3>
            {t.about.pills.map((pill, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-cardBg/60 border border-accentPrimary/40 hover:border-lilacGlow transition-all flex items-center gap-3 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-lilacGlow"></div>
                <span className="font-medium text-gray-200">{pill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stack Tecnológica */}
      <section id="stack" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-lilacGlow">{t.stack.title}</h2>
          <p className="text-gray-400 mb-12">{t.stack.subtitle}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "TypeScript", icon: <Code2 className="text-lilacGlow" /> },
              { name: "React / Next.js", icon: <Globe className="text-lilacGlow" /> },
              { name: "Node.js", icon: <Layers className="text-lilacGlow" /> },
              { name: "Python", icon: <Cpu className="text-lilacGlow" /> },
              { name: "PostgreSQL", icon: <Database className="text-lilacGlow" /> },
              { name: "Tailwind CSS", icon: <Code2 className="text-lilacGlow" /> },
              { name: "Git & GitHub", icon: <Terminal className="text-lilacGlow" /> },
              { name: "Cibersegurança (Bas.)", icon: <ShieldCheck className="text-lilacGlow" /> },
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-cardBg/40 border border-white/10 hover:border-lilacGlow hover:bg-cardBg transition-all flex flex-col items-center justify-center gap-3 group cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div className="p-3 rounded-xl bg-accentPrimary/40 group-hover:bg-accentPrimary transition-colors">
                  {tech.icon}
                </div>
                <span className="font-medium text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vitrine de Projetos Acadêmicos */}
      <section id="projects" className="py-24 px-6 border-t border-white/10 bg-cardBg/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3 text-lilacGlow">{t.projects.title}</h2>
            <p className="text-gray-400">{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.projects.items.map((project, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-cardBg/40 border border-accentPrimary/40 p-8 flex flex-col justify-between hover:border-lilacGlow transition-all shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((st, sIdx) => (
                      <span key={sIdx} className="text-xs px-2.5 py-1 rounded-md bg-accentPrimary text-lilacGlow font-medium">
                        {st}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{project.name}</h3>

                  <div className="space-y-3 text-sm text-gray-300 mb-6">
                    <p><strong className="text-lilacGlow">Problema:</strong> {project.problem}</p>
                    <p><strong className="text-lilacGlow">Solução:</strong> {project.solution}</p>
                    <p><strong className="text-lilacGlow">Resultado:</strong> {project.result}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-lilacGlow transition-colors"
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-lilacGlow transition-colors"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contato */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 bg-cardBg text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.contact.title}</h2>
          <p className="text-gray-300 mb-10 max-w-lg mx-auto">{t.contact.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-4">
  <a 
    href="mailto:seuemail@gmail.com" 
    className="px-6 py-3 rounded-lg bg-accentPrimary hover:bg-lilacGlow hover:text-black text-white font-medium transition-all flex items-center gap-2 shadow-lg"
  >
    <Mail size={18} /> {t.contact.emailText}
  </a>
  <a 
    href="https://github.com/pfredericoa" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-lg bg-darkBg/60 border border-accentPrimary hover:border-lilacGlow text-white font-medium transition-all flex items-center gap-2"
  >
    <GithubIcon size={18} /> GitHub
  </a>
  <a 
    href="https://www.linkedin.com/in/pfredericoa/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-lg bg-darkBg/60 border border-accentPrimary hover:border-lilacGlow text-white font-medium transition-all flex items-center gap-2"
  >
    <LinkedinIcon size={18} /> LinkedIn
  </a>
</div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-sm text-gray-500 bg-darkBg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pedro. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Feito com <span className="text-lilacGlow font-medium">React + Next.js + Tailwind</span>
          </p>
        </div>
      </footer>

    </div>
  );
}