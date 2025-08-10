import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AboutSection from "@/components/landing/AboutSection";

export default function Home() {
  return (
    <main data-surface="landing-dark" className="bg-app text-app pt-16 sm:pt-20 md:pt-24">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
