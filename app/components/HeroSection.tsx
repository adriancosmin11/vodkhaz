"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative h-auto sm:min-h-screen sm:flex sm:items-center sm:justify-center overflow-hidden pt-24 pb-24 sm:py-0">
            {/* ── Background Layers ─────────────────────────── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, #0F2B0F 0%, #050505 100%)",
                }}
            />
            {/* Green glow */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[700px] opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(45,107,52,0.6) 0%, transparent 70%)",
                }}
            />
            {/* Gold rim light */}
            <div
                className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-20"
                style={{
                    background:
                        "radial-gradient(circle, rgba(201,168,76,0.5) 0%, transparent 70%)",
                }}
            />
            {/* Dark vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, #050505 100%)",
                }}
            />

            {/* ── Background Content Container (Strict Clipping) ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* ── Palm Leaf Silhouettes ─────────────────────── */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <svg
                        viewBox="0 0 1440 900"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <path d="M-50 0C100 150 200 80 300 200C200 180 50 250-50 120Z" fill="#2D6B34" />
                        <path d="M-20 -30C130 100 250 50 350 180C220 150 80 220-20 100Z" fill="#1A3A1A" />
                        <path d="M1490 0C1340 150 1240 80 1140 200C1240 180 1390 250 1490 120Z" fill="#2D6B34" />
                        <path d="M1460 -30C1310 100 1190 50 1090 180C1220 150 1360 220 1460 100Z" fill="#1A3A1A" />
                        <path d="M200 900C250 750 400 800 500 700C420 780 280 820 200 900Z" fill="#1A3A1A" />
                        <path d="M1200 900C1180 780 1050 800 950 720C1020 790 1150 830 1200 900Z" fill="#2D6B34" />
                    </svg>
                </div>

                {/* ── Elephant Image — LEFT ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 0.15, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-[5%] sm:left-[10%] top-1/2 -translate-y-1/2 w-[45%] max-w-[650px] hidden sm:block"
                >
                    <Image
                        src="/images/elephant-bg.png"
                        alt=""
                        width={650}
                        height={780}
                        className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(45,107,52,0.2)]"
                        priority
                    />
                </motion.div>

                {/* ── Bottle Image — RIGHT ──────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 0.18, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-[5%] sm:right-[10%] top-1/2 -translate-y-1/2 w-[40%] max-w-[550px] hidden sm:block"
                >
                    <Image
                        src="/images/bottle-bg.png"
                        alt=""
                        width={550}
                        height={960}
                        className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(201,168,76,0.15)]"
                        priority
                    />
                </motion.div>

                {/* ── Mobile: Hidden by user request ─── */}
            </div>

            {/* ── Content ───────────────────────────────────── */}
            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto sm:pt-0">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[12px] sm:text-xs tracking-[0.2em] sm:tracking-[0.35em] text-gold/60 uppercase mb-3 sm:mb-6 px-4"
                >
                    Gust Tropical · Spirit Intens
                </motion.p>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
                >
                    <div className="flex justify-center mb-3 sm:mb-6">
                        <div className="logo-container scale-[0.90] sm:scale-150">
                            <span className="vodkhaz-logo text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">VODKHAZ</span>
                        </div>
                    </div>
                    <span className="text-white/90 text-[19px] sm:text-3xl lg:text-4xl font-light tracking-[0.04em] mt-2 sm:mt-2 block">
                        Green Party Edition
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-4 sm:mt-6 text-white/40 text-[15px] sm:text-base max-w-md mx-auto leading-relaxed"
                >
                    Vodcă premium, distilată cu grijă pentru un gust autentic.
                    Ideală servită rece sau în cocktailuri.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-6 sm:mt-10"
                >
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                            document
                                .querySelector("#produs")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="btn-shine px-10 py-4 rounded-xl text-sm font-semibold tracking-[0.1em] uppercase cursor-pointer transition-all duration-300"
                        style={{
                            border: "1px solid rgba(201,168,76,0.4)",
                            color: "#C9A84C",
                            background: "rgba(201,168,76,0.06)",
                        }}
                    >
                        Cumpără Acum
                    </motion.button>
                </motion.div>

                {/* Scroll indicator - hidden on mobile, no margin */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-0 hidden sm:block sm:mt-20"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border border-white/15 mx-auto flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 rounded-full bg-gold/40" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
