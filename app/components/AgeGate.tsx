"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate() {
    const [verified, setVerified] = useState<boolean | null>(null);
    const [denied, setDenied] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("vodkhaz_age_verified");
        setVerified(stored === "true");
    }, []);

    const handleYes = () => {
        localStorage.setItem("vodkhaz_age_verified", "true");
        setVerified(true);
    };

    const handleNo = () => {
        setDenied(true);
    };

    // Still loading from localStorage
    if (verified === null) return null;
    // Already verified
    if (verified) return null;

    return (
        <AnimatePresence>
            {!verified && (
                <motion.div
                    key="age-gate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                    style={{
                        background: "rgba(5, 5, 5, 0.85)",
                        backdropFilter: "blur(40px)",
                        WebkitBackdropFilter: "blur(40px)",
                    }}
                >
                    {/* Ambient glow */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
                            }}
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative glass-gold rounded-2xl px-10 py-12 sm:px-16 sm:py-16 max-w-md w-[90%] text-center"
                    >
                        {/* Logo */}
                        <div className="mb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.15em] gold-shimmer-animated">
                                VODKHAZ
                            </h1>
                            <div className="mt-2 w-16 h-px mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                        </div>

                        {!denied ? (
                            <>
                                <p className="text-white/60 text-sm leading-relaxed mb-2">
                                    Acest site conține informații despre produse alcoolice.
                                </p>
                                <p className="text-white/80 text-base font-medium mb-10">
                                    Confirmi că ai peste 18 ani?
                                </p>

                                <div className="flex gap-4 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={handleYes}
                                        className="btn-shine px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #C9A84C, #A08030)",
                                            color: "#050505",
                                        }}
                                    >
                                        DA, AM PESTE 18 ANI
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={handleNo}
                                        className="px-8 py-3.5 rounded-xl font-medium text-sm tracking-wide border border-white/10 text-white/40 hover:text-white/60 hover:border-white/20 transition-all duration-300 cursor-pointer"
                                    >
                                        NU
                                    </motion.button>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Ne pare rău, trebuie să ai minim 18 ani pentru a accesa
                                    acest site.
                                </p>
                                <button
                                    onClick={() => setDenied(false)}
                                    className="mt-6 text-gold/60 hover:text-gold text-xs tracking-wide transition-colors cursor-pointer"
                                >
                                    ← Înapoi
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
