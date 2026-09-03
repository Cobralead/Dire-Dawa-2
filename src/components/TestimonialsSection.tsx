import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, CheckCircle, MapPin, UserCheck, X } from 'lucide-react';
import { motion } from 'motion/react';
import { getTestimonials } from '../data/barbershopData';
import { CommunityTestimonial } from '../types';
import { Language, translations } from '../data/translations';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [testimonials, setTestimonials] = useState<CommunityTestimonial[]>(() => {
    return getTestimonials(lang);
  });

  // Re-sync initial testimonials when language toggles if no custom ones added
  useEffect(() => {
    setTestimonials(getTestimonials(lang));
  }, [lang]);

  const [showReviewModal, setShowReviewModal] = useState(false);

  // Review Form State
  const [authorName, setAuthorName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Bethel, Addis Ababa');
  const [barberName, setBarberName] = useState('Yared Alemayehu');
  const [serviceReceived, setServiceReceived] = useState('The Bethel Signature Grooming');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('addis_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newReview: CommunityTestimonial = {
      id: 'rev-' + Date.now(),
      authorName: authorName.trim(),
      neighborhood: neighborhood.trim() || 'Addis Ababa',
      barberName,
      serviceReceived,
      rating,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      comment: comment.trim(),
      verifiedLocal: true
    };

    setTestimonials([newReview, ...testimonials]);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      setShowReviewModal(false);
      setAuthorName('');
      setComment('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#1A120C] text-[#FDFBF7] relative border-b border-[#FACC15]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{t.reviewsTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FDFBF7]">
              {t.reviewsTitle}
            </h2>

            <p className="text-base text-white/70 max-w-xl mt-2 font-sans">
              {t.reviewsDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Overall Rating Pill */}
            <div className="bg-[#241810] p-3.5 rounded-2xl border border-[#FACC15]/30 shadow flex items-center gap-3">
              <div className="text-2xl font-display font-bold text-[#FACC15]">4.9</div>
              <div>
                <div className="flex items-center text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-white/60 font-medium">
                  Based on {testimonials.length + 516} Reviews
                </span>
              </div>
            </div>

            {/* Leave Review Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowReviewModal(true)}
              className="px-5 py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-[#120D0A] text-xs font-extrabold uppercase tracking-wider rounded-2xl transition-all shadow flex items-center justify-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#120D0A]" />
              <span>{t.shareFeedback}</span>
            </motion.button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#241810] p-6 rounded-2xl border border-[#FACC15]/20 hover:border-[#FACC15]/60 shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FACC15]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {review.verifiedLocal && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#120D0A] text-[#FACC15] border border-[#FACC15]/30 px-2.5 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-[#FACC15]" /> Verified Client
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="text-sm text-white/85 leading-relaxed font-sans italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {review.authorName}
                  </h4>
                  <span className="text-white/60 flex items-center gap-1 text-[11px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#FACC15]" /> {review.neighborhood}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[11px] text-[#FACC15] font-semibold">
                    Cut by {review.barberName}
                  </span>
                  <span className="text-[10px] text-white/40">
                    {review.date}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* LEAVE REVIEW MODAL */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A120C] text-white max-w-lg w-full rounded-3xl border border-[#FACC15]/40 shadow-2xl overflow-hidden p-6 sm:p-8 relative space-y-5">
            
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-display font-bold text-white">
                {t.shareFeedback}
              </h3>
              <p className="text-xs text-white/70 mt-1">
                Help fellow Bethel & Alem Bank residents find great grooming.
              </p>
            </div>

            {successMessage ? (
              <div className="p-6 bg-[#FACC15]/10 border border-[#FACC15] rounded-2xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-[#FACC15] mx-auto animate-bounce" />
                <h4 className="font-display font-bold text-lg text-white">{t.thankYou}</h4>
                <p className="text-xs text-white/80">{t.reviewAdded}</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Solomon Kassa"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#120D0A] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#FACC15]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                      {t.neighborhood}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bethel, Alem Bank, etc."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#120D0A] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#FACC15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                      {t.yourBarber}
                    </label>
                    <select
                      value={barberName}
                      onChange={(e) => setBarberName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#120D0A] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#FACC15]"
                    >
                      <option value="Yared Alemayehu">Yared Alemayehu</option>
                      <option value="Henok Tadesse">Henok Tadesse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                    {t.ratingLabel}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`p-2 rounded-xl border flex-1 flex justify-center ${
                          rating >= star ? 'bg-[#FACC15] text-[#120D0A] border-[#FACC15]' : 'bg-[#120D0A] text-white/40 border-white/10'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-white/80 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={t.reviewPlaceholder}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#120D0A] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#FACC15]"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-[#120D0A] text-xs font-extrabold uppercase tracking-wider rounded-xl shadow border border-[#FACC15]"
                  >
                    {t.postReview}
                  </motion.button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
