import { Barber, ServiceItem, CommunityTestimonial } from '../types';
import { Language } from './translations';

export const SHOP_INFO = {
  name: "Addis Ababa Barber Shop",
  tagline: "Master Haircuts & Barber Craftsmanship on Bethel to Alem Bank Road",
  establishedYear: 2008,
  address: "Bethel to Alem Bank Main Road, Kolfe Keraniyo, Addis Ababa, Ethiopia",
  phone: "+251 91 123 4567",
  whatsapp: "+251 92 987 6543",
  email: "info@addisbarbers.et",
  rating: 4.9,
  totalReviews: 520,
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 8:00 PM" },
    { days: "Sunday", time: "9:00 AM – 5:00 PM" },
  ],
  amenities: [
    { title: "Air-Conditioned Lounge", desc: "Clean retreat from the city heat with plush seating." },
    { title: "Sterilized Straight Razors", desc: "Medical-grade UV sanitization for all blades and shears." },
    { title: "Classic Music & Vintage Vibes", desc: "Soothing acoustic and jazz tunes while you get groomed." },
    { title: "Ergonomic Leather Chairs", desc: "High-end imported chairs for maximum comfort." },
  ],
  images: {
    heroInterior: "/src/assets/images/dire_dawa_shop_interior_1784726562013.jpg",
  }
};

export const getShopInfo = (lang: Language) => {
  if (lang === 'am') {
    return {
      ...SHOP_INFO,
      name: "አዲስ አበባ የወንዶች ፀጉር ቤት",
      tagline: "ምርጥ የፀጉር ቁረጥ እና የሙያ ጥራት ከቤተል ወደ ዓለም ባንክ መንገድ",
      address: "ከቤተል ወደ ዓለም ባንክ ዋና መንገድ፣ ኮልፌ ቀራኒዮ፣ አዲስ አበባ፣ ኢትዮጵያ",
      hours: [
        { days: "ከሰኞ – ቅዳሜ", time: "ከጠዋቱ 2:00 – ከምሽቱ 2:00" },
        { days: "እሁድ", time: "ከጠዋቱ 3:00 – ከቀኑ 11:00" },
      ],
      amenities: [
        { title: "የኤር ኮንዲሽን ማረፊያ", desc: "ከከተማው ሙቀት አረፍ የሚሉበት ፅዱ እና ምቹ የመጠበቂያ ስፍራ።" },
        { title: "በUV የተጸዱ ምላጮች", desc: "ለእያንዳንዱ ደንበኛ በህክምና ደረጃ በUV የተጸዱ ምላጮች እና መቀሶች።" },
        { title: "ደስ የሚል ሙዚቃ እና መንፈስ", desc: "ፀጉርዎን በሚቆረጡበት ጊዜ የሚያዝናና አኮስቲክ እና ጃዝ ሙዚቃ።" },
        { title: "ምቹ የወንበር መቀመጫዎች", desc: "ለበለጠ ምቾት ከውጭ የመጡ ዘመናዊ የቆዳ ወንበሮች።" },
      ]
    };
  }
  return SHOP_INFO;
};

export const LOCAL_BARBERS: Barber[] = [
  {
    id: "barber-yared",
    name: "Yared Alemayehu",
    title: "Master Barber & Founder",
    experienceYears: 18,
    specialty: ["Straight Razor Line-Ups", "Classic Fades", "Full Grooming"],
    bio: "Learned the art of traditional grooming and has served the Bethel and Alem Bank community for nearly two decades with razor precision and warm Ethiopian hospitality.",
    motto: "A clean cut gives confidence before a single word is spoken.",
    avatar: "/src/assets/images/barber_yared_portrait_1784726576124.jpg",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    rating: 5.0,
    reviewCount: 245
  },
  {
    id: "barber-henok",
    name: "Henok Tadesse",
    title: "Fade & Precision Specialist",
    experienceYears: 9,
    specialty: ["Skin Fades & Tapers", "Beard Sculpting", "Crisp Hair Linings"],
    bio: "Famous along Bethel Road for crisp sharp line-ups and modern low tapers. Henok blends contemporary trends with meticulous attention to head shape.",
    motto: "Detail in every millimeter. No sharp edge is left unrefined.",
    avatar: "/src/assets/images/barber_henok_portrait_1784726591416.jpg",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
    rating: 4.9,
    reviewCount: 188
  }
];

export const getBarbers = (lang: Language): Barber[] => {
  if (lang === 'am') {
    return [
      {
        id: "barber-yared",
        name: "ያሬድ አለማየሁ",
        title: "ዋና የፀጉር አስተካካይ እና መስራች",
        experienceYears: 18,
        specialty: ["የስል ምላጭ ማስተካከል", "ክላሲክ የፀጉር ቁረጥ", "ሙሉ የውበት እንክብካቤ"],
        bio: "የባህላዊ እና ዘመናዊ የፀጉር አቆራረጥ ጥበብን በከፍተኛ ጥራት የተካነ ሲሆን፤ የቤተል እና ዓለም ባንክ አካባቢ ደንበኞችን ላለፉት 18 ዓመታት በታላቅ የሙያ ቅንነትና በፍቅር ሲያገለግል ቆይቷል።",
        motto: "ፅዱ እና የተስተካከለ ፀጉር አንድም ቃል ከመናገርዎ በፊት በራስ መተማመንን ያጎናጽፋል።",
        avatar: "/src/assets/images/barber_yared_portrait_1784726576124.jpg",
        availableDays: ["ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ"],
        rating: 5.0,
        reviewCount: 245
      },
      {
        id: "barber-henok",
        name: "ሄኖክ ታደሰ",
        title: "የዘመናዊ ቁረጥ እና የቅርጽ ባለሙያ",
        experienceYears: 9,
        specialty: ["የስኪን ፌድ እና ታፐር ቁረጥ", "የፂም ቅርጽ ማውጣት", "ጥርት ያለ የፀጉር መስመር"],
        bio: "በቤተል መንገድ ላይ በሚገርም የፀጉር መስመር ማስተካከል እና በዘመናዊ ስታይሎች የሚታወቅ ባለሙያ ነው። የደንበኛውን ፍላጎት ከራስ ቅል ቅርጽ ጋር በማስማማት በጥንቃቄ ይሰራል።",
        motto: "በእያንዳንዱ ሚሊሜትር ጥንቃቄ፤ እያንዳንዱ መስመር በጥራት ይጠረዛል።",
        avatar: "/src/assets/images/barber_henok_portrait_1784726591416.jpg",
        availableDays: ["ሰኞ", "ማክሰኞ", "ሐሙስ", "አርብ", "ቅዳሜ", "እሁድ"],
        rating: 4.9,
        reviewCount: 188
      }
    ];
  }
  return LOCAL_BARBERS;
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "kids-haircut",
    title: "Kids Haircut",
    description: "Gentle, precise haircut experience for kids with clean finish and style.",
    priceETB: 200,
    durationMinutes: 25,
    category: "haircut",
    image: "/src/assets/images/barber_yared_portrait_1784726576124.jpg",
    popular: false
  },
  {
    id: "adults-haircut",
    title: "Adults Haircut",
    description: "Full haircut of your choice (fades, tapers, or classic cuts) with razor edge detail.",
    priceETB: 300,
    durationMinutes: 35,
    category: "haircut",
    image: "/src/assets/images/classic_fade_haircut_1784726604009.jpg",
    popular: true
  },
  {
    id: "beard-only",
    title: "Beard Only",
    description: "Precision beard shaping, scissor trim, cheek line-up, and beard oil conditioning.",
    priceETB: 150,
    durationMinutes: 20,
    category: "beard",
    image: "/src/assets/images/hot_towel_shave_style_1784726620610.jpg",
    popular: false
  },
  {
    id: "hair-lining-only",
    title: "Hair Lining Only",
    description: "Crisp straight-razor forehead and neck hairline definition.",
    priceETB: 150,
    durationMinutes: 15,
    category: "haircut",
    image: "/src/assets/images/classic_fade_haircut_1784726604009.jpg",
    popular: false
  },
  {
    id: "facial-scrub",
    title: "Scrub",
    description: "Deep cleansing facial scrub to refresh pores and exfoliate dead skin.",
    priceETB: 100,
    durationMinutes: 15,
    category: "facial",
    image: "/src/assets/images/hot_towel_shave_style_1784726620610.jpg",
    popular: false
  },
  {
    id: "hair-gel",
    title: "Gel",
    description: "Premium hair gel styling application and shine finish.",
    priceETB: 100,
    durationMinutes: 10,
    category: "styling",
    image: "/src/assets/images/dire_dawa_shop_interior_1784726562013.jpg",
    popular: false
  },
  {
    id: "full-grooming-package",
    title: "Full Grooming Package",
    description: "Complete royal treatment: Haircut, Beard Care, Facial Scrub, Gel styling & Razor finish.",
    priceETB: 900,
    durationMinutes: 60,
    category: "combo",
    image: "/src/assets/images/dire_dawa_shop_interior_1784726562013.jpg",
    popular: true
  }
];

export const getServices = (lang: Language): ServiceItem[] => {
  if (lang === 'am') {
    return [
      {
        id: "kids-haircut",
        title: "የህፃናት ፀጉር ቁረጥ",
        description: "ለህፃናት በፍቅር እና በጥንቃቄ የሚሰራ፣ ንጹህና የሚያምር የፀጉር አቆራረጥ።",
        priceETB: 200,
        durationMinutes: 25,
        category: "haircut",
        image: "/src/assets/images/barber_yared_portrait_1784726576124.jpg",
        popular: false
      },
      {
        id: "adults-haircut",
        title: "የአዋቂዎች ፀጉር ቁረጥ",
        description: "የሚፈልጉትን የፀጉር ስታይል (ፌድ፣ ታፐር ወይም መደበኛ ቁረጥ) በስል ምላጭ ማስተካከል እና ማስዋብ ጨምሮ።",
        priceETB: 300,
        durationMinutes: 35,
        category: "haircut",
        image: "/src/assets/images/classic_fade_haircut_1784726604009.jpg",
        popular: true
      },
      {
        id: "beard-only",
        title: "የፂም ማስተካከል",
        description: "የፂም ቅርጽ ማውጣት፣ በመቀስ ማስተካከል፣ በምላጭ ጠርዝ ማውጣት እና በዘይት ማለስለስ።",
        priceETB: 150,
        durationMinutes: 20,
        category: "beard",
        image: "/src/assets/images/hot_towel_shave_style_1784726620610.jpg",
        popular: false
      },
      {
        id: "hair-lining-only",
        title: "የፀጉር መስመር ማስተካከል",
        description: "የግንባር እና የአንገት የፀጉር መስመርን በምላጭ ጥርት አድርጎ ማስተካከል።",
        priceETB: 150,
        durationMinutes: 15,
        category: "haircut",
        image: "/src/assets/images/classic_fade_haircut_1784726604009.jpg",
        popular: false
      },
      {
        id: "facial-scrub",
        title: "የፊት ስክራብ",
        description: "የፊትን ቆዳ በጥራት የሚያጸዳ፣ የሞተ ቆዳ የሚያነሳ እና ፊትን የሚያስፎክስ የፊት እንክብካቤ።",
        priceETB: 100,
        durationMinutes: 15,
        category: "facial",
        image: "/src/assets/images/hot_towel_shave_style_1784726620610.jpg",
        popular: false
      },
      {
        id: "hair-gel",
        title: "ጄል እና ስታይሊንግ",
        description: "በምርጥ ጄል ፀጉርን ማስዋብ፣ ቅርጽ ማውጣት እና ማብራት።",
        priceETB: 100,
        durationMinutes: 10,
        category: "styling",
        image: "/src/assets/images/dire_dawa_shop_interior_1784726562013.jpg",
        popular: false
      },
      {
        id: "full-grooming-package",
        title: "ሙሉ የአገልግሎት ፓኬጅ",
        description: "ሙሉ የንግስና እንክብካቤ፡ የፀጉር ቁረጥ፣ የፂም ማስተካከል፣ የፊት ስክራብ፣ ጄል እና በምላጭ ማጠናቀቅ።",
        priceETB: 900,
        durationMinutes: 60,
        category: "combo",
        image: "/src/assets/images/dire_dawa_shop_interior_1784726562013.jpg",
        popular: true
      }
    ];
  }
  return SERVICES_LIST;
};

export const INITIAL_TESTIMONIALS: CommunityTestimonial[] = [
  {
    id: "rev-1",
    authorName: "Dawit Wolde",
    neighborhood: "Bethel, Addis Ababa",
    barberName: "Yared Alemayehu",
    rating: 5,
    date: "July 18, 2026",
    comment: "Yared has been my barber since I moved to the Bethel area! His razor precision is unmatched anywhere on the Bethel to Alem Bank road.",
    serviceReceived: "Full Grooming Package",
    verifiedLocal: true
  },
  {
    id: "rev-2",
    authorName: "Abel Getachew",
    neighborhood: "Alem Bank Area",
    barberName: "Henok Tadesse",
    rating: 5,
    date: "July 15, 2026",
    comment: "Henok gives the cleanest skin fade in Kolfe Keraniyo! Sharp, respectful, and always punctual when you book online.",
    serviceReceived: "Adults Haircut",
    verifiedLocal: true
  },
  {
    id: "rev-3",
    authorName: "Michael Kebede",
    neighborhood: "Tor Hailoch, Addis Ababa",
    barberName: "Yared Alemayehu",
    rating: 5,
    date: "July 10, 2026",
    comment: "Whenever I drive down Bethel road, my first stop is right here. Yared's razor precision and beard sculpting is pure craftsmanship.",
    serviceReceived: "Full Grooming Package",
    verifiedLocal: true
  },
  {
    id: "rev-4",
    authorName: "Tewodros & Son",
    neighborhood: "Kolfe Keraniyo, Addis Ababa",
    barberName: "Yared Alemayehu",
    rating: 5,
    date: "June 29, 2026",
    comment: "Took my 7-year-old son here for his school photo cut. Yared was so patient and made him feel like a young gentleman. Loyal customers for life!",
    serviceReceived: "Kids Haircut",
    verifiedLocal: true
  }
];

export const getTestimonials = (lang: Language): CommunityTestimonial[] => {
  if (lang === 'am') {
    return [
      {
        id: "rev-1",
        authorName: "ዳዊት ወልዴ",
        neighborhood: "ቤተል፣ አዲስ አበባ",
        barberName: "ያሬድ አለማየሁ",
        rating: 5,
        date: "ሐምሌ 11 ቀን 2018 ዓ.ም",
        comment: "ወደ ቤተል አካባቢ ከመጣሁ ጀምሮ ያሬድ ዘንድ ነው የምቆረጠው! በቤተል - ዓለም ባንክ መንገድ ላይ የሱን ያህል በምላጭ በጥራት የሚያስተካክል የለም።",
        serviceReceived: "ሙሉ የአገልግሎት ፓኬጅ",
        verifiedLocal: true
      },
      {
        id: "rev-2",
        authorName: "አቤል ጌታቸው",
        neighborhood: "ዓለም ባንክ አካባቢ",
        barberName: "ሄኖክ ታደሰ",
        rating: 5,
        date: "ሐምሌ 8 ቀን 2018 ዓ.ም",
        comment: "ሄኖክ በኮልፌ ቀራኒዮ ክፍለ ከተማ ውስጥ ምርጥ የስኪን ፌድ ቁረጥ ይሰጣል! በጣም ትሁት፣ ቅልጥፍና ያለው እና ሰዓት የሚያከብር ባለሙያ ነው።",
        serviceReceived: "የአዋቂዎች ፀጉር ቁረጥ",
        verifiedLocal: true
      },
      {
        id: "rev-3",
        authorName: "ሚካኤል ከበደ",
        neighborhood: "ጦር ሃይሎች፣ አዲስ አበባ",
        barberName: "ያሬድ አለማየሁ",
        rating: 5,
        date: "ሐምሌ 3 ቀን 2018 ዓ.ም",
        comment: "በቤተል መንገድ ስያልፍ ሁልጊዜ የመጀመሪያ ማረፊያዬ እዚህ ነው። ያሬድ በምላጭ የሚያወጣው የፂም መስመር እና ቁረጥ የጥበብ ስራ ነው።",
        serviceReceived: "ሙሉ የአገልግሎት ፓኬጅ",
        verifiedLocal: true
      },
      {
        id: "rev-4",
        authorName: "ቴዎድሮስ እና ልጁ",
        neighborhood: "ኮልፌ ቀራኒዮ፣ አዲስ አበባ",
        barberName: "ያሬድ አለማየሁ",
        rating: 5,
        date: "ሰኔ 22 ቀን 2018 ዓ.ም",
        comment: "የ7 ዓመት ልጅ ልጄን ለትምህርት ቤት ፎቶ ልቁረጠው ይዤው መጥቼ ያሬድ በትዕግስት እና በፍቅር አስተካከለው። እስከመጨረሻው ደንበኞቻቸው ነን!",
        serviceReceived: "የህፃናት ፀጉር ቁረጥ",
        verifiedLocal: true
      }
    ];
  }
  return INITIAL_TESTIMONIALS;
};

export const TIME_SLOTS = [
  "08:30 AM",
  "09:15 AM",
  "10:00 AM",
  "10:45 AM",
  "11:30 AM",
  "01:30 PM",
  "02:15 PM",
  "03:00 PM",
  "03:45 PM",
  "04:30 PM",
  "05:15 PM",
  "06:00 PM",
  "06:45 PM",
  "07:30 PM"
];

