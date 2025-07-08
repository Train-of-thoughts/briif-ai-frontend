import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ParticleBackground from "@/components/ParticleBackground";

export default function HeroSection() {
  return (
    <section id="hero" className="container-section flex flex-col items-center justify-center min-h-[90vh] text-center relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-[to_right,#8b5cf6_0%,#c4b5fd_100%] bg-clip-text text-transparent">
          Briff.ai - Make SMM Great Again
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          Transform your social media marketing with AI-powered tools that deliver real results
        </p>
        <Link href="/signup" className="btn-primary text-lg px-10 py-4 flex items-center justify-center mx-auto w-fit">
          Get Started
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
}