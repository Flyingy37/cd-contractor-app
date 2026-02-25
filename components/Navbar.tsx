"use client";
import { useState, useEffect } from "react";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  { label: "בית", href: "#home" },
  { label: "שירותים", href: "#services" },
  { label: "תיק עבודות", href: "#portfolio" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "services", "portfolio", "testimonials", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900 shadow-xl py-3"
          : "bg-gradient-to-b from-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
          <HardHat size={24} className="text-yellow-400" />
          <span>קונטרקטור</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-4 h-0.5 bg-yellow-400 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          הצעת מחיר
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-blue-900/98 backdrop-blur-sm px-5 pb-5 pt-2 border-t border-white/10">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/80 block py-3 px-3 rounded-lg hover:bg-white/10 hover:text-white transition-all"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                className="block bg-yellow-400 text-gray-900 font-bold px-5 py-3 rounded-full text-center hover:bg-yellow-300 transition-colors"
                onClick={() => setOpen(false)}
              >
                לקבלת הצעת מחיר
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
