import FadeIn from "./FadeIn";
import { Star, Globe } from "lucide-react";

const testimonials = [
  {
    name: "דוד לוי",
    role: "בעל דירה, תל אביב",
    text: "עבודה מצוינת! הצוות הגיע בזמן, עמד בתקציב ותוצאה מדהימה. ממליץ בחום לכל מי שמחפש קונטרקטור אמין.",
    stars: 5,
    initials: "דל",
    color: "from-blue-500 to-indigo-600",
    project: "שיפוץ דירה",
  },
  {
    name: "רחל כהן",
    role: "בעלת עסק, חיפה",
    text: "שיפצו לנו את החנות תוך 6 שבועות בלבד. מקצועיות גבוהה, תקשורת מעולה לאורך כל הדרך.",
    stars: 5,
    initials: "רכ",
    color: "from-purple-500 to-pink-600",
    project: "שדרוג חנות",
  },
  {
    name: "יוסי מזרחי",
    role: "קבלן, ירושלים",
    text: "עבדנו יחד על פרויקט הבית המשפחתי. ניהול מקצועי ברמה הגבוהה ביותר, גאים בתוצאה הסופית.",
    stars: 5,
    initials: "ימ",
    color: "from-emerald-500 to-teal-600",
    project: "בנייה חדשה",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-3 block">
            לקוחות מרוצים
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            מה הלקוחות אומרים
          </h2>
          <div className="w-16 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} direction="up" delay={i * 100}>
            <div
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 text-6xl text-blue-100 font-serif leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5 relative z-10">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 text-[15px]">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
                <span className="mr-auto text-xs bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">
                  {t.project}
                </span>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        {/* Google rating strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div>
            <span className="font-black text-2xl text-gray-900">4.9</span>
            <span className="text-gray-500 mr-2 text-sm">מתוך 5 - מבוסס על 87 ביקורות</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
            <Globe size={18} className="text-blue-500" />
            <span className="text-sm font-semibold text-gray-700">Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
