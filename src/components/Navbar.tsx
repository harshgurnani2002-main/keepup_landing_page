"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Sun, Moon, Code, X } from "lucide-react";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-6 py-3 md:py-4 glass m-2 md:m-4 rounded-2xl md:rounded-3xl backdrop-blur-2xl border shadow-2xl transition-colors duration-300"
    >
      {/* Left: Brand */}
      <div className="flex justify-start">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <Image 
            src="/images/neurodo.png" 
            alt="Neurodo Logo" 
            width={32} 
            height={32} 
            className="md:w-10 md:h-10 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground">Neurodo</span>
        </Link>
      </div>
      
      {/* Center: Navigation Links */}
      <div className="hidden md:flex justify-center items-center gap-8">
        <Link href="/#how-it-works" className="text-sm font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors">Features</Link>
        <Link href="/faq" className="text-sm font-bold tracking-widest uppercase text-muted hover:text-primary transition-colors">FAQ</Link>
      </div>

      {/* Right: Actions */}
      <div className="flex justify-end items-center gap-2 md:gap-5">
        <div className="hidden sm:flex items-center gap-4 mr-2 border-r border-black/10 dark:border-white/10 pr-4">
          <button 
            onClick={toggleTheme}
            className="text-muted hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="https://github.com" target="_blank" className="text-muted hover:text-primary transition-colors">
            <Code size={18} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-muted hover:text-primary transition-colors">
            <X size={18} />
          </Link>
        </div>
        
        <a href="/app-release.apk" download className="px-3 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-2xl bg-primary text-white dark:text-background font-black text-[10px] md:text-sm hover:opacity-90 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2">
          <Download size={14} className="hidden xs:block" /> <span className="whitespace-nowrap">Download <span className="hidden sm:inline">App</span></span>
        </a>
      </div>
    </motion.nav>
  );
};
