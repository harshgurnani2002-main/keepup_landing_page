import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/neurodo.png" 
            alt="Neurodo Logo" 
            width={32} 
            height={32} 
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight">Neurodo</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="mailto:support@neurodo.com" className="hover:text-primary transition-colors">Support</Link>
        </div>
        
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Neurodo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
