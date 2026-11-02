import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-xs">
        <Compass className="w-8 h-8 animate-pulse" />
      </div>

      <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50/80 px-3 py-1 rounded-full mb-3 border border-indigo-100">
        404 — Page Not Found
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-md">
        The page you are looking for doesn&apos;t exist
      </h1>

      <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
        The link may have moved or no longer exists. Let&apos;s get you back to the portfolio so you can review real projects and services.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Contact Developer</span>
        </Link>
      </div>
    </div>
  );
}
