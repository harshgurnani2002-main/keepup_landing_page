import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-8 text-gradient">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-muted">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">
            Neurodo ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us when you use our application. This may include account information, habit tracking data, tasks, and focus session logs. 
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, as well as to personalize your experience within the Neurodo app.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at support@neurodo.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
