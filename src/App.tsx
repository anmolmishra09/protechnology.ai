
import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeatureCards } from "./components/FeatureCards";
import { TemplatesShowcase } from "./components/TemplatesShowcase";
import { StatsSection } from "./components/StatsSection";
import { Testimonials } from "./components/Testimonials";
import { AIAgents } from "./components/AIAgents";
import { FAQ } from "./components/FAQ";
import { CTABanner } from "./components/CTABanner";

import { BlogSection } from "./components/BlogSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { SearchFilterSection } from "./components/SearchFilterSection";
import { LibrarySection } from "./components/LibrarySection";
import { WebsiteCTA } from "./components/WebsiteCTA";
import { Footer } from "./components/Footer";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";
import { ContactPage } from "./components/ContactPage";
import { CareersPage } from "./components/CareersPage";
import { ApplicationFormPage } from "./components/ApplicationFormPage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { ArticlesPage } from "./components/ArticlesPage";
import { VisionMissionPage } from "./components/VisionMissionPage";
import { ChatbotPage } from "./components/ChatbotPage";
import { FloatingChatWidget } from "./components/FloatingChatWidget";

import TrustBanner from "./components/TrustBanner";
import { Navbar } from "./components/Navbar";
import { FloatingAskBar } from "./components/FloatingAskBar";

type PageType = 'home' | 'privacy' | 'terms' | 'contact' | 'careers' | 'apply' | 'login' | 'signup' | 'articles' | 'vision' | 'chatbot';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setCurrentPage('apply');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };


  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="pt-20">
        {children}
      </div>
      <FloatingChatWidget onOpenFullChat={() => handleNavigate('chatbot')} />
      <FloatingAskBar onOpenFullChat={() => handleNavigate('chatbot')} />
    </div>
  );

  if (currentPage === 'privacy') return <PageWrapper><PrivacyPage onBack={handleBack} /></PageWrapper>;
  if (currentPage === 'terms') return <PageWrapper><TermsPage onBack={handleBack} /></PageWrapper>;
  if (currentPage === 'contact') return <PageWrapper><ContactPage onBack={handleBack} /></PageWrapper>;
  if (currentPage === 'articles') return <PageWrapper><ArticlesPage onBack={handleBack} /></PageWrapper>;
  if (currentPage === 'vision') return <PageWrapper><VisionMissionPage onBack={handleBack} /></PageWrapper>;
  if (currentPage === 'careers') return <PageWrapper><CareersPage onBack={handleBack} onApply={handleApply} /></PageWrapper>;
  if (currentPage === 'apply') return <PageWrapper><ApplicationFormPage jobTitle={selectedJob} onBack={() => handleNavigate('careers')} /></PageWrapper>;

  if (currentPage === 'chatbot') return <div className="min-h-screen bg-white"><ChatbotPage onBack={handleBack} /></div>;
  if (currentPage === 'login') return <div className="min-h-screen bg-white"><LoginPage onBack={handleBack} onLoginSuccess={handleLoginSuccess} onSignupClick={() => handleNavigate('signup')} /></div>;
  if (currentPage === 'signup') return <div className="min-h-screen bg-white"><SignupPage onBack={() => handleNavigate('login')} onSignupSuccess={handleLoginSuccess} /></div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="pt-20">
        <HeroSection />
        <Testimonials onNavigate={handleNavigate} />
        <TrustBanner />
        <HowItWorks />
        <FeatureCards />
        <LibrarySection />
        <SearchFilterSection />
        <FeaturesSection />
        <WebsiteCTA onNavigate={handleNavigate} />
        <AIAgents />
        <TemplatesShowcase onNavigate={handleNavigate} />
        <StatsSection />
        <BlogSection />
        <CTABanner onNavigate={handleNavigate} />
        <FAQ onNavigate={handleNavigate} />
        <Footer />
      </div>
      <FloatingChatWidget onOpenFullChat={() => handleNavigate('chatbot')} />
      <FloatingAskBar onOpenFullChat={() => handleNavigate('chatbot')} />
    </div>
  );
}