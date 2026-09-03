import React from 'react';
import { Scissors, MapPin, Phone, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#120D0A] text-white border-t border-[#FACC15]/20 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FACC15] text-[#120D0A] flex items-center justify-center border-2 border-[#EAB308]">
                <Scissors className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wide block leading-none">
                  {t.shopName}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#FACC15] block mt-1">
                  {t.shopSub}
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15] font-display">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#barbers" className="hover:text-[#FACC15] transition-colors">{t.barbers}</a></li>
              <li><a href="#services" className="hover:text-[#FACC15] transition-colors">{t.services}</a></li>
              <li><a href="#booking" className="hover:text-[#FACC15] transition-colors">{t.bookNow}</a></li>
              <li><a href="#testimonials" className="hover:text-[#FACC15] transition-colors">{t.testimonials}</a></li>
              <li><a href="#location" className="hover:text-[#FACC15] transition-colors">{t.location}</a></li>
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15] font-display">
              {t.shopHoursFooter}
            </h4>
            <div className="space-y-1.5 text-xs text-white/70">
              <p><strong className="text-white">{t.monSat}</strong><br />8:00 AM – 8:00 PM</p>
              <p><strong className="text-white">{t.sun}</strong><br />9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Col 4: Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FACC15] font-display">
              Location
            </h4>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                <span>Bethel to Alem Bank Main Road, Kolfe Keraniyo, Addis Ababa, Ethiopia</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>{SHOP_INFO.phone}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <p className="flex items-center gap-1">
            <span>{t.craftedWith}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
