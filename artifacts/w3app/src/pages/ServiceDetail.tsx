import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServiceDetail() {
  const { id } = useParams();
  
  const getServiceInfo = () => {
    switch(id) {
      case "web-development": return { title: "Web Development", desc: "Build stunning, high-performance websites tailored to your business needs." };
      case "app-development": return { title: "App Development", desc: "Create powerful, user-friendly mobile apps to elevate your business." };
      case "digital-marketing": return { title: "Digital Marketing", desc: "Boost your brand's online presence with data-driven digital marketing strategies." };
      case "graphic-design": return { title: "Graphic Design", desc: "Create visually stunning designs that captivate, engage, and elevate your brand." };
      case "corporate-training": return { title: "Corporate Training", desc: "Empower your team with expert-led corporate training for enhanced skills and productivity." };
      case "pos-software": return { title: "Custom Software & POS", desc: "Build tailored software solutions designed to meet your unique business needs and goals." };
      default: return { title: "Service", desc: "Premium IT Services." };
    }
  };

  const info = getServiceInfo();

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-24 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">{info.title}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {info.desc}
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg">
                Inquire Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate text-slate-600">
            <p>
              At W3AppDevelopers, we approach every project with a strategic mindset and a commitment to excellence. 
              Our process ensures that we not only meet your requirements but exceed your expectations.
            </p>
            <h3>Our Process</h3>
            <ul>
              <li><strong>Discovery & Planning:</strong> We start by understanding your business, goals, and target audience.</li>
              <li><strong>Design & Architecture:</strong> Our team creates detailed blueprints and visually engaging designs.</li>
              <li><strong>Development & Implementation:</strong> Using modern technologies, we build robust and scalable solutions.</li>
              <li><strong>Testing & QA:</strong> Rigorous testing ensures a flawless end product.</li>
              <li><strong>Deployment & Support:</strong> We ensure a smooth launch and provide ongoing maintenance.</li>
            </ul>
            <p>
              Ready to elevate your digital presence? Get in touch with our experts today.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
