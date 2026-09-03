import React, { useState } from 'react';
import { Scissors, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { getServices } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = translations[lang];
  const servicesList = getServices(lang);

  const categories = [
    { id: 'all', name: t.allServices },
    { id: 'haircut', name: t.haircutsFades },
    { id: 'beard', name: t.beardCare },
    { id: 'facial', name: lang === 'am' ? 'ስክራብ እና እንክብካቤ' : 'Facial & Scrub' },
    { id: 'styling', name: lang === 'am' ? 'ጄል እና ስታይሊንግ' : 'Gel & Styling' },
    { id: 'combo', name: t.signaturePackages },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#120D0A] text-[#FDFBF7] relative border-b border-[#FACC15]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-bold uppercase tracking-wider">
            <Scissors className="w-3.5 h-3.5" />
            <span>{t.servicesTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FDFBF7]">
            {t.servicesTitle}
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            {t.servicesDesc}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#FACC15] text-[#120D0A] shadow-lg border border-[#FACC15]'
                  : 'bg-[#1A120C] text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-[#241810] rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-[#FACC15]/10 ${
                service.popular
                  ? 'border-[#FACC15] relative'
                  : 'border-white/10 hover:border-[#FACC15]/60'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="bg-[#FACC15] text-[#120D0A] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 text-center font-sans">
                  {t.popularBadge}
                </div>
              )}

              {/* Service Card Image */}
              <div className="relative h-48 overflow-hidden bg-black/40">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241810] via-transparent to-transparent opacity-90" />
                
                {/* Price Tag */}
                <div className="absolute bottom-3 right-3 bg-[#120D0A] text-[#FACC15] font-display font-bold text-lg px-3.5 py-1.5 rounded-xl border border-[#FACC15]/50 shadow-lg flex items-baseline gap-1">
                  <span>{service.priceETB}</span>
                  <span className="text-xs font-sans font-normal text-white/80">ETB</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-[#120D0A]/90 text-white/90 text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
                  <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>{service.durationMinutes} {t.mins}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#FDFBF7] mb-2 group-hover:text-[#FACC15] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Included Perks */}
                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <Check className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>{lang === 'am' ? 'በስል ምላጭ ጥራት ያለው ማስተካከያ' : 'Straight Razor Edge Detail'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>{lang === 'am' ? 'በUV የጸዱ ምላጮች እና ፅዱ አሰራር' : 'UV Sanitized Blades & Warm Clean-up'}</span>
                  </div>
                </div>

                {/* Book Action */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectService(service.id)}
                  className="w-full py-3 bg-[#120D0A] hover:bg-[#FACC15] hover:text-[#120D0A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all border border-[#FACC15]/30 hover:border-[#FACC15] flex items-center justify-center gap-2 group-hover:bg-[#FACC15] group-hover:text-[#120D0A]"
                >
                  <span>{t.selectServiceBtn}</span>
                  <ArrowRight className="w-4 h-4 text-[#FACC15] group-hover:text-[#120D0A]" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

