"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import { HardHat, Clock, ArrowLeft } from "lucide-react";

const projects = [
  {
    title: "שיפוץ דירה בתל אביב",
    period: "3 חודשים",
    budget: "₪150,000",
    desc: "שיפוץ מלא כולל קירות, רצפות, חשמל וצנרת",
    color: "from-blue-500 to-indigo-600",
    tag: "שיפוץ",
  },
  {
    title: "בית משפחתי בירושלים",
    period: "8 חודשים",
    budget: "₪500,000",
    desc: "בנייה של בית משפחתי חדש מאפס",
    color: "from-emerald-500 to-teal-600",
    tag: "בנייה",
  },
  {
    title: "שדרוג חנות בחיפה",
    period: "6 שבועות",
    budget: "₪80,000",
    desc: "שדרוג מחנות ישנה לחנות מודרנית",
    color: "from-orange-500 to-red-500",
    tag: "מסחרי",
  },
  {
    title: "משרדים בתל אביב",
    period: "4 חודשים",
    budget: "₪200,000",
    desc: "עיצוב ובנייה של משרדים מודרניים",
    color: "from-purple-500 to-pink-600",
    tag: "מסחרי",
  },
  {
    title: "חידוש דירה בבאר שבע",
    period: "2 חודשים",
    budget: "₪120,000",
    desc: "חידוש דירה משנות ה-90 לסטנדרט מודרני",
    color: "from-cyan-500 to-blue-600",
    tag: "שיפוץ",
  },
  {
    title: "בניין מגורים בראשון לציון",
    period: "12 חודשים",
    budget: "₪1,200,000",
    desc: "בנייה של בניין מגורים עם 20 דירות",
    color: "from-slate-600 to-blue-800",
    tag: "בנייה",
  },
];

const filters = ["הכל", "שיפוץ", "בנייה", "מסחרי"];

export default function Portfolio() {
  const [active, setActive] = useState("הכל");

  const filtered =
    active === "הכל" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="portfolio" className="py-16 md:py-28 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-3 block">
              העבודות שלנו
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
              תיק עבודות
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              150+ פרויקטים מוצלחים ברחבי הארץ
            </p>
            <div className="w-16 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full" />
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                active === f
                  ? "bg-blue-900 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <FadeIn key={p.title} direction="up" delay={i * 80}>
            <div
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Image area */}
              <div className={`relative h-56 bg-gradient-to-br ${p.color} overflow-hidden`}>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    לצפייה בפרויקט <ArrowLeft size={14} />
                  </span>
                </div>

                {/* Tag */}
                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                  {p.tag}
                </span>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <HardHat size={48} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock size={14} />
                    {p.period}
                  </span>
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {p.budget}
                  </span>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
