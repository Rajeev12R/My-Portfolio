"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter, LuMail, LuMapPin, LuSend } from "react-icons/lu";

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
        <section id="contact" className="w-full bg-black px-6 py-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_50%)]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs tracking-widest uppercase text-white/80">
                            Get In Touch
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's <span className="text-cyan-400">Connect</span>
                    </h2>

                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
                            <p className="text-white/70 mb-8">
                                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                                        <LuMail className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                                        <p className="font-medium">rajeevcodes@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-white/80">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                                        <LuMapPin className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 uppercase tracking-wider">Location</p>
                                        <p className="font-medium">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                            <h3 className="text-xl font-bold mb-6">Connect with me</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <Link
                                    href="https://github.com/rajeev12r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group aspect-square rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                                >
                                    <LuGithub className="w-8 h-8 text-white/70 group-hover:text-cyan-400 transition-colors group-hover:scale-110" />
                                    <span className="text-xs text-white/50 group-hover:text-cyan-400 transition-colors">GitHub</span>
                                </Link>

                                <Link
                                    href="https://linkedin.com/in/rajeev12r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group aspect-square rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                                >
                                    <LuLinkedin className="w-8 h-8 text-white/70 group-hover:text-cyan-400 transition-colors group-hover:scale-110" />
                                    <span className="text-xs text-white/50 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                                </Link>

                                <Link
                                    href="https://x.com/rajeev12r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group aspect-square rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                                >
                                    <LuTwitter className="w-8 h-8 text-white/70 group-hover:text-cyan-400 transition-colors group-hover:scale-110" />
                                    <span className="text-xs text-white/50 group-hover:text-cyan-400 transition-colors">X/Twitter</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/3 p-8">
                        <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02]"
                            >
                                {status === "sending" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <LuSend className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                                    Failed to send message. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
