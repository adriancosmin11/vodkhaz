"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Sub-section data ─────────────────────────────── */
const stories = [
    {
        id: "origine",
        title: "Origine",
        subtitle: "Spiritul sălbatic",
        text: "Povestea VODKHAZ începe acolo unde natura și aventura se întâlnesc. Inspirați de energia tropicală și de curajul sălbatic al elefantului — simbol al forței și al libertății — am creat un spirit care îmbină tradiția cu distracția. Fiecare sticlă poartă amprenta unei petreceri memorabile.",
        accent: "🐘",
        gradientStyle: "radial-gradient(ellipse at 30% 40%, rgba(45,107,52,0.25) 0%, rgba(5,5,5,0.95) 70%)",
    },
    {
        id: "distilare",
        title: "Distilare",
        subtitle: "Crafted with care",
        text: "Vodcă premium, distilată cu grijă pentru un gust autentic. Procesul nostru de producție asigură o puritate excepțională și un caracter mătăsos. Rezultatul: un spirit cu un finisaj curat, fără asprime, perfect pentru a fi savurat pur sau în cocktailuri creative.",
        accent: "⚗️",
        gradientStyle: "radial-gradient(ellipse at 60% 50%, rgba(201,168,76,0.15) 0%, rgba(5,5,5,0.95) 70%)",
    },
    {
        id: "party",
        title: "Green Party Edition",
        subtitle: "Gust tropical, spirit intens",
        text: "VODKHAZ Green Party Edition aduce gustul tropical direct la petrecerea ta. Cu un caracter intens și un profil aromatic exotic, această ediție este creată pentru cei care vor să se distreze la maxim. Ideală servită rece sau ca bază pentru cocktailuri de neuitat.",
        accent: "🌿",
        gradientStyle: "radial-gradient(ellipse at 50% 60%, rgba(45,107,52,0.3) 0%, rgba(5,5,5,0.95) 70%)",
    },
];

/* ── Animated block component ─────────────────────── */
function StoryBlock({
    story,
    index,
}: {
    story: (typeof stories)[number];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
        >
            {/* Visual / Accent Card */}
            <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-gold">
                    <div
                        className="absolute inset-0"
                        style={{ background: story.gradientStyle }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl sm:text-8xl opacity-30 select-none">
                            {story.accent}
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-px bg-gradient-to-r from-gold/20 via-gold/5 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-7/12">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-[11px] tracking-[0.3em] text-gold/50 uppercase mb-3">
                        {story.subtitle}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white/95 mb-5">
                        {story.title}
                    </h3>
                    <p className="text-white/45 text-[15px] leading-[1.8] max-w-lg">
                        {story.text}
                    </p>
                    <div className="mt-6 w-12 h-px bg-gradient-to-r from-gold/40 to-transparent" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function StorySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleInView = useInView(sectionRef, { once: true, margin: "-60px" });

    return (
        <section
            ref={sectionRef}
            id="povestea"
            className="relative py-24 sm:py-36 px-6 overflow-hidden"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, #2D6B34, transparent 70%)",
                }}
            />

            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-28">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-[11px] tracking-[0.35em] text-gold/40 uppercase mb-4"
                >
                    Descoperă
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-3xl sm:text-5xl font-bold tracking-tight"
                >
                    Povestea <span className="gold-shimmer">Noastră</span>
                </motion.h2>
            </div>

            {/* Story Blocks */}
            <div className="max-w-5xl mx-auto flex flex-col gap-16 sm:gap-32">
                {stories.map((story, idx) => (
                    <StoryBlock key={story.id} story={story} index={idx} />
                ))}
            </div>
        </section>
    );
}
