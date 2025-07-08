import Link from "next/link";
import { ArrowRightIcon, BoltIcon, ChartBarIcon, CalendarIcon, CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section id="hero" className="container-section flex flex-col items-center justify-center min-h-[90vh] text-center">
        <div className="max-w-4xl mx-auto">
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

      {/* Features Section */}
      <section id="features" className="container-section bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-linear-[to_right,#a78bfa_0%,#7c3aed_100%] bg-clip-text text-transparent">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Briff.ai can revolutionize your social media strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-primary-600">
            <div className="w-16 h-16 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full flex items-center justify-center mb-6">
              <BoltIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">AI-Powered Content Creation</h3>
            <p className="text-gray-300">
              Generate engaging social media content in seconds with our advanced AI algorithms tailored to your brand voice.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-primary-600">
            <div className="w-16 h-16 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full flex items-center justify-center mb-6">
              <ChartBarIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Smart Analytics</h3>
            <p className="text-gray-300">
              Track performance metrics and gain valuable insights to optimize your social media campaigns for maximum impact.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-primary-600">
            <div className="w-16 h-16 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full flex items-center justify-center mb-6">
              <CalendarIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Automated Scheduling</h3>
            <p className="text-gray-300">
              Plan and schedule your content across multiple platforms with our intuitive calendar interface for consistent posting.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-[to_right,#a78bfa_0%,#7c3aed_100%] bg-clip-text text-transparent">Why Choose Briff.ai?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Briff.ai combines cutting-edge AI technology with deep social media expertise to deliver a platform that truly understands your marketing needs.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-300 text-lg">Save up to 15 hours per week on content creation</span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-300 text-lg">Increase engagement rates by an average of 43%</span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-300 text-lg">Trusted by over 10,000 marketers worldwide</span>
              </li>
            </ul>
            <div className="mt-10">
              <Link href="/signup" className="btn-primary mr-6">
                Get Started
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Demo
              </Link>
            </div>
          </div>
          <div className="bg-linear-[to_bottom_right,#4c1d95_0%,#6d28d9_100%] p-10 rounded-3xl shadow-lg">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-primary-400">What Our Customers Say</h3>
              <blockquote className="text-gray-300 italic mb-6 text-lg">
                "Briff.ai has completely transformed our social media strategy. We're seeing higher engagement and saving hours of work every week."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-linear-[to_bottom_right,#7c3aed_0%,#a78bfa_100%] rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="font-medium text-white">Jane Doe</p>
                  <p className="text-gray-400">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <Image
                src='/icons/logo/logo-dark-text-left-transparent.svg'
                alt="Briff.ai Logo"
                className="h-[50px] w-[100px] md:w-[150px] object-cover object-center"
                width={150}
                height={50}
              />
            </div>
            <div className="flex space-x-8 mb-10">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Features</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
            </div>
            <div className="text-center">
              <p className="text-gray-500">
                © {new Date().getFullYear()} Briff.ai. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
