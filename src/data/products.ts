export interface ProductContent {
  name: string;
  tagline: string;
  phase: string;
  duration: string;
  bagSize: string;
  description: string;
  highlights: { icon: string; text: string }[];
  characteristics: { label: string; value: string }[];
  performance: { label: string; value: string }[];
  nutritional: { label: string; value: string }[];
  advantages: string[];
}

export interface Product {
  id: string;
  image?: string;
  category: 'poultry' | 'cattle' | 'sonali' | 'food';
  comingSoon?: boolean;
  color: string;
  price: number | null; // Price in BDT (Taka), null if excluded/call for price
  en: ProductContent;
  bn: ProductContent;
}

export const getProductImage = (product: Product): string => {
  return product.image || `/products/${product.id}.png`;
};

export const products: Product[] = [
  {
    id: 'starter',
    category: 'poultry',
    color: 'from-yellow-400 to-orange-500',
    price: 3782.50,
    bn: {
      name: 'SUPER BROILER STARTER FEED',
      tagline: 'ব্রয়লার খামারের লাভজনক শুরুর জন্য একটি শক্তিশালী ও সুস্থ শুরু।',
      phase: 'স্টার্টার ফেজ',
      duration: '১–১৪ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'SUPER BROILER STARTER FEED বিশেষভাবে ডিজাইন করা হয়েছে ব্রয়লার বাচ্চার জীবনের সবচেয়ে সংবেদনশীল ও গুরুত্বপূর্ণ প্রথম ১৪ দিনের জন্য। এই সময়ের সঠিক পুষ্টি, শক্তিশালী ইমিউনিটি এবং উন্নত হজম ক্ষমতা ভবিষ্যৎ পুরো গ্রোথ সাইকেলের ভিত্তি তৈরি করে।',
      highlights: [
        { icon: 'Zap', text: 'দ্রুত ও সমান স্টার্ট' },
        { icon: 'ShieldCheck', text: 'কম মৃত্যু হার' },
        { icon: 'TrendingUp', text: 'উন্নত FCR' },
      ],
      characteristics: [
        { label: 'রং', value: 'প্রাকৃতিক হালকা হলুদ–বাদামি' },
        { label: 'ঘ্রাণ', value: 'ফ্রেশ, পরিষ্কার ও হালকা মোলাসেস নোট' },
        { label: 'পালাটেবিলিটি', value: 'অত্যন্ত ভালো' },
        { label: 'ডাস্ট লেভেল', value: 'কম, ঝরঝরে' },
      ],
      performance: [
        { label: '১–১৪ দিনে ওজন', value: '৪২০ – ৪৮০ গ্রাম' },
        { label: 'প্রত্যাশিত FCR', value: '১.২০ – ১.৩০' },
        { label: 'স্বাস্থ্য', value: 'শক্তিশালী গাট হেলথ' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~২২.৫ – ২৩.০%' },
        { label: 'Crude Fat', value: '~৬.৫ – ৭.০%' },
        { label: 'Metabolizable Energy', value: 'High & Balanced' },
        { label: 'Calcium', value: '~০.৯০ – ১.০০%' },
      ],
      advantages: [
        'SPC + ফিশ মিল + ফুল ফ্যাট সয় = উন্নত প্রোটিন গুণমান',
        'উন্নত অ্যামিনো এসিড ব্যালেন্স',
        'এনজাইম + প্রোবায়োটিক সিস্টেম',
        'বেটেইন + ইলেক্ট্রোলাইট = হিট স্ট্রেস সুরক্ষা',
      ]
    },
    en: {
      name: 'SUPER BROILER STARTER FEED',
      tagline: 'A Strong & Healthy Start for Profitable Broiler Farming.',
      phase: 'Starter Phase',
      duration: '1–14 Days',
      bagSize: '50 kg Bag',
      description: 'SUPER BROILER STARTER FEED is specifically designed for the most sensitive and important first 14 days of a broiler chick\'s life. Proper nutrition, strong immunity, and improved digestion during this time form the foundation for the entire future growth cycle.',
      highlights: [
        { icon: 'Zap', text: 'Fast & Even Start' },
        { icon: 'ShieldCheck', text: 'Low Mortality' },
        { icon: 'TrendingUp', text: 'Improved FCR' },
      ],
      characteristics: [
        { label: 'Color', value: 'Natural Light Yellow-Brown' },
        { label: 'Smell', value: 'Fresh, Clean & Light Molasses Note' },
        { label: 'Palatability', value: 'Excellent' },
        { label: 'Dust Level', value: 'Low, Crisp' },
      ],
      performance: [
        { label: 'Weight at 1–14 Days', value: '420 – 480 grams' },
        { label: 'Expected FCR', value: '1.20 – 1.30' },
        { label: 'Health', value: 'Strong Gut Health' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~22.5 – 23.0%' },
        { label: 'Crude Fat', value: '~6.5 – 7.0%' },
        { label: 'Metabolizable Energy', value: 'High & Balanced' },
        { label: 'Calcium', value: '~0.90 – 1.00%' },
      ],
      advantages: [
        'SPC + Fish Meal + Full Fat Soy = Superior Protein Quality',
        'Advanced Amino Acid Balance',
        'Enzyme + Probiotic System',
        'Betaine + Electrolyte = Heat Stress Protection',
      ]
    }
  },
  {
    id: 'grower',
    category: 'poultry',
    color: 'from-green-400 to-emerald-600',
    price: 3782.50,
    bn: {
      name: 'SUPER BROILER GROWER FEED',
      tagline: 'দ্রুত বৃদ্ধি, শক্তিশালী ফ্রেম এবং উন্নত লাভ।',
      phase: 'গ্রোয়ার ফেজ',
      duration: '১৫–২৮ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'SUPER BROILER GROWER FEED ব্রয়লার মুরগির দ্রুত গ্রোথ ফেজ (১৫–২৮ দিন) লক্ষ্য করে উন্নত বৈজ্ঞানিক ফর্মুলেশনে তৈরি। এই পর্যায়ে মাংসের ফ্রেম ডেভেলপমেন্ট, বুকের প্রশস্ততা এবং পায়ের শক্তি নির্ধারিত হয়।',
      highlights: [
        { icon: 'Zap', text: 'দ্রুত গ্রোথ' },
        { icon: 'ShieldCheck', text: 'শক্ত ফ্রেম' },
        { icon: 'TrendingUp', text: 'বেশি লাভ' },
      ],
      characteristics: [
        { label: 'রং', value: 'প্রাকৃতিক হলুদ–বাদামি' },
        { label: 'ঘ্রাণ', value: 'ফ্রেশ, পরিষ্কার ও হালকা মোলাসেস' },
        { label: 'Texture', value: 'ঝরঝরে, কম ডাস্ট' },
        { label: 'Moisture', value: 'নিয়ন্ত্রিত (≤১১%)' },
      ],
      performance: [
        { label: '২৮ দিনে ওজন', value: '১.২৫ – ১.৪৫ কেজি' },
        { label: 'প্রত্যাশিত FCR', value: '১.৪৫ – ১.৫৫' },
        { label: 'মৃত্যু হার', value: '০.৮% – ১.২%' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~২০.৫ – ২১.০%' },
        { label: 'Crude Fat', value: '~৭.৫ – ৮.০%' },
        { label: 'Metabolizable Energy', value: '~৩১৫০ – ৩২০০ kcal/kg' },
        { label: 'Lysine', value: 'পেশী বৃদ্ধির জন্য ভারসাম্যপূর্ণ' },
      ],
      advantages: [
        'কর্ন গ্লুটেন + পোল্ট্রি মিল = উচ্চ মানের প্রোটিন মিশ্রণ',
        'উন্নত পেশী গঠন',
        'এনজাইম + প্রোবায়োটিক সিস্টেম',
        'ধারাবাহিক ব্যাচ পারফরম্যান্স',
      ]
    },
    en: {
      name: 'SUPER BROILER GROWER FEED',
      tagline: 'Faster Growth, Strong Frame & Better Profit.',
      phase: 'Grower Phase',
      duration: '15–28 Days',
      bagSize: '50 kg Bag',
      description: 'SUPER BROILER GROWER FEED is formulated with advanced scientific formulation targeting the rapid growth phase (15–28 days) of broiler chickens. Frame development, breast width, and leg strength are determined at this stage.',
      highlights: [
        { icon: 'Zap', text: 'Rapid Growth' },
        { icon: 'ShieldCheck', text: 'Strong Frame' },
        { icon: 'TrendingUp', text: 'Better Profit' },
      ],
      characteristics: [
        { label: 'Color', value: 'Natural Yellow-Brown' },
        { label: 'Smell', value: 'Fresh, Clean & Light Molasses' },
        { label: 'Texture', value: 'Crisp, Low Dust' },
        { label: 'Moisture', value: 'Controlled (≤11%)' },
      ],
      performance: [
        { label: 'Weight at 28 Days', value: '1.25 – 1.45 kg' },
        { label: 'Expected FCR', value: '1.45 – 1.55' },
        { label: 'Mortality Rate', value: '0.8% – 1.2%' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~20.5 – 21.0%' },
        { label: 'Crude Fat', value: '~7.5 – 8.0%' },
        { label: 'Metabolizable Energy', value: '~3150 – 3200 kcal/kg' },
        { label: 'Lysine', value: 'Balanced for muscle accretion' },
      ],
      advantages: [
        'Corn Gluten + Poultry Meal = High Quality Protein Blend',
        'Better Muscle Deposition',
        'Enzyme + Probiotic System',
        'Consistent Batch Performance',
      ]
    }
  },
  {
    id: 'finisher',
    category: 'poultry',
    color: 'from-blue-400 to-indigo-600',
    price: 3770.50,
    bn: {
      name: 'SUPER BROILER FINISHER FEED',
      tagline: 'নিখুঁত ফিনিশ, উন্নত ওজন, উচ্চতর লাভ।',
      phase: 'ফিনিশার ফেজ',
      duration: '২৯–৩৮ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'SUPER BROILER FINISHER FEED ব্রয়লার উৎপাদনের শেষ ও সবচেয়ে গুরুত্বপূর্ণ পর্যায়ের জন্য বিশেষভাবে ডিজাইন করা। এই ধাপে চূড়ান্ত ওজন এবং বাজারযোগ্য ফিনিশ নিশ্চিত করাই প্রধান লক্ষ্য।',
      highlights: [
        { icon: 'Zap', text: 'নিখুঁত ফিনিশ' },
        { icon: 'ShieldCheck', text: 'লিভার সুরক্ষা' },
        { icon: 'TrendingUp', text: 'সর্বোচ্চ ওজন' },
      ],
      characteristics: [
        { label: 'রং', value: 'উজ্জ্বল হলুদ–সোনালি' },
        { label: 'ঘ্রাণ', value: 'পরিষ্কার, হালকা মোলাসেস ও তেল' },
        { label: 'Texture', value: 'স্মুথ, কম ডাস্ট' },
        { label: 'Moisture', value: '≤১১% (স্টোরেজ–সেইফ)' },
      ],
      performance: [
        { label: '৩৫ দিনে ওজন', value: '২.১০ – ২.৩০ কেজি' },
        { label: '৩৮ দিনে ওজন', value: '২.৪০ – ২.৬৫ কেজি' },
        { label: 'প্রত্যাশিত FCR', value: '১.৬০ – ১.৭০' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~১৮.৫ – ১৯.০%' },
        { label: 'Crude Fat', value: '~৮.৫ – ৯.০%' },
        { label: 'Metabolizable Energy', value: '~৩২৫০ – ৩৩০০ kcal/kg' },
        { label: 'Lysine', value: 'পেশী এবং বুকের মাংসের জন্য সহায়ক' },
      ],
      advantages: [
        'উচ্চ এনার্জি ডেনসিটি → দ্রুত ফিনিশ',
        'লিভার টনিক + বেটেইন → হঠাৎ মৃত্যু হার হ্রাস',
        'সর্বোচ্চ পুষ্টি ব্যবহার',
        'বাজার-উপযোগী কমপ্যাক্ট বডি',
      ]
    },
    en: {
      name: 'SUPER BROILER FINISHER FEED',
      tagline: 'Perfect Finish, Better Weight, Higher Profit.',
      phase: 'Finisher Phase',
      duration: '29–38 Days',
      bagSize: '50 kg Bag',
      description: 'SUPER BROILER FINISHER FEED is specifically designed for the final and most important stage of broiler production. The main goal is to ensure final weight and marketable finish at this stage.',
      highlights: [
        { icon: 'Zap', text: 'Perfect Finish' },
        { icon: 'ShieldCheck', text: 'Liver Protection' },
        { icon: 'TrendingUp', text: 'Maximum Weight' },
      ],
      characteristics: [
        { label: 'Color', value: 'Bright Yellow-Golden' },
        { label: 'Smell', value: 'Clean, Light Molasses & Oil' },
        { label: 'Texture', value: 'Smooth, Low Dust' },
        { label: 'Moisture', value: '≤11% (Storage-Safe)' },
      ],
      performance: [
        { label: 'Weight at 35 Days', value: '2.10 – 2.30 kg' },
        { label: 'Weight at 38 Days', value: '2.40 – 2.65 kg' },
        { label: 'Expected FCR', value: '1.60 – 1.70' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~18.5 – 19.0%' },
        { label: 'Crude Fat', value: '~8.5 – 9.0%' },
        { label: 'Metabolizable Energy', value: '~3250 – 3300 kcal/kg' },
        { label: 'Lysine', value: 'Muscle mass & breast yield support' },
      ],
      advantages: [
        'High Energy Density → Faster Finish',
        'Liver Tonic + Betaine → Lower Sudden Mortality',
        'Maximum Nutrient Utilization',
        'Market-Ready Compact Body',
      ]
    }
  },
  {
    id: 'sonali-starter',
    category: 'sonali',
    color: 'from-yellow-300 to-green-500',
    price: 3402.50,
    bn: {
      name: 'SONALI STARTER FEED',
      tagline: 'সোনালী মুরগির শক্তিশালী শুরুর জন্য আদর্শ পুষ্টি।',
      phase: 'স্টার্টার ফেজ',
      duration: '১–১৮ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'SONALI STARTER FEED সোনালী মুরগির প্রথম ১৮ দিনের জন্য বিশেষভাবে তৈরি। এই সময়কালে সঠিক পুষ্টি, শক্তিশালী ইমিউনিটি এবং উন্নত হজম ক্ষমতা নিশ্চিত করা হয়।',
      highlights: [
        { icon: 'Zap', text: 'দ্রুত বৃদ্ধি' },
        { icon: 'ShieldCheck', text: 'রোগ প্রতিরোধ ক্ষমতা' },
        { icon: 'TrendingUp', text: 'উন্নত FCR' },
      ],
      characteristics: [
        { label: 'রং', value: 'হালকা হলুদ-বাদামি' },
        { label: 'ঘ্রাণ', value: 'তাজা ও পরিষ্কার' },
        { label: 'পালাটেবিলিটি', value: 'অত্যন্ত ভালো' },
        { label: 'ডাস্ট লেভেল', value: 'কম' },
      ],
      performance: [
        { label: '১৮ দিনে ওজন', value: '৩৫০ – ৪০০ গ্রাম' },
        { label: 'প্রত্যাশিত FCR', value: '১.৩০ – ১.৪০' },
        { label: 'স্বাস্থ্য', value: 'শক্তিশালী গাট হেলথ' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~২১.০ – ২২.০%' },
        { label: 'Crude Fat', value: '~৬.০ – ৬.৫%' },
        { label: 'Metabolizable Energy', value: 'Balanced' },
        { label: 'Calcium', value: '~০.৯০ – ১.০০%' },
      ],
      advantages: [
        'উচ্চমানের প্রোটিন উৎস',
        'উন্নত অ্যামিনো এসিড ব্যালেন্স',
        'এনজাইম + প্রোবায়োটিক সিস্টেম',
        'হিট স্ট্রেস সুরক্ষা',
      ]
    },
    en: {
      name: 'SONALI STARTER FEED',
      tagline: 'Ideal nutrition for a strong start for Sonali chickens.',
      phase: 'Starter Phase',
      duration: '1–18 Days',
      bagSize: '50 kg Bag',
      description: 'SONALI STARTER FEED is specially formulated for the first 18 days of Sonali chickens. Proper nutrition, strong immunity, and improved digestion are ensured during this period.',
      highlights: [
        { icon: 'Zap', text: 'Fast Growth' },
        { icon: 'ShieldCheck', text: 'Disease Resistance' },
        { icon: 'TrendingUp', text: 'Improved FCR' },
      ],
      characteristics: [
        { label: 'Color', value: 'Light Yellow-Brown' },
        { label: 'Smell', value: 'Fresh & Clean' },
        { label: 'Palatability', value: 'Excellent' },
        { label: 'Dust Level', value: 'Low' },
      ],
      performance: [
        { label: 'Weight at 18 Days', value: '350 – 400 grams' },
        { label: 'Expected FCR', value: '1.30 – 1.40' },
        { label: 'Health', value: 'Strong Gut Health' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~21.0 – 22.0%' },
        { label: 'Crude Fat', value: '~6.0 – 6.5%' },
        { label: 'Metabolizable Energy', value: 'Balanced' },
        { label: 'Calcium', value: '~0.90 – 1.00%' },
      ],
      advantages: [
        'High Quality Protein Sources',
        'Advanced Amino Acid Balance',
        'Enzyme + Probiotic System',
        'Heat Stress Protection',
      ]
    }
  },
  {
    id: 'sonali-grower',
    category: 'sonali',
    color: 'from-lime-400 to-green-600',
    price: 3377.50,
    bn: {
      name: 'SONALI GROWER FEED',
      tagline: 'সোনালী মুরগির দ্রুত বৃদ্ধি ও উন্নত লাভের জন্য।',
      phase: 'গ্রোয়ার ফেজ',
      duration: '১৯–৪৫ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'SONALI GROWER FEED সোনালী মুরগির দ্রুত গ্রোথ ফেজ (১৯–৪৫ দিন) লক্ষ্য করে তৈরি। এই পর্যায়ে মাংসের ফ্রেম ডেভেলপমেন্ট এবং পায়ের শক্তি নির্ধারিত হয়।',
      highlights: [
        { icon: 'Zap', text: 'দ্রুত গ্রোথ' },
        { icon: 'ShieldCheck', text: 'শক্ত ফ্রেম' },
        { icon: 'TrendingUp', text: 'বেশি লাভ' },
      ],
      characteristics: [
        { label: 'রং', value: 'প্রাকৃতিক হলুদ-বাদামি' },
        { label: 'ঘ্রাণ', value: 'তাজা ও পরিষ্কার' },
        { label: 'Texture', value: 'ঝরঝরে, কম ডাস্ট' },
        { label: 'Moisture', value: '≤১১%' },
      ],
      performance: [
        { label: '৪৫ দিনে ওজন', value: '১.৫০ – ১.৮০ কেজি' },
        { label: 'প্রত্যাশিত FCR', value: '২.২০ – ২.৫০' },
        { label: 'মৃত্যু হার', value: '১.০% – ২.০%' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~১৯.০ – ২০.০%' },
        { label: 'Crude Fat', value: '~৭.০ – ৭.৫%' },
        { label: 'Metabolizable Energy', value: '~২৯০০ – ৩০০০ kcal/kg' },
        { label: 'Lysine', value: 'পেশী বৃদ্ধির জন্য' },
      ],
      advantages: [
        'উন্নত পেশী গঠন',
        'এনজাইম + প্রোবায়োটিক সিস্টেম',
        'ধারাবাহিক পারফরম্যান্স',
        'কম মৃত্যু হার',
      ]
    },
    en: {
      name: 'SONALI GROWER FEED',
      tagline: 'For rapid growth and better profit of Sonali chickens.',
      phase: 'Grower Phase',
      duration: '19–45 Days',
      bagSize: '50 kg Bag',
      description: 'SONALI GROWER FEED is formulated targeting the rapid growth phase (19–45 days) of Sonali chickens. Frame development and leg strength are determined at this stage.',
      highlights: [
        { icon: 'Zap', text: 'Rapid Growth' },
        { icon: 'ShieldCheck', text: 'Strong Frame' },
        { icon: 'TrendingUp', text: 'Better Profit' },
      ],
      characteristics: [
        { label: 'Color', value: 'Natural Yellow-Brown' },
        { label: 'Smell', value: 'Fresh & Clean' },
        { label: 'Texture', value: 'Crisp, Low Dust' },
        { label: 'Moisture', value: '≤11%' },
      ],
      performance: [
        { label: 'Weight at 45 Days', value: '1.50 – 1.80 kg' },
        { label: 'Expected FCR', value: '2.20 – 2.50' },
        { label: 'Mortality Rate', value: '1.0% – 2.0%' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~19.0 – 20.0%' },
        { label: 'Crude Fat', value: '~7.0 – 7.5%' },
        { label: 'Metabolizable Energy', value: '~2900 – 3000 kcal/kg' },
        { label: 'Lysine', value: 'For muscle accretion' },
      ],
      advantages: [
        'Better Muscle Deposition',
        'Enzyme + Probiotic System',
        'Consistent Performance',
        'Low Mortality Rate',
      ]
    }
  },
  {
    id: 'sweet-bran',
    category: 'cattle',
    color: 'from-orange-400 to-red-600',
    price: null,
    bn: {
      name: 'PREMIUM SWEET BRAN',
      tagline: '“PREMIUM SWEET BRAN – More Intake, More Milk, More Profit.”',
      phase: 'ক্যাটল ফিড',
      duration: 'দুধাল গাভী ও ষাঁড়',
      bagSize: '৩৬ কেজি ব্যাগ',
      description: 'PREMIUM SWEET BRAN হলো উন্নতমানের গবাদি পশুর জন্য বিশেষভাবে তৈরি একটি হাই–অ্যারোমা, হাই–ইনটেক ও মাল্টি–পারপাস ক্যাটল ফিড। এই ফিডটি দুধাল গাভী, গরু ও ষাঁড়ের দুধ উৎপাদন বৃদ্ধি, শরীর ভরাট, হজম শক্তিশালীকরণ ও সামগ্রিক স্বাস্থ্য উন্নয়নের লক্ষ্যে বৈজ্ঞানিকভাবে ফর্মুলেটেড।',
      highlights: [
        { icon: 'Zap', text: 'হাই অ্যারোমা' },
        { icon: 'ShieldCheck', text: 'দুধ ও বডি বুস্টার' },
        { icon: 'TrendingUp', text: 'বেশি লাভ' },
      ],
      characteristics: [
        { label: 'রং', value: 'প্রাকৃতিক লালচে–বাদামি' },
        { label: 'ঘ্রাণ', value: 'মিষ্টি, চিটাগুড়–ভিত্তিক, হালকা ভ্যানিলা' },
        { label: 'পালাটেবিলিটি', value: 'অত্যন্ত উচ্চ' },
        { label: 'Texture', value: 'ঝরঝরে, কম ধুলা' },
      ],
      performance: [
        { label: 'দুধ বৃদ্ধি', value: '১.০ – ২.৫ লিটার/দিন*' },
        { label: 'শরীর গঠন', value: 'শরীর ভরাট ও পেশি শক্ত' },
        { label: 'হজম', value: 'রুমেন ফাংশন শক্তিশালী' },
      ],
      nutritional: [
        { label: 'Metabolizable Energy', value: '~২২০০ – ২৩০০ kcal/kg' },
        { label: 'Crude Protein', value: '~১৪.০ – ১৫.০%' },
        { label: 'Crude Fat', value: '~৬.০ – ৬.৫%' },
        { label: 'Crude Fiber', value: '~১০ – ১২%' },
      ],
      advantages: [
        'Fenugreek (মেথি) → প্রাকৃতিক অ্যাপেটাইট স্টিমুলেটর',
        'Essential Oil → হজম ও গ্যাস কন্ট্রোল',
        'Live Yeast + Probiotic → রুমেন pH ব্যালান্স',
        'Molasses + Sweet Flavour → Feed Intake বৃদ্ধি',
      ]
    },
    en: {
      name: 'PREMIUM SWEET BRAN',
      tagline: '“PREMIUM SWEET BRAN – More Intake, More Milk, More Profit.”',
      phase: 'Cattle Feed',
      duration: 'Milking Cows & Bulls',
      bagSize: '36 kg Bag',
      description: 'PREMIUM SWEET BRAN is a high-aroma, high-intake, and multi-purpose cattle feed specially formulated for high-quality livestock. This feed is scientifically formulated to increase milk production, fill the body, strengthen digestion, and improve overall health of milking cows, cattle, and bulls.',
      highlights: [
        { icon: 'Zap', text: 'High Aroma' },
        { icon: 'ShieldCheck', text: 'Milk & Body Booster' },
        { icon: 'TrendingUp', text: 'More Profit' },
      ],
      characteristics: [
        { label: 'Color', value: 'Natural Reddish-Brown' },
        { label: 'Smell', value: 'Sweet, Molasses-based, Light Vanilla' },
        { label: 'Palatability', value: 'Extremely High' },
        { label: 'Texture', value: 'Crisp, Low Dust' },
      ],
      performance: [
        { label: 'Milk Increase', value: '1.0 – 2.5 Liters/Day*' },
        { label: 'Body Condition', value: 'Body filling & firm muscles' },
        { label: 'Digestion', value: 'Strong Rumen Function' },
      ],
      nutritional: [
        { label: 'Metabolizable Energy', value: '~2200 – 2300 kcal/kg' },
        { label: 'Crude Protein', value: '~14.0 – 15.0%' },
        { label: 'Crude Fat', value: '~6.0 – 6.5%' },
        { label: 'Crude Fiber', value: '~10 – 12%' },
      ],
      advantages: [
        'Fenugreek → Natural Appetite Stimulator',
        'Essential Oil → Digestion & Gas Control',
        'Live Yeast + Probiotic → Rumen pH Balance',
        'Molasses + Sweet Flavour → Higher Feed Intake',
      ]
    }
  },
  {
    id: 'layer-1',
    category: 'poultry',
    color: 'from-amber-500 to-rose-600',
    price: 3017.50,
    bn: {
      name: 'SUPER LAYER-1 FEED',
      tagline: 'লেয়ার মুরগির সর্বোচ্চ ডিম উৎপাদন ও খোসার সুস্থতার জন্য আদর্শ পুষ্টি।',
      phase: 'লেয়ার ফেজ ১',
      duration: 'ডিম পাড়ার শুরু থেকে',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'SUPER LAYER-1 FEED বিশেষভাবে বাণিজ্যিক লেয়ার মুরগির ডিম পাড়ার প্রথম পর্যায়ের জন্য বৈজ্ঞানিকভাবে তৈরি। সঠিক প্রোটিন, পর্যাপ্ত ক্যালসিয়াম ও ফসফরাসের নিখুঁত অনুপাত দীর্ঘস্থায়ী ডিমের উৎপাদন হার এবং মজবুত, মসৃণ ডিমের খোসা নিশ্চিত করে।',
      highlights: [
        { icon: 'Zap', text: 'সর্বোচ্চ ডিম উৎপাদন' },
        { icon: 'ShieldCheck', text: 'মজবুত খোসা' },
        { icon: 'TrendingUp', text: 'উন্নত FCR' },
      ],
      characteristics: [
        { label: 'রং', value: 'প্রাকৃতিক হালকা সোনালী-হলুদ' },
        { label: 'ফর্ম', value: 'ম্যাশ / ক্রাম্বল' },
        { label: 'ঘ্রাণ', value: 'তাজা ও পরিষ্কার' },
        { label: 'Moisture', value: '≤১১% (নিয়ন্ত্রিত)' },
      ],
      performance: [
        { label: 'ডিম উৎপাদন হার', value: 'পিক প্রোডাকশন ৯০%+' },
        { label: 'ডিমের সাইজ', value: 'আদর্শ ও সুষম ওজন' },
        { label: 'খোসার শক্তি', value: 'শক্ত ও টেকসই' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~১৭.৫ – ১৮.০%' },
        { label: 'Crude Fat', value: '~৩.৫ – ৪.০%' },
        { label: 'Calcium', value: '~৩.৬০ – ৩.৮০%' },
        { label: 'Available Phosphorus', value: '~০.৪৫ – ০.৫০%' },
      ],
      advantages: [
        'উচ্চমানের ক্যালসিয়াম ও ফসফরাস ব্যালেন্স',
        'উন্নত ডিমের কুসুম ও খোসার গুণমান',
        'এনজাইম + প্রি-বায়োটিক গাট প্রোটেকশন',
        'দীর্ঘমেয়াদী ডিম উৎপাদন স্থায়িত্ব',
      ]
    },
    en: {
      name: 'SUPER LAYER-1 FEED',
      tagline: 'Ideal nutrition for peak egg production and optimal shell quality.',
      phase: 'Layer Phase 1',
      duration: 'Onset of laying',
      bagSize: '50 kg Bag',
      description: 'SUPER LAYER-1 FEED is scientifically formulated for the initial laying phase of commercial layer chickens. Balanced protein, optimal calcium, and available phosphorus ensure high laying persistence and superior eggshell strength.',
      highlights: [
        { icon: 'Zap', text: 'Peak Egg Production' },
        { icon: 'ShieldCheck', text: 'Strong Shell Quality' },
        { icon: 'TrendingUp', text: 'Better FCR' },
      ],
      characteristics: [
        { label: 'Color', value: 'Natural Golden-Yellow' },
        { label: 'Form', value: 'Mash / Crumble' },
        { label: 'Smell', value: 'Fresh & Clean' },
        { label: 'Moisture', value: '≤11% (Controlled)' },
      ],
      performance: [
        { label: 'Egg Laying Rate', value: 'Peak Production 90%+' },
        { label: 'Egg Size', value: 'Uniform & Standard Weight' },
        { label: 'Shell Strength', value: 'Strong & Crack-Resistant' },
      ],
      nutritional: [
        { label: 'Crude Protein', value: '~17.5 – 18.0%' },
        { label: 'Crude Fat', value: '~3.5 – 4.0%' },
        { label: 'Calcium', value: '~3.60 – 3.80%' },
        { label: 'Available Phosphorus', value: '~0.45 – 0.50%' },
      ],
      advantages: [
        'Optimized Calcium & Phosphorus ratio',
        'Better Yolk & Shell Quality',
        'Enzyme + Prebiotic Gut Protection',
        'Sustained Peak Laying Period',
      ]
    }
  }
,
{id:"layer-starter",category:"poultry",color:"from-indigo-400 to-blue-600",price:3550.0,comingSoon:!0,bn:{name:"লেয়ার স্টার্টার ইউনিফাইল্ড ক্লাসি ফিড",tagline:"ভবিষ্যতের সফল ডিম উৎপাদনের মজবুত ভিত্তি।",phase:"স্টার্টার ফেজ",duration:"১-৮ সপ্তাহ",bagSize:"৫০ কেজি ব্যাগ",description:"লেয়ার মুরগির বাচ্চার জন্য সুষম পুষ্টি। ভবিষ্যতে সর্বোচ্চ ডিম উৎপাদনের জন্য প্রথম পর্যায় থেকেই হাড় ও শরীরের সঠিক গঠন নিশ্চিত করে।",highlights:[{icon:"Zap",text:"মজবুত হাড় গঠন"},{icon:"ShieldCheck",text:"সুস্থ ও সতেজ বাচ্চা"},{icon:"TrendingUp",text:"সমান বৃদ্ধি"}],characteristics:[{label:"ধরন",value:"লেয়ার স্টার্টার"},{label:"ব্যবহার",value:"লেয়ার বাচ্চার জন্য"}],performance:[{label:"গ্রোথ",value:"সমান মাপের ফ্লক"},{label:"মৃত্যুর হার",value:"সর্বনিম্ন"}],nutritional:[{label:"ক্যালসিয়াম",value:"হাড় মজবুত করার জন্য নির্দিষ্ট মাত্রায়"},{label:"প্রোটিন",value:"সুষম মাত্রায়"}],advantages:["ভবিষ্যতে লম্বা সময় ডিম দেওয়ার সক্ষমতা তৈরি করে","ফ্লকের সমান বৃদ্ধি নিশ্চিত করে"]},en:{name:"Layer Starter UNIFYLD CLASSY Feed",tagline:"The strong foundation for successful future egg production.",phase:"Starter Phase",duration:"1-8 Weeks",bagSize:"50 kg Bag",description:"Balanced nutrition for layer chicks. Ensures proper bone and body structure from the first stage for maximum future egg production.",highlights:[{icon:"Zap",text:"Strong Bone Structure"},{icon:"ShieldCheck",text:"Healthy & Fresh Chicks"},{icon:"TrendingUp",text:"Even Growth"}],characteristics:[{label:"Type",value:"Layer Starter"},{label:"Usage",value:"For Layer Chicks"}],performance:[{label:"Growth",value:"Even Flock Size"},{label:"Mortality Rate",value:"Minimal"}],nutritional:[{label:"Calcium",value:"Specific levels for strong bones"},{label:"Protein",value:"Balanced levels"}],advantages:["Builds capacity for long-term egg production in future","Ensures even growth across the flock"]}},
{id:"layer-mash",category:"poultry",color:"from-pink-500 to-rose-700",price:3450.0,comingSoon:!0,bn:{name:"লেয়ার - ১ ম্যাশ",tagline:"ডিম উৎপাদনের সেরা খাদ্য, পুষ্টি ও সফলতায় ভরপুর।",phase:"ম্যাশ ফেজ",duration:"ডিম পাড়ার সময়",bagSize:"৫০ কেজি ব্যাগ",description:"লেয়ার মুরগির সর্বোচ্চ ডিম উৎপাদনের জন্য ডিজাইন করা বিশেষ ম্যাশ ফিড। এটি ডিমের গুণগত মান, খোসার পুরুত্ব এবং পুষ্টি নিশ্চিত করে।",highlights:[{icon:"Zap",text:"সর্বোচ্চ ডিম উৎপাদন"},{icon:"ShieldCheck",text:"সুস্থ মুরগি"},{icon:"TrendingUp",text:"দীর্ঘস্থায়ী প্রোডাকশন"}],characteristics:[{label:"ধরন",value:"লেয়ার ম্যাশ"},{label:"রং",value:"সোনালী-বাদামী"}],performance:[{label:"প্রোডাকশন পীক",value:"দীর্ঘস্থায়ী"},{label:"ডিমের গুণগত মান",value:"উচ্চমানের খোসা ও কুসুম"}],nutritional:[{label:"ক্যালসিয়াম",value:"সর্বোচ্চ ডিমের খোসার জন্য"},{label:"প্রোটিন ও শক্তি",value:"উচ্চ উৎপাদনের জন্য সামঞ্জস্যপূর্ণ"}],advantages:["দীর্ঘসময় ডিম দেয়","ডিমের মান প্রিমিয়াম হয়"]},en:{name:"LAYER - 1 MASH",tagline:"Best feed for egg production, packed with nutrition.",phase:"Mash Phase",duration:"Laying Period",bagSize:"50 kg Bag",description:"Specially designed mash feed for maximum egg production in layer hens. Ensures egg quality, shell thickness, and complete nutrition.",highlights:[{icon:"Zap",text:"Maximum Egg Production"},{icon:"ShieldCheck",text:"Healthy Hens"},{icon:"TrendingUp",text:"Long-lasting Production"}],characteristics:[{label:"Type",value:"Layer Mash"},{label:"Color",value:"Golden-Brown"}],performance:[{label:"Production Peak",value:"Long-lasting"},{label:"Egg Quality",value:"High quality shell & yolk"}],nutritional:[{label:"Calcium",value:"For premium shell quality"},{label:"Protein & Energy",value:"Balanced for high yield"}],advantages:["Ensures long laying period","Produces premium quality eggs"]}},
{id:"dairy-milk-master",image:"/products/dairy-milk-master-feed.png",category:"cattle",color:"from-emerald-500 to-teal-700",price:3200.0,comingSoon:!0,bn:{name:"ডেইরি মিল্ক মাস্টার",tagline:"দুধ উৎপাদন বৃদ্ধিতে এবং ডেইরি ফার্মের সফলতায় নির্ভরযোগ্য খাদ্য।",phase:"মাস্টার ফেজ",duration:"দুধ সংগ্রহের সময়",bagSize:"২৫ কেজি ব্যাগ",description:"দুধাল গাভী বা মহিষের সুষম পুষ্টি নিশ্চিত করতে আমরা নিয়ে এসেছি ডেইরি মিল্ক মাস্টার। এটি ভিটামিন ও মিনারেলের একটি সমৃদ্ধ উৎস যা দুধের উৎপাদন ও ঘনত্ব বাড়াতে সাহায্য করে।",highlights:[{icon:"Zap",text:"অতিরিক্ত দুধ উৎপাদন"},{icon:"ShieldCheck",text:"উন্নত রোগ প্রতিরোধ ক্ষমতা"},{icon:"Eye",text:"দুধের উচ্চ পুষ্টিমান"}],characteristics:[{label:"ধরন",value:"পেলট/ম্যাশ"},{label:"উপাদান",value:"ভিটামিন ও খনিজ"}],performance:[{label:"দুগ্ধ ফলন",value:"৫-১০% বৃদ্ধি"},{label:"ল্যাকটেশন পিরিয়ড",value:"দীর্ঘস্থায়ী"}],nutritional:[{label:"ক্যালসিয়াম",value:"হাড় ও দুধের মান বৃদ্ধিতে"},{label:"প্রোটিন",value:"শরীরের ক্ষয় পূরণে"}],advantages:["দুধের ঘনত্বের মান উন্নত করা","গাভীকে সুস্থ ও সবল রাখা"]},en:{name:"DAIRY MILK MASTER",tagline:"Reliable feed for increased milk production and dairy success.",phase:"Master Phase",duration:"Lactation Period",bagSize:"25 kg Bag",description:"Ensuring balanced nutrition for milch cows or buffaloes, we bring Dairy Milk Master. This is a rich source of vitamins and minerals to enhance milk yield and consistency.",highlights:[{icon:"Zap",text:"Extra Milk Production"},{icon:"ShieldCheck",text:"Proven Immunity"},{icon:"Eye",text:"High Milk Quality"}],characteristics:[{label:"Type",value:"Pellet/Mash"},{label:"Source",value:"Vitamin & Minaral Rich"}],performance:[{label:"Milk Yield",value:"5-10% increase"},{label:"Lactation",value:"Extended period"}],nutritional:[{label:"Calcium",value:"Stronger bones & yield"},{label:"Protein",value:"Balanced maintenance"}],advantages:["Improves milk solids (SNF)","Keeps cattle fit and active"]}},
{id:"beef-master",image:"/products/beef-master-feed.png",category:"cattle",color:"from-blue-600 to-indigo-900",price:3100.0,comingSoon:!0,bn:{name:"বিফ মাস্টার",tagline:"পশু মোটাতাজাকরণ ও উন্নত জাতের ষাঁড়ের দ্রুত বৃদ্ধির বিশেষ খাদ্য।",phase:"মাস্টার ফেজ",duration:"বৃদ্ধির সময়",bagSize:"২৫ কেজি ব্যাগ",description:"কুরবানীর পশু বা মাংসের খামারের জন্য বিফ মাস্টার একটি আদর্শ পছন্দ। এটি বৈজ্ঞানিক ভাবে মাংসের মান এবং হাড়ের গঠন দ্রুত বাড়াতে সাহায্য করে।",highlights:[{icon:"Zap",text:"দ্রুত মাংস বৃদ্ধি"},{icon:"ShieldCheck",text:"উচ্চমানের চর্বিমুক্ত হাড়"},{icon:"TrendingUp",text:"সর্বোচ্চ কনভার্সন রেট"}],characteristics:[{label:"ফেজ",value:"ফিনিশার ফেজ"},{label:"ধরন",value:"পেলট"}],performance:[{label:"ওজন বৃদ্ধি",value:"দ্রুত ও সুষম"},{label:"হضم শক্তি",value:"অত্যন্ত উন্নত"}],nutritional:[{label:"শক্তি (Energy)",value:"সবল দেহের জন্য"},{label:"মিনারেল",value:"সুগঠিত বডির জন্য"}],advantages:["পশুকে দ্রুত মোটাতাজা করা","মাংসের মান প্রিমিয়াম করা"]},en:{name:"BEEF MASTER",tagline:"Premium feed for rapid growth and weight gain in bulls.",phase:"Master Phase",duration:"Growth Period",bagSize:"25 kg Bag",description:"Ideal choice for fattening bulls or meat production farms. Beef Master scientifically improves meat weight and bone structure rapidly.",highlights:[{icon:"Zap",text:"Fast Meat Growth"},{icon:"ShieldCheck",text:"Premium Bone Quality"},{icon:"TrendingUp",text:"High Conversion Rate"}],characteristics:[{label:"Phase",value:"Finisher Phase"},{label:"Type",value:"Pellet"}],performance:[{label:"Weight Gain",value:"Fast & Natural"},{label:"Digestion",value:"High absorption"}],nutritional:[{label:"Energy",value:"For bulk and strength"},{label:"Minerals",value:"Robust body design"}],advantages:["Rapid fattening naturally","Premium meat grade"]}},
{id:"premium-tea",category:"food",color:"from-emerald-500 to-green-700",price:450.0,comingSoon:!0,bn:{name:"ইউনিফাইল্ড প্রিমিয়াম ব্লেন্ড চা",tagline:"সতেজতার এক নতুন অনুভূতি – আভিজাত্যে ঘেরা মায়াবী স্বাদ, প্রতিটি চুমুকেই সতেজতা।",phase:"ইউনিফাইল্ড প্রিমিয়াম চা",duration:"ফুড ও বিভারেজ",bagSize:"৫০০ গ্রাম",description:'বাগান থেকে সরাসরি আপনার কাপে – শুদ্ধ চায়ের আভিজাত্য। সিলেটের নির্বাচিত চা বাগান থেকে সংগৃহীত কচি "দুটি পাতা একটি কুঁড়ি" ব্যবহার করা হয়। আমাদের ব্লেন্ডিং প্রক্রিয়ায় শুধুমাত্র উচ্চমানের চা পাতা ব্যবহৃত হয়—কোনো ডাস্ট বা নিম্নমানের মিশ্রণ নয়। প্যাকেট খোলার সঙ্গে সঙ্গে অনুভূত হয় সতেজ চা বাগানের প্রাকৃতিক সুবাস। বিশেষ ব্লেন্ডিং পদ্ধতির কারণে চায়ের নিজস্ব ঘ্রাণ দীর্ঘসময় অটুট থাকে। চায়ের প্রাকৃতিক অ্যান্টি-অক্সিডেন্ট শরীরের স্বাভাবিক কর্মক্ষমতা বজায় রাখতে সহায়ক এবং প্রতিদিনের কর্মব্যস্ততায় নিজেকে সতেজ অনুভব করতে সাহায্য করে।',highlights:[{icon:"Zap",text:"কড়া লিকার ও উজ্জ্বল গোল্ডেন-রেড রঙ"},{icon:"ShieldCheck",text:"শতভাগ শুদ্ধতার নিশ্চয়তা — কোনো কৃত্রিম রঙ নেই"},{icon:"TrendingUp",text:"অতুলনীয় প্রাকৃতিক ঘ্রাণ — দীর্ঘসময় অটুট"}],characteristics:[{label:"ব্লেন্ড টাইপ",value:"প্রিমিয়াম ব্লেন্ড (High Quality CTC)"},{label:"স্বাদ",value:"কড়া ও সতেজ (Strong & Fresh)"},{label:"ঘ্রাণ",value:"প্রাকৃতিক সুগন্ধযুক্ত (Natural Aroma)"},{label:"রঙ",value:"উজ্জ্বল গোল্ডেন রেড"},{label:"নেট ওজন",value:"৫০০ গ্রাম"},{label:"প্রস্তুতকারক",value:"MI UNIFYLD AGRO LTD"}],performance:[{label:"উৎস",value:"সিলেটের নির্বাচিত প্রিমিয়াম চা বাগান"},{label:"লিকার",value:"উজ্জ্বল গোল্ডেন-রেড, কড়া ও গভীর"},{label:"মান",value:"প্রিমিয়াম গ্রেড CTC — বিশেষজ্ঞ পরীক্ষিত"}],nutritional:[{label:"অ্যান্টি-অক্সিডেন্ট",value:"প্রাকৃতিকভাবে উচ্চমাত্রায় বিদ্যমান"},{label:"ক্যাফেইন",value:"সুষম ও প্রাকৃতিক মাত্রা"},{label:"ফ্লেভোনয়েড",value:"প্রাকৃতিক উপাদান সমৃদ্ধ"},{label:"বিশুদ্ধতা",value:"১০০% প্রাকৃতিক — কোনো কেমিক্যাল নেই"}],advantages:['নির্বাচিত চা বাগানের পাতা: সিলেটের সেরা বাগান থেকে "দুটি পাতা একটি কুঁড়ি" সংগ্রহ',"অতুলনীয় প্রাকৃতিক ঘ্রাণ: বিশেষ ব্লেন্ডিং পদ্ধতি — ঘ্রাণ দীর্ঘসময় অটুট থাকে","বিশেষজ্ঞ ব্লেন্ডারদের তত্ত্বাবধানে তৈরি — প্রতিটি ব্যাচ কঠোরভাবে পরীক্ষিত","ব্রিউয়িং গাইড: পরিষ্কার পানি ফুটিয়ে ১ চামচ চা দিন, ৩–৫ মিনিট ঢেকে রাখুন","সংরক্ষণ: এয়ারটাইট পাত্রে, আলো-তাপ ও তীব্র ঘ্রাণ থেকে দূরে, শুকনো চামচ ব্যবহার করুন",'কাস্টমার রিভিউ: "এত সুন্দর লিকার আর ঘ্রাণ সচরাচর দেখা যায় না।" — একজন সন্তুষ্ট গ্রাহক',"সতর্কতা: সিল ছেঁড়া বা প্যাকেট ক্ষতিগ্রস্ত হলে পণ্যটি গ্রহণ করবেন না"]},en:{name:"UNIFYLD Premium Blend Tea",tagline:'"Enchanting taste wrapped in elegance – freshness in every sip."',phase:"Premium Tea",duration:"Food & Beverage",bagSize:"500g Bag",description:`From garden to your cup – the elegance of pure tea. We collect the finest "two leaves and a bud" from Sylhet tea gardens. Only high-quality tea leaves are used in our blending process — no dust or inferior mixtures. Opening the packet fills you with the natural fragrance of a fresh tea garden. Our special blending method keeps the tea's natural aroma intact for a long time. Tea antioxidants boost the body's immunity and improve metabolism.`,highlights:[{icon:"Zap",text:"Strong Liquor & Bright Color"},{icon:"ShieldCheck",text:"100% Purity Guarantee"},{icon:"TrendingUp",text:"Unmatched Natural Aroma"}],characteristics:[{label:"Blend Type",value:"Premium Blend (High Quality CTC)"},{label:"Taste",value:"Strong & Fresh"},{label:"Aroma",value:"Natural Fragrance"},{label:"Color",value:"Bright Golden Red"},{label:"Net Weight",value:"500 grams"},{label:"Manufacturer",value:"MI UNIFYLD AGRO LTD"}],performance:[{label:"Source",value:"Premium Sylhet Tea Gardens"},{label:"Liquor",value:"Golden-Red, Strong & Deep"},{label:"Grade",value:"Premium CTC Grade"}],nutritional:[{label:"Antioxidants",value:"Highly Present"},{label:"Caffeine",value:"Balanced & Natural Level"},{label:"Flavonoids",value:"Rich in Natural Compounds"},{label:"Purity",value:"100% Natural, No Chemicals"}],advantages:['Finest "two leaves and a bud" from Sylhet premium gardens',"Expert blenders supervise — every batch tested for quality","Modern hygienic packaging — no artificial coloring","Brewing guide: steep 3-5 mins covered → full aroma & liquor","Storage: airtight container, away from light & heat","Caution: Do not accept torn or open-sealed packets"]}},
{id:"premium-flour",category:"food",color:"from-amber-400 to-yellow-600",price:180.0,comingSoon:!0,bn:{name:"ইউনিফাইল্ড প্রিমিয়াম আটা",tagline:"পুষ্টিের পূর্ণতা, প্রতিদিনের স্বাস্থ্যকর নাস্তা — বিশুদ্ধ গমের শক্তি, সুস্থ পরিবারের তৃপ্তি।",phase:"ইউনিফাইল্ড প্রিমিয়াম আটা",duration:"ফুড ও বিভারেজ",bagSize:"১ কেজি / ২ কেজি / ৫ কেজি",description:"আন্তর্জাতিক মানসম্পন্ন উৎস থেকে সংগৃহীত উচ্চমানের সোনালী গম ব্যবহার করা হয়। প্রতিটি দানা যত্নসহকারে বাছাই করা, সম্পূর্ণ ভেজালমুক্ত এবং প্রাকৃতিক পুষ্টিগুণে সমৃদ্ধ। অত্যাধুনিক ইউরোপীয় প্রযুক্তির সম্পূর্ণ স্বয়ংক্রিয় মেশিনে গম প্রক্রিয়াজাত করা হয়, যাতে গমের প্রাকৃতিক ফাইবার, ভিটামিন ও স্বাদ অক্ষুণ্ণ থাকে। উৎপাদন থেকে প্যাকেটজাতকরণ পর্যন্ত প্রতিটি ধাপ সম্পূর্ণ অটোমেটিক — কোনো পর্যায়েই মানুষের হাতের স্পর্শ লাগে না, ফলে পণ্য থাকে নিরাপদ ও স্বাস্থ্যসম্মত। UNIFYLD প্রিমিয়াম আটা দিয়ে তৈরি রুটি বা পরোটা দীর্ঘসময় নরম, ফুলকো ও আকর্ষণীয় সাদা থাকে।",highlights:[{icon:"Zap",text:"বাছাইকৃত প্রিমিয়াম সোনালী গম — আন্তর্জাতিক মানসম্পন্ন"},{icon:"ShieldCheck",text:"শতভাগ হাইজেনিক অটোমেটিক প্যাকেজিং — কোনো কেমিক্যাল নেই"},{icon:"TrendingUp",text:"প্রাকৃতিক ফাইবার সমৃদ্ধ — দীর্ঘক্ষণ নরম ও ফুলকো রুটি"}],characteristics:[{label:"পণ্যের ধরন",value:"প্রিমিয়াম গ্রেড আটা (Premium Grade Atta)"},{label:"উপাদান",value:"১০০% বাছাইকৃত প্রাকৃতিক গম"},{label:"প্রক্রিয়া",value:"সম্পূর্ণ স্বয়ংক্রিয় ও ল্যাব পরীক্ষিত"},{label:"পুষ্টিগুণ",value:"প্রাকৃতিক ফাইবার, আয়রন ও মিনারেল সমৃদ্ধ"},{label:"রঙ ও টেক্সচার",value:"প্রাকৃতিক সাদা, মসৃণ ও সূক্ষ্ম"},{label:"ব্যবহার",value:"রুটি, পরোটা ও ঘরোয়া নাস্তার জন্য উপযোগী"},{label:"নেট ওজন",value:"১ কেজি / ২ কেজি / ৫ কেজি"},{label:"প্রস্তুতকারক",value:"MI UNIFYLD AGRO LTD"}],performance:[{label:"রুটির মান",value:"দীর্ঘসময় নরম, ফুলকো ও আকর্ষণীয় সাদা"},{label:"বিশুদ্ধতা",value:"১০০% ভেজালমুক্ত — কোনো ব্লিচিং নেই"},{label:"স্বাস্থ্য",value:"হজম সহায়ক, দীর্ঘক্ষণ পেট ভরা অনুভূতি"}],nutritional:[{label:"কার্বোহাইড্রেট",value:"সুষম ও প্রাকৃতিক"},{label:"প্রোটিন",value:"প্রাকৃতিক গমের প্রোটিন"},{label:"ডায়েটারি ফাইবার",value:"পর্যাপ্ত মাত্রায় — হজম প্রক্রিয়া সহায়ক"},{label:"আয়রন ও মিনারেল",value:"প্রাকৃতিকভাবে সমৃদ্ধ"}],advantages:["বাছাইকৃত প্রিমিয়াম গম: আন্তর্জাতিক মানসম্পন্ন উৎস থেকে সংগৃহীত সোনালী গম — সম্পূর্ণ ভেজালমুক্ত","আধুনিক মাল্টি-স্টেজ মিলিং: ইউরোপীয় প্রযুক্তিতে গমের ফাইবার, ভিটামিন ও স্বাদ অক্ষুণ্ণ","প্রাকৃতিক ফাইবার সমৃদ্ধ: স্বাস্থ্যকর হজম প্রক্রিয়া ও দীর্ঘক্ষণ পেট ভরা অনুভূতি","দীর্ঘক্ষণ নরম রুটি: ঠান্ডা হলেও সহজে শক্ত হয় না — ফুলকো ও সাদা থাকে","শতভাগ হাইজেনিক: উৎপাদন থেকে প্যাকেজিং — কোনো কৃত্রিম ব্লিচিং বা কেমিক্যাল নেই","সংরক্ষণ: শুকনো এয়ারটাইট পাত্রে রাখুন, আর্দ্রতা ও তীব্র ঘ্রাণ থেকে দূরে","সতর্কতা: মেয়াদোত্তীর্ণের তারিখ দেখে ক্রয় করুন, সিল ছেঁড়া থাকলে গ্রহণ করবেন না"]},en:{name:"UNIFYLD Premium Atta, Flour & Semolina",tagline:"The power of pure wheat, the satisfaction of a healthy family.",phase:"Premium Atta",duration:"Food & Beverage",bagSize:"Various Sizes",description:"Nutritional completeness for everyday healthy meals. We use golden wheat sourced directly from the world's finest sources — every grain full of nutrition and completely adulteration-free. Flour is prepared using state-of-the-art European technology machines while preserving the natural qualities and vitamins of wheat. From production to packaging, no human hand contact — 100% hygienic and safe. Bread or paratha made with UNIFYLD premium atta stays soft, fluffy and white for a long time.",highlights:[{icon:"Zap",text:"Selected Premium Wheat"},{icon:"ShieldCheck",text:"Fully Automatic Hygienic Packaging"},{icon:"TrendingUp",text:"High Fiber & Nutritional Value"}],characteristics:[{label:"Product Type",value:"Premium Grade Atta"},{label:"Ingredient",value:"100% Selected Natural Wheat"},{label:"Process",value:"Fully automated & lab-tested"},{label:"Nutrition",value:"Rich in Iron, Folic Acid & Vitamins"},{label:"Best For",value:"Healthy roti, paratha & homemade food"},{label:"Manufacturer",value:"MI UNIFYLD AGRO LTD"}],performance:[{label:"Bread Quality",value:"Stays soft, fluffy & white longer"},{label:"Purity",value:"100% Adulteration-Free"},{label:"Health",value:"Improves digestion, keeps full longer"}],nutritional:[{label:"Carbohydrates",value:"Balanced & Natural"},{label:"Protein",value:"Natural Wheat Protein"},{label:"Dietary Fiber",value:"High Level – Aids Digestion"},{label:"Iron & Folic Acid",value:"Naturally Enriched"}],advantages:["World's finest golden wheat → Maximum nutritional value guaranteed","European milling technology → Vitamins & fiber fully preserved","Fully automatic packaging → No artificial bleaching or chemicals","Storage: Keep in dry airtight container, away from moisture","Health: Supports diabetes management & reduces heart disease risk","Caution: Check expiry date, do not accept torn/open-sealed packets"]}}
];
