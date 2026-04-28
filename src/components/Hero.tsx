"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -z-10 animate-pulse delay-700" />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase glass rounded-full text-primary border-primary/30 shadow-lg shadow-primary/10">
            Reimagining Personal Productivity
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter">
            One app for your <br />
            <span className="text-gradient">entire life.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted mb-20 font-medium leading-relaxed">
            Neurodo seamlessly integrates habits, tasks, and focus. <br className="hidden md:block" /> 
            Designed for those who want to achieve more by doing less.
          </p>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 cursor-pointer group"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-muted group-hover:text-primary transition-colors">Discover how it works</span>
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/20 group-hover:border-primary/50 transition-colors shadow-xl">
              <ArrowDown className="text-primary" size={24} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
