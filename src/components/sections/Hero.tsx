"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-12 lg:px-20 pt-20">
      <style dangerouslySetInnerHTML={{ __html: `
        button, a, .cursor-pointer, .cursor-pointer * {
          cursor: pointer !important;
        }
      `}} />
      <div className="container mx-auto text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-primary" />
          Available for new opportunities
        </motion.div>

        {/* High Impact Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          Building Scalable <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Web Solutions
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl"
        >
          Software Engineer specializing in building premium user experiences and robust backend architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-background transition-all hover:pr-12 cursor-pointer"
            >
              View My Work
              <ArrowRight className="absolute right-4 opacity-0 transition-all group-hover:opacity-100" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-white/10 cursor-pointer"
            >
              Contact Me
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating 3D/SVG Element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-20 blur-sm sm:opacity-40"
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 50L350 150V250L200 350L50 250V150L200 50Z"
            stroke="url(#gradient)"
            strokeWidth="2"
          />
          <circle cx="200" cy="200" r="80" stroke="url(#gradient)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-primary)" />
              <stop offset="1" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown className="h-6 w-6 text-slate-500" />
      </motion.div>
    </section>
  );
};
