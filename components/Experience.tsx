"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const experiences = [
    {
        title: "THE ANCIENT FIRE",
        subtitle: "800° Precision",
        description: "We use three types of cured hardwood—Oak, Hickory, and Cherry—to create a unique smoke profile that penetrates deep into every ingredient.",
        image: "/exp-fire.jpg",
        stats: ["Oak & Hickory", "800° Constant", "Active Smoke"]
    },
    {
        title: "THE VOLCANIC SOIL",
        subtitle: "Mineral Wealth",
        description: "Our vegetables are sourced from high-altitude volcanic farms, where the mineral-rich earth imparts a distinct, primordial flavor to the produce.",
        image: "/exp-soil.jpg",
        stats: ["Volcanic Soil", "Organic Only", "Direct Source"]
    },
    {
        title: "THE AGED CRAFT",
        subtitle: "45-Day Patience",
        description: "Our signature cuts are dry-aged in-house for 45 days in Himalayan salt-walled chambers, concentrating flavors to an unparalleled intensity.",
        image: "/exp-craft.jpg",
        stats: ["Himalayan Salt", "45-Day Age", "Hand Crafted"]
    },
    {
        title: "THE LIQUID GOLD",
        subtitle: "Vintage Selection",
        description: "A curated cellar featuring over 400 labels, focusing on bold reds that stand up to the intensity of wood-fired gastronomy.",
        image: "/exp-cellar.jpg",
        stats: ["400+ Labels", "Rare Vintages", "Expert Pairing"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="bg-black py-0">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination-custom",
                }}
                className="h-[100dvh] w-full"
            >
                {experiences.map((exp, idx) => (
                    <SwiperSlide key={idx} className="group relative h-full w-full overflow-hidden">
                        {/* Background Image with Parallax Effect */}
                        <div className="absolute inset-0 z-0 bg-black">
                            <Image
                                src={exp.image}
                                alt={exp.title}
                                fill
                                className="object-cover opacity-40 transition-transform duration-[10000ms] ease-linear scale-110 group-hover:scale-100"
                                priority
                                onError={(e) => (e.currentTarget.style.opacity = '0.1')}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                        </div>

                        {/* Content Container */}
                        <div className="container relative z-10 mx-auto flex h-full items-center px-6">
                            <div className="max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <span className="mb-6 inline-block text-sm font-black uppercase tracking-[0.5em] text-primary">
                                        {exp.subtitle}
                                    </span>
                                    <h2 className="mb-8 text-5xl font-black leading-[0.95] tracking-tighter text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-[8rem]">
                                        {exp.title.split(" ").slice(0, -1).join(" ")} <br />
                                        <span className="bg-gradient-to-b from-primary to-orange-600 bg-clip-text italic text-transparent">
                                            {exp.title.split(" ").pop()}
                                        </span>
                                    </h2>
                                    <p className="mb-12 max-w-2xl text-base font-medium leading-relaxed text-white/80 drop-shadow-md md:text-xl">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-12">
                                        {exp.stats.map((stat, i) => (
                                            <div key={i} className="flex flex-col gap-2">
                                                <span className="h-0.5 w-8 bg-primary" />
                                                <span className="text-xs font-black uppercase tracking-widest text-white">
                                                    {stat}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation */}
                <div className="absolute bottom-12 right-12 z-20 flex items-center gap-8">
                    <div className="swiper-pagination-custom !relative !w-auto flex gap-2"></div>
                    <div className="flex gap-4">
                        <button className="swiper-button-prev-custom group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 glass transition-all hover:bg-white/10">
                            <span className="text-2xl text-white transition-transform group-hover:-translate-x-1">←</span>
                        </button>
                        <button className="swiper-button-next-custom group flex h-16 w-16 items-center justify-center rounded-full border border-white/10 glass transition-all hover:bg-white/10">
                            <span className="text-2xl text-white transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
            </Swiper>
        </section>
    );
};

export default Experience;
