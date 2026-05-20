"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-9xl font-bold text-primary/20"
      >
        404
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-foreground">Lost in Space?</h2>
        <p className="mb-10 max-w-md text-slate-400">
          The page you're looking for has vanished into a black hole or never existed in this dimension.
        </p>
        <MagneticButton>
          <Link
            href="/"
            className="rounded-full bg-primary px-8 py-4 font-bold text-background transition-all hover:scale-105"
          >
            Return to Earth
          </Link>
        </MagneticButton>
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>
    </div>
  );
}
