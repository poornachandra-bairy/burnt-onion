"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxSectionProps {
    children: React.ReactNode;
    bgImage?: string;
    className?: string;
    speed?: number;
}

const ParallaxSection = ({
    children,
    bgImage,
    className,
    speed = 0.5,
}: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={ref} className={`relative overflow-hidden ${className}`}>
            {bgImage && (
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 -z-10 h-[120%] w-full"
                >
                    <Image
                        src={bgImage}
                        alt="Parallax Background"
                        fill
                        className="object-cover grayscale-[30%]"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
            )}
            {children}
        </section>
    );
};

export default ParallaxSection;
