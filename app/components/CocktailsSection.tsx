"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Cocktail recipes from vodkhaz.ro ─────────────── */
const cocktails = [
    {
        id: "passion",
        name: "Passion Vodkhaz",
        emoji: "🍹",
        color: "rgba(201,168,76,0.15)",
        ingredients: [
            { item: "Vodkhaz", amount: "40 ML" },
            { item: "Passoã", amount: "20 ML" },
            { item: "Sour", amount: "20 ML" },
            { item: "Gheață", amount: "" },
            { item: "Fructul pasiunii", amount: "1 buc" },
        ],
    },
    {
        id: "coconut",
        name: "Tropical Coco",
        emoji: "🥥",
        color: "rgba(45,107,52,0.15)",
        ingredients: [
            { item: "Vodkhaz", amount: "40 ML" },
            { item: "Malibu Coconut", amount: "20 ML" },
            { item: "Lime", amount: "½ buc" },
            { item: "Zahăr brun", amount: "2 linguri" },
            { item: "Apă minerală", amount: "" },
        ],
    },
    {
        id: "tonic",
        name: "Green Tonic",
        emoji: "🍸",
        color: "rgba(201,168,76,0.1)",
        ingredients: [
            { item: "Vodkhaz", amount: "40 ML" },
            { item: "Tonic", amount: "150 ML" },
            { item: "Felie de lime", amount: "1 buc" },
            { item: "Gheață", amount: "" },
        ],
    },
];

export default function CocktailsSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section ref={ref} id="cocktails" className="relative py-24 sm:py-36 px-6 overflow-hidden">
            {/* Ambient glow */}
            <div
                className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, #C9A84C, transparent 70%)",
                }}
            />

            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-24">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-[11px] tracking-[0.35em] text-gold/40 uppercase mb-4"
                >
                    Rețete
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-3xl sm:text-5xl font-bold tracking-tight"
                >
                    Cocktails <span className="gold-shimmer">Vodkhaz</span>
                </motion.h2>
            </div>

            {/* Cocktails Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cocktails.map((cocktail, idx) => (
                    <motion.div
                        key={cocktail.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.8,
                            delay: 0.15 + idx * 0.12,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="group glass-gold rounded-2xl p-7 sm:p-8 hover:border-gold/25 transition-all duration-500"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                                style={{ background: cocktail.color }}
                            >
                                {cocktail.emoji}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold tracking-tight text-white/90">
                                    {cocktail.name}
                                </h3>
                                <p className="text-[10px] tracking-[0.15em] text-gold/40 uppercase">
                                    Cocktail
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-gold/15 via-white/5 to-transparent mb-5" />

                        {/* Ingredients */}
                        <ul className="flex flex-col gap-3">
                            {cocktail.ingredients.map((ing, i) => (
                                <li
                                    key={i}
                                    className="flex items-center justify-between text-sm"
                                >
                                    <span className="text-white/55">{ing.item}</span>
                                    {ing.amount && (
                                        <span className="text-white/30 text-xs tracking-wide font-mono">
                                            {ing.amount}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
