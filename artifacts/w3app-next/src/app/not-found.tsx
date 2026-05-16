import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-[#1a1a2e] flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
        <h1 className="text-9xl font-black text-[#F26522] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="bg-[#F26522] hover:bg-[#e05510] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-glow transition-all"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
