import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter, LuHeart } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 px-6 py-8 text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <span className="text-zinc-900 dark:text-zinc-100 transition-colors duration-300">© {new Date().getFullYear()} Rajeev.</span>
                        <span className="hidden md:inline text-zinc-600 dark:text-zinc-500">Built with</span>
                        <LuHeart className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                        <span className="hidden md:inline text-zinc-600 dark:text-zinc-500">and Next.js</span>
                    </div>

                    <div className="flex items-center gap-5">
                        <Link
                            href="https://github.com/rajeev12r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            <LuGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/rajeev12r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            <LuLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://x.com/rajeev12r"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            <LuTwitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
