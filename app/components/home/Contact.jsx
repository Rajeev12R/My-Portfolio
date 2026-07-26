"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "0bd2f5e9-6e41-47a2-b84e-66e0c5f2678b",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(""), 5000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
            setTimeout(() => setStatus(""), 5000);
        }
    };

    return (
        <section id="contact" className="w-full bg-white dark:bg-black px-6 py-24 text-zinc-900 dark:text-zinc-100 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 mb-6 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 dark:text-zinc-400">
                            Get In Touch
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                        Let's <span className="text-zinc-500">Connect</span>
                    </h2>

                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-10 transition-colors duration-300">
                            <h3 className="text-2xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">Let's work together</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-light leading-relaxed transition-colors duration-300">
                                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 transition-colors duration-300">
                                        <LuMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono mb-1">Email</p>
                                        <p className="font-medium break-all text-zinc-900 dark:text-zinc-100">rajeevcodes@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 transition-colors duration-300">
                                        <LuMapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono mb-1">Location</p>
                                        <p className="font-medium text-zinc-900 dark:text-zinc-100">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-10 transition-colors duration-300">
                            <h3 className="text-xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">Connect with me</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <Link
                                    href="https://github.com/rajeev12r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col items-center justify-center gap-3"
                                >
                                    <LuGithub className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">GitHub</span>
                                </Link>

                                <Link
                                    href="https://linkedin.com/in/rajeev12r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col items-center justify-center gap-3"
                                >
                                    <LuLinkedin className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">LinkedIn</span>
                                </Link>

                                <Link
                                    href="https://x.com/rajeev12r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col items-center justify-center gap-3"
                                >
                                    <LuTwitter className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">X/Twitter</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-10 transition-colors duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-8 tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2 transition-colors duration-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:bg-zinc-50 dark:focus:bg-zinc-800 transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2 transition-colors duration-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:bg-zinc-50 dark:focus:bg-zinc-800 transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2 transition-colors duration-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 focus:bg-zinc-50 dark:focus:bg-zinc-800 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full px-6 py-4 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black font-semibold hover:bg-zinc-800 dark:hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/20 dark:border-black/20 border-t-white dark:border-t-black rounded-full animate-spin transition-colors duration-300" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <LuSend className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm flex items-center gap-3 transition-colors duration-300">
                                    <div className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm flex items-center gap-3 transition-colors duration-300">
                                    <div className="w-2 h-2 rounded-full bg-zinc-500" />
                                    Failed to send message. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
