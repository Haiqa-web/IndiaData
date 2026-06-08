export interface StateData {
  name: string;
  districts: string[];
}

export interface StateRow {
  state: string;
  totalDistricts: number;
}

export async function fetchIndianStates(): Promise<StateRow[]> {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ country: "India" }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);

  const json = await res.json();
  if (json.error) throw new Error(json.msg || "Failed to fetch states");

  const states: { name: string; state_code: string }[] = json.data.states;


  const rows = await Promise.all(
    states.map(async (s) => {
      try {
        const r = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: "India", state: s.name }),
        });
        const d = await r.json();
        return { state: s.name, totalDistricts: d.error ? 0 : (d.data?.length ?? 0) };
      } catch {
        return { state: s.name, totalDistricts: 0 };
      }
    })
  );

  return rows.sort((a, b) => b.totalDistricts - a.totalDistricts);
}
