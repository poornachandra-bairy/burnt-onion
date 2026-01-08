"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Experience from "@/components/Experience";
import MenuGrid from "@/components/MenuGrid";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-1 bg-primary origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Story />

      <Experience />

      <MenuGrid />

      {/* Footer Section */}
      <footer className="bg-black py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tighter md:text-5xl">
            READY TO <span className="italic text-primary">IGNITE</span>?
          </h2>
          <div className="mb-12 grid gap-12 text-sm uppercase tracking-widest text-muted-foreground md:grid-cols-3">
            <div>
              <p className="mb-4 font-bold text-white">Location</p>
              <p>123 Ember Street<br />Smoke District, NY 10001</p>
            </div>
            <div>
              <p className="mb-4 font-bold text-white">Opening Hours</p>
              <p>TUE - SUN: 17:00 - 23:00<br />MON: CLOSED</p>
            </div>
            <div>
              <p className="mb-4 font-bold text-white">Contact</p>
              <p>+1 (555) BURN-ONION<br />hello@burntonion.com</p>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-12 md:flex-row">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">© 2024 BURNT ONION. ALL RIGHTS RESERVED.</p>
              <a
                href="https://aghoralabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-widest text-muted-foreground/60 hover:text-primary transition-colors uppercase"
              >
                Designed & Developed by AghoraLabs
              </a>
            </div>
            <div className="mt-6 flex gap-8 text-xs font-bold md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-primary transition-colors">FACEBOOK</a>
              <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Cursor Shimmer (Pure CSS) */}
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,81,0,0.1),transparent_70%)]" />
      </div>
    </main>
  );
}
