"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollingFeatures } from "@/components/ScrollingFeatures";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      
      {/* Redesigned interactive feature section */}
      <ScrollingFeatures />

      {/* Simplified Trusted By Section */}
      <section className="py-32 px-6 text-center bg-white/[0.01]">
        <h3 className="text-muted uppercase tracking-[0.3em] text-xs font-black mb-16 opacity-50">Built for the modern builder</h3>
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 grayscale contrast-200 pointer-events-none select-none">
           <div className="text-4xl md:text-5xl font-black italic tracking-tighter">PRODUCT HUNT</div>
           <div className="text-4xl md:text-5xl font-black italic tracking-tighter">FORBES</div>
           <div className="text-4xl md:text-5xl font-black italic tracking-tighter">WIRED</div>
           <div className="text-4xl md:text-5xl font-black italic tracking-tighter">THE VERGE</div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
