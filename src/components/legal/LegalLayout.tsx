import Link from "next/link";
import { FileText, Download, ChevronRight } from "lucide-react";
import { LEGAL_PAGES } from "@/lib/constants";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  downloadable?: boolean;
  downloadPath?: string;
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
  downloadable = false,
  downloadPath,
}: LegalLayoutProps) {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-tight relative z-10">
          <div className="flex items-center gap-2 text-sky-light/60 text-xs mb-6">
            <Link href="/" className="hover:text-sky-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-sky-light">Legal</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{title}</span>
          </div>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-mid/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-sky-light" />
                </div>
                <span className="badge bg-sky-light/10 text-sky-light text-xs">Legal Document</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">{title}</h1>
              <p className="text-white/65 text-sm">Last updated: {lastUpdated}</p>
            </div>
            {downloadable && downloadPath && (
              <a
                href={downloadPath}
                download
                className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber hover:text-navy transition-all duration-200 shadow-md text-sm flex-shrink-0 self-end"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <h3 className="text-xs font-bold text-navy/80 uppercase tracking-widest mb-4">Legal Documents</h3>
                <nav className="space-y-1">
                  {LEGAL_PAGES.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                        page.title === title
                          ? "bg-sky-mid text-white font-semibold"
                          : "text-navy/80 hover:bg-sky-light/20 hover:text-navy"
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{page.title}</span>
                      {page.downloadable && (
                        <Download className="w-3 h-3 ml-auto opacity-50" />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-navy prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-navy/80 prose-p:leading-relaxed
              prose-li:text-navy/80 prose-li:leading-relaxed
              prose-strong:text-navy
              prose-a:text-sky-mid prose-a:no-underline hover:prose-a:underline
            ">
              {children}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
