import FadeIn from "./FadeIn";
import { Home, Building2, Briefcase, Palette, DoorOpen, Zap, Trophy, Calendar, Star, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { Icon: LucideIcon; title: string; desc: string; color: string; border: string }[] = [
  {
    Icon: Home,
    title: "שיפוץ דירות",
    desc: "שיפוץ מלא או חלקי של דירות עם ניהול קפדני של לוחות הזמנים והתקציב.",
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-300",
  },
  {
    Icon: Building2,
    title: "בנייה חדשה",
    desc: "ניהול פרויקטים בנייה מלאים מתחילת התכנון ועד קבלת מפתח.",
    color: "bg-orange-50 text-orange-600",
    border: "hover:border-orange-300",
  },
  {
    Icon: Briefcase,
    title: "ניהול פרויקטים",
    desc: "פיקוח מקצועי, ניהול קבלני משנה וניהול סיכונים בכל שלב בפרויקט.",
    color: "bg-purple-50 text-purple-600",
    border: "hover:border-purple-300",
  },
  {
    Icon: Palette,
    title: "עיצוב פנים",
    desc: "עיצוב ותכנון של מרחבים פנימיים בשיתוף מעצבים מקצועיים.",
    color: "bg-pink-50 text-pink-600",
    border: "hover:border-pink-300",
  },
  {
    Icon: DoorOpen,
    title: "התקנות",
    desc: 'התקנה מקצועית של דלתות, חלונות, ממ"ד וכל רכיבי הגמר.',
    color: "bg-teal-50 text-teal-600",
    border: "hover:border-teal-300",
  },
  {
    Icon: Zap,
    title: "חשמל וצנרת",
    desc: "עבודות חשמל, אינסטלציה ותשתיות בביצוע קבלנים מורשים.",
    color: "bg-yellow-50 text-yellow-600",
    border: "hover:border-yellow-300",
  },
];

const stats = [
  { num: "150+", label: "פרויקטים הושלמו", Icon: Trophy },
  { num: "15+",  label: "שנות ניסיון",       Icon: Calendar },
  { num: "98%",  label: "שביעות רצון לקוחות", Icon: Star },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-3 block">
              מה אנחנו עושים
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
              השירותים שלנו
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              פתרון מלא לכל צורכי הבנייה והשיפוץ שלך - תחת קורת גג אחת
            </p>
            <div className="w-16 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc, color, border }, i) => (
            <FadeIn key={title} direction="up" delay={i * 80}>
              <div
                className={`group bg-white rounded-2xl p-8 border-2 border-gray-100 ${border} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default`}
              >
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
                <div className="mt-5 text-blue-600 font-semibold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>לקריאה</span>
                  <ArrowLeft size={14} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          {stats.map(({ num, label, Icon }) => (
            <div
              key={label}
              className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-center text-white shadow-lg group border-b-2 border-transparent hover:border-[#ffcc00] hover:-translate-y-[10px] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={80} />
              </div>
              <div className="text-5xl font-black mb-2 text-yellow-400">{num}</div>
              <div className="text-blue-200 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
