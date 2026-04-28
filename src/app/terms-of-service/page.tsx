import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-muted">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            Please read these Terms of Service carefully before using the Neurodo application operated by us.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our app, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Use License</h2>
          <p className="mb-4">
            Neurodo grants you a personal, non-exclusive, non-transferable, revocable license to use the application for your personal, non-commercial purposes.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. User Content</h2>
          <p className="mb-4">
            You retain all your ownership rights in your content (habits, tasks, focus logs). By using the app, you grant us a license to host and display this content to provide you the service.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Disclaimer</h2>
          <p className="mb-4">
            The materials within the Neurodo app are provided on an 'as is' basis. Neurodo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
