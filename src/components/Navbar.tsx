import React, { useState, useEffect } from 'react';
import { Scissors, Calendar, MapPin, Phone, Clock, Menu, X, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOP_INFO } from '../data/barbershopData';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, barberId?: string) => void;
  onOpenMyBookings: () => void;
  bookingCount: number;
  lang: Language;
  onToggleLang: (newLang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyBookings,
  bookingCount,
  lang,
  onToggleLang
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.barbers, href: '#barbers' },
    { name: t.services, href: '#services' },
    { name: t.testimonials, href: '#testimonials' },
    { name: t.location, href: '#location' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#120D0A]/95 backdrop-blur-md border-b border-[#FACC15]/20 shadow-2xl py-3 text-[#FDFBF7]' 
        : 'bg-[#120D0A]/85 backdrop-blur-sm border-b border-white/10 py-4 text-[#FDFBF7]'
    }`}>
      {/* Top Banner Notice */}
      <div className="hidden lg:block bg-[#1A120C] text-[#FDFBF7] text-xs py-1.5 px-4 font-medium border-b border-[#FACC15]/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#FACC15]">
              <MapPin className="w-3.5 h-3.5" /> Bethel to Alem Bank Road, Addis Ababa
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#FACC15]" /> Open Today: 8:00 AM – 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/90">
              <Phone className="w-3.5 h-3.5 text-[#FACC15]" /> {SHOP_INFO.phone}
            </span>
            {/* Language Selector */}
            <button
              onClick={() => onToggleLang(lang === 'en' ? 'am' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] hover:bg-[#FACC15] hover:text-[#120D0A] transition-all text-[11px] font-bold"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              className="w-10 h-10 rounded-full bg-[#FACC15] text-[#120D0A] flex items-center justify-center border-2 border-[#EAB308] shadow-lg"
            >
              <Scissors className="w-5 h-5 stroke-[2.5]" />
            </motion.div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl text-[#FDFBF7] tracking-wide block leading-none group-hover:text-[#FACC15] transition-colors">
                {t.shopName}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#FACC15] font-semibold block mt-1">
                {t.shopSub}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#FACC15] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FACC15] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggleLang(lang === 'en' ? 'am' : 'en')}
              className="lg:hidden px-3 py-1.5 text-xs font-bold rounded-lg border border-[#FACC15]/40 text-[#FACC15] hover:bg-[#FACC15]/10 flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'አማርኛ' : 'English'}</span>
            </motion.button>

            {/* My Bookings Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenMyBookings}
              className="relative px-3.5 py-2 text-xs font-semibold rounded-xl border border-[#FACC15]/40 text-[#FACC15] hover:bg-[#FACC15]/10 transition-colors flex items-center gap-1.5"
              title={t.myAppointments}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.myAppointments}</span>
              {bookingCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#FACC15] text-[#120D0A] text-[10px] font-extrabold rounded-full">
                  {bookingCount}
                </span>
              )}
            </motion.button>

            {/* Book Now Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(250, 204, 21, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenBooking()}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#120D0A] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl shadow-lg transition-all flex items-center gap-2 border border-[#FACC15]"
            >
              <Scissors className="w-3.5 h-3.5 text-[#120D0A]" />
              <span>{t.bookNow}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onToggleLang(lang === 'en' ? 'am' : 'en')}
              className="p-2 text-[#FACC15] hover:bg-white/10 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'አማርኛ' : 'EN'}</span>
            </button>

            <button
              onClick={onOpenMyBookings}
              className="relative p-2 text-[#FACC15] hover:bg-white/10 rounded-lg"
              title={t.myAppointments}
            >
              <Calendar className="w-5 h-5" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FACC15] text-[#120D0A] text-[9px] font-extrabold rounded-full flex items-center justify-center">
                  {bookingCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FDFBF7] hover:text-[#FACC15] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#1A120C] border-b border-[#FACC15]/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/90 hover:text-[#FACC15] py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#120D0A] bg-[#FACC15] hover:bg-[#EAB308] rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Scissors className="w-4 h-4 text-[#120D0A]" />
              <span>{t.bookNow}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMyBookings();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#FACC15] border border-[#FACC15]/40 rounded-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.myAppointments} ({bookingCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
