"use client";

import React from "react";
import Link from "next/link";
import { LuAward, LuBadgeCheck, LuCloud, LuBrain, LuCpu, LuCode, LuUsers, LuGlobe, LuShoppingBag, LuHeart, LuCoffee, LuExternalLink, LuTrophy } from "react-icons/lu";
import { motion } from "framer-motion";

const achievementsData = [
    {
        id: 1,
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle Corporation",
        date: "Jan 2026",
        description: "Validated expertise in Oracle Cloud AI services, machine learning fundamentals, and AI/ML implementation strategies on cloud infrastructure.",
        icon: LuAward,
        link: "https://drive.google.com/file/d/130zxIOZ5MONX7RsGLQF-V7MjAZZQ8SeY/view?usp=sharing"
    },
    {
        id: 3,
        title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        issuer: "Oracle Corporation",
        date: "Jan 2026",
        description: "Demonstrated comprehensive understanding of Oracle Cloud architecture, core services, security, and pricing models for enterprise cloud solutions.",
        icon: LuCloud,
        link: "https://drive.google.com/file/d/1Q0mCU5O2uAcOfI_Xj0-2mA0cr5siXj61/view?usp=sharing"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="w-full bg-white dark:bg-black px-6 py-24 text-zinc-900 dark:text-zinc-100 border-t border-zinc-200 dark:border-zinc-900/50 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-5xl mx-auto w-full relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 mb-6 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
                            Milestones
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                        Certifications & <br/> <span className="text-zinc-500">Achievements</span>
                    </h2>

                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl font-light leading-relaxed transition-colors duration-300">
                        A curated selection of technical milestones, hackathon rankings, and official certifications that validate my expertise.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {achievementsData.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 sm:p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black flex items-center justify-center shrink-0 transition-colors duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-zinc-500">
                                        <span className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">{item.issuer}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-300" />
                                        <span>{item.date}</span>
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mt-3 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            
                            {item.link !== "#" && (
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-zinc-900 dark:hover:text-black dark:hover:bg-zinc-100 transition-colors font-medium text-sm group/btn mt-4 md:mt-0"
                                >
                                    <span>View Credential</span>
                                    <LuExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
