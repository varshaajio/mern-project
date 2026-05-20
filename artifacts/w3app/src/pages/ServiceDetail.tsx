import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type ServiceInfo = {
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  process: { step: string; detail: string }[];
};

const serviceData: Record<string, ServiceInfo> = {
  "web-development": {
    title: "Web Development",
    tagline: "Build stunning, high-performance websites tailored to your business needs.",
    desc: "At W3AppDevelopers, we build stunning, high-performance websites tailored to your business needs. From corporate sites to complex web apps, our team delivers responsive, fast, and SEO-friendly websites using the latest technologies.",
    features: [
      "Custom website design & development",
      "Responsive & mobile-first layouts",
      "E-commerce & payment gateway integration",
      "CMS-powered websites (WordPress, custom CMS)",
      "SEO-optimized code & page structure",
      "Performance & speed optimization",
    ],
    process: [
      { step: "Discovery & Planning", detail: "We start by understanding your business, goals, and target audience." },
      { step: "Design & Wireframing", detail: "Our team creates detailed blueprints and visually engaging designs." },
      { step: "Development", detail: "Using modern technologies, we build robust and scalable websites." },
      { step: "Testing & QA", detail: "Rigorous testing ensures a flawless, cross-browser experience." },
      { step: "Launch & Support", detail: "We ensure a smooth launch and provide ongoing maintenance." },
    ],
  },
  "app-development": {
    title: "App Development",
    tagline: "Create powerful, user-friendly mobile apps to elevate your business.",
    desc: "We create powerful, user-friendly mobile apps that elevate your business. Our team builds cross-platform and native Android/iOS apps with clean UI, smooth performance, and seamless integrations.",
    features: [
      "Android & iOS app development",
      "Cross-platform apps (React Native / Flutter)",
      "UI/UX focused design",
      "REST API & third-party integrations",
      "Push notifications & real-time features",
      "App Store & Play Store submission support",
    ],
    process: [
      { step: "Requirement Analysis", detail: "Understanding your app's purpose, users, and core features." },
      { step: "UI/UX Design", detail: "Wireframes and prototypes designed for intuitive user experience." },
      { step: "Development", detail: "Building the app with clean, maintainable, and scalable code." },
      { step: "Testing & Bug Fixes", detail: "Comprehensive device testing for a polished final product." },
      { step: "Deployment & Updates", detail: "Publishing to app stores and providing ongoing version updates." },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Boost your brand's online presence with data-driven digital marketing strategies.",
    desc: "We help boost your brand's online presence with data-driven digital marketing strategies. From SEO to social media management, our team delivers measurable results that grow your audience and revenue.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Google Ads & Pay-Per-Click campaigns",
      "Content marketing & blog strategy",
      "Email marketing campaigns",
      "Analytics reporting & ROI tracking",
    ],
    process: [
      { step: "Audit & Strategy", detail: "Analyzing your current online presence and defining a growth strategy." },
      { step: "Campaign Setup", detail: "Creating targeted campaigns across relevant digital channels." },
      { step: "Content Creation", detail: "Producing engaging content that resonates with your audience." },
      { step: "Execution & Monitoring", detail: "Running campaigns with real-time performance monitoring." },
      { step: "Reporting & Optimization", detail: "Monthly reports and continuous campaign optimization." },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    tagline: "Create visually stunning designs that captivate, engage, and elevate your brand.",
    desc: "Our graphic design team creates visually stunning designs that captivate, engage, and elevate your brand. Whether it's a logo, marketing material, or social media graphics, we deliver designs that make a lasting impression.",
    features: [
      "Logo & brand identity design",
      "Social media post & banner design",
      "Brochure, flyer & print design",
      "UI/UX design for web & apps",
      "Packaging design",
      "Motion graphics & video thumbnails",
    ],
    process: [
      { step: "Brief & Concept", detail: "Understanding your brand and creative requirements." },
      { step: "Ideation & Sketching", detail: "Exploring concepts and creating initial design directions." },
      { step: "Design Execution", detail: "Creating polished designs based on approved concepts." },
      { step: "Feedback & Revisions", detail: "Incorporating your feedback with prompt revisions." },
      { step: "Final Delivery", detail: "Delivering print-ready and web-ready design files." },
    ],
  },
  "corporate-training": {
    title: "Corporate Training",
    tagline: "Empower your team with expert-led corporate training for enhanced skills and productivity.",
    desc: "Empower your team with expert-led corporate training programs designed to enhance skills, productivity, and performance. We offer tailored training sessions in software development, digital marketing, and IT skills.",
    features: [
      "Customized training programs",
      "Web & app development workshops",
      "Digital marketing training",
      "Soft skills & leadership development",
      "Hands-on project-based learning",
      "Certificate of completion",
    ],
    process: [
      { step: "Needs Assessment", detail: "Understanding your team's current skill levels and learning goals." },
      { step: "Curriculum Design", detail: "Crafting a tailored training plan aligned to your objectives." },
      { step: "Training Delivery", detail: "Interactive sessions led by industry experts." },
      { step: "Practical Exercises", detail: "Hands-on tasks and real-world project simulations." },
      { step: "Assessment & Certification", detail: "Evaluating outcomes and awarding certificates of completion." },
    ],
  },
  "pos-software": {
    title: "Custom Software & POS",
    tagline: "Build tailored software solutions designed to meet your unique business needs and goals.",
    desc: "We build tailored custom software solutions and POS systems designed to meet your unique business needs. Our solutions are scalable, reliable, and built specifically to streamline your operations and improve efficiency.",
    features: [
      "Custom business software development",
      "POS system for retail & restaurants",
      "Inventory & stock management",
      "GST-compliant billing & invoicing",
      "Multi-store & multi-user access",
      "Cloud-based or on-premise deployment",
    ],
    process: [
      { step: "Requirements Gathering", detail: "Deep-dive into your workflows and business requirements." },
      { step: "Architecture Design", detail: "Planning a robust and scalable system architecture." },
      { step: "Agile Development", detail: "Iterative development with regular demos and feedback." },
      { step: "Integration & Testing", detail: "Integrating with your existing systems and thorough QA." },
      { step: "Go-Live & Training", detail: "Smooth deployment and team training for adoption." },
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const info = serviceData[id ?? ""] ?? {
    title: "Service",
    tagline: "Premium IT Services by W3AppDevelopers.",
    desc: "We offer premium IT services tailored to your business needs.",
    features: [],
    process: [],
  };

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-24 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{info.title}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{info.tagline}</p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg">Get a Quote</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{info.desc}</p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {info.features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Our Process</h3>
              <ol className="space-y-6">
                {info.process.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{p.step}</h4>
                      <p className="text-slate-600 text-sm mt-0.5">{p.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Talk to our team today and let's build something great together.</p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg text-primary bg-white hover:bg-white/90 border-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
