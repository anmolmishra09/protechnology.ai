import { ArrowLeft, MapPin, DollarSign, Clock, Briefcase, Heart, Users, Lightbulb, TrendingUp, Globe, Zap, Trophy, Coffee, Plane, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";

interface CareersPageProps {
  onBack: () => void;
  onApply: (jobTitle: string) => void;
}

export function CareersPage({ onBack, onApply }: CareersPageProps) {
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000",
      experience: "0 to 1 year",
      description: "Lead the development of next-generation AI models and infrastructure."
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "₹6,00,000 - ₹9,00,000",
      experience: "0 to 1 year",
      description: "Shape the visual language of our AI products and user experiences."
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Research",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000",
      experience: "0 to 1 year",
      description: "Analyze complex datasets to drive product innovation and strategy."
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹5,00,000 - ₹8,00,000",
      experience: "0 to 1 year",
      description: "Build responsive, high-performance web interfaces using React and TypeScript."
    },
    {
      id: 5,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹6,00,000 - ₹9,00,000",
      experience: "0 to 1 year",
      description: "Design scalable APIs and microservices to power our AI platform."
    },
    {
      id: 6,
      title: "Machine Learning Researcher",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "₹8,00,000 - ₹11,00,000",
      experience: "0 to 1 year",
      description: "Push the boundaries of generative AI and publish cutting-edge research."
    },
    {
      id: 7,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹5,50,000 - ₹8,50,000",
      experience: "0 to 1 year",
      description: "Manage CI/CD pipelines and cloud infrastructure for high-availability systems."
    },
    {
      id: 8,
      title: "Technical Program Manager",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000",
      experience: "0 to 1 year",
      description: "Coordinate cross-functional teams to deliver complex technical projects on time."
    },
    {
      id: 9,
      title: "UX Researcher",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "₹5,00,000 - ₹8,00,000",
      experience: "0 to 1 year",
      description: "Conduct user studies and translate insights into actionable design improvements."
    },
    {
      id: 10,
      title: "AI Ethics Specialist",
      department: "Research",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹6,50,000 - ₹9,50,000",
      experience: "0 to 1 year",
      description: "Ensure our AI systems are developed and deployed responsibly and ethically."
    },
    {
      id: 11,
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹7,50,000 - ₹11,00,000",
      experience: "0 to 1 year",
      description: "Define product vision and roadmap for our enterprise AI solutions."
    },
    {
      id: 12,
      title: "Security Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹6,00,000 - ₹9,00,000",
      experience: "0 to 1 year",
      description: "Protect our platform and user data through robust security protocols."
    },
    {
      id: 13,
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹4,50,000 - ₹7,00,000",
      experience: "0 to 1 year",
      description: "Drive brand awareness through compelling content and strategic campaigns."
    },
    {
      id: 14,
      title: "Technical Writer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "₹4,00,000 - ₹6,50,000",
      experience: "0 to 1 year",
      description: "Create clear documentation and guides for developers using our APIs."
    },
    {
      id: 15,
      title: "Customer Success Manager",
      department: "Operations",
      location: "Gurugram, India",
      type: "Full-time",
      salary: "₹4,00,000 - ₹6,00,000",
      experience: "0 to 1 year",
      description: "Ensure our clients achieve their goals using Pro Technology solutions."
    },
    {
      id: 16,
      title: "Technical Recruiter",
      department: "HR",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹3,50,000 - ₹5,50,000",
      experience: "0 to 1 year",
      description: "Identify and attract top engineering talent to join our growing team."
    },
    {
      id: 17,
      title: "Solutions Architect",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      salary: "₹7,00,000 - ₹10,00,000",
      experience: "0 to 1 year",
      description: "Partner with enterprise clients to design custom technical implementations."
    },
    {
      id: 18,
      title: "Mobile Developer (iOS/Android)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹5,50,000 - ₹8,50,000",
      experience: "0 to 1 year",
      description: "Develop native mobile applications to extend our AI platform to handheld devices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" onClick={onBack} className="mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Build the Future with Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join our mission to democratize AI development and empower millions of creators worldwide
          </p>
        </div>

        {/* Founders' Note Section */}
        <div className="mb-24 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900/50 dark:to-orange-950/30 rounded-3xl p-8 md:p-12 border border-orange-100 dark:border-orange-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                A Note from Our Founders
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We started Pro Technology with a simple belief: <strong className="text-orange-600 dark:text-orange-400">building software shouldn't be this hard</strong>. 
                We've seen too many brilliant ideas die because the technical barriers were too high. Too many founders spending months 
                just to get an MVP. Too many teams burning out fighting with infrastructure instead of solving real problems.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Our mission is to compress the time from idea to launch from months down to minutes. We're building the platform where 
                anyone can describe their vision and instantly get a production-ready application. No templates. No limitations. 
                Just pure creation powered by AI that truly understands what you're trying to build.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                But here's the thing: <strong className="text-orange-600 dark:text-orange-400">we can't do this alone</strong>. 
                We need people who are obsessed with pushing the boundaries of what's possible. People who get excited about hard problems. 
                People who believe that the future of software development will be radically different—and want to build that future.
              </p>

              <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-6 backdrop-blur-sm border border-orange-200 dark:border-orange-800/50">
                <p className="text-lg text-gray-800 dark:text-gray-200 italic mb-4">
                  "If you're someone who wants to work on technology that will impact millions of developers, designers, and creators 
                  worldwide—we'd love to meet you."
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold border-2 border-white dark:border-slate-800">
                      AK
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold border-2 border-white dark:border-slate-800">
                      SP
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">The Pro Technology Team</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Building the future of development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who Thrives Here Section */}
        <div className="mb-24 overflow-hidden">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
              <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="text-orange-800 dark:text-orange-300 font-semibold">Our Culture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Who Thrives Here
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're looking for people who embody these qualities and want to make an impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Product Thinkers",
                description: "You don't just write code—you understand why you're building something and how it impacts users.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Zap,
                title: "Fast Movers",
                description: "You thrive in a fast-paced environment where shipping quickly and iterating is the norm.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: TrendingUp,
                title: "Growth Mindset",
                description: "You're constantly learning, adapting, and pushing yourself to improve every day.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "You think about how your work affects users across different cultures and contexts worldwide.",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: Heart,
                title: "User Obsessed",
                description: "You genuinely care about making developers' lives better and creating delightful experiences.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Trophy,
                title: "Excellence Driven",
                description: "Good isn't good enough. You take pride in your craft and always aim for exceptional quality.",
                color: "from-amber-500 to-yellow-500"
              }
            ].map((trait, index) => (
              <div 
                key={index} 
                className="w-full max-sm:w-full sm:w-[calc(50%-1rem)] bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group flex flex-col gap-8 sm:rotate-[10deg] hover:rotate-0"
                style={{
                  transformOrigin: 'center center'
                }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${trait.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <trait.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {trait.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {trait.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks & Benefits Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Perks & Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We invest in our team's growth, health, and happiness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Learning Budget",
                description: "Annual budget for courses, books, and conferences"
              },
              {
                icon: Plane,
                title: "Work from Anywhere",
                description: "Fully remote with flexible hours and annual team retreats"
              },
              {
                icon: Coffee,
                title: "Health & Wellness",
                description: "Comprehensive health insurance and wellness programs"
              },
              {
                icon: Zap,
                title: "Latest Tech",
                description: "Top-tier equipment and tools to do your best work"
              }
            ].map((perk, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center group hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 animate-pulse opacity-20"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/50">
                    <perk.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {perk.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Open Positions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find your next role and start building the future with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-orange-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-2xl hover:scale-[1.02] hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-3">
                  {job.department}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
                {job.description}
              </p>

              <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {job.experience}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
              </div>

              <Button 
                onClick={() => onApply(job.title)}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}