import React from "react";
import { TopInfoBar } from "@/components/layout/TopInfoBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

import { HeroSection } from "@/components/home/HeroSection";
import { StatsBanner } from "@/components/home/StatsBanner";
import { RecentProfiles } from "@/components/home/RecentProfiles";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AppDownloadBanner } from "@/components/home/AppDownloadBanner";
import { SuccessStories } from "@/components/home/SuccessStories";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopInfoBar />
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <StatsBanner />
        <RecentProfiles />
        <HowItWorks />
        <WhyChooseUs />
        <AppDownloadBanner />
        <SuccessStories />
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
