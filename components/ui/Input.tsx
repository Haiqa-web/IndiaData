"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  icon,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8888aa]">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`
            w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200
            bg-[#1a1a24] border text-[#f0f0f8] placeholder-[#8888aa]
            focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff]/20
            ${error ? "border-[#ff6584]" : "border-[#2a2a38]"}
            ${icon ? "pl-10" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-[#ff6584] flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
