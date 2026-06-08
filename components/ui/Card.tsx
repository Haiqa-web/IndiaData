import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export default function Card({ children, className = "", glow = false, hover = false }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl p-6 transition-all duration-300
        bg-[#111118] border border-[#2a2a38]
        ${glow ? "shadow-lg shadow-[#6c63ff]/10" : ""}
        ${hover ? "hover:border-[#6c63ff]/40 hover:shadow-lg hover:shadow-[#6c63ff]/10 hover:-translate-y-1 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
