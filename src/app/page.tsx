import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaEnvelope,
  FaArrowUpRightFromSquare,
  FaCode,
  FaDumbbell,
  FaVideo,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa6";
import PortfolioLink from "./components/PortfolioLink";

const links = [
  {
    label: "LinkedIn",
    description: "Professional network & career",
    href: "https://www.linkedin.com/in/dathwik/",
    icon: <FaLinkedinIn size={20} />,
    iconBg: "bg-[#00e5ff]",
    border: "border-[#00e5ff]/30 hover:border-[#00e5ff] hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]",
  },
  {
    label: "GitHub",
    description: "Open source & code",
    href: "https://github.com/Dathwik",
    icon: <FaGithub size={20} />,
    iconBg: "bg-[#bf00ff]",
    border: "border-[#bf00ff]/30 hover:border-[#bf00ff] hover:shadow-[0_0_24px_rgba(191,0,255,0.35)]",
  },
  {
    label: "Instagram",
    description: "Fitness, lifestyle & behind the scenes",
    href: "https://www.instagram.com/dathwik_kollikonda/",
    icon: <FaInstagram size={20} />,
    iconBg: "bg-[#ff2d78]",
    border: "border-[#ff2d78]/30 hover:border-[#ff2d78] hover:shadow-[0_0_24px_rgba(255,45,120,0.35)]",
  },
  {
    label: "X (Twitter)",
    description: "Thoughts, threads & hot takes",
    href: "https://x.com/wikkstyfly",
    icon: <FaXTwitter size={20} />,
    iconBg: "bg-white/10",
    border: "border-white/20 hover:border-white/60 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]",
  },
  {
    label: "Email Me",
    description: "Collabs, opportunities & inquiries",
    href: "mailto:kdathwik2024@gmail.com",
    icon: <FaEnvelope size={20} />,
    iconBg: "bg-[#00e5ff]",
    border: "border-[#00e5ff]/30 hover:border-[#00e5ff] hover:shadow-[0_0_24px_rgba(0,229,255,0.35)]",
  },
];

const pillars = [
  { icon: <FaCode size={12} />, label: "Software Engineer", color: "text-[#00e5ff]" },
  { icon: <FaGlobe size={12} />, label: "Web Developer", color: "text-[#bf00ff]" },
  { icon: <FaLaptopCode size={12} />, label: "Frontend Developer", color: "text-[#00e5ff]" },
  { icon: <FaDumbbell size={12} />, label: "Fitness Enthusiast", color: "text-[#ff2d78]" },
  { icon: <FaVideo size={12} />, label: "Content Creator", color: "text-[#bf00ff]" },
];

export default function Home() {
  return (
    <main className="scanline min-h-screen bg-[#08000f] cyber-grid text-white relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-150 h-150 rounded-full bg-[#ff2d78]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 rounded-full bg-[#00e5ff]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[50%] w-75 h-75 rounded-full bg-[#bf00ff]/10 blur-[100px] pointer-events-none" />

      {/* ── Desktop: side-by-side | Mobile: stacked ── */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16 lg:px-16 xl:px-24">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row lg:items-center lg:gap-24 gap-12">

          {/* ── LEFT PANEL: Identity ── */}
          <div className="flex flex-col items-center lg:items-start gap-8 lg:flex-1 lg:sticky lg:top-16">

            {/* Avatar */}
            <div className="float-animation relative">
              <div className="relative w-36 h-36 lg:w-48 lg:h-48 rounded-full">
                <div className="absolute inset-0 rounded-full animated-gradient p-0.75">
                  <div className="w-full h-full rounded-full bg-[#08000f] overflow-hidden">
                    <Image
                      src="/avatar.jpeg"
                      alt="Dathwik Kollikonda"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-1.5 rounded-full border border-[#ff2d78]/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>

            {/* Name & domain */}
            <div className="text-center lg:text-left">
              <h1 className="neon-title text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-mono uppercase">
                Dathwik<br />Kollikonda
              </h1>
              <p className="text-[#00e5ff]/50 text-xs mt-3 tracking-[0.3em] uppercase font-mono">
                ◈ dathwik.com ◈
              </p>
            </div>

            {/* Pillar tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {pillars.map((p) => (
                <span
                  key={p.label}
                  className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 bg-white/3 border border-white/10 text-white/70 font-mono uppercase tracking-wider"
                >
                  <span className={p.color}>{p.icon}</span>
                  {p.label}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-sm text-white/40 max-w-sm leading-relaxed font-mono text-center lg:text-left">
              <span className="text-[#ff2d78]">&gt;</span> Building software,
              lifting heavy, and documenting the journey — one rep, one commit,
              one post at a time.
            </p>

            {/* Footer — only visible on desktop in left panel */}
            <p className="hidden lg:block text-[10px] text-white/20 tracking-[0.3em] uppercase font-mono mt-auto pt-8">
              © 2026 Dathwik Kollikonda
            </p>
          </div>

          {/* ── RIGHT PANEL: Links ── */}
          <div className="flex flex-col gap-4 lg:flex-1">
            {/* Divider label — mobile only */}
            <div className="flex items-center gap-3 lg:hidden">
              <div className="flex-1 h-px bg-[#ff2d78]/30" />
              <span className="text-[#ff2d78]/60 font-mono text-xs tracking-widest">LINKS</span>
              <div className="flex-1 h-px bg-[#00e5ff]/30" />
            </div>

            {/* Section label — desktop */}
            <p className="hidden lg:block text-[11px] text-[#ff2d78]/60 font-mono uppercase tracking-[0.3em] mb-2">
              ◈ Navigate
            </p>

            <PortfolioLink />

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`link-card flex items-center gap-5 w-full px-6 py-5 bg-white/2 border ${link.border} group transition-none`}
              >
                {/* Icon */}
                <div className={`shrink-0 w-12 h-12 ${link.iconBg} flex items-center justify-center text-white`}>
                  {link.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-base text-white/90 group-hover:text-white font-mono uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5 truncate font-mono">
                    {link.description}
                  </p>
                </div>

                {/* Arrow */}
                <FaArrowUpRightFromSquare
                  size={14}
                  className="shrink-0 text-white/20 group-hover:text-white/70"
                />
              </a>
            ))}

            {/* Footer — mobile only */}
            <p className="lg:hidden text-[10px] text-white/20 mt-4 tracking-[0.3em] uppercase font-mono text-center">
              © 2026 Dathwik Kollikonda
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
