import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a38] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#6c63ff] to-[#8b85ff] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                India<span className="text-[#6c63ff]">Data</span>
              </span>
            </div>
            <p className="text-sm text-[#8888aa] leading-relaxed">
              Explore detailed information about Indian states and districts in a modern, interactive interface.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ fontFamily: "var(--font-display)" }}>Product</h4>
            <div className="flex flex-col gap-2.5">
              {["Features", "Dashboard", "API Docs"].map((l) => (
                <Link key={l} href="#" className="text-sm text-[#8888aa] hover:text-[#6c63ff] transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm" style={{ fontFamily: "var(--font-display)" }}>Account</h4>
            <div className="flex flex-col gap-2.5">
              {[["Log In", "/login"], ["Sign Up", "/signup"], ["Dashboard", "/dashboard"]].map(([label, href]) => (
                <Link key={label} href={href} className="text-sm text-[#8888aa] hover:text-[#6c63ff] transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#2a2a38] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8888aa]">© 2024 IndiaData. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-xs text-[#8888aa] hover:text-[#f0f0f8] transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
