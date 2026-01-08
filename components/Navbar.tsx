"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Experience", href: "#experience" },
    { name: "Menu", href: "#menu" },
    { name: "Reserve", href: "#reserve" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed left-0 right-0 top-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1]",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div className="container mx-auto px-6">
                <div
                    className={cn(
                        "flex items-center justify-between rounded-full px-10 py-4 transition-all duration-700 ease-[0.16,1,0.3,1]",
                        isScrolled ? "glass shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5" : "bg-transparent border-transparent"
                    )}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-black tracking-tighter"
                    >
                        <span className="text-primary italic">BURNT</span>
                        <span className="text-white">ONION</span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden items-center gap-12 md:flex">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 transition-all hover:text-primary hover:tracking-[0.5em]"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-primary px-10 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:bg-primary/90"
                        >
                            Reserve
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass absolute left-6 right-6 top-24 rounded-3xl p-8 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium tracking-widest text-foreground hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="rounded-full bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white">
                                Book Table
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
