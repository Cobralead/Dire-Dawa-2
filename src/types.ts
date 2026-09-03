export interface Barber {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  specialty: string[];
  bio: string;
  motto: string;
  avatar: string;
  availableDays: string[];
  rating: number;
  reviewCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceETB: number;
  durationMinutes: number;
  category: 'haircut' | 'shave' | 'beard' | 'combo' | 'kids' | 'facial' | 'styling';
  image: string;
  popular?: boolean;
}

export interface BookingAppointment {
  id: string;
  serviceId: string;
  serviceTitle: string;
  servicePriceETB: number;
  barberId: string;
  barberName: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "09:30 AM"
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface CommunityTestimonial {
  id: string;
  authorName: string;
  neighborhood: string; // e.g. "Bethel, Addis Ababa", "Alem Bank Area", "Tor Hailoch"
  barberName: string;
  rating: number; // 1 - 5
  date: string;
  comment: string;
  serviceReceived: string;
  verifiedLocal: boolean;
}
