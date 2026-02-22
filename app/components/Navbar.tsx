"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Acasă", href: "#top" },
        { label: "Produs", href: "#produs" },
        { label: "Cocktails", href: "#cocktails" },
        { label: "Povestea", href: "#povestea" },
        { label: "Contact", href: "#contact" },
    ];

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        if (href === "#top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
        >
            {/* ── Main Container ───────────────────────────────── */}
            <div className="max-w-7xl mx-auto relative h-14 sm:h-16 flex items-center">
                {/* Glass background */}
                <div
                    className="absolute inset-x-0 inset-y-0 transition-all duration-500 rounded-full"
                    style={{
                        background: scrolled ? "rgba(5, 5, 5, 0.85)" : "rgba(5, 5, 5, 0.45)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
                    }}
                />

                {/* ── Desktop Layout (MD+) ──────────────────────── */}
                <div className="hidden md:grid grid-cols-3 w-full items-center px-8 relative z-10">
                    {/* Left: Nav Links */}
                    <div className="flex items-center gap-6">
                        {navLinks.map((l) => (
                            <button
                                key={l.href}
                                onClick={() => scrollTo(l.href)}
                                className="text-[11px] tracking-[0.1em] text-white/50 hover:text-white transition-colors duration-300 cursor-pointer uppercase font-medium"
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="cursor-pointer"
                        >
                            <div className="logo-container sm:py-1">
                                <span className="text-xl font-bold tracking-[0.18em] vodkhaz-logo">
                                    VODKHAZ
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex items-center justify-end gap-2">
                        <button className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer">
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollTo("#produs")}
                            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{
                                background: "linear-gradient(135deg, #C9A84C, #A08030)",
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Mobile Layout (< MD) ──────────────────────── */}
                <div className="md:hidden grid grid-cols-[1fr_auto_1fr] w-full items-center px-4 relative z-10 h-full">
                    {/* Left: Hamburger */}
                    <div className="flex items-center justify-start">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-white/60 hover:text-white transition-colors cursor-pointer w-10 h-10 flex items-center justify-start"
                            aria-label="Meniu"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                {mobileOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    <>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="4" y1="12" x2="20" y2="12" />
                                        <line x1="4" y1="17" x2="20" y2="17" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-center items-center px-2">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="cursor-pointer"
                        >
                            <div className="logo-container py-0.5">
                                <span className="text-[14px] font-bold tracking-[0.14em] vodkhaz-logo uppercase">
                                    VODKHAZ
                                </span>
                            </div>
                        </button>
                    </div>

                    {/* Right: Cart */}
                    <div className="flex items-center justify-end">
                        <button
                            onClick={() => scrollTo("#produs")}
                            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                            style={{
                                background: "linear-gradient(135deg, #C9A84C, #A08030)",
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Mobile Menu Dropdown ──────────────────────── */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute top-[calc(100%+12px)] left-0 right-0 md:hidden overflow-hidden rounded-2xl border border-white/10"
                            style={{
                                background: "rgba(10, 10, 10, 0.95)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                            }}
                        >
                            <div className="px-6 py-6 flex flex-col gap-5">
                                {navLinks.map((l) => (
                                    <button
                                        key={l.href}
                                        onClick={() => scrollTo(l.href)}
                                        className="text-sm tracking-[0.06em] text-white/60 hover:text-white transition-colors text-left uppercase cursor-pointer"
                                    >
                                        {l.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
