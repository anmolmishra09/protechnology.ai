import { Star } from "lucide-react";

interface TestimonialsProps {
  onNavigate?: (page: 'signup') => void;
}

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    avatar: "SC",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Pro Technology delivered a production-ready app in days, not months. The quality and attention to detail is phenomenal. It's like having a senior dev team that reads your mind.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder @StartupLab",
    avatar: "MR",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "I've tried every AI builder out there, and this is 100x better than anything else. The one-shot prompt capability is truly next level - it just works!",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    avatar: "EW",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "We had a design ready for months but deployment was dragging. Pro Technology blew our minds and opened up so many new possibilities. Absolutely incredible!",
    rating: 5
  },
  {
    name: "David Kim",
    role: "@davidbuilds",
    avatar: "DK",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote: "This platform saved me more time in 10 minutes than my last 3 frameworks combined. The backend integration is seamless. Big respect for what they built!",
    rating: 5
  },
  {
    name: "Alex Turner",
    role: "Software Architect",
    avatar: "AT",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "The code quality is exceptional - clean, functional, and follows best practices. It's not just about speed, it's about delivering production-grade solutions.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    avatar: "PP",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    quote: "I can't believe a single prompt generated such a comprehensive app with auth, database, and deployment ready. This is the future of development!",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "@jamescodes",
    avatar: "JM",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "Best AI development platform I've used. The ability to go from idea to deployment instantly while maintaining code quality is remarkable.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Engineering Lead",
    avatar: "LW",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Pro Technology understood exactly what we needed and delivered beyond expectations. The automation of infrastructure and deployment is game-changing.",
    rating: 5
  },
  {
    name: "Tom Harrison",
    role: "Lead Developer",
    avatar: "TH",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    quote: "The deployment process is so smooth. We went from prototype to production in record time. Absolutely revolutionary!",
    rating: 5
  },
  {
    name: "Nina Patel",
    role: "@ninatech",
    avatar: "NP",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "Game-changer for startups! The AI understands context better than any tool I've used. Highly recommended.",
    rating: 5
  }
];

// Split testimonials into two rows
const firstRow = testimonials.slice(0, 5);
const secondRow = testimonials.slice(5, 10);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-96 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300">
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
      "{testimonial.quote}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-200 dark:ring-orange-800"
        onError={(e) => {
          // Fallback to initials if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="hidden w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 items-center justify-center text-white font-bold">
        {testimonial.avatar}
      </div>
      <div>
        <div className="font-semibold text-slate-900 dark:text-white">
          {testimonial.name}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {testimonial.role}
        </div>
      </div>
    </div>
  </div>
);

export function Testimonials({ onNavigate }: TestimonialsProps) {
  const handleStartBuilding = () => {
    if (onNavigate) {
      onNavigate('signup');
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Happiness Speaks
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            What developers, founders, and teams building everything from side projects to enterprise apps have to say
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
            <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">1M+</span>
            <span className="text-lg">users in</span>
            <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">180+</span>
            <span className="text-lg">countries</span>
          </div>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="space-y-8">
        {/* First Row - Scrolling Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 animate-scroll-left">
            {[...firstRow, ...firstRow].map((testimonial, index) => (
              <TestimonialCard key={`left-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 animate-scroll-right">
            {[...secondRow, ...secondRow].map((testimonial, index) => (
              <TestimonialCard key={`right-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Join thousands of satisfied users building the future
          </p>
          <button 
            onClick={handleStartBuilding}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Building Today
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
