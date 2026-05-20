import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const categoryColors: Record<string, string> = {
  "Business Software": "bg-blue-50 text-blue-700",
  "Portal": "bg-purple-50 text-purple-700",
  "Healthcare": "bg-red-50 text-red-700",
  "Management System": "bg-green-50 text-green-700",
  "FinTech": "bg-amber-50 text-amber-700",
};

export default function Products() {
  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4">
              OUR PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Smart Software Solutions
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Build tailored software solutions designed to meet your unique business needs and goals.
              Explore our range of ready-to-deploy products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-3 ${categoryColors[product.category] ?? "bg-slate-100 text-slate-600"}`}>
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">{product.shortDesc}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Software Solution?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Don't see what you need? We build fully custom software tailored to your exact business requirements.
          </p>
          <Link href="/contact">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-14 px-10 text-lg transition-colors">
              Request a Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
