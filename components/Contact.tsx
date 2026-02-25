"use client";
import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const info: { Icon: LucideIcon; title: string; lines: string[]; color: string }[] = [
  {
    Icon: MapPin,
    title: "כתובת",
    lines: ["רחוב הבנייה 123", "תל אביב"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    Icon: Phone,
    title: "טלפון",
    lines: ["050-1234567"],
    color: "bg-green-50 text-green-600",
  },
  {
    Icon: Mail,
    title: "דוא״ל",
    lines: ["info@contractor.co.il"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    Icon: Clock,
    title: "שעות פעילות",
    lines: ["ראשון-חמישי: 8:00-18:00", "שישי: 8:00-13:00"],
    color: "bg-orange-50 text-orange-600",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call - replace with real endpoint
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", form);
    setLoading(false);
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-gray-800 text-right placeholder:text-gray-400";

  return (
    <section id="contact" className="py-16 md:py-28 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-yellow-500 mb-3 block">
            בוא נדבר
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
            צור קשר
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-lg">
            מלא את הטופס ונחזור אליך תוך 24 שעות עם הצעה מותאמת
          </p>
          <div className="w-16 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form - takes 3 cols */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">תודה על הפנייה!</h3>
                <p className="text-gray-500">ניצור איתך קשר תוך 24 שעות.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", projectType:"", message:"" }); }}
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  ← שלחו פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">שם מלא</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="ישראל ישראלי"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">דוא״ל</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="israel@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">טלפון</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="050-1234567"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">סוג הפרויקט</label>
                  <select
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">בחרו סוג פרויקט</option>
                    <option value="שיפוץ">שיפוץ דירה</option>
                    <option value="בנייה">בנייה חדשה</option>
                    <option value="ניהול">ניהול פרויקט</option>
                    <option value="עיצוב">עיצוב פנים</option>
                    <option value="אחר">אחר</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">תיאור הפרויקט</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="ספרו לנו על הפרויקט - גודל, תקציב משוער, לוח זמנים..."
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl text-base hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-blue-200 hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      שולח...
                    </>
                  ) : (
                    "שלחו לקבלת הצעה חינם ←"
                  )}
                </button>
                <p className="text-xs text-gray-400 text-center -mt-2">
                  ✓ ללא עלות ✓ ללא התחייבות ✓ מענה תוך 24 שעות
                </p>
              </form>
            )}
          </div>

          {/* Info - takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {info.map(({ Icon, title, lines, color }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-0.5">{title}</div>
                  {lines.map((line) => (
                    <div key={line} className="text-gray-500 text-sm">{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-400 transition-colors rounded-2xl p-5 text-white group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="font-bold">דבר איתנו בוואטסאפ</div>
                <div className="text-green-100 text-sm">מענה מהיר · זמין 24/7</div>
              </div>
              <span className="mr-auto text-xl">←</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
