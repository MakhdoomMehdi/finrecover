/** Skeleton shown while a route segment streams in. */
export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="min-h-screen bg-hero">
      <span className="sr-only">Loading…</span>
      <div className="container-tight animate-pulse space-y-6 pb-20 pt-36">
        <div className="h-7 w-72 rounded-full bg-white/10" />
        <div className="h-14 w-full max-w-2xl rounded-2xl bg-white/10" />
        <div className="h-14 w-4/5 max-w-xl rounded-2xl bg-white/10" />
        <div className="h-5 w-full max-w-lg rounded-lg bg-white/10" />
        <div className="flex gap-3 pt-4">
          <div className="h-14 w-56 rounded-xl bg-white/15" />
          <div className="h-14 w-44 rounded-xl bg-white/10" />
        </div>
        <div className="grid gap-4 pt-12 sm:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-2xl bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}
