"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center border-primary/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to <span className="text-gradient">level up</span> your life?
          </h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already using Neurodo to transform their daily routines.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="/app-release.apk" download className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white dark:text-background font-bold text-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3">
              <Download size={24} /> Download Neurodo (APK)
            </a>
          </div>
          
          <p className="mt-8 text-sm text-muted">
            100% Free forever. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
