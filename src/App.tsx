import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BarbersSection } from './components/BarbersSection';
import { ServicesSection } from './components/ServicesSection';
import { BookingSystem } from './components/BookingSystem';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ShopInfo } from './components/ShopInfo';
import { MyBookingsModal } from './components/MyBookingsModal';
import { Footer } from './components/Footer';
import { BookingAppointment } from './types';
import { Language } from './data/translations';

export default function App() {
  // Language State ('en' | 'am')
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('addis_barber_lang');
    return (saved === 'am' || saved === 'en') ? saved : 'en';
  });

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('addis_barber_lang', newLang);
  };

  // Saved appointments in localStorage
  const [bookings, setBookings] = useState<BookingAppointment[]>(() => {
    const saved = localStorage.getItem('addis_user_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Booking Flow Controls
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedBarberId, setSelectedBarberId] = useState<string | undefined>(undefined);
  const [showMyBookings, setShowMyBookings] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('addis_user_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenBooking = (serviceId?: string, barberId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedBarberId(barberId);
    
    // Scroll to booking section smoothly
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingComplete = (newBooking: BookingAppointment) => {
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Appointment confirmed for ${newBooking.customerName}! Ref: ${newBooking.id}`);
  };

  const handleCancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    showToast('Appointment successfully cancelled.');
  };

  return (
    <div className="min-h-screen bg-[#120D0A] text-[#FDFBF7] font-sans antialiased selection:bg-[#FACC15] selection:text-[#120D0A]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A120C] text-[#FACC15] border border-[#FACC15]/40 px-5 py-3.5 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMyBookings={() => setShowMyBookings(true)}
        bookingCount={bookings.length}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onBookClick={() => handleOpenBooking()}
          lang={lang}
        />

        {/* Master Barbers Section */}
        <BarbersSection
          onBookWithBarber={(barberId) => handleOpenBooking(undefined, barberId)}
          lang={lang}
        />

        {/* Services & Classic Styles Menu */}
        <ServicesSection
          onSelectService={(serviceId) => handleOpenBooking(serviceId, undefined)}
          lang={lang}
        />

        {/* Interactive Booking Engine Section */}
        <BookingSystem
          initialServiceId={selectedServiceId}
          initialBarberId={selectedBarberId}
          onBookingComplete={handleBookingComplete}
          lang={lang}
        />

        {/* Community Feedback & Testimonials */}
        <TestimonialsSection lang={lang} />

        {/* Location, Operating Hours & Amenities */}
        <ShopInfo lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* My Appointments Saved Modal */}
      {showMyBookings && (
        <MyBookingsModal
          bookings={bookings}
          onClose={() => setShowMyBookings(false)}
          onCancelBooking={handleCancelBooking}
          onBookNew={() => handleOpenBooking()}
          lang={lang}
        />
      )}
    </div>
  );
}
