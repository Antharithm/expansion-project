"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
// import ProjectCard from "./components/ProjectCard";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { ParallaxProvider } from "react-scroll-parallax";
import BackToTopButton from "./components/BackToTopButton";
import Providers from "./providers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] dark:bg-[#121212]">
      <Providers>
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4 dark:text-white">
          <ParallaxProvider>
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </ParallaxProvider>
        </div>
        <Footer />
      </Providers>
      <BackToTopButton />
    </main>
  );
}
