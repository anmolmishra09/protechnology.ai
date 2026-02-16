import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowLeft, Upload, CheckCircle2, Briefcase } from "lucide-react";

export function ApplicationFormPage({ jobTitle, onBack }: { jobTitle: string; onBack: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: ''
  });
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/30 px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Application Received!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Thank you for applying for the <span className="font-semibold text-orange-600 dark:text-orange-400">{jobTitle}</span> position. Our team will review your application and get back to you soon.
          </p>
          <Button onClick={onBack} className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Back to Careers
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/30 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Button>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            {jobTitle}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Apply for this Role
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Please fill out the form below. We review applications on a rolling basis.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-orange-200 dark:border-slate-700 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-300">Full Name</Label>
              <Input 
                id="fullName" 
                placeholder="John Doe" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-slate-700 dark:text-slate-300">LinkedIn Profile</Label>
              <Input 
                id="linkedin" 
                type="url" 
                placeholder="linkedin.com/in/johndoe" 
                value={formData.linkedin}
                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume" className="text-slate-700 dark:text-slate-300">Resume / CV</Label>
            <div className="relative">
              <Input 
                id="resume" 
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 dark:file:bg-orange-900/30 file:text-orange-700 dark:file:text-orange-400 hover:file:bg-orange-100 dark:hover:file:bg-orange-900/50"
              />
              {fileName && (
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  {fileName}
                </div>
              )}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-slate-700 dark:text-slate-300">Cover Letter (Optional)</Label>
            <Textarea 
              id="coverLetter" 
              placeholder="Tell us why you're a great fit for this role..."
              rows={5}
              value={formData.coverLetter}
              onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 resize-none"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-6 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all font-semibold text-lg">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}