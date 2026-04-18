"use client";

import { useState, useEffect } from "react";
import { FaCode, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function PortfolioLink() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setLoading(false);
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLoading(true);
    window.location.href = "https://portfolio.dathwik.com";
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08000f] cyber-grid">
          <p className="neon-title font-mono text-sm tracking-[0.3em] uppercase">
            &gt; Loading_
          </p>
        </div>
      )}
      <a
        href="https://portfolio.dathwik.com"
        onClick={handleClick}
        className="link-card flex items-center gap-5 w-full px-6 py-5 bg-white/2 border border-[#ff2d78]/30 hover:border-[#ff2d78] hover:shadow-[0_0_24px_rgba(255,45,120,0.35)] group transition-none"
      >
        <div className="shrink-0 w-12 h-12 bg-[#ff2d78] flex items-center justify-center text-white">
          <FaCode size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-base text-white/90 group-hover:text-white font-mono uppercase tracking-wider">
            Tech Portfolio
          </p>
          <p className="text-xs text-white/30 mt-0.5 truncate font-mono">
            Projects, skills & experience
          </p>
        </div>
        <FaArrowUpRightFromSquare
          size={14}
          className="shrink-0 text-white/20 group-hover:text-white/70"
        />
      </a>
    </>
  );
}
