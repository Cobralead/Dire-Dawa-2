import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, User, Scissors, Check, Copy, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { getServices, getBarbers, getShopInfo, SHOP_INFO } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface BookingSystemProps {
  initialServiceId?: string;
  initialBarberId?: string;
  onBookingComplete?: (newBooking: any) => void;
  onClose?: () => void;
  lang: Language;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({
  initialServiceId,
  initialBarberId,
  lang
}) => {
  const t = translations[lang];
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const barbers = getBarbers(lang);
  const services = getServices(lang);
  const shopInfo = getShopInfo(lang);

  const selectedService = services.find(s => s.id === initialServiceId);
  const selectedBarber = barbers.find(b => b.id === initialBarberId);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 3000);
  };

  // Build pre-filled WhatsApp message
  const getWhatsAppMessage = (barberName?: string, serviceTitle?: string) => {
    let msg = lang === 'am'
      ? 'ሰላም አዲስ አበባ ባርበር ሾፕ! '
      : 'Hello Addis Ababa Barber Shop! ';

    if (serviceTitle) {
      msg += lang === 'am' ? `ስለ ${serviceTitle} አገልግሎት ` : `I am interested in ${serviceTitle}. `;
    }
    if (barberName) {
      msg += lang === 'am' ? `ከአስተካካይ ${barberName} ጋር ቀጠሮ መያዝ እፈልጋለሁ። ` : `I would like to book with ${barberName}. `;
    }

    msg += lang === 'am' ? 'የሚገኝ ሰዓት አለዎት?' : 'What time slots are available today?';
    return encodeURIComponent(msg);
  };

  const primaryPhoneRaw = "251911234567";
  const primaryPhoneDisplay = SHOP_INFO.phone;
  const whatsappNumberRaw = "251911234567";

  return (
    <section id="booking" className="py-20 bg-[#120D0A] text-[#FDFBF7] relative border-b border-[#FACC15]/20">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/30 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'በስልክ ወይም በዋትስአፕ በቀጥታ ይደውሉ' : 'INSTANT PHONE & WHATSAPP RESERVATIONS'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            {lang === 'am' ? 'ለመቁረጥ በስልክ ወይም በዋትስአፕ ያግኙን' : 'Call or WhatsApp to Lock In Your Chair'}
          </h2>

          <p className="text-base text-white/70 font-sans leading-relaxed">
            {lang === 'am' 
              ? 'ምንም አይነት መመዝገብ ወይም አፕሊኬሽን ማውረድ አይጠይቅም። ያሬድን ወይም ሄኖክን በስልክ ወይም በዋትስአፕ በቀጥታ በማናገር ወንበርዎን አሁኑኑ ያስይዙ!' 
              : 'No app downloads or account setups needed. Call or text our master barbers directly on Phone or WhatsApp to reserve your spot instantly!'}
          </p>
        </div>

        {/* Selected Service / Barber Notice Banner */}
        {(selectedService || selectedBarber) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-10 p-4 bg-[#1A120C] rounded-2xl border border-[#FACC15]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15] text-[#120D0A] flex items-center justify-center font-bold shrink-0">
                <Scissors className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="text-[#FACC15] font-bold uppercase tracking-wider block text-[10px]">
                  {lang === 'am' ? 'የተመረጠ አገልግሎት' : 'YOUR SELECTION'}
                </span>
                <p className="font-bold text-white text-sm">
                  {selectedService ? selectedService.title : ''}
                  {selectedService && selectedBarber ? ' • ' : ''}
                  {selectedBarber ? `${selectedBarber.name}` : ''}
                </p>
                {selectedService && (
                  <p className="text-white/60">
                    {selectedService.priceETB} ETB • {selectedService.durationMinutes} mins
                  </p>
                )}
              </div>
            </div>

            <span className="px-3 py-1 bg-[#FACC15]/20 text-[#FACC15] rounded-full text-[11px] font-bold border border-[#FACC15]/30 shrink-0">
              {lang === 'am' ? 'ለመያዝ ከታች ይደውሉ' : 'Call below to confirm'}
            </span>
          </motion.div>
        )}

        {/* Main Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Card 1: Direct Phone Call */}
          <div className="bg-[#1A120C] rounded-3xl p-8 border-2 border-[#FACC15] shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FACC15] text-[#120D0A] flex items-center justify-center font-extrabold shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40">
                  {lang === 'am' ? 'ዋና የስልክ መስመር' : 'PRIMARY PHONE'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  {lang === 'am' ? 'በስልክ በቀጥታ ይደውሉ' : 'Call Shop Directly'}
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  {lang === 'am' ? 'ለበለጠ መረጃ ወይም አሁኑኑ ቀጠሮ ለመያዝ' : 'Speak directly with our front desk or on-duty barber.'}
                </p>
              </div>

              <div className="bg-[#120D0A] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[#FACC15] tracking-wider">
                  {primaryPhoneDisplay}
                </span>
                <button
                  onClick={() => handleCopy(primaryPhoneDisplay)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 transition-all flex items-center gap-1.5 border border-white/10 active:scale-95"
                >
                  {copiedNumber === primaryPhoneDisplay ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">{lang === 'am' ? 'ተቀድቷል' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'am' ? 'ኮፒ' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`tel:+${primaryPhoneRaw}`}
              className="w-full py-4 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-[#120D0A] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FACC15]/20 active:scale-98"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{lang === 'am' ? 'አሁኑኑ ይደውሉ (+251 91 123 4567)' : 'Call Now (+251 91 123 4567)'}</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-[#1A120C] rounded-3xl p-8 border border-emerald-500/40 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-extrabold shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  WHATSAPP CHAT
                </span>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  {lang === 'am' ? 'በዋትስአፕ መልእክት ይላኩ' : 'Book via WhatsApp'}
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  {lang === 'am' ? 'መልእክት በመላክ በቀላሉ ቀጠሮዎን ያረጋግጡ' : 'Send a quick text message to confirm availability.'}
                </p>
              </div>

              <div className="bg-[#120D0A] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-emerald-400 tracking-wider">
                  {SHOP_INFO.whatsapp}
                </span>
                <button
                  onClick={() => handleCopy(SHOP_INFO.whatsapp)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 transition-all flex items-center gap-1.5 border border-white/10 active:scale-95"
                >
                  {copiedNumber === SHOP_INFO.whatsapp ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">{lang === 'am' ? 'ተቀድቷል' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'am' ? 'ኮፒ' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumberRaw}?text=${getWhatsAppMessage(selectedBarber?.name, selectedService?.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20 active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'am' ? 'በዋትስአፕ መልእክት ይላኩ' : 'Open WhatsApp Chat'}</span>
            </a>
          </div>

        </div>

        {/* Individual Barbers Direct Contact Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[#FACC15]" />
            <h3 className="text-xl font-display font-bold text-white">
              {lang === 'am' ? 'የአስተካካዮች የቀጥታ ስልክ ቁጥሮች' : 'Direct Lines for Master Barbers'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {barbers.map((barber) => {
              const barberPhoneRaw = barber.id === 'barber-yared' ? '251911234567' : '251929876543';
              const barberPhoneDisplay = barber.id === 'barber-yared' ? '+251 91 123 4567' : '+251 92 987 6543';

              return (
                <div
                  key={barber.id}
                  className="bg-[#1A120C] rounded-2xl p-5 border border-white/10 hover:border-[#FACC15]/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={barber.avatar}
                      alt={barber.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-[#FACC15]/40"
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">{barber.name}</h4>
                      <p className="text-xs text-[#FACC15] font-medium">{barber.title}</p>
                      <p className="text-[11px] text-white/50 font-mono mt-0.5">{barberPhoneDisplay}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    <a
                      href={`tel:+${barberPhoneRaw}`}
                      className="py-2.5 px-3 rounded-xl bg-[#FACC15]/10 hover:bg-[#FACC15] text-[#FACC15] hover:text-[#120D0A] font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-[#FACC15]/30"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{lang === 'am' ? 'ይደውሉ' : 'Call'}</span>
                    </a>

                    <a
                      href={`https://wa.me/${barberPhoneRaw}?text=${getWhatsAppMessage(barber.name, selectedService?.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-emerald-500/30"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shop Working Hours & Landmark Quick Note */}
        <div className="max-w-4xl mx-auto mt-12 bg-[#1A120C]/80 p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 text-[#FACC15] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{t.hoursTitle}</p>
              <p className="text-white/60">Mon - Sun: 8:00 AM – 9:00 PM (Daily Open)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 text-[#FACC15] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Bethel to Alem Bank Road</p>
              <p className="text-white/60">Kolfe Keraniyo, Addis Ababa</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
