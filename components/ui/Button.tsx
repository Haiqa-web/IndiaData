"use client";
import React from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#6c63ff] to-[#8b85ff] text-white hover:from-[#5a52e8] hover:to-[#7a74ee] shadow-lg shadow-[#6c63ff]/30 hover:shadow-[#6c63ff]/50",
  secondary:
    "bg-transparent border border-[#6c63ff] text-[#6c63ff] hover:bg-[#6c63ff]/10",
  ghost:
    "bg-transparent text-[#f0f0f8] hover:bg-white/5",
  danger:
    "bg-gradient-to-r from-[#ff6584] to-[#ff8fa3] text-white hover:from-[#e85570] hover:to-[#e87d93] shadow-lg shadow-[#ff6584]/30",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl font-semibold
        transition-all duration-200 cursor-pointer select-none
        disabled:opacity-50 disabled:cursor-not-allowed
        active:scale-95
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
      )}
      {children}
    </button>
  );
}
