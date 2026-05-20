"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield, Zap, Code, Target } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import Image from "next/image";

const projectDetails = {
  "qams": {
    title: "QAMS Project",
    stack: "React.js, Bootstrap, Custom CSS",
    tools: "Vercel, Git, Role-based Access",
    learnings: "Mastered role-based state management and complex academic workflows. Learned how to structure a large-scale management system for scalability.",
    difficulties: "Implementing real-time data sync across different user roles (Admin, Teacher, Student) while maintaining strict access control was a significant challenge.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    link: "https://qams-ten.vercel.app",
    tags: ["Productivity", "Education", "Management"]
  },
  "mern-ecommerce": {
    title: "MERN E-commerce",
    stack: "MongoDB, Express.js, React.js, Node.js",
    tools: "Postman, JWT, Redux Toolkit, Cloudinary",
    learnings: "Deepened understanding of RESTful API design, database modeling with Mongoose, and secure authentication flows.",
    difficulties: "Handling race conditions during inventory updates and optimizing image uploads for faster product listings.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
    link: "https://mern-ecommerce-ssxr.vercel.app/",
    tags: ["E-commerce", "Fullstack", "Scalable"]
  },
  "password-manager": {
    title: "Password Manager",
    stack: "React.js, Tailwind CSS, CryptoJS",
    tools: "Lordicon, LocalStorage, React Icons",
    learnings: "Explored advanced encryption algorithms and learned how to build high-security frontends without a dedicated backend.",
    difficulties: "Ensuring zero-knowledge encryption while keeping the UI responsive and user-friendly with Lordicon animations.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&q=80",
    link: "https://op-password-manager.vercel.app",
    tags: ["Security", "Encryption", "Utilities"]
  },
  "todo-app": {
    title: "To-Do App",
    stack: "React.js, Tailwind CSS, Framer Motion",
    tools: "Vercel, Git, Local Storage",
    learnings: "Perfected micro-interactions and staggered animations using Framer Motion. Learned the importance of persistence in simple utility apps.",
    difficulties: "Managing complex drag-and-drop animations while keeping the state perfectly synced with browser storage.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
    link: "https://todo-react-app-tau-one.vercel.app",
    tags: ["Productivity", "UI/UX", "Frontend"]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden border border-white/5"
          >
            <Image 
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary text-xs font-bold border border-primary/30 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold text-foreground mb-4 sm:text-5xl">{project.title}</h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                A detailed look into the architecture and development of {project.title}.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              <GlassCard className="border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Code className="h-5 w-5" />
                  <h3 className="font-bold uppercase text-xs tracking-widest">Stack</h3>
                </div>
                <p className="text-slate-300 font-medium">{project.stack}</p>
              </GlassCard>

              <GlassCard className="border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 mb-4 text-secondary">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-bold uppercase text-xs tracking-widest">Tools</h3>
                </div>
                <p className="text-slate-300 font-medium">{project.tools}</p>
              </GlassCard>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent font-bold uppercase text-xs tracking-widest">
                  <Target className="h-4 w-4" />
                  Key Learnings
                </div>
                <p className="text-slate-400 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                  {project.learnings}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-red-400 font-bold uppercase text-xs tracking-widest">
                  <Shield className="h-4 w-4" />
                  Difficulties Overcome
                </div>
                <p className="text-slate-400 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                  {project.difficulties}
                </p>
              </div>
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-primary font-bold text-background transition-all"
            >
              Launch Live Application
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
