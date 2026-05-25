import { motion } from "framer-motion";
import { Link } from "wouter";
import { useListBlogs } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { staticBlogs } from "@/data/staticBlogs";

const categoryColors: Record<string, string> = {
  "Web Programming": "bg-blue-100 text-blue-700",
  "Application Innovation": "bg-purple-100 text-purple-700",
  "Digital Advertising": "bg-orange-100 text-orange-700",
  "Digital Graphics": "bg-green-100 text-green-700",
};

export default function Blogs() {
  const { data: apiBlogs, isLoading } = useListBlogs();

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Blog</h1>
            <p className="text-lg text-slate-600">
              Insights, updates, and expert opinions on technology, design, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Static Blogs (from HTML source) */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staticBlogs.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <Card className="h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                    <div className="h-3 bg-primary w-full" />
                    <CardContent className="p-6 flex flex-col h-full">
                      <span className={`inline-block text-xs font-semibold rounded-full px-3 py-1 mb-3 w-fit ${categoryColors[blog.category] ?? "bg-slate-100 text-slate-600"}`}>
                        {blog.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-tight line-clamp-2 flex-1">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-3 mb-4">{blog.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400 mt-auto">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{format(new Date(blog.date), 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Blogs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Posts</h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-2xl" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          ) : apiBlogs && apiBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {apiBlogs.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blogs/${blog.slug}`}>
                    <Card className="h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                      {blog.featuredImage && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{format(new Date(blog.createdAt), 'MMM d, yyyy')}</span>
                          </div>
                          {blog.author && (
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{blog.author}</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                        <p className="text-slate-600 line-clamp-3">
                          {blog.excerpt || blog.content.substring(0, 150) + "..."}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              <p>Additional blog posts will appear here once published from the admin panel.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
