"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Story = () => {
    return (
        <section id="story" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-black py-16">
            {/* Background Decorative Graphics */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
                <svg className="absolute -left-20 top-1/4 h-80 w-80 rotate-12 text-primary" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
            </div>
            <div className="container relative mx-auto px-6 lg:overflow-visible">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0">
                    <div className="z-20 flex-1 space-y-4 lg:-mr-16 lg:pr-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <span className="h-[1px] w-12 bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Our Philosophy</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1 }}
                            className="text-4xl font-black leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl"
                        >
                            BORN FROM THE <br />
                            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text italic text-transparent">EMBERS OF PASSION</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="max-w-lg text-base font-medium leading-relaxed text-secondary-foreground"
                        >
                            At Burnt Onion, we believe in the primitive connection between fire and food.
                            Our journey started with a simple flame and a desire to elevate the humblest ingredients.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-10 pt-2"
                        >
                            <div className="flex items-center gap-3">
                                <p className="text-3xl font-black tracking-tighter text-white">800°</p>
                                <p className="text-[8px] font-bold uppercase tracking-widest text-primary leading-none">Oven <br /> Temp</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-3xl font-black tracking-tighter text-white">45</p>
                                <p className="text-[8px] font-bold uppercase tracking-widest text-primary leading-none">Day <br /> Dry-Age</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative flex-1 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05, rotate: 1 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 aspect-square max-w-[450px] overflow-hidden rounded-[3rem] shadow-2xl lg:ml-auto"
                        >
                            <Image
                                src="/story-img.jpg"
                                alt="Burnt Onion Story"
                                fill
                                className="object-cover grayscale-[30%] transition-transform duration-1000 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
