"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "QAMS Project",
    slug: "qams",
    desc: "A professional Quiz and Assignment Management System with role-based access control and academic workflow management.",
    link: "https://qams-ten.vercel.app",
    tech: ["React.js", "Bootstrap", "Vercel"],
    image: "/assets/qams.png",
  },
  {
    title: "MERN E-commerce",
    slug: "mern-ecommerce",
    desc: "Full-stack e-commerce platform with secure payments, admin dashboard, and scalable backend architecture.",
    link: "https://mern-ecommerce-ssxr.vercel.app/",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: "/assets/e-com.png",
  },
  {
    title: "Password Manager",
    slug: "password-manager",
    desc: "Secure credential vault with glassmorphism UI, Lordicon animations, and encrypted persistence.",
    link: "https://op-password-manager.vercel.app",
    tech: ["React.js", "Tailwind CSS", "Lordicon"],
    image: "/assets/pass-op.png",
  },
  {
    title: "To-Do App",
    slug: "todo-app",
    desc: "Modern productivity tool with persistent storage, smooth Framer Motion transitions, and responsive design.",
    link: "https://todo-react-app-tau-one.vercel.app",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/todo.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">A showcase of my recent engineering endeavors.</p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:gap-12 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group flex flex-col h-full overflow-hidden p-0 border-white/5 bg-white/[0.01]">
                <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-8">
                  <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-6 sm:mb-8 text-sm sm:text-base text-slate-400 leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      See more details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
