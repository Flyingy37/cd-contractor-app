import { ArrowLeft, ChevronDown, Images } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111113 0%, #1C1C1E 50%, #2E2E32 100%)",
      }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white opacity-5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white opacity-5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          מורשה ומבוטח | ISO 9001 | 15 שנות ניסיון
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
          שיפוץ ובנייה
          <br />
          <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(255,193,7,0.4)]">
            ברמה אחרת
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed px-2">
          קונטרקטור מקצועי בתל אביב - ניהול מלא של פרויקטים בנייה ושיפוץ,
          <br className="hidden md:block" />
          מהתכנון ועד מסירת המפתח.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 shadow-[0_8px_30px_rgba(255,193,7,0.4)] hover:shadow-[0_12px_40px_rgba(255,193,7,0.5)] hover:scale-105"
          >
            לקבלת הצעת מחיר
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-blue-900 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            <Images size={18} />
            לצפייה בעבודות
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white">
          {[
            { num: "150+", label: "פרויקטים" },
            { num: "98%", label: "שביעות רצון" },
            { num: "15+", label: "שנות ניסיון" },
            { num: "24/7", label: "זמינות" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-yellow-400">{s.num}</div>
              <div className="text-sm text-blue-200 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 animate-bounce"
      >
        <span className="text-xs">גלול מטה</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
