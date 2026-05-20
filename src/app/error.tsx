"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-white/5 bg-white/[0.02] p-12 backdrop-blur-xl"
      >
        <h2 className="mb-4 text-3xl font-bold text-foreground">System Failure</h2>
        <p className="mb-8 text-slate-400">
          Something went wrong in the matrix. Don't worry, we're working on it.
        </p>
        <div className="flex justify-center gap-4">
          <MagneticButton>
            <button
              onClick={() => reset()}
              className="rounded-full bg-primary px-8 py-3 font-bold text-background transition-all hover:scale-105"
            >
              Try to Reboot
            </button>
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
