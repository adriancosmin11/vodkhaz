"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Gallery items with gradient placeholders ─────── */
const posts = [
    {
        id: 1,
        gradient: "radial-gradient(ellipse at 30% 40%, rgba(45,107,52,0.5) 0%, rgba(5,5,5,0.95) 70%)",
        caption: "Craft & Jungle vibes 🌴",
    },
    {
        id: 2,
        gradient: "radial-gradient(ellipse at 60% 30%, rgba(201,168,76,0.35) 0%, rgba(5,5,5,0.95) 70%)",
        caption: "Gold Standard ✨",
    },
    {
        id: 3,
        gradient: "radial-gradient(ellipse at 40% 60%, rgba(255,215,0,0.2) 0%, rgba(5,5,5,0.95) 70%)",
        caption: "Tropical Mix 🌴",
    },
    {
        id: 4,
        gradient: "radial-gradient(ellipse at 70% 50%, rgba(45,107,52,0.4) 0%, rgba(5,5,5,0.95) 70%)",
        caption: "Wild Spirit 🐘",
    },
    {
        id: 5,
        gradient: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.25) 0%, rgba(5,5,5,0.95) 70%)",
        caption: "Premium Night 🥂",
    },
    {
        id: 6,
        gradient: "radial-gradient(ellipse at 35% 55%, rgba(45,107,52,0.35) 0%, rgba(5,5,5,0.95) 70%)",
        caption: "Tropical Essence 🌿",
    },
];

/* ── Instagram icon SVG ───────────────────────────── */
function InstagramIcon() {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

export default function SocialGallery() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section
            ref={ref}
            id="social"
            className="relative py-24 sm:py-36 px-6 overflow-hidden"
        >
            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-[11px] tracking-[0.35em] text-gold/40 uppercase mb-4"
                >
                    @vodkhaz
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-5xl font-bold tracking-tight"
                >
                    Pe <span className="gold-shimmer">Instagram</span>
                </motion.h2>
            </div>

            {/* Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                {posts.map((post, idx) => (
                    <motion.a
                        key={post.id}
                        href="https://www.instagram.com/vodk.haz"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.7,
                            delay: 0.1 + idx * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer"
                    >
                        {/* Background */}
                        <div
                            className="absolute inset-0 transition-all duration-500 group-hover:brightness-125 group-hover:scale-105"
                            style={{ background: post.gradient }}
                        />

                        {/* Glass border on hover */}
                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-lg sm:rounded-xl transition-all duration-500" />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 flex flex-col items-center gap-2">
                                <InstagramIcon />
                                <p className="text-[10px] tracking-[0.1em] text-white/70 text-center px-4">
                                    {post.caption}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Follow CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-center mt-10 sm:mt-16"
            >
                <a
                    href="https://www.instagram.com/vodk.haz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors duration-300"
                >
                    <InstagramIcon />
                    <span className="tracking-wide">Urmărește-ne</span>
                </a>
            </motion.div>
        </section>
    );
}
