/** Re-mounts on every navigation, which replays this fade (CSS only, no JS cost). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
