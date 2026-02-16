import { ArrowLeft, Eye, Target, Rocket, Users, Lightbulb, Globe } from "lucide-react";
import { Button } from "../components/ui/button";

interface VisionMissionPageProps {
  onBack: () => void;
}

export function VisionMissionPage({ onBack }: VisionMissionPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" onClick={onBack} className="mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              Vision & Mission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Shaping the future of technology through innovation and excellence
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl p-8 md:p-12 border border-orange-100 dark:border-orange-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              To be the global leader in AI-powered technology solutions, transforming industries and empowering 
              businesses worldwide through cutting-edge innovation. We envision a future where artificial intelligence 
              seamlessly integrates with human expertise to solve complex challenges and create unprecedented opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Global Impact</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Creating solutions that reach and benefit users worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Innovation First</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pioneering breakthrough technologies that redefine industries
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Future Ready</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building technologies that anticipate tomorrow's needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl p-8 md:p-12 border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Our mission is to deliver intelligent, scalable, and secure AI solutions that drive tangible business value. 
              We are committed to excellence in every project, fostering innovation, and maintaining the highest standards 
              of quality and reliability in our products and services.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Deliver Excellence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Provide world-class AI solutions that exceed client expectations and deliver measurable results
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Empower Businesses
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enable organizations to harness the power of AI to optimize operations and drive growth
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Foster Innovation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Continuously research and develop cutting-edge technologies that push the boundaries of what's possible
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Build Trust
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Maintain the highest standards of security, privacy, and ethical AI development in all our solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-xl border border-orange-100 dark:border-orange-800">
                <Users className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">People First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize our team, clients, and community in everything we do
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800">
                <Lightbulb className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transparency, honesty, and ethical practices guide our decisions
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800">
                <Rocket className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Striving for the highest quality in every product and service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
