"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
    const {
        cartItems,
        removeItem,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
    } = useCart();

    const drawerRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsCartOpen(false);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [setIsCartOpen]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]"
                    />

                    {/* Drawer */}
                    <motion.div
                        ref={drawerRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#0A180C] border-l border-white/5 z-[1000] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <h2 className="text-xl font-bold tracking-tight gold-shimmer">
                                COȘUL TĂU
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 rounded-full hover:bg-white/5 transition-colors"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                                    <div className="text-6xl">🛒</div>
                                    <p className="text-lg">Coșul tău este gol</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-gold hover:underline text-sm uppercase tracking-widest"
                                    >
                                        Continuă cumpărăturile
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex gap-4 p-4 rounded-xl glass-gold"
                                    >
                                        {/* Item Icon/Label Placeholder */}
                                        <div className="w-16 h-20 rounded-lg bg-black/40 flex items-center justify-center text-2xl select-none">
                                            {item.image}
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start gap-2">
                                                <div>
                                                    <h3 className="text-sm font-bold tracking-tight text-white/90">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-[10px] text-gold/50 uppercase tracking-widest mt-1">
                                                        Green Party Edition
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="opacity-40 hover:opacity-100 transition-opacity"
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-3 bg-black/30 rounded-lg p-1 border border-white/5">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-6 h-6 flex items-center justify-center hover:bg-white/5 rounded transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-xs font-bold min-w-[12px] text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-6 h-6 flex items-center justify-center hover:bg-white/5 rounded transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="text-sm font-bold gold-shimmer">
                                                    {(item.price * item.quantity).toLocaleString()} LEI
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-white/5 bg-black/20 space-y-4">
                                <div className="flex items-center justify-between text-sm uppercase tracking-widest text-white/40">
                                    <span>Total</span>
                                    <span className="text-xl font-bold text-white/90">
                                        {cartTotal.toLocaleString()} LEI
                                    </span>
                                </div>
                                <p className="text-[10px] text-white/20 text-center uppercase tracking-widest">
                                    Transport calculat la următorul pas
                                </p>
                                <button className="btn-shine w-full py-5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-gold/5">
                                    Finalizare Comandă
                                </button>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full text-center text-[10px] text-gold/40 uppercase tracking-widest hover:text-gold/80 transition-colors"
                                >
                                    Continuă cumpărăturile
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
