"use client";

import React from "react";
import Link from "next/link";
import { LuDownload, LuFileCode2, LuBrain, LuRocket, LuGraduationCap, LuCalendarDays, LuMapPin, LuAward } from "react-icons/lu";

const SpatialEducationCard = ({ edu, idx, isLast }) => {
    const cardRef = React.useRef(null);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [cardCenter, setCardCenter] = React.useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setCardCenter({
            x: rect.width / 2,
            y: rect.height / 2,
        });
    };

    return (
        <div className="relative group">
            {/* Timeline Orb & Line (Desktop & Mobile Support) */}
            <div className="absolute -left-8 top-8 md:static md:flex items-center mb-6 z-20 pointer-events-none">
                <div className={`w-6 h-6 md:w-4 md:h-4 rounded-full bg-black border-2 border-white/20 ${edu.orbColor} transition-all duration-300 z-10 shrink group-hover:scale-150`} />
                
                {!isLast && (
                    <div className="hidden md:block flex-1 h-[2px] bg-white/5 group-hover:bg-white/20 transition-colors duration-300 relative -ml-1 overflow-hidden">
                        <div 
                            className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" 
                        />
                    </div>
                )}
                {isLast && (
                    <div className="hidden md:block flex-1 h-[2px] bg-linear-to-r from-white/5 to-transparent relative -ml-1" />
                )}
            </div>

            {/* Magnetic Parallax Card Container */}
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setIsHovered(false); setMousePosition({ x: 0, y: 0 }); }}
                className="relative h-full transition-transform duration-200 ease-out"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                }}
            >
                {/* The beautifully styled glass card */}
                <div 
                    className={`rounded-3xl border border-white/10 ${edu.border} bg-white/3 p-6 h-full relative overflow-hidden transition-all duration-300 ease-out`}
                    style={{
                        transform: isHovered 
                            ? `rotateX(${-(mousePosition.y - cardCenter.y) / 10}deg) rotateY(${(mousePosition.x - cardCenter.x) / 10}deg) scale3d(1.02, 1.02, 1.02)` 
                            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                        transformStyle: "preserve-3d",
                        boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.6)' : 'none'
                    }}
                >
                    {/* Interactive Spotlight following mouse */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 80%)`
                        }}
                    />

                    {/* Static Background Glow */}
                    <div className={`absolute inset-0 bg-linear-to-br ${edu.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-out z-0 pointer-events-none`} />
                    
                    {/* Card Content with Z-axis Parallax */}
                    <div 
                        className="relative z-10 h-full flex flex-col"
                        style={{
                            transform: isHovered ? 'translateZ(50px)' : 'translateZ(0px)',
                            transition: 'transform 0.3s ease-out'
                        }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110">
                            <LuGraduationCap className={`w-6 h-6 ${edu.iconColor}`} />
                        </div>
                        
                        <h4 className="text-xl font-bold mb-2 text-white/90 group-hover:text-white transition-colors">
                            {edu.degree}
                        </h4>
                        <p className={`font-medium text-sm mb-6 ${edu.iconColor}`}>
                            {edu.institution}
                        </p>
                        
                        <div className="space-y-3 text-sm text-white/60 mt-auto pt-4">
                            <div className="flex items-center gap-3">
                                <LuCalendarDays className="w-4 h-4 shrink-0 group-hover:text-white transition-colors" />
                                <span className="group-hover:text-white/90 transition-colors">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <LuMapPin className="w-4 h-4 shrink-0 group-hover:text-white transition-colors" />
                                <span className="group-hover:text-white/90 transition-colors">{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/90 font-medium group-hover:text-white transition-colors">
                                <LuAward className="w-4 h-4 shrink-0 transition-colors" />
                                <span>{edu.achievement}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    const educationData = [
        {
            degree: "B.Tech - Computer Science & Engineering",
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            period: "Aug 2023 - Present",
            achievement: "CGPA: 7.96",
            color: "from-cyan-500/20 to-blue-500/20",
            border: "group-hover:border-cyan-500/50",
            iconColor: "text-cyan-400",
            orbColor: "group-hover:border-cyan-400 group-hover:bg-cyan-400/20"
        },
        {
            degree: "Intermediate (Class XII)",
            institution: "Guru Gobind Singh Public School",
            location: "Nashik, Maharashtra",
            period: "Aug 2022 - Mar 2023",
            achievement: "Percentage: 68%",
            color: "from-purple-500/20 to-pink-500/20",
            border: "group-hover:border-purple-500/50",
            iconColor: "text-purple-400",
            orbColor: "group-hover:border-purple-400 group-hover:bg-purple-400/20"
        },
        {
            degree: "Matriculation (Class X)",
            institution: "Patra Gurukul International School",
            location: "Barwaha, Madhya Pradesh",
            period: "Apr 2021 - May 2022",
            achievement: "Percentage: 92%",
            color: "from-emerald-500/20 to-teal-500/20",
            border: "group-hover:border-emerald-500/50",
            iconColor: "text-emerald-400",
            orbColor: "group-hover:border-emerald-400 group-hover:bg-emerald-400/20"
        }
    ];

    return (
        <section id="about" className="w-full bg-black px-6 py-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs tracking-widest uppercase text-white/80">
                            About Me
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Full Stack Developer & <span className="text-cyan-400">AI Enthusiast</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>

                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>
                                    I'm a passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span> specializing in building modern web applications with cutting-edge technologies. With expertise in both frontend and backend development, I create seamless digital experiences that solve real-world problems.
                                </p>

                                <p>
                                    My journey in tech has led me to work on diverse projects ranging from <span className="text-white font-medium">AI-powered healthcare platforms</span> to <span className="text-white font-medium">real-time collaboration tools</span>, always pushing the boundaries of what's possible with code.
                                </p>

                                <p>
                                    I'm particularly excited about <span className="text-cyan-400 font-semibold">AI/ML integration</span>, cloud architecture, and creating intuitive user experiences that make technology accessible to everyone.
                                </p>
                            </div>

                            <Link
                                href="/Resume.pdf"
                                download
                                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                            >
                                <LuDownload className="w-5 h-5" />
                                <span>Download Resume</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <h3 className="text-2xl font-bold mb-6">What I Do</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <LuFileCode2 className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Full Stack Development</h4>
                                        <p className="text-sm text-white/60">
                                            Building scalable web applications with React, Next.js, Node.js, and modern cloud infrastructure.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <LuBrain className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">AI Integration</h4>
                                        <p className="text-sm text-white/60">
                                            Integrating AI/ML models into production systems using OpenAI, Gemini, and custom ML pipelines.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                        <LuRocket className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">System Architecture</h4>
                                        <p className="text-sm text-white/60">
                                            Designing and implementing distributed systems, microservices, and real-time infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">20+</div>
                                    <div className="text-xs text-white/60 uppercase tracking-wider">Projects</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">10+</div>
                                    <div className="text-xs text-white/60 uppercase tracking-wider">Technologies</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
                                    <div className="text-xs text-white/60 uppercase tracking-wider">Dedication</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="flex items-center gap-4 mb-12">
                        <h3 className="text-2xl font-bold">Education Journey</h3>
                        <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
                    </div>

                    <div className="relative pl-8 md:pl-0">
                        <div className="absolute left-[11px] top-6 bottom-4 w-[2px] bg-linear-to-b from-white/10 to-transparent md:hidden" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
                            {educationData.map((edu, idx) => (
                                <SpatialEducationCard 
                                    key={idx} 
                                    edu={edu} 
                                    idx={idx} 
                                    isLast={idx === educationData.length - 1} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
