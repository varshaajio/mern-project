import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProduct } from "@/data/products";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug ?? "");

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <button className="text-primary font-medium flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/products">
            <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Products
            </button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="text-6xl mb-6">{product.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{product.title}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{product.shortDesc}</p>
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-14 px-8 text-lg shadow-lg transition-colors">
                Get a Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📄</div>
            <h2 className="text-xl font-bold text-amber-900 mb-2">Content Pending</h2>
            <p className="text-amber-700 font-mono text-sm">CONTENT_PENDING_FROM_SOURCE</p>
            <p className="text-amber-600 text-sm mt-3">
              Detailed content for <strong>{product.title}</strong> will be imported from the original HTML source files.
            </p>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in {product.title}?</h3>
            <p className="text-slate-600 mb-8">
              Contact our team to get a full product demo and pricing information.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12 px-8 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/products">
                <button className="border border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold rounded-full h-12 px-8 transition-colors">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
