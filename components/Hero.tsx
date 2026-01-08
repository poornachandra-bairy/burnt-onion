"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const smokeRef = useRef<HTMLDivElement>(null);
    const onionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        // Depth-based Parallax Effect on Scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        tl.to(bgRef.current, { y: 200 }, 0);
        tl.to(smokeRef.current, { y: -150, opacity: 0 }, 0);
        tl.to(onionRef.current, { y: -250, scale: 1.2 }, 0);
        tl.to(contentRef.current, { y: -350, opacity: 0 }, 0);

        // Mouse Move Interaction for Depth
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 2;
            const yPos = (clientY / innerHeight - 0.5) * 2;

            gsap.to(onionRef.current, {
                x: xPos * 30,
                y: yPos * 30,
                rotateY: xPos * 10,
                rotateX: -yPos * 10,
                duration: 1.5,
                ease: "power2.out",
            });

            gsap.to(smokeRef.current, {
                x: xPos * -20,
                y: yPos * -20,
                duration: 2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[100dvh] w-full overflow-hidden bg-black pb-20">
            {/* Layer 0: Global Cinematic Overlays */}
            <div className="pointer-events-none absolute inset-0 z-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(230,81,0,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,204,128,0.1),transparent_50%)]" />
                {/* Volumetric Beam */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_0%,transparent_45deg,rgba(255,145,0,0.05)_180deg,transparent_315deg)] blur-3xl" />
            </div>

            {/* Layer 1: Background */}
            <div ref={bgRef} className="absolute inset-x-0 top-0 z-0 h-[120%] w-full">
                <Image
                    src="/hero-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-60 brightness-[0.7]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </div>

            {/* Decorative Corner Ornaments */}
            <div className="pointer-events-none absolute inset-0 z-40 opacity-20">
                <svg className="absolute left-10 top-10 h-32 w-32 -rotate-90 text-primary" viewBox="0 0 100 100" fill="none">
                    <path d="M100 2L2 2L2 100" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </svg>
                <svg className="absolute right-10 top-10 h-32 w-32 text-primary" viewBox="0 0 100 100" fill="none">
                    <path d="M0 2L98 2L98 100" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="98" cy="2" r="1.5" fill="currentColor" />
                </svg>
            </div>

            {/* Layer 2: Volumetric Smoke & Embers */}
            <div ref={smokeRef} className="pointer-events-none absolute inset-0 z-10 opacity-40 mix-blend-screen">
                <div className="h-full w-full bg-[url('https://res.cloudinary.com/dzvxsf8pk/image/upload/v1688220000/smoke_v2.png')] bg-cover bg-center animate-pulse" />
                {/* Animated Embers (CSS Animation) */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: Math.random() * 0.5 + 0.2,
                                x: Math.random() * 100 + "%",
                                y: "110%",
                                scale: Math.random() * 0.5 + 0.5,
                            }}
                            animate={{
                                y: "-10%",
                                x: (Math.random() - 0.5) * 20 + 50 + "%",
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear",
                            }}
                            className="absolute h-1 w-1 rounded-full bg-orange-500 blur-[1px] shadow-[0_0_10px_orange]"
                        />
                    ))}
                </div>
            </div>

            {/* Layer 3: Master Onion centerpiece */}
            <div
                ref={onionRef}
                className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden aspect-square w-[450px] -translate-x-1/2 -translate-y-1/2 perspective-1000 lg:block"
            >
                <Image
                    src="/master-onion.png"
                    alt="Master Onion"
                    fill
                    className="object-contain drop-shadow-[0_20px_100px_rgba(230,81,0,0.6)]"
                    priority
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                />
            </div>

            {/* Layer 5: Content */}
            <div ref={contentRef} className="container relative z-40 mx-auto flex h-full items-center justify-center px-6 pt-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <span className="mb-6 inline-block text-[10px] font-black uppercase tracking-[0.8em] text-primary drop-shadow-[0_0_15px_rgba(230,81,0,0.5)]">
                        Fine Gastronomy • Wood Fire Cuisine
                    </span>
                    <h1 className="mb-8 text-6xl font-black leading-[0.8] tracking-tighter sm:text-7xl md:text-8xl lg:text-[10rem]">
                        <span className="block text-white mix-blend-lighten drop-shadow-2xl">BURNT</span>
                        <span className="bg-gradient-to-b from-primary via-orange-500 to-amber-800 bg-clip-text italic text-transparent drop-shadow-lg">
                            ONION
                        </span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-xl text-lg font-bold tracking-tight text-white/70 drop-shadow-md md:text-xl">
                        Unearthing the primitive art of flavor <br className="hidden md:block" /> through the lens of fire and smoke.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden rounded-full bg-primary px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-[0_0_50px_rgba(230,81,0,0.3)] transition-all hover:shadow-[0_0_70px_rgba(230,81,0,0.5)]"
                        >
                            <span className="relative z-10">Discover Menu</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-full border border-white/10 bg-white/5 px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-3xl transition-all hover:bg-white/10"
                        >
                            Our Story
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Cinematic Bottom Fog Mask */}
            <div className="absolute bottom-0 left-0 right-0 z-50 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
