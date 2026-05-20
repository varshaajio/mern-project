import { motion } from "framer-motion";
import { Link } from "wouter";
import { useListBlogs } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";

export default function Blogs() {
  const { data: blogs, isLoading } = useListBlogs();

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Blog</h1>
            <p className="text-lg text-slate-600">
              Insights, updates, and expert opinions on technology, design, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-2xl" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          ) : blogs && blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog, i) => (
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
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">No blogs published yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
