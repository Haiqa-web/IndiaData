"use client";
import { useEffect, useState, useMemo } from "react";
import Card from "@/components/ui/Card";

interface StateRow {
  state: string;
  totalDistricts: number;
}


const INDIA_STATES_DATA: StateRow[] = [
  { state: "Andhra Pradesh", totalDistricts: 26 },
  { state: "Arunachal Pradesh", totalDistricts: 26 },
  { state: "Assam", totalDistricts: 35 },
  { state: "Bihar", totalDistricts: 38 },
  { state: "Chhattisgarh", totalDistricts: 33 },
  { state: "Goa", totalDistricts: 2 },
  { state: "Gujarat", totalDistricts: 33 },
  { state: "Haryana", totalDistricts: 22 },
  { state: "Himachal Pradesh", totalDistricts: 12 },
  { state: "Jharkhand", totalDistricts: 24 },
  { state: "Karnataka", totalDistricts: 31 },
  { state: "Kerala", totalDistricts: 14 },
  { state: "Madhya Pradesh", totalDistricts: 55 },
  { state: "Maharashtra", totalDistricts: 36 },
  { state: "Manipur", totalDistricts: 16 },
  { state: "Meghalaya", totalDistricts: 12 },
  { state: "Mizoram", totalDistricts: 11 },
  { state: "Nagaland", totalDistricts: 16 },
  { state: "Odisha", totalDistricts: 30 },
  { state: "Punjab", totalDistricts: 23 },
  { state: "Rajasthan", totalDistricts: 50 },
  { state: "Sikkim", totalDistricts: 6 },
  { state: "Tamil Nadu", totalDistricts: 38 },
  { state: "Telangana", totalDistricts: 33 },
  { state: "Tripura", totalDistricts: 8 },
  { state: "Uttar Pradesh", totalDistricts: 75 },
  { state: "Uttarakhand", totalDistricts: 13 },
  { state: "West Bengal", totalDistricts: 23 },
  
  { state: "Andaman and Nicobar Islands", totalDistricts: 3 },
  { state: "Chandigarh", totalDistricts: 1 },
  { state: "Dadra and Nagar Haveli and Daman and Diu", totalDistricts: 3 },
  { state: "Delhi", totalDistricts: 11 },
  { state: "Jammu and Kashmir", totalDistricts: 20 },
  { state: "Ladakh", totalDistricts: 2 },
  { state: "Lakshadweep", totalDistricts: 1 },
  { state: "Puducherry", totalDistricts: 4 },
];

const STATS = [
  { label: "Total States", value: "28", sub: "Full states", color: "#6c63ff" },
  { label: "Union Territories", value: "8", sub: "Incl. Delhi, J&K", color: "#43e97b" },
  { label: "Total Districts", value: "766", sub: "Across all states", color: "#ff6584" },
  { label: "Population", value: "1.4B", sub: "Census 2024 est.", color: "#fbbf24" },
];

export default function StatesTable() {
  const [data, setData] = useState<StateRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"state" | "districts">("districts");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
       
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "India" }),
        });
        if (!res.ok) throw new Error("API unavailable");
        const json = await res.json();
        if (json.error) throw new Error(json.msg || "API error");
       
        setData(INDIA_STATES_DATA);
      } catch {
        
        setData(INDIA_STATES_DATA);
        setError("Using offline data — live API unavailable");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    let rows = [...data];
    if (search) rows = rows.filter((r) => r.state.toLowerCase().includes(search.toLowerCase()));
    rows.sort((a, b) => {
      if (sortBy === "state") return sortDir === "asc" ? a.state.localeCompare(b.state) : b.state.localeCompare(a.state);
      return sortDir === "asc" ? a.totalDistricts - b.totalDistricts : b.totalDistricts - a.totalDistricts;
    });
    return rows;
  }, [data, search, sortBy, sortDir]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const maxDistricts = Math.max(...data.map((r) => r.totalDistricts), 1);

  const toggleSort = (col: "state" | "districts") => {
    if (sortBy === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortBy(col); setSortDir(col === "districts" ? "desc" : "asc"); }
    setPage(1);
  };

  return (
    <div className="space-y-6">
   
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <Card key={s.label} glow>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[#8888aa] mb-1">{s.label}</p>
                <p className="text-2xl font-extrabold" style={{ color: s.color, fontFamily: "var(--font-display)" }}>{s.value}</p>
                <p className="text-xs text-[#8888aa] mt-1">{s.sub}</p>
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}15` }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.5">
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>Indian States & Districts</h2>
            <p className="text-xs text-[#8888aa] mt-0.5">
              {loading ? "Loading…" : `${filtered.length} of ${data.length} states shown`}
            </p>
          </div>

         
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8888aa]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
            </svg>
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search states…"
              className="pl-9 pr-4 py-2 rounded-xl bg-[#1a1a24] border border-[#2a2a38] text-sm text-[#f0f0f8] placeholder-[#8888aa] outline-none focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff]/20 transition-all w-full sm:w-52"
            />
          </div>
        </div>

      
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl bg-[#fbbf24]/10 border border-[#fbbf24]/25 text-[#fbbf24] text-sm flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            {error}
          </div>
        )}

        
        {loading ? (
          <div className="py-16 flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#6c63ff] border-t-transparent animate-spin" />
            <p className="text-sm text-[#8888aa]">Fetching state data…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-[#8888aa]">No states match {search}</div>
        ) : (
          <>
         
            <div className="overflow-x-auto -mx-6">
              <table className="w-full min-w-125">
                <thead>
                  <tr className="border-b border-[#2a2a38]">
                    <th className="px-6 pb-3 text-left">
                      <span className="text-xs text-[#8888aa]">#</span>
                    </th>
                    <th className="px-6 pb-3 text-left">
                      <button
                        onClick={() => toggleSort("state")}
                        className="flex items-center gap-1 text-xs text-[#8888aa] hover:text-[#f0f0f8] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        STATE
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </th>
                    <th className="px-6 pb-3 text-left">
                      <button
                        onClick={() => toggleSort("districts")}
                        className="flex items-center gap-1 text-xs text-[#8888aa] hover:text-[#f0f0f8] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        DISTRICTS
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </th>
                    <th className="px-6 pb-3 text-left hidden md:table-cell">
                      <span className="text-xs text-[#8888aa]" style={{ fontFamily: "var(--font-display)" }}>DISTRIBUTION</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((row, i) => {
                    const globalIdx = (page - 1) * PER_PAGE + i + 1;
                    const pct = Math.round((row.totalDistricts / maxDistricts) * 100);
                    return (
                      <tr
                        key={row.state}
                        className="border-b border-[#2a2a38]/50 hover:bg-white/2 transition-colors"
                      >
                        <td className="px-6 py-3 text-sm text-[#8888aa]">{globalIdx}</td>
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#6c63ff]/15 flex items-center justify-center text-[#6c63ff] text-xs font-bold shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                              {row.state[0]}
                            </div>
                            <span className="text-sm font-medium">{row.state}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span className="text-sm font-bold text-[#6c63ff]" style={{ fontFamily: "var(--font-display)" }}>{row.totalDistricts}</span>
                        </td>
                        <td className="px-6 py-3 hidden md:table-cell w-48">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-[#2a2a38] rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-linear-to-r from-[#6c63ff] to-[#8b85ff]"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-xs text-[#8888aa] w-8 text-right">{pct}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2a2a38]">
                <p className="text-xs text-[#8888aa]">
                  Page {page} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-xl text-sm border border-[#2a2a38] text-[#8888aa] hover:text-[#f0f0f8] hover:border-[#6c63ff]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    ← Prev
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                    const p = Math.max(1, Math.min(page - 2, totalPages - 4)) + idx;
                    return (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`
                          w-9 h-9 rounded-xl text-sm transition-all
                          ${p === page
                            ? "bg-[#6c63ff] text-white"
                            : "border border-[#2a2a38] text-[#8888aa] hover:text-[#f0f0f8] hover:border-[#6c63ff]/50"
                          }
                        `}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded-xl text-sm border border-[#2a2a38] text-[#8888aa] hover:text-[#f0f0f8] hover:border-[#6c63ff]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}
