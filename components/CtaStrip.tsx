import { Phone } from "lucide-react";

export default function CtaStrip() {
  return (
    <section className="bg-gradient-to-l from-yellow-400 to-orange-400 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          מוכנים להתחיל את הפרויקט שלכם?
        </h2>
        <p className="text-gray-800 text-lg mb-8 max-w-xl mx-auto">
          פנו אלינו עוד היום לייעוץ חינם ולהצעת מחיר ללא התחייבות
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-900 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-800 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            לקבלת הצעת מחיר ←
          </a>
          <a
            href="tel:0501234567"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Phone size={20} />
            050-1234567
          </a>
        </div>
      </div>
    </section>
  );
}
