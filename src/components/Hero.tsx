import React from 'react';
import { Scissors, Star, MapPin, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface HeroProps {
  onBookClick: () => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, lang }) => {
  const t = translations[lang];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#120D0A] text-[#FDFBF7] overflow-hidden border-b border-[#FACC15]/20">
      {/* Background Ambient Yellow Glow & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FACC15]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A120C] border border-[#FACC15]/40 backdrop-blur-sm text-xs font-semibold text-[#FACC15]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
              <span>{t.heroBadge}</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FDFBF7] leading-[1.15] tracking-tight"
            >
              {t.heroTitle}
            </motion.h1>

            {/* Sub-paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-2xl font-normal leading-relaxed"
            >
              {t.heroDesc}
            </motion.p>

            {/* Key Value Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 max-w-md"
            >
              <div className="flex items-center gap-2.5 text-xs text-white/90 bg-[#1A120C] p-3 rounded-xl border border-[#FACC15]/20">
                <ShieldCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>{t.sanitizedBlades}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/90 bg-[#1A120C] p-3 rounded-xl border border-[#FACC15]/20">
                <MapPin className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>{t.locationShort}</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0px 0px 25px rgba(250, 204, 21, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                onClick={onBookClick}
                className="px-8 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-[#120D0A] text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 border border-[#FACC15]"
              >
                <Scissors className="w-5 h-5 text-[#120D0A] stroke-[2.5]" />
                <span>{t.bookChairBtn}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#barbers"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-[#FDFBF7] text-sm font-semibold rounded-xl border border-white/20 transition-all text-center"
              >
                {t.meetBarbersBtn}
              </motion.a>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-[#FACC15] border-2 border-[#120D0A] flex items-center justify-center font-bold text-xs text-[#120D0A]">Y</span>
                  <span className="w-8 h-8 rounded-full bg-[#EAB308] border-2 border-[#120D0A] flex items-center justify-center font-bold text-xs text-[#120D0A]">H</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                    <span className="text-xs font-bold text-[#FDFBF7] ml-1">4.9 / 5.0</span>
                  </div>
                  <span className="text-[11px] text-white/60">{t.ratingText}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-white/70">
                <div>
                  <span className="block font-bold text-base text-[#FDFBF7] font-display">{t.yearsExp}</span>
                  <span>Bethel - Alem Bank</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block font-bold text-base text-[#FACC15] font-display">{t.cutsServed}</span>
                  <span>Satisfied Clients</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Image Feature Column */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Outer Framed Box */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FACC15]/40 shadow-2xl bg-[#241810] group">
                <img
                  src={SHOP_INFO.images.heroInterior}
                  alt="Addis Ababa Barber Shop Interior on Bethel to Alem Bank Road"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120D0A] via-transparent to-transparent opacity-85" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#120D0A]/95 backdrop-blur-md p-4 rounded-xl border border-[#FACC15]/30 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15]">
                      {lang === 'am' ? 'አዲስ አበባ ዋና ቅርንጫፍ' : 'ADDIS ABABA MAIN BRANCH'}
                    </span>
                    <span className="text-[10px] bg-[#FACC15] text-[#120D0A] font-extrabold px-2 py-0.5 rounded">
                      {lang === 'am' ? 'በቀጥታ እና በቀጠሮ' : 'WALK-INS & BOOKINGS'}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {lang === 'am' ? 'ከቤተል ወደ ዓለም ባንክ መንገድ — አዲስ አበባ' : 'Bethel to Alem Bank Road — Addis Ababa'}
                  </p>
                  <p className="text-xs text-white/70 mt-0.5">
                    {lang === 'am' ? 'ዘመናዊ የፀጉር ስታይሎች፣ በUV የጸዱ ምላጮች እና ምቹ ወንበሮች።' : 'Modern styling, sterile straight razors, and luxury leather chairs.'}
                  </p>
                </div>
              </div>

              {/* Floating Seal */}
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-[#1A120C] border-2 border-[#FACC15] flex flex-col items-center justify-center text-[#FACC15] p-2 shadow-2xl hidden sm:flex"
              >
                <Scissors className="w-5 h-5 text-[#FACC15] mb-0.5" />
                <span className="text-[9px] font-bold tracking-tighter uppercase text-center leading-none text-white">
                  {lang === 'am' ? 'ጥራት ያለው ቁረጥ' : 'GUARANTEED SHARP'}
                </span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
