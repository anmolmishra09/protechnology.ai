import { ArrowLeft, Calendar, Clock, Tag, TrendingUp, Brain, Code, Database, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

import { useState } from "react";
import { mockArticles, Article } from "../utils/mockBackend";

const articles: Article[] = mockArticles;

const categories = ["All", "AI Technology", "Engineering", "AI Research", "Best Practices", "AI Ethics", "Development"];

export function ArticlesPage({ onBack }: { onBack: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (

    <div className="min-h-screen bg-white selection:bg-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Button
  onClick={onBack}
  className="group mb-12 relative flex items-center gap-2 px-6 py-3 rounded-full 
  bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold 
  shadow-lg hover:shadow-orange-400/40 transition-all duration-300"
>
  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
  Back
</Button>

        {/* Premium Video Hero Header */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden mb-24 shadow-2xl shadow-slate-200/50 flex flex-col justify-center items-center text-center p-10" style={{ height: "min(60vh, 600px)" }}>
          {/* Background Video */}
          <video 
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay 
            loop 
            muted 
            playsInline 
            disableRemotePlayback 
            disablePictureInPicture
            poster="https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.St9cpZ0JrziC5m94.dFNwqKL4Rl2gIDTLPaZkm7Dt1q1bCirnsZYC8ktcqtppNHha9E7RhB0q_5Pxy2d2r2cxNs7glDVhalZUqeXWm3kVUSMkyzIx_QQln-9y0Gq6r5AdmUnLFs51P-nrAH1Gf5d1PatOO4kUhXy49wVwPXzuu__bjE62yxob_eh_jJ_kvrgHVoigdsUB_vo4yIlELlk"
          >
            <source 
              src="https://bytescale.mobbin.com/FW25bBB/video/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.1sgXhAN6qJ9Mo7Vw.H3X_64Yjm4Uf1NRMl1aEk-BLcyNuifbmlgt6AVLt9CJJCLJnPwEiez3mpXf-rpyiaAI908OCFfaflEtSXE_DfX8rJJN1FrfpEdB7atviLMXMq_3YX8WKir0XejXunT-KXwHQy0Q6s9PvVyaQbHnLzCEFWyyO5WkCRJ3MkycFiwDReFJYm-P9tHFEbIkqb3zJfbSmeIW1r90xEVmWv6ScUE0XRPqAlwVAflSip5C4JLBlT9vVhCY4HmZ0An2mksY4lZI6W3PUKC0cNJrTO2rm6PvD9_Z3ojsTT6ZJG9N7SFRcC_R69cH2X4vkmbqXuSCE0ZyttGvUF_y-uBRrgA" 
              type="video/mp4" 
            />
          </video>
          
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto mt-12">
            <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-white/20 px-4 py-1.5 rounded-full mb-8 font-black uppercase tracking-widest cursor-pointer transition-colors shadow-lg">
              Explore Library
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-lg leading-[1.1]">
              AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
              Explore our latest insights, research, and best practices in artificial intelligence.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                selectedCategory === category 
                  ? 'bg-slate-950 border-slate-950 text-white shadow-xl shadow-slate-200' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}

        <div className="mb-32">
          <h2 className="text-3xl font-black text-slate-950 mb-12 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-orange-600" />
            </div>
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredArticles.filter(article => article.featured).map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group overflow-hidden"
              >
                <div className="p-10">
                  <div className="flex items-start justify-between mb-8">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-24 h-24 object-cover rounded-2xl shadow-xl border border-slate-50 group-hover:scale-105 transition-transform" 
                    />
                    <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-orange-100">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4 group-hover:text-orange-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-lg mb-6 leading-relaxed font-medium">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm font-bold text-slate-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles */}

        <div className="mb-32">
          <h2 className="text-3xl font-black text-slate-950 mb-12">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-[2rem] border border-slate-100 p-8 hover:shadow-xl hover:shadow-slate-200 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-16 h-16 object-cover rounded-xl shadow-lg border border-slate-50" 
                  />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-950 mb-4 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* newsletter Section */}
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 blur-[120px] rounded-full -ml-32 -mb-32" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Stay in the <span className="text-orange-500">Loop</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest research delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/10 focus:outline-none focus:ring-4 focus:ring-orange-500/20 text-white placeholder:text-slate-500 font-bold"
              />
              <button 
                onClick={() => alert('Thank you for subscribing!')}
                className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
