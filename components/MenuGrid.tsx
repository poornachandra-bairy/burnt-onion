"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
    {
        title: "The Signature Onion",
        description: "Maple-charred sweet onion with balsamic pearls and smoked cream.",
        price: "$24",
        image: "/dish1.png",
    },
    {
        title: "Ember Ribeye",
        description: "45-day dry-aged steak with roasted bone marrow and burnt leek.",
        price: "$58",
        image: "/dish2.png",
    },
    {
        title: "Charred Octopus",
        description: "Smoked paprika glaze, saffron emulsion, and crispy ink crackers.",
        price: "$36",
        image: "/dish3.png",
    },
    {
        title: "Fire & Salt Scallops",
        description: "Hand-dived scallops with blood orange and pine needle smoke.",
        price: "$42",
        image: "/dish4.png",
    },
];

const MenuGrid = () => {
    return (
        <section id="menu" className="relative bg-black py-24">
            {/* Decorative Background Elements */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
                <svg className="absolute -right-10 bottom-20 h-64 w-64 text-primary" viewBox="0 0 100 100" fill="none">
                    <path d="M0 50 Q 25 0, 50 50 T 100 50" stroke="currentColor" strokeWidth="0.2" />
                    <path d="M0 60 Q 25 10, 50 60 T 100 60" stroke="currentColor" strokeWidth="0.2" />
                </svg>
            </div>
            <div className="container relative z-10 mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-6xl">Signature Experience</h2>
                    <div className="mx-auto h-1 w-20 bg-primary" />
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-pointer"
                        >
                            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[3rem] bg-neutral-900 transition-all duration-700">
                                <div className="absolute inset-0 flex items-center justify-center p-0">
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                    <div className="relative z-0 h-full w-full transition-transform duration-1000 group-hover:scale-110 scale-105">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10 z-20">
                                    <div className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-primary/80">Signature Experience</div>
                                    <h3 className="mb-2 text-4xl font-black italic tracking-tighter text-white drop-shadow-lg">{item.title}</h3>
                                    <p className="max-w-md text-base font-medium text-white/60 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="absolute right-10 top-10 z-20">
                                    <div className="rounded-full border border-white/20 bg-black/40 px-6 py-2 text-xl font-black italic text-primary backdrop-blur-md">
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="text-sm font-bold uppercase tracking-[0.3em] text-primary transition-all hover:tracking-[0.4em]">
                        View Full Menu →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MenuGrid;
