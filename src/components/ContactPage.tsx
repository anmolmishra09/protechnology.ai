import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";


export function ContactPage({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (

    <div className="min-h-screen bg-white selection:bg-orange-100">

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-6 py-20"
      >

        {/* Back Button */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <Button
  onClick={onBack}
  className="group mb-12 relative flex items-center gap-2 px-6 py-3 rounded-full 
  bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
  shadow-lg hover:shadow-orange-400/40 transition-all duration-300"
>
  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
  Back
</Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter">
              Get in <span className="text-orange-600">Touch</span>
            </h1>

            <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium">
              Have questions about our AI solutions? We'd love to hear from you.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, title: "Email", value: "inaialgo@gmail.com", color: "bg-orange-50 text-orange-600" },
                { icon: Phone, title: "Phone", value: "+91 87872 22966", color: "bg-blue-50 text-blue-600" },
                { icon: MapPin, title: "Office", value: "Vibhuti Khand, Gomti Nagar, Lucknow – 226010", color: "bg-emerald-50 text-emerald-600" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-6 group"
                >
                  <div className={`p-4 ${item.color} rounded-2xl shadow-sm transition-all`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                    <p className="text-slate-500 font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-orange-200/40 transition-all"
          >
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Name */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                <Label className="font-bold ml-1">Full Name</Label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-14 bg-slate-50 focus:bg-white focus:border-orange-500 rounded-xl transition-all"
                />
              </motion.div>

              {/* Email */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                <Label className="font-bold ml-1">Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-14 bg-slate-50 focus:bg-white focus:border-orange-500 rounded-xl transition-all"
                />
              </motion.div>

              {/* Message */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-3">
                <Label className="font-bold ml-1">Message</Label>
                <Textarea
                  rows={5}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-slate-50 focus:bg-white focus:border-orange-500 rounded-2xl transition-all p-5"
                />
              </motion.div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full relative overflow-hidden rounded-xl py-5 text-white font-semibold bg-gradient-to-r from-orange-500 to-pink-500"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}