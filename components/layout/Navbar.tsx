"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass rounded-2xl px-6 py-3 max-w-6xl mx-auto flex items-center justify-between">
     
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#6c63ff] to-[#8b85ff] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
            India<span className="text-[#6c63ff]">Data</span>
          </span>
        </Link>

      
        <div className="hidden md:flex items-center gap-1">
          {["Home", "Features", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-sm text-[#8888aa] hover:text-[#f0f0f8] hover:bg-white/5 transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f0f0f8] p-2"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="glass rounded-2xl mt-2 p-4 max-w-6xl mx-auto md:hidden">
          <div className="flex flex-col gap-2">
            {["Home", "Features", "About"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm text-[#8888aa] hover:text-[#f0f0f8] hover:bg-white/5 transition-all"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 border-t border-[#2a2a38]">
              <Link href="/login" className="flex-1">
                <Button variant="secondary" size="sm" className="w-full">Log In</Button>
              </Link>
              <Link href="/signup" className="flex-1">
                <Button size="sm" className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
