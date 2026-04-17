import { useState, useMemo } from "react";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Send,
  X,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Search,
  Upload,
  FileText,
  Trash2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface CareersPageProps {
  onBack: () => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function CareersPage({ onBack }: CareersPageProps) {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [filter, setFilter] = useState("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // 📄 New: File State
  const [file, setFile] = useState<File | null>(null);

  const jobs = [
    {
      id: "ai-eng",
      title: "AI Engineering Lead",
      department: "Engineering",
      location: "Remote / India",
      experience: "0-1 years",
      salary: "₹6L - ₹12L",
      description: "Looking for an expert to lead our LLM integration and knowledge graph architecture."
    },
    {
      id: "fe-prod",
      title: "Frontend Developer",
      department: "Product",
      location: "Remote",
      experience: "0-1 years",
      salary: "₹5L - ₹10L",
      description: "Join our core team to build beautiful, responsive AI-driven interfaces using React and Tailwind."
    }
  ];

  const filteredJobs = useMemo(() => 
    filter === "All" ? jobs : jobs.filter(j => j.department === filter),
    [filter]
  );

  // 📄 New: Handle File Upload logic
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf" || selectedFile.type.includes("msword") || selectedFile.type.includes("officedocument.wordprocessingml")) {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF or Word document.");
      }
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your resume.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API Call (Imagine sending via FormData)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedJob(null);
      setFile(null); // Clear file for next use
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-orange-100 selection:text-orange-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Button
            onClick={onBack}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full 
            bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
            shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
          <div className="flex gap-2 bg-slate-200/50 p-1 rounded-full border border-slate-200">
            {["All", "Engineering", "Product"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl font-black tracking-tight text-slate-900 mb-6"
          >
            Join <span className="text-orange-600">Inalgo</span>
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
            Don't just use AI. Build the systems that make it accessible to everyone.
          </p>
        </div>

        {/* Job Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-6"
        >
          {filteredJobs.length > 0 ? filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100/50 transition-all cursor-pointer group"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-tighter">
                  {job.department}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {job.title}
              </h3>
              
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-500" /> {job.location}</div>
                <div className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-orange-500" /> {job.experience}</div>
                <div className="font-bold text-slate-900">{job.salary}</div>
              </div>
            </motion.div>
          )) : (
            <div className="col-span-2 text-center py-20 bg-slate-100/50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-bold">No roles found in this category.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* --- Detailed Apply Modal --- */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { if(!isSubmitting) setSelectedJob(null); }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={selectedJob.id}
              className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h2 className="text-3xl font-black mb-3">Application Received!</h2>
                    <p className="text-slate-500 text-lg">Good luck! We'll be in touch within 48 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <h2 className="text-4xl font-black text-slate-900 mb-2">{selectedJob.title}</h2>
                        <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">{selectedJob.department} • {selectedJob.location}</p>
                      </div>
                      <button onClick={() => setSelectedJob(null)} className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
                        <X className="w-6 h-6 text-slate-600" />
                      </button>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl mb-10">
                      <h4 className="font-bold text-slate-900 mb-2">Role Description</h4>
                      <p className="text-slate-600 leading-relaxed">{selectedJob.description}</p>
                    </div>

                    <form onSubmit={handleApplySubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Name</label>
                          <input required disabled={isSubmitting} className="w-full px-6 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold disabled:opacity-50" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email</label>
                          <input required type="email" disabled={isSubmitting} className="w-full px-6 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold disabled:opacity-50" placeholder="email@example.com" />
                        </div>
                      </div>

                      {/* 📄 Resume Upload Zone */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                          Resume / CV (PDF)
                        </label>
                        
                        {!file ? (
                          <div className="relative group">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              disabled={isSubmitting}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center bg-slate-50 group-hover:bg-orange-50 group-hover:border-orange-200 transition-all">
                              <div className="p-3 bg-white rounded-xl shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                <Upload className="w-5 h-5 text-orange-600" />
                              </div>
                              <p className="text-sm font-bold text-slate-600">Click or drag to upload</p>
                              <p className="text-xs text-slate-400 mt-1">PDF, DOCX up to 5MB</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-100 rounded-[1.5rem]">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-orange-600 rounded-lg">
                                <FileText className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-900 truncate max-w-[200px]">
                                  {file.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setFile(null)}
                              className="p-2 hover:bg-orange-100 rounded-full text-orange-600 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Portfolio/LinkedIn Link</label>
                        <input required type="url" disabled={isSubmitting} className="w-full px-6 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold disabled:opacity-50" placeholder="https://github.com/..." />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-16 bg-slate-900 hover:bg-orange-600 text-white rounded-[1.5rem] font-bold text-lg shadow-xl transition-all active:scale-[0.98] disabled:bg-slate-400"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Processing...</span>
                        ) : (
                          <span className="flex items-center gap-2">Submit My Application <Send className="w-5 h-5" /></span>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}