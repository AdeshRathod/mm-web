import { TopInfoBar } from "@/components/layout/TopInfoBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-gradient-to-r from-primary to-accent py-12 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-2">{title}</h1>
      {subtitle && <p className="text-white/80 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopInfoBar />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
