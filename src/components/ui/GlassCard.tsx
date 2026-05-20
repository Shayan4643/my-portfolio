"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlassCard = ({ children, className, hoverGlow = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverGlow ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hoverGlow && "hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
