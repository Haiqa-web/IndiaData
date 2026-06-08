"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { validateEmail } from "@/utils/validation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email) e.email = "Email is required";
    else if (!validateEmail(form.email)) e.email = "Enter a valid email address";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    router.push("/dashboard");
  };

  const handleChange = (field: string) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  return (
    <div className="min-h-screen grid-bg flex items-center justify-center px-4 py-20">
      
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#6c63ff]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ff6584]/8 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
       
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#6c63ff] to-[#8b85ff] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>
              India<span className="text-[#6c63ff]">Data</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>Welcome back</h1>
          <p className="text-[#8888aa] text-sm">Sign in to access your dashboard</p>
        </div>

        <div className="glass rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Input
              label="Email address"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
              error={errors.password}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <div className="flex justify-end">
              <Link href="#" className="text-xs text-[#6c63ff] hover:underline">Forgot password?</Link>
            </div>

            <Button type="submit" loading={loading} className="w-full" size="lg">
              {loading ? "Signing in…" : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#2a2a38] text-center text-sm text-[#8888aa]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#6c63ff] hover:underline font-medium">Sign up free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
