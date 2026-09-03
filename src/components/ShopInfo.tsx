import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Music, Sparkles, Navigation, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { getShopInfo } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface ShopInfoProps {
  lang: Language;
}

export const ShopInfo: React.FC<ShopInfoProps> = ({ lang }) => {
  const t = translations[lang];
  const shopInfo = getShopInfo(lang);

  return (
    <section id="location" className="py-20 bg-[#120D0A] text-[#FDFBF7] relative border-t border-[#FACC15]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/30 text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.visitShopTag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
                {t.visitShopTitle}
              </h2>

              <p className="text-base text-white/70 max-w-xl mt-2 font-sans leading-relaxed">
                {t.visitShopDesc}
              </p>
            </div>

            {/* Grid of details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Hours */}
              <div className="bg-[#1A120C] p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-[#FACC15]">
                  <Clock className="w-5 h-5 text-[#FACC15]" />
                  <h3 className="font-display font-bold text-base text-white">{t.hoursTitle}</h3>
                </div>
                <div className="space-y-2 text-xs">
                  {shopInfo.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center pb-1 border-b border-white/5">
                      <span className="text-white/70">{h.days}</span>
                      <span className="text-white font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-[#1A120C] p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-[#FACC15]">
                  <Phone className="w-5 h-5 text-[#FACC15]" />
                  <h3 className="font-display font-bold text-base text-white">{t.directContact}</h3>
                </div>
                <div className="space-y-2 text-xs text-white/80">
                  <p>
                    <strong className="text-white">{lang === 'am' ? 'ስልክ፡' : 'Phone:'}</strong>{" "}
                    <a href="tel:+251911234567" className="text-[#FACC15] hover:underline font-mono">
                      {shopInfo.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">WhatsApp:</strong>{" "}
                    <a href="https://wa.me/251911234567" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono">
                      {shopInfo.whatsapp}
                    </a>
                  </p>
                  <div className="pt-2 flex gap-2">
                    <a
                      href="tel:+251911234567"
                      className="px-3 py-1.5 rounded-xl bg-[#FACC15] text-[#120D0A] font-bold text-[11px] hover:bg-[#EAB308] transition-all"
                    >
                      {lang === 'am' ? 'ይደውሉ' : 'Call Shop'}
                    </a>
                    <a
                      href="https://wa.me/251911234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-500 transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Shop Amenities */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                {lang === 'am' ? 'የሱቃችን አገልግሎት እና መስተንግዶ' : 'Shop Features & Experience'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shopInfo.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#1A120C] rounded-xl border border-white/10 flex items-start gap-3 text-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center shrink-0 border border-[#FACC15]/30">
                      {idx === 0 ? <Sparkles className="w-4 h-4" /> : idx === 1 ? <ShieldCheck className="w-4 h-4" /> : idx === 2 ? <Music className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-white/60 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Map Representation & Direct Directions */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A120C] rounded-3xl p-6 border border-[#FACC15]/30 shadow-2xl space-y-6">
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#120D0A] h-64 flex flex-col justify-between p-6">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 bg-[#FACC15] text-[#120D0A] text-[10px] font-extrabold uppercase rounded-lg">
                    BETHEL - ALEMBANK LANDMARK
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#120D0A] text-[#FACC15] border border-[#FACC15]/40 flex items-center justify-center">
                    <Navigation className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-2 text-[#FACC15] font-bold text-sm">
                    <MapPin className="w-4 h-4 text-[#FACC15]" /> Addis Ababa Barber Shop
                  </div>
                  <p className="text-xs text-white/80 font-mono">
                    Bethel to Alem Bank Main Road, Kolfe Keraniyo
                  </p>
                  <p className="text-[11px] text-white/50">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#120D0A] rounded-xl border border-white/10 space-y-2 text-xs">
                <h4 className="font-bold text-white">{t.howToFindUs}</h4>
                <p className="text-white/70 leading-relaxed">
                  {t.directionsDesc}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
