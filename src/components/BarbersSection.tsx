import React from 'react';
import { Star, Award, Scissors, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { getBarbers } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface BarbersSectionProps {
  onBookWithBarber: (barberId: string) => void;
  lang: Language;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({ onBookWithBarber, lang }) => {
  const t = translations[lang];
  const barbers = getBarbers(lang);

  return (
    <section id="barbers" className="py-20 bg-[#1A120C] text-[#FDFBF7] relative border-b border-[#FACC15]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5" />
            <span>{t.barbersTag}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FDFBF7]">
            {t.barbersTitle}
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans">
            {t.barbersDesc}
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#241810] rounded-2xl border border-[#FACC15]/20 hover:border-[#FACC15] shadow-xl hover:shadow-2xl hover:shadow-[#FACC15]/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#120D0A]">
                <img
                  src={barber.avatar}
                  alt={`Portrait of Barber ${barber.name} in Addis Ababa`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241810] via-black/30 to-transparent" />

                {/* Years Badge */}
                <div className="absolute top-4 left-4 bg-[#120D0A]/90 text-[#FACC15] text-xs font-bold px-3 py-1.5 rounded-xl border border-[#FACC15]/40 flex items-center gap-1.5 shadow">
                  <Award className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>{barber.experienceYears} {t.expYears}</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-[#120D0A]/90 backdrop-blur-sm text-[#FDFBF7] text-xs font-bold px-2.5 py-1.5 rounded-xl border border-white/10 shadow flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FACC15] text-[#FACC15]" />
                  <span>{barber.rating.toFixed(1)}</span>
                  <span className="text-white/50 text-[10px]">({barber.reviewCount})</span>
                </div>

                {/* Barber Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-bold text-[#FACC15] tracking-wider block mb-0.5">
                    {barber.title}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">
                    {barber.name}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4">
                    "{barber.bio}"
                  </p>

                  {/* Motto Quote */}
                  <div className="p-3 bg-[#120D0A] border-l-2 border-[#FACC15] rounded-r-xl mb-4 text-xs italic text-[#FACC15] font-serif">
                    "{barber.motto}"
                  </div>

                  {/* Specialties */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider block">
                      {t.specialties}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {barber.specialty.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#120D0A] text-[#FACC15] text-[11px] font-medium border border-[#FACC15]/20 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#FACC15]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onBookWithBarber(barber.id)}
                    className="w-full py-3 bg-[#120D0A] hover:bg-[#FACC15] hover:text-[#120D0A] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-[#FACC15]/30 hover:border-[#FACC15] shadow flex items-center justify-center gap-2 group-hover:bg-[#FACC15] group-hover:text-[#120D0A]"
                  >
                    <Calendar className="w-4 h-4 text-[#FACC15] group-hover:text-[#120D0A]" />
                    <span>{t.bookWith} {barber.name.split(' ')[0]}</span>
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
