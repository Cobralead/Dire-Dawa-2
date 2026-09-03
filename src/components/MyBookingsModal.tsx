import React from 'react';
import { Calendar, Clock, Scissors, User, Phone, X, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BookingAppointment } from '../types';
import { Language, translations } from '../data/translations';

interface MyBookingsModalProps {
  bookings: BookingAppointment[];
  onClose: () => void;
  onCancelBooking: (id: string) => void;
  onBookNew: () => void;
  lang: Language;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  bookings,
  onClose,
  onCancelBooking,
  onBookNew,
  lang
}) => {
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1A120C] text-white max-w-2xl w-full rounded-3xl border border-[#FACC15]/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        
        {/* Header */}
        <div className="p-6 bg-[#120D0A] border-b border-[#FACC15]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FACC15] text-[#120D0A] flex items-center justify-center border border-[#EAB308]">
              <Calendar className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white">
                {t.myAppointments}
              </h3>
              <p className="text-xs text-[#FACC15] font-semibold">
                Addis Ababa Barber Shop • Bethel to Alem Bank Road
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {bookings.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <Scissors className="w-12 h-12 text-[#FACC15]/40 mx-auto" />
              <h4 className="text-lg font-display font-bold text-white">
                No Appointments Saved
              </h4>
              <p className="text-xs text-white/60 max-w-sm mx-auto">
                You don't have any upcoming barber appointments booked yet.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBookNew();
                }}
                className="px-6 py-3 bg-[#FACC15] hover:bg-[#EAB308] text-[#120D0A] text-xs font-extrabold uppercase tracking-wider rounded-xl shadow"
              >
                {t.bookNow}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-[#120D0A] p-5 rounded-2xl border border-white/10 hover:border-[#FACC15]/50 transition-all space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#FACC15] uppercase tracking-wider block">
                        REF: {booking.id}
                      </span>
                      <h4 className="text-base font-display font-bold text-white mt-0.5">
                        {booking.serviceTitle}
                      </h4>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      booking.status === 'Confirmed' 
                        ? 'bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40' 
                        : 'bg-white/10 text-white/60'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80 bg-[#1A120C] p-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>Barber: <strong className="text-white">{booking.barberName}</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>{booking.date} at {booking.timeSlot}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>Phone: {booking.customerPhone}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FACC15] font-bold">ETB</span>
                      <span>Price: <strong className="text-white">{booking.servicePriceETB} ETB</strong></span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-[10px] text-white/40">
                      Booked on {new Date(booking.createdAt).toLocaleDateString()}
                    </span>

                    <button
                      onClick={() => onCancelBooking(booking.id)}
                      className="text-xs text-red-400 hover:text-red-300 font-medium flex items-center gap-1 hover:underline"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Cancel Appointment
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#120D0A] border-t border-white/10 flex justify-between items-center text-xs">
          <span className="text-white/60">
            Total Saved: {bookings.length} Appointment(s)
          </span>
          <button
            onClick={() => {
              onClose();
              onBookNew();
            }}
            className="px-4 py-2 bg-[#FACC15] hover:bg-[#EAB308] text-[#120D0A] font-bold rounded-xl"
          >
            + {t.bookNow}
          </button>
        </div>

      </motion.div>
    </div>
  );
};
