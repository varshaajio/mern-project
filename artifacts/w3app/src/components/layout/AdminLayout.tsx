import { useEffect } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { LogOut, LayoutDashboard, FileText, MessageSquare } from "lucide-react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token && location !== "/admin/login") {
      setLocation("/admin/login");
    }
  }, [location, setLocation]);

  if (location === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setLocation("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-10">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin">
            <a className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location === "/admin" ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}>
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </a>
          </Link>
          <Link href="/admin/blogs">
            <a className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location === "/admin/blogs" ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}>
              <FileText className="w-5 h-5" />
              Blogs
            </a>
          </Link>
          <Link href="/admin/contacts">
            <a className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location === "/admin/contacts" ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}>
              <MessageSquare className="w-5 h-5" />
              Contacts
            </a>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 w-full transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
