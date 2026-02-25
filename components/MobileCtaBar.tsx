"use client";
import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileCtaBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById("contact");
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
        <a
          href="tel:0501234567"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-900 text-white font-bold py-3.5 rounded-xl text-sm"
        >
          <Phone size={16} />
          <span>חייגו עכשיו</span>
        </a>
        <a
          href="https://wa.me/972501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl text-sm"
        >
          <MessageCircle size={16} />
          <span>וואטסאפ</span>
        </a>
      </div>
    </div>
  );
}
