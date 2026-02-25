"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-24 md:bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/972501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:scale-110 transition-all duration-200"
        aria-label="WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))" }}
        />
        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          דבר איתנו בוואטסאפ
        </span>
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 bg-blue-900 hover:bg-blue-800 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-200"
          aria-label="חזור למעלה"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
