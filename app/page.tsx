import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "All 28 States",
    desc: "Complete data on all Indian states and union territories, updated and accurate.",
    color: "#6c63ff",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10h18M3 14h18M10 3v18M14 3v18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "District Breakdown",
    desc: "Explore total district counts per state with clean, sortable data tables.",
    color: "#43e97b",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Live API Data",
    desc: "Powered by the countriesnow.space public API with real-time fetching and error handling.",
    color: "#ff6584",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Modern Dashboard",
    desc: "A sleek analytics-style dashboard with stats, search, and detailed tables.",
    color: "#fbbf24",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen grid-bg">
      <Navbar />

     
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
       
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#6c63ff]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full bg-[#ff6584]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-[#8888aa] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#43e97b] animate-pulse" />
            Live API · 28 States · 700+ Districts
          </div>

          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore{" "}
            <span className="bg-linear-to-r from-[#6c63ff] to-[#ff6584] bg-clip-text text-transparent animate-gradient">
              India&apos;s
            </span>
            <br />
            Geographic Data
          </h1>

          <p className="text-lg md:text-xl text-[#8888aa] max-w-2xl mx-auto mb-10 leading-relaxed">
            A modern, real-time dashboard for exploring every state and district of India.
            Clean visuals, live API data, and a beautiful interface.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="animate-pulse-glow">
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="secondary" size="lg">View Dashboard</Button>
            </Link>
          </div>

  
          <div className="mt-16 glass rounded-3xl p-1 max-w-3xl mx-auto animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="bg-[#111118] rounded-[22px] p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff6584]" />
                <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                <div className="w-3 h-3 rounded-full bg-[#43e97b]" />
                <span className="ml-2 text-xs text-[#8888aa]">dashboard.india-data.app</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[["28", "States"], ["766", "Districts"], ["1.4B", "Population"]].map(([val, label]) => (
                  <div key={label} className="bg-[#1a1a24] rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-[#6c63ff]" style={{ fontFamily: "var(--font-display)" }}>{val}</div>
                    <div className="text-xs text-[#8888aa]">{label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[["Maharashtra", "36"], ["Uttar Pradesh", "75"], ["Rajasthan", "33"]].map(([state, dist]) => (
                  <div key={state} className="flex justify-between items-center py-2 border-b border-[#2a2a38] text-sm">
                    <span className="text-[#f0f0f8]">{state}</span>
                    <span className="text-[#6c63ff] font-semibold" style={{ fontFamily: "var(--font-display)" }}>{dist} districts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#6c63ff] font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>Features</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Everything you need
            </h2>
            <p className="text-[#8888aa] text-lg max-w-xl mx-auto">Built with the modern web stack and real data APIs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Card key={f.title} hover>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                <p className="text-sm text-[#8888aa] leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-[#43e97b] font-semibold tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-display)" }}>About</p>
              <h2 className="text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>
                Built for curious
                <br />
                <span className="text-[#6c63ff]">data explorers</span>
              </h2>
              <p className="text-[#8888aa] leading-relaxed mb-6">
                IndiaData is a purpose-built web application that aggregates and presents geographic data about India&apos;s states and districts through a fast, modern interface.
              </p>
              <p className="text-[#8888aa] leading-relaxed">
                Powered by the open countriesnow.space API and built with Next.js 14 and Tailwind CSS, the app showcases modern web development practices — including App Router, server-side data fetching, and responsive design.
              </p>
              <div className="mt-8 flex gap-6">
                {[["Next.js 14", "#6c63ff"], ["Tailwind CSS", "#43e97b"], ["Public API", "#ff6584"]].map(([tech, color]) => (
                  <div key={tech} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="text-[#8888aa]">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["28+", "States & UTs", "#6c63ff"],
                ["766", "Districts", "#43e97b"],
                ["100%", "Open Data", "#ff6584"],
                ["Live", "API Sync", "#fbbf24"],
              ].map(([val, label, color]) => (
                <div key={label} className="bg-[#111118] rounded-2xl p-6 text-center border border-[#2a2a38]">
                  <div className="text-3xl font-extrabold mb-1" style={{ color, fontFamily: "var(--font-display)" }}>{val}</div>
                  <div className="text-sm text-[#8888aa]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-display)" }}>
            Ready to explore?
          </h2>
          <p className="text-[#8888aa] text-lg mb-10">Sign up free and get instant access to the full dashboard.</p>
          <Link href="/signup">
            <Button size="lg" className="animate-pulse-glow">
              Create Free Account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
