import { Link } from "wouter";
import { products } from "@/data/products";
import { ArrowRight, Package } from "lucide-react";

export default function AdminProducts() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Products</h1>
          <p className="text-slate-500 mt-1">Manage all product pages</p>
        </div>
        <Link href="/products">
          <a
            target="_blank"
            className="flex items-center gap-2 text-sm text-primary border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors"
          >
            View Public Page <ArrowRight className="w-4 h-4" />
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.slug} className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl shrink-0">{product.icon}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 text-sm leading-tight">{product.title}</h3>
              <span className="text-xs text-slate-500 mt-0.5 block">{product.category}</span>
              <Link href={`/products/${product.slug}`}>
                <a
                  target="_blank"
                  className="text-xs text-primary flex items-center gap-1 mt-2 hover:underline"
                >
                  <Package className="w-3 h-3" /> View page
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-semibold text-amber-900 mb-1">Product Content Management</h3>
        <p className="text-sm text-amber-700">
          Product detail pages are managed via the source HTML files. Once HTML content is imported, each product page will render the original content automatically. Currently showing {products.length} product pages.
        </p>
      </div>
    </div>
  );
}
