import React, { useState } from "react";
import Link from "next/link";
import { LuGithub, LuExternalLink, LuArrowRight } from "react-icons/lu";

const projectsData = [
    {
        id: 2,
        title: "Converge-X",
        description: "Real-time collaboration system with video conferencing, whiteboard, and synchronized document editing for distributed teams.",
        tech: ["React", "WebSockets", "Socket.io", "MongoDB", "WebRTC"],
        videoUrl: "/Rajeev Ranjan_s Video - Feb 14, 2026.mp4",
        category: "Web · Real-time",
        github: "https://github.com/rajeev12r/converge-x",
        demo: "#",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: 3,
        title: "Resume-AI",
        description: "Smart resume analysis engine that provides AI-driven feedback, ATS optimization, and personalized improvement suggestions.",
        tech: ["TypeScript", "Gemini AI", "Next.js", "Tailwind"],
        videoUrl: "/Resume_Score_Checker.mp4",
        category: "AI · SaaS",
        github: "https://github.com/Rajeev12R/Resume-Score-Checker",
        demo: "https://resume-ai-score-checker.vercel.app/",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
        {
        id: 7,
        title: "ChessReal",
        description: "Real-time multiplayer chess platform with instant move synchronization, live game state updates, and seamless cross-device experience using PWA architecture. Built from scratch to ensure low-latency gameplay and reliable socket communication.",
        tech: ["Node.js", "Express", "EJS", "Socket.io", "PWA"],
        videoUrl: "/chess.mp4",
        category: "Web · Real-time · Game",
        github: "https://github.com/Rajeev12R/chess",
        demo: "https://lnkd.in/gmvFvSTq",
        gradient: "from-gray-700/20 to-zinc-900/20"
    },
    {
        id: 4,
        title: "LegalDoc-AI",
        description: "Automated legal document parsing and analysis tool using NLP to extract key clauses, identify risks, and generate summaries.",
        tech: ["JavaScript", "Python", "NLP", "Express", "MongoDB"],
        videoUrl: "/legal-doc.mp4",
        category: "AI · Automation",
        github: "https://github.com/rajeev12r/legaldoc-ai",
        demo: "#",
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        id: 5,
        title: "SignalNet",
        description: "Low-latency messaging infrastructure built with C++ for high-performance, real-time communication at scale.",
        tech: ["C++", "WebSockets", "Redis", "Docker", "Nginx"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Infrastructure",
        github: "https://github.com/rajeev12r/signalnet",
        demo: "#",
        gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
        id: 6,
        title: "CloudSync",
        description: "Distributed file synchronization service with real-time conflict resolution and end-to-end encryption for secure cloud storage.",
        tech: ["Go", "AWS S3", "gRPC", "PostgreSQL", "React"],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Cloud · Storage",
        github: "https://github.com/rajeev12r/cloudsync",
        demo: "#",
        gradient: "from-indigo-500/20 to-violet-500/20"
    }
];

const Projects = () => {
    const [featuredIndex, setFeaturedIndex] = useState(0);

    const handleCardClick = (index) => {
        if (index !== featuredIndex) {
            setFeaturedIndex(index);
        }
    };

    return (
        <section id="projects" className="w-full bg-black px-6 py-24 text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">

                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs tracking-widest uppercase text-white/80">
                            Featured Work
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Building <span className="text-cyan-400">Production-Grade</span> Products
                    </h2>

                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        From AI-powered platforms to real-time infrastructure, here are some projects
                        that showcase my approach to building scalable, user-centric systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[...projectsData]
                        .sort((a, b) => {
                            const aIndex = projectsData.indexOf(a);
                            const bIndex = projectsData.indexOf(b);
                            if (aIndex === featuredIndex) return -1;
                            if (bIndex === featuredIndex) return 1;
                            return aIndex - bIndex;
                        })
                        .map((project) => {
                            const originalIndex = projectsData.indexOf(project);
                            const isFeatured = originalIndex === featuredIndex;

                            return (
                                <div
                                    key={project.id}
                                    onClick={() => handleCardClick(originalIndex)}
                                    className={`
                                        group relative rounded-3xl border border-white/10 p-6 
                                        overflow-hidden transition-all duration-300
                                        ${isFeatured ? 'hover:scale-[1.005]' : 'hover:scale-[1.02] cursor-pointer'}
                                        hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
                                        bg-white/3
                                        ${isFeatured ? 'md:col-span-2 lg:row-span-2' : ''}
                                    `}
                                >
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col h-full">

                                        <div className="mb-4">
                                            <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className={`font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                                            {project.title}
                                        </h3>

                                        <p className={`text-white/70 mb-6 leading-relaxed ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}>
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-white/70 hover:bg-white/10 hover:text-cyan-400 transition-all"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {isFeatured && (
                                            <div className="mb-6 rounded-2xl overflow-hidden border border-white/20 bg-black/60">
                                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                                    <iframe
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        src={project.videoUrl}
                                                        title={`${project.title} Demo`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex-1" />

                                        <div className="flex gap-3 mt-auto">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-cyan-500/50 transition-all text-sm font-medium group/btn"
                                            >
                                                <LuGithub className="w-4 h-4" />
                                                <span>View Code</span>
                                            </Link>

                                            <Link
                                                href={project.demo}
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-black hover:bg-cyan-400 transition-all text-sm font-semibold group/btn"
                                            >
                                                <span>Live Demo</span>
                                                <LuExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </div>

                                    </div>

                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {!isFeatured && (
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="px-3 py-1 rounded-full bg-cyan-500/30 border border-cyan-500/50">
                                                <span className="text-xs font-mono text-cyan-400">Click to expand</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="https://github.com/rajeev12r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
                    >
                        <span className="font-medium">View All Projects on GitHub</span>
                        <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Projects;
