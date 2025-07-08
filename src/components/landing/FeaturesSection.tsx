import { BoltIcon, ChartBarIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  return (
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
  );
}