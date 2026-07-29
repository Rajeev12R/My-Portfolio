import React, { useState } from "react";
import Link from "next/link";
import { LuGithub, LuExternalLink, LuArrowRight, LuPlay } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Investment AI",
    role: "AI Engineer",
    timeline: "2026",
    problem: "Replicating professional investment due diligence requires significant time, manual effort, and synthesizing data across multiple disparate sources.",
    solution: "Built an AI-powered Investment Research Agent using an agentic workflow that gathers structured evidence, analyzes financials and risks, and synthesizes findings into an explainable report.",
    outcome: "Streamlined the investment research workflow, providing a comprehensive analysis framework that mimics a junior investment analyst.",
    tech: ["AI Agents", "LLMs", "Data Analysis", "Finance"],
    videoUrl: "/InvestmentAI.mp4",
    category: "AI · Finance",
    github: "https://github.com/Rajeev12R/InvestmentAI",
    demo: "https://investment-ai-gray.vercel.app/",
  },
  {
    id: 2,
    title: "Converge-X",
    role: "Full Stack Engineer",
    timeline: "2025",
    problem: "Remote teams lacked a unified platform for synchronous collaboration, leading to fragmented workflows across multiple apps for video, chat, and document editing.",
    solution: "Architected a real-time collaboration ecosystem integrating WebRTC for low-latency conferencing and WebSockets for instantaneous state synchronization across shared whiteboards and documents.",
    outcome: "Reduced context switching by 40% and delivered a seamless sub-100ms latency experience for distributed teams.",
    tech: ["React", "WebSockets", "Socket.io", "MongoDB", "WebRTC"],
    videoUrl: "/Rajeev Ranjan_s Video - Feb 14, 2026.mp4",
    category: "Real-time Infrastructure",
    github: "https://github.com/rajeev12r/converge-x",
    demo: "https://drive.google.com/file/d/1K33Sa344Q0UoqBOUKKsNDaRsB8oaT2ja/view",
  },
  {
    id: 3,
    title: "Resume-AI",
    role: "AI Integration Lead",
    timeline: "2025",
    problem: "Job seekers struggled to optimize their resumes for Applicant Tracking Systems (ATS) without expensive consulting services.",
    solution: "Developed an intelligent parsing engine that leverages Gemini AI to analyze resume structure against industry-specific keywords, providing actionable, real-time feedback and scoring.",
    outcome: "Helped over 1,000 early access users improve their ATS match rate by an average of 35%.",
    tech: ["TypeScript", "Gemini AI", "Next.js", "Tailwind"],
    videoUrl: "/Resume_Score_Checker.mp4",
    category: "AI · SaaS",
    github: "https://github.com/Rajeev12R/Resume-Score-Checker",
    demo: "https://resume-ai-score-checker.vercel.app/",
  },
  {
    id: 7,
    title: "ChessReal",
    role: "Backend Engineer",
    timeline: "2024",
    problem: "Existing browser-based chess platforms suffered from desync issues during poor network conditions on mobile devices.",
    solution: "Engineered a resilient PWA chess platform with a custom state-reconciliation algorithm over Socket.io, ensuring move integrity and instant reconnection.",
    outcome: "Achieved 99.9% uptime and zero dropped moves during active sessions.",
    tech: ["Node.js", "Express", "Socket.io", "PWA"],
    videoUrl: "/chess.mp4",
    category: "Web · Real-time Game",
    github: "https://github.com/Rajeev12R/chess",
    demo: "https://lnkd.in/gmvFvSTq",
  },
  {
    id: 4,
    title: "LegalDoc-AI",
    role: "Full Stack Developer",
    timeline: "2024",
    problem: "Legal professionals spent disproportionate hours manually reviewing contracts for risk clauses and compliance deviations.",
    solution: "Built a document analysis pipeline utilizing NLP models to automatically extract key clauses, flag anomalies, and generate executive summaries.",
    outcome: "Reduced contract review time by 60% for pilot law firms.",
    tech: ["Python", "NLP", "Express", "MongoDB"],
    videoUrl: "/legal-doc.mp4",
    category: "AI · Automation",
    github: "https://github.com/rajeev12r/legaldoc-ai",
    demo: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white dark:bg-black px-6 py-24 text-zinc-900 dark:text-zinc-100 overflow-hidden relative border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 mb-6 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
              Selected Work
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Case Studies
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl font-light transition-colors duration-300">
            An in-depth look at how I approach complex engineering challenges, from initial problem definition to final production rollout.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                {/* Content Side */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-xs font-mono text-zinc-500">
                    <span>{project.timeline}</span>
                    <span className="w-4 h-px bg-zinc-300 dark:bg-zinc-800 transition-colors duration-300" />
                    <span className="uppercase tracking-widest">{project.category}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">The Problem</h4>
                      <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed transition-colors duration-300">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">The Solution</h4>
                      <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed transition-colors duration-300">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">The Outcome</h4>
                      <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed transition-colors duration-300">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 transition-all duration-300 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                    >
                      <LuGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </Link>

                    {project.demo !== "#" && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white transition-all duration-300 text-sm font-semibold text-white dark:text-zinc-900"
                      >
                        <span>Live Preview</span>
                        <LuExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Media Side */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors duration-500">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src={project.videoUrl}
                      controls
                      preload="metadata"
                      title={`${project.title} Demo`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-zinc-200 dark:border-zinc-900 text-center transition-colors duration-300"
        >
          <Link
            href="https://github.com/rajeev12r"
            target="_blank"
            className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group"
          >
            <span className="font-mono text-sm uppercase tracking-widest">View All Projects Archive</span>
            <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
