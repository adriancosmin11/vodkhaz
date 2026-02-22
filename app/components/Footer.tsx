"use client";

import { motion } from "framer-motion";

const legalLinks = [
    { label: "Termeni și Condiții", href: "https://vodkhaz.ro/termeni-si-conditii" },
    { label: "Politica de Confidențialitate", href: "https://vodkhaz.ro/politica-de-confidentialitate" },
    { label: "Politica Cookies", href: "https://vodkhaz.ro/politica-cookie" },
    { label: "ANPC", href: "https://anpc.ro" },
    { label: "SOL", href: "https://ec.europa.eu/consumers/odr" },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/vodk.haz",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/people/Vodkhaz/61584456487746/",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="relative border-t border-white/5">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold tracking-[0.15em] gold-shimmer mb-4">
                            VODKHAZ
                        </h3>
                        <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                            Ești gata pentru o petrecere memorabilă cu Vodkhaz Green Party
                            Edition? Alătură-te celor care au descoperit deja secretele
                            acestei băuturi și lasă-te purtat de val!
                        </p>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className="text-[11px] tracking-[0.2em] text-gold/40 uppercase mb-5">
                            Legal
                        </p>
                        <ul className="flex flex-col gap-3">
                            {legalLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        target={l.href.startsWith("http") ? "_blank" : undefined}
                                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <p className="text-[11px] tracking-[0.2em] text-gold/40 uppercase mb-5">
                            Contact
                        </p>
                        <a
                            href="mailto:contact@vodkhaz.ro"
                            className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300 block mb-2"
                        >
                            contact@vodkhaz.ro
                        </a>
                        <a
                            href="https://vodkhaz.ro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/35 hover:text-white/70 transition-colors duration-300 block mb-6"
                        >
                            vodkhaz.ro
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socialLinks.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-colors duration-300"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-white/20 tracking-wide">
                        © {new Date().getFullYear()} VODKHAZ. Toate drepturile rezervate.
                    </p>
                    <p className="text-[10px] text-white/15 tracking-wide">
                        Consumul excesiv de alcool dăunează grav sănătății.
                    </p>
                </div>
            </div>
        </footer>
    );
}
