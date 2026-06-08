"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    label: "States & Districts",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

     
      <aside
        style={{
          width: 256,
          minWidth: 256,
          height: "100vh",
          position: "sticky",
          top: 0,
          display: "flex",
          flexDirection: "column",
          background: "#0d0d14",
          borderRight: "1px solid #2a2a38",
          zIndex: 40,
        }}
        className={`transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
       
        <div className="flex items-center gap-2 px-6 py-5 border-b border-[#2a2a38]">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#6c63ff] to-[#8b85ff] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <span className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
            India<span className="text-[#6c63ff]">Data</span>
          </span>
        </div>

       
        <nav style={{ flex: 1, overflowY: "auto" }} className="px-3 py-4">
          <p className="text-xs text-[#8888aa] px-3 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>Menu</p>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm mb-1 transition-all duration-200 ${
                  active
                    ? "bg-[#6c63ff]/15 text-[#6c63ff] border border-[#6c63ff]/25"
                    : "text-[#8888aa] hover:text-[#f0f0f8] hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        
        <div className="p-4 border-t border-[#2a2a38]">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#8888aa] hover:text-[#f0f0f8] hover:bg-white/5 transition-all"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
        </div>
      </aside>

     
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div style={{ flex: 1, minWidth: 0, background: "#0a0a0f" }}>
       
        <header className="sticky top-0 z-20 bg-[#0a0a0f]/80 backdrop-blur border-b border-[#2a2a38] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-[#8888aa] hover:text-[#f0f0f8] transition-colors"
              aria-label="Open sidebar"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Dashboard</h1>
              <p className="text-xs text-[#8888aa]">Indian States & Districts Explorer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#6c63ff] to-[#ff6584] flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}