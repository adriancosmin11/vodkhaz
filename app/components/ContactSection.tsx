"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden bg-[#050505]">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl sm:text-6xl font-black tracking-tighter gold-shimmer mb-8 uppercase">
                            CONTACT
                        </h2>

                        <div className="space-y-6 text-white/70 leading-relaxed max-w-md">
                            <p className="text-lg font-medium text-white/90">
                                Ești gata pentru o petrecere memorabilă cu Vodkhaz Green Party Edition?
                            </p>
                            <p>
                                Alătură-te celor care au descoperit deja secretele acestei băuturi și lasă-te purtat de val!
                                Ne găsești în cele mai bune magazine și online.
                            </p>
                            <p>
                                Dacă ai vreo întrebare sau vrei să împărtășești o experiență extraordinară cu Vodkhaz Green nu ezita să ne contactezi!
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-4xl font-black tracking-tighter gold-shimmer uppercase mb-4">
                                OFFICE
                            </h3>
                            <a
                                href="mailto:contact@vodkhaz.ro"
                                className="text-xl font-medium text-white/90 hover:text-gold transition-colors duration-300"
                            >
                                contact@vodkhaz.ro
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-gold p-8 sm:p-10 rounded-3xl"
                    >
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nume"
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/30 transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/30 transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Mesajul tău"
                                    rows={5}
                                    className="w-full bg-black/40 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/30 transition-all resize-none"
                                />
                            </div>
                            <button className="btn-shine w-full py-5 rounded-xl text-sm font-bold uppercase tracking-[0.2em] shadow-lg shadow-gold/5 mt-4">
                                TRIMITE MESAJUL
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
