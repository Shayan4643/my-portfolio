"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MessageCircle, Download, Mail } from "lucide-react";

export const Footer = () => {
  const whatsappLink = "https://wa.me/+923464344400?text=Hello%20Shayan,%20I'm%20interested%20in%20your%20services!";

  return (
    <footer className="relative border-t border-white/5 bg-black/40 py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 backdrop-blur-xl">
      <div className="container mx-auto">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-foreground">Let's Connect</h2>
            <p className="mb-6 sm:mb-8 max-w-md text-sm sm:text-base text-slate-400">
              Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms.
            </p>

            <div className="mb-6 sm:mb-8 flex flex-col gap-4">
              <a
                href="mailto:shayanasif519@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm sm:text-base break-all">shayanasif519@gmail.com</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="text-sm sm:text-base">Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
              ].map((social, i) => (
                <MagneticButton key={i}>
                  <a
                    href={social.link}
                    className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Right Side: CV */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/[0.02] p-8 sm:p-10 text-center lg:items-start lg:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground">Need my full profile?</h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-slate-400">
              Download my latest CV to see a detailed breakdown of my experience and certifications.
            </p>

            <a
              href="/MY_RESUME.pdf"
              download="Shayan_Ansari_Resume.pdf"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-background transition-all hover:scale-105"
            >
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download CV
              <div className="absolute inset-0 -z-10 bg-primary/20 translate-y-full transition-transform group-hover:translate-y-0" />
            </a>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-slate-500 italic">
              * Optimized for professional review
            </p>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-20 text-center text-xs sm:text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Shayan Ansari. Crafted with passion and precision.</p>
        </div>
      </div>

      {/* WhatsApp Sticky Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/50 transition-all"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.a>
    </footer>
  );
};
