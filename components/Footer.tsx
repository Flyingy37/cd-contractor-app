import { HardHat, Home, Wrench, Camera, Star, Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#home",         label: "בית",          Icon: Home },
  { href: "#services",     label: "שירותים",       Icon: Wrench },
  { href: "#portfolio",    label: "תיק עבודות",    Icon: Camera },
  { href: "#testimonials", label: "המלצות",        Icon: Star },
  { href: "#contact",      label: "צור קשר",       Icon: Mail },
];

const socials = [
  { href: "#", Icon: Facebook,       label: "Facebook" },
  { href: "#", Icon: Instagram,      label: "Instagram" },
  { href: "#", Icon: Linkedin,       label: "LinkedIn" },
  { href: "#", Icon: MessageCircle,  label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <HardHat size={22} />
            קונטרקטור
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            קונטרקטור מקצועי בתל אביב עם 15 שנות ניסיון. שיפוץ, בנייה וניהול פרויקטים מקצה לקצה.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">קישורים מהירים</h3>
          <ul className="flex flex-col gap-2 text-blue-200 text-sm">
            {navLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Icon size={14} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">עקבו אחרינו</h3>
          <div className="flex gap-4">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                className="w-9 h-9 bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 text-blue-200 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="text-blue-200 text-sm mt-4 flex flex-col gap-1.5">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              050-1234567
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} />
              info@contractor.co.il
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 pt-6 text-center text-blue-300 text-sm">
        © {new Date().getFullYear()} קונטרקטור - כל הזכויות שמורות
      </div>
    </footer>
  );
}
