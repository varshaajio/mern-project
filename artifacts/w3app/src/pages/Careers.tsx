import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function Careers() {
  const jobs = [
    { title: "Frontend Developer", type: "Full-time", location: "Erode, India / Remote" },
    { title: "Backend Developer", type: "Full-time", location: "Erode, India / Remote" },
    { title: "Digital Marketing Executive", type: "Full-time", location: "Erode, India" },
    { title: "Graphic Designer", type: "Full-time", location: "Erode, India" },
    { title: "Business Development Executive", type: "Full-time", location: "Erode, India" },
  ];

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join Our Team</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Build the future of digital solutions with us. We are always looking for passionate people to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Open Positions</h2>
            
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="rounded-full w-full sm:w-auto" onClick={() => alert("CONTENT_PENDING_FROM_SOURCE")}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center text-slate-500 p-8 bg-slate-50 rounded-2xl border">
              <p>Don't see a role that fits? Send your resume to <a href="mailto:info@w3appdevelopers.com" className="text-primary hover:underline">info@w3appdevelopers.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
