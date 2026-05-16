import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useReveal } from '@/hooks/use-reveal';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function Careers() {
  useReveal();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    { title: "MERN Stack Developer", type: "Full-Time", location: "Coimbatore / Remote" },
    { title: "Full Stack Developer", type: "Full-Time", location: "Coimbatore" },
    { title: "Full Stack Developer Intern", type: "Internship", location: "Coimbatore" },
    { title: "UI/UX Designer", type: "Full-Time", location: "Coimbatore" },
    { title: "UI/UX Designer Intern", type: "Internship", location: "Coimbatore" },
    { title: "Business Development Executive", type: "Full-Time", location: "Coimbatore" },
    { title: "Human Resources Manager", type: "Full-Time", location: "Coimbatore" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 reveal">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Join Our <span className="text-brand">Team</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Build the future of digital with a passionate and innovative team.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 reveal card-hover">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-slate-500 font-medium">
                    <span>{job.type}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full my-auto"></span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setSelectedJob(job.title)}
                  className="bg-brand hover:bg-orange-600 text-white font-bold rounded-full px-8 py-6 h-auto"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900">Apply for {selectedJob}</DialogTitle>
            <DialogDescription>
              Fill out the form below and attach your resume. Our HR team will get back to you.
            </DialogDescription>
          </DialogHeader>
          
          <form className="grid gap-4 mt-4" onSubmit={e => { e.preventDefault(); setSelectedJob(null); }}>
            <div className="grid gap-2">
              <label className="font-semibold text-slate-700">Full Name</label>
              <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/50" required />
            </div>
            <div className="grid gap-2">
              <label className="font-semibold text-slate-700">Email Address</label>
              <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/50" required />
            </div>
            <div className="grid gap-2">
              <label className="font-semibold text-slate-700">Phone Number</label>
              <input type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/50" required />
            </div>
            <div className="grid gap-2">
              <label className="font-semibold text-slate-700">Resume / Portfolio Link</label>
              <input type="url" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/50" required />
            </div>
            <div className="grid gap-2">
              <label className="font-semibold text-slate-700">Cover Letter (Optional)</label>
              <textarea className="w-full border border-slate-200 rounded-lg px-4 py-3 h-24 focus:outline-none focus:ring-2 focus:ring-brand/50"></textarea>
            </div>
            <Button type="submit" className="w-full bg-brand hover:bg-orange-600 text-white font-bold rounded-full py-6 mt-4">
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
