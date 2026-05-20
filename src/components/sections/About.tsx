"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Globe, Server, Code2, Database } from "lucide-react";

const expertise = [
  {
    title: "Frontend Development",
    desc: "Building responsive, high-performance websites and web apps using React, Next.js, and modern CSS.",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "Backend Integration",
    desc: "Seamless integration with Node.js, Express, and REST APIs for robust service layers.",
    icon: <Server className="h-6 w-6 text-secondary" />,
  },
  {
    title: "Software Engineering",
    desc: "Solid foundation in data structures, algorithms, and scalable architecture.",
    icon: <Code2 className="h-6 w-6 text-accent" />,
  },
  {
    title: "Modern Web",
    desc: "Crafting responsive, performant web apps using React and Next.js.",
    icon: <Database className="h-6 w-6 text-primary" />,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-10 lg:gap-16 lg:flex-row">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Engineering the{" "}
              <span className="text-primary">Future of Digital Solutions</span>
            </h2>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg text-slate-400">
              I am a passionate Web Developer dedicated to solving complex problems through clean code and innovative design. With a focus on crafting premium web experiences and scalable backend systems, I bridge the gap between user needs and technical feasibility.
            </p>
            <p className="text-base sm:text-lg text-slate-400">
              My approach combines technical rigor with a keen eye for aesthetics, ensuring every solution is not only functional but also a delight to use.
            </p>
          </motion.div>

          {/* Grid of Expertise */}
          <div className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full border-white/5 bg-white/[0.02]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg sm:text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
