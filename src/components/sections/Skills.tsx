"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaJs,
  FaJava,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiPhp,
  SiPython,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { name: "Java", icon: <FaJava />, color: "#ED8B00" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React JS", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "Node JS", icon: <FaNodeJs />, color: "#339933" },
      { name: "Framer Motion", icon: <SiReact />, color: "#0055FF" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white/[0.01]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Technical Arsenal</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">Categorized tools and technologies I use to build robust software.</p>
        </motion.div>

        <div className="grid gap-10 sm:gap-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="mb-6 sm:mb-8 text-sm sm:text-base font-semibold text-primary/80 uppercase tracking-widest"
              >
                {category.title}
              </motion.h3>

              <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: catIndex * 0.1 + index * 0.05,
                    }}
                    whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center gap-2 sm:gap-3"
                  >
                    <div
                      className="group relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-white/5 text-2xl sm:text-3xl transition-all duration-300 hover:bg-white/10"
                      style={{ color: skill.color }}
                    >
                      <div
                        className="absolute inset-0 -z-10 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-500 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
