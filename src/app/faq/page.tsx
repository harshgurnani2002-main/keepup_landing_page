import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What is KeepUp?",
    answer: "A productivity hub combining habits, tasks, focus timer, and an AI assistant."
  },
  {
    question: "Is it free?",
    answer: "Yes, 100% free."
  },
  {
    question: "What can the AI do?",
    answer: "Manage schedule, suggest improvements, chat/voice control."
  },
  {
    question: "Is my data private?",
    answer: "Yes, data is securely stored and ownership is retained by the user."
  },
  {
    question: "What platforms?",
    answer: "Currently available as an Android APK, Web App coming soon."
  }
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto flex-1 w-full">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 group w-fit"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-bold tracking-widest uppercase text-xs">Back to Home</span>
        </Link>

        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <MessageCircleQuestion size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gradient">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl glass bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {faq.question}
              </h3>
              <p className="text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
