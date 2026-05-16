"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";
import { Briefcase, Heart, TrendingUp, X } from "lucide-react";

const jobs = [
  { id: 1, title: "Mern Stack Developer", type: "Full Time", exp: "2-3 years exp" },
  { id: 2, title: "Full Stack Developer", type: "Full Time", exp: "3-5 years exp" },
  { id: 3, title: "Full Stack Developer Intern", type: "Internship", exp: "Fresher" },
  { id: 4, title: "UI/UX Designer", type: "Full Time", exp: "2-4 years exp" },
  { id: 5, title: "UI/UX Designer Intern", type: "Internship", exp: "Fresher" },
  { id: 6, title: "Business Development Executive", type: "Full Time", exp: "1-2 years exp" },
  { id: 7, title: "Human Resources Manager", type: "Full Time", exp: "3-5 years exp" },
  { id: 8, title: "Human Resources Intern", type: "Internship", exp: "Fresher" },
];

export default function Careers() {
  useReveal();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
  const [status, setStatus] = useState<{type: "idle"|"loading"|"success"|"error", message?: string}>({ type: "idle" });

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, position: selectedJob }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus({ type: "success", message: "Application submitted successfully!" });
      setTimeout(() => {
        setSelectedJob(null);
        setStatus({ type: "idle" });
        setFormData({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
      }, 3000);
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] pt-24 bg-white">
        <section className="bg-[#1a1a2e] py-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 reveal">Join Our Team</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal">Build your career with Coimbatore's leading web development & digital marketing agency.</p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-12 text-slate-900 reveal">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover reveal-left">
                <Heart className="w-12 h-12 text-[#F26522] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
                <p className="text-slate-600">We believe in working hard and resting well. Flexible hours and supportive environment.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover reveal">
                <TrendingUp className="w-12 h-12 text-[#F26522] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                <p className="text-slate-600">Continuous learning, skill development, and clear paths for career advancement.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover reveal-right">
                <Briefcase className="w-12 h-12 text-[#F26522] mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Great Team</h3>
                <p className="text-slate-600">Collaborate with talented, passionate individuals in a positive and inclusive culture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-12 text-center text-slate-900 reveal">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all card-hover reveal flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{job.title}</h3>
                    <div className="space-y-2 mb-6">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full mr-2">
                        {job.type}
                      </span>
                      <span className="inline-block px-3 py-1 bg-orange-50 text-[#F26522] text-sm font-semibold rounded-full">
                        {job.exp}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(job.title)}
                    className="w-full bg-slate-900 hover:bg-[#F26522] text-white font-bold py-3 rounded-xl transition-colors"
                  >
                    APPLY NOW
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-6 md:p-8 relative shadow-2xl my-8">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Apply for {selectedJob}</h2>
            <p className="text-slate-500 mb-8">Please fill out the form below to apply.</p>
            
            <form onSubmit={handleApply} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Years of Experience</label>
                  <input required type="text" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] outline-none" placeholder="e.g. 2 years" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Cover Letter</label>
                <textarea required rows={4} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] outline-none" placeholder="Tell us why you are a great fit..." />
              </div>
              
              <button disabled={status.type === "loading"} type="submit" className="w-full bg-[#F26522] hover:bg-[#e05510] text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-70 mt-4">
                {status.type === "loading" ? "Submitting..." : "Submit Application"}
              </button>
              
              {status.message && (
                <div className={`p-4 rounded-lg text-center font-bold mt-4 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
