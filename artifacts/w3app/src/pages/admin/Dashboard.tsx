import { useGetAdminStats } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, CheckCircle, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useGetAdminStats({
    request: {
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
    }
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    { title: "Total Contact Inquiries", value: stats?.totalContacts || 0, icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Total Blogs", value: stats?.totalBlogs || 0, icon: FileText, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Published Blogs", value: stats?.publishedBlogs || 0, icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
    { title: "Draft Blogs", value: stats?.draftBlogs || 0, icon: Clock, color: "text-amber-600", bg: "bg-amber-100" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-white p-8 rounded-2xl border shadow-sm text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome to Admin Panel</h2>
        <p className="text-slate-500">Manage your website content, blogs, and customer inquiries from here.</p>
      </div>
    </div>
  );
}
