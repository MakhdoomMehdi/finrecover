import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Fin Recover",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-9xl font-display font-bold text-white/10 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber hover:text-navy transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
