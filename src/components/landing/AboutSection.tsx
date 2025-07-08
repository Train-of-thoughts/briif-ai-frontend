import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function AboutSection() {
  return (
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
  );
}