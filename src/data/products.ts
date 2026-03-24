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
  category: 'poultry' | 'cattle';
  color: string;
  en: ProductContent;
  bn: ProductContent;
}

export const products: Product[] = [
  {
    id: 'starter',
    category: 'poultry',
    color: 'from-yellow-400 to-orange-500',
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
    id: 'sweet-bran',
    category: 'cattle',
    color: 'from-orange-400 to-red-600',
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
  }
];
