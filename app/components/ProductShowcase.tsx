"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useCart } from "../context/CartContext";

const specs = [
    { label: "Volum", value: "700ml" },
    { label: "Alcool", value: "40% Vol" },
    { label: "Tip", value: "Premium" },
    { label: "Stil", value: "Tropical" },
];

const tastingNotes = [
    "Gust tropical intens",
    "Aromă exotică, proaspătă",
    "Finisaj mătăsos și curat",
    "Ideal servit rece sau în cocktailuri",
];

export default function ProductShowcase() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [addedToCart, setAddedToCart] = useState(false);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        setAddedToCart(true);
        addItem({
            id: "vodkhaz-green",
            name: "VODKHAZ Green",
            price: 79,
            image: "🐘",
            quantity: 1,
        });
        setTimeout(() => setAddedToCart(false), 2000);
    };

    return (
        <section
            ref={ref}
            id="produs"
            className="relative pt-24 pb-24 sm:py-36 px-6 overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, #2D6B34, transparent 70%)",
                }}
            />

            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <p className="text-[10px] tracking-[0.35em] text-gold/40 uppercase mb-1">
                        Green Party Edition
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                        Descoperă <span className="gold-shimmer">Produsul</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    {/* ── Left: Bottle Visual ────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-5/12 flex justify-center"
                    >
                        <div className="relative w-56 sm:w-80">
                            {/* Glow behind bottle */}
                            <div
                                className="absolute inset-0 scale-125"
                                style={{
                                    background:
                                        "radial-gradient(ellipse, rgba(45,107,52,0.3) 0%, rgba(201,168,76,0.08) 40%, transparent 70%)",
                                }}
                            />
                            {/* Bottle shape */}
                            <div className="relative aspect-[3/5] rounded-3xl overflow-hidden glass-gold">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(201,168,76,0.12) 0%, rgba(45,107,52,0.15) 30%, rgba(45,107,52,0.25) 60%, rgba(201,168,76,0.08) 100%)",
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="w-8 h-12 rounded-t-lg bg-gradient-to-b from-gold/40 to-gold/10 mb-4" />
                                    <div className="text-center">
                                        <div className="text-5xl sm:text-6xl mb-3 opacity-40 select-none">🐘</div>
                                        <h3 className="text-lg sm:text-xl font-bold tracking-[0.15em] gold-shimmer">
                                            VODKHAZ
                                        </h3>
                                        <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 mt-1 uppercase">
                                            Green Party Edition
                                        </p>
                                    </div>
                                    <div className="mt-4 sm:mt-6 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                                    <p className="text-[8px] sm:text-[9px] tracking-[0.15em] text-white/20 mt-2">
                                        700ML · 40% VOL
                                    </p>
                                </div>
                                <div
                                    className="absolute top-0 left-[20%] w-[1px] h-full opacity-10"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, transparent, white, transparent)",
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Product Details Card ────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="glass-gold rounded-2xl p-6 sm:p-10">
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                                Vodkhaz Green
                            </h3>
                            <p className="text-gold/50 text-sm tracking-[0.1em] uppercase mb-4">
                                Party Edition
                            </p>
                            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md">
                                Vodcă premium, distilată cu grijă pentru un gust autentic.
                                Ideală servită rece sau în cocktailuri.
                            </p>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                {specs.map((s) => (
                                    <div
                                        key={s.label}
                                        className="text-center py-3 px-2 rounded-xl border border-white/5 bg-white/[0.02]"
                                    >
                                        <p className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-1">
                                            {s.label}
                                        </p>
                                        <p className="text-sm font-semibold text-white/80">
                                            {s.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

                            {/* Tasting Notes */}
                            <div className="mb-10">
                                <p className="text-[11px] tracking-[0.2em] text-gold/40 uppercase mb-4">
                                    Caracteristici
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {tastingNotes.map((note, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                                            <p className="text-sm text-white/50">{note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price + CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                <div>
                                    <p className="text-[10px] tracking-[0.15em] text-white/30 uppercase mb-1">
                                        Preț
                                    </p>
                                    <p className="text-3xl sm:text-4xl font-bold gold-shimmer">
                                        79 <span className="text-lg">LEI</span>
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleAddToCart}
                                    className="btn-shine w-full sm:w-auto px-10 py-4 rounded-xl font-semibold text-sm tracking-[0.08em] uppercase cursor-pointer transition-all duration-300"
                                    style={{
                                        background: addedToCart
                                            ? "linear-gradient(135deg, #2D6B34, #1A3A1A)"
                                            : "linear-gradient(135deg, #C9A84C, #A08030)",
                                        color: addedToCart ? "#FAFAFA" : "#050505",
                                    }}
                                >
                                    {addedToCart ? "✓ Adăugat!" : "Adaugă în Coș"}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
