export interface FunctionalityCard {
  icon: string;
  title: string;
  desc: string;
}

export interface FunctionalitySection {
  badge: string;
  title: string;
  items: FunctionalityCard[];
}

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
  functionality: FunctionalitySection;
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
      name: 'ব্রয়লার স্টার্টার – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'ব্রয়লার খামারের লাভজনক শুরুর জন্য একটি শক্তিশালী ও সুস্থ শুরু।',
      phase: 'স্টার্টার ফেজ',
      duration: '১–১৪ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'ব্রয়লার স্টার্টার – ইউনিফাইল্ড ক্লাসি ফিড বিশেষভাবে ডিজাইন করা হয়েছে ব্রয়লার বাচ্চার জীবনের সবচেয়ে সংবেদনশীল ও গুরুত্বপূর্ণ প্রথম ১৪ দিনের জন্য। এই সময়ের সঠিক পুষ্টি, শক্তিশালী রোগ প্রতিরোধ ক্ষমতা এবং উন্নত হজম ক্ষমতা ভবিষ্যৎ পুরো গ্রোথ সাইকেলের ভিত্তি তৈরি করে। বাচ্চার আর্লি মরটালিটি সর্বনিম্ন রেখে সমান শারীরিক বৃদ্ধি অর্জনে এটি খামারিদের প্রথম পছন্দ।',
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
      ],
      functionality: {
        badge: 'প্রাথমিক বৃদ্ধি ও গাট ডেভেলপমেন্ট',
        title: 'প্রথম ১৪ দিনের রোগ প্রতিরোধ ও দ্রুত বৃদ্ধির বিজ্ঞান',
        items: [
          {
            icon: 'Zap',
            title: 'বায়ো-অ্যাক্টিভ ইমিউন শিল্ড',
            desc: 'স্পেশালাইজড অর্গানিক অ্যাসিড ও বেটেইন ফর্মুলা বাচ্চার ব্রুডিং স্ট্রেস দূর করে এবং আর্লি মরটালিটি সর্বনিম্ন পর্যায়ে রাখে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'গাট ভিলি ও পুষ্টি শোষণ',
            desc: 'প্রোবায়োটিক ও প্রি-বায়োটিকের সমন্বয়ে পরিপাকতন্ত্রের মাইক্রোভিলি দ্রুত বিকশিত হয়, যা শতভাগ পুষ্টি শোষণ নিশ্চিত করে।'
          },
          {
            icon: 'TrendingUp',
            title: 'সমান ফ্লক ও প্রাথমিক ওজন',
            desc: 'উচ্চমানের এসপিসি ও অ্যামিনো এসিড প্রোফাইল ১৪ দিনে ৪২০–৪৮০ গ্রাম সমান দৈহিক ওজন অর্জনে সর্বোচ্চ সহায়তা করে।'
          }
        ]
      }
    },
    en: {
      name: 'Broiler Starter – UNIFYLD CLASSY FEED',
      tagline: 'A Strong & Healthy Start for Profitable Broiler Farming.',
      phase: 'Starter Phase',
      duration: '1–14 Days',
      bagSize: '50 kg Bag',
      description: 'Broiler Starter – UNIFYLD CLASSY FEED is specifically formulated for the critical first 14 days of a broiler chick\'s life. Providing balanced micro-nutrition, gut microbiome priming, and strong natural immunity, it lays the vital foundation for the entire growth cycle with minimal chick mortality and uniform flock starts.',
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
      ],
      functionality: {
        badge: 'Early Brooding Vitality & Gut Priming',
        title: 'Targeted Immunity & Rapid Growth (Days 1–14)',
        items: [
          {
            icon: 'Zap',
            title: 'Bio-Active Immunity Shield',
            desc: 'Specialized organic acids and betaine alleviate brooding stress and maintain early chick mortality below 1%.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Gut Villi & Microbiome Health',
            desc: 'Synergistic probiotics and prebiotics foster microvilli development for superior early-stage nutrient absorption.'
          },
          {
            icon: 'TrendingUp',
            title: 'Flock Uniformity & Early Weight',
            desc: 'Soy protein concentrate and precision amino acids deliver synchronized 420–480g weight gain by Day 14.'
          }
        ]
      }
    }
  },
  {
    id: 'grower',
    category: 'poultry',
    color: 'from-green-400 to-emerald-600',
    price: 3782.50,
    bn: {
      name: 'ব্রয়লার গ্রোয়ার – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'দ্রুত বৃদ্ধি, শক্তিশালী ফ্রেম এবং উন্নত লাভ।',
      phase: 'গ্রোয়ার ফেজ',
      duration: '১৫–২৮ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'ব্রয়লার গ্রোয়ার – ইউনিফাইল্ড ক্লাসি ফিড ব্রয়লার মুরগির দ্রুত শারীরিক বৃদ্ধি ও মাংস গঠনের পিক ফেজ (১৫–২৮ দিন) লক্ষ্য করে আধুনিক বৈজ্ঞানিক ফর্মুলেশনে তৈরি। এই পর্যায়ে মজবুত হাড়ের কাঠামো, প্রশস্ত বুকের মাংস ও বলিষ্ঠ পায়ের গঠন নিশ্চিত করে কম এফসিআর (FCR) ও খামারের উচ্চ মুনাফা নিশ্চিত করা হয়।',
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
      ],
      functionality: {
        badge: 'মাংসপেশি ও ফ্রেম ডেভেলপমেন্ট',
        title: '১৫–২৮ দিনের দ্রুত ওজন বৃদ্ধি ও কম এফসিআর (FCR)',
        items: [
          {
            icon: 'Zap',
            title: 'স্কেলিটাল ফ্রেম ও পায়ের শক্তি',
            desc: 'বায়ো-অ্যাভেইলেবল ক্যালসিয়াম ও ফসফরাসের নিখুঁত অনুপাত দ্রুত বর্ধনশীল দেহের ভার বহনে পায়ের হাড় মজবুত রাখে ও পঙ্গুত্ব রোধ করে।'
          },
          {
            icon: 'TrendingUp',
            title: 'বুকের মাংস ও পেশি গঠন',
            desc: 'ভারসাম্যপূর্ণ লাইসিন ও থ্রিওনিন চর্বিবিহীন ঘন মাংসপেশি ও চওড়া বুকের গঠন নিশ্চিত করে বাজারমূল্য বহুগুণ বাড়িয়ে তোলে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'উচ্চ হজম ক্ষমতা ও কম এফসিআর',
            desc: 'মাল্টি-এনজাইম কমপ্লেক্স খাদ্যশস্যের আঁশ সহজে ভেঙে ফেলে, ফলে ১.৪৫–১.৫৫ এর আদর্শ এফসিআর অর্জিত হয়।'
          }
        ]
      }
    },
    en: {
      name: 'Broiler Grower – UNIFYLD CLASSY FEED',
      tagline: 'Faster Growth, Strong Frame & Better Profit.',
      phase: 'Grower Phase',
      duration: '15–28 Days',
      bagSize: '50 kg Bag',
      description: 'Broiler Grower – UNIFYLD CLASSY FEED is formulated with advanced scientific formulation targeting the rapid growth phase (15–28 days) of broiler chickens. Frame development, breast width, leg strength, and optimal feed conversion are maximized at this crucial stage.',
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
      ],
      functionality: {
        badge: 'Skeletal Strength & Lean Muscle Accretion',
        title: 'Rapid Weight Velocity & Optimal FCR (Days 15–28)',
        items: [
          {
            icon: 'Zap',
            title: 'Skeletal Frame & Leg Strength',
            desc: 'Optimized bio-available calcium and phosphorus build dense leg bones to support rapid body mass without lameness.'
          },
          {
            icon: 'TrendingUp',
            title: 'Breast Meat & Muscle Yield',
            desc: 'Balanced lysine and threonine prioritize lean breast meat deposition with optimal commercial carcass conformation.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Digestive Enzymes & Low FCR',
            desc: 'Exogenous multi-enzyme complex unlocks non-starch polysaccharides for high digestive efficiency and superior FCR.'
          }
        ]
      }
    }
  },
  {
    id: 'finisher',
    category: 'poultry',
    color: 'from-blue-400 to-indigo-600',
    price: 3770.50,
    bn: {
      name: 'ব্রয়লার ফিনিশার – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'নিখুঁত ফিনিশ, উন্নত ওজন, উচ্চতর লাভ।',
      phase: 'ফিনিশার ফেজ',
      duration: '২৯–৩৮ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'ব্রয়লার ফিনিশার – ইউনিফাইল্ড ক্লাসি ফিড ব্রয়লার উৎপাদনের শেষ ও সবচেয়ে লাভজনক পর্যায় (২৯–৩৮ দিন)-এর জন্য বিশেষভাবে প্রস্তুত। উচ্চ মেটাবলিক এনার্জি ও ফ্যাটের সুষম ফর্মুলেশন মুরগিকে দ্রুত বাজারজাত ওজনে পৌঁছে দেয় এবং কার্যকর লিভার সুরক্ষা হঠাৎ মৃত্যু (SDS) রোধ করে খামারির বিনিয়োগ সুরক্ষিত রাখে।',
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
      ],
      functionality: {
        badge: 'চূড়ান্ত ওজন ও বাজারজাতকরণ',
        title: 'সর্বোচ্চ বাজারযোগ্য ওজন, লিভার সুরক্ষা ও চূড়ান্ত লাভ',
        items: [
          {
            icon: 'TrendingUp',
            title: 'উচ্চ এনার্জি ও দ্রুত ওজন অর্জন',
            desc: '৩২৫০–৩৩০০ kcal/kg বিপাকীয় শক্তি শেষ দিনগুলোতে প্রতিদিন প্রত্যাশার চেয়ে বেশি শারীরিক ওজন বৃদ্ধি নিশ্চিত করে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'সক্রিয় লিভার ও হার্ট সুরক্ষা',
            desc: 'প্রাকৃতিক লিভার টনিক ও ইলেক্ট্রোলাইট শেষ পর্যায়ের মেটাবলিক চাপ ও সাডেন ডেথ সিন্ড্রোম (SDS) কার্যকরভাবে প্রতিরোধ করে।'
          },
          {
            icon: 'Award',
            title: 'আকর্ষণীয় বডি শেপ ও প্রিমিয়াম দর',
            desc: 'দৃঢ় বডি শেপ ও উজ্জ্বল হলুদ-সোনালী ত্বক পাইকারি বাজারে সর্বোচ্চ বিক্রয়মূল্য ও খামারির লাভ নিশ্চিত করে।'
          }
        ]
      }
    },
    en: {
      name: 'Broiler Finisher – UNIFYLD CLASSY FEED',
      tagline: 'Perfect Finish, Better Weight, Higher Profit.',
      phase: 'Finisher Phase',
      duration: '29–38 Days',
      bagSize: '50 kg Bag',
      description: 'Broiler Finisher – UNIFYLD CLASSY FEED is specifically designed for the final and most profitable stage (29–38 days) of broiler production. Combining high metabolic energy density with vital hepatic protectants, it secures peak market weight, tight feathering, and guards against sudden mortality before harvest.',
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
      ],
      functionality: {
        badge: 'Final Muscle Finish & Market Readiness',
        title: 'Peak Market Weight & Hepatic Defense (Days 29–38)',
        items: [
          {
            icon: 'TrendingUp',
            title: 'High Metabolic Energy & Finish',
            desc: 'High metabolic energy (3250–3300 kcal/kg) delivers accelerated weight gains exceeding 2.40kg by Day 38.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Hepatic & Cardiac Protection',
            desc: 'Hepatic tonics and organic betaine shield vital organs, dramatically cutting sudden death risks during peak mass.'
          },
          {
            icon: 'Award',
            title: 'Compact Conformation & Meat Quality',
            desc: 'Firm muscle texture, tight feathering, and prime yellow skin tone command top wholesale market prices.'
          }
        ]
      }
    }
  },
  {
    id: 'sonali-starter',
    category: 'sonali',
    color: 'from-yellow-300 to-green-500',
    price: 3402.50,
    bn: {
      name: 'সোনালী স্টার্টার – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'সোনালী মুরগির শক্তিশালী শুরুর জন্য আদর্শ পুষ্টি।',
      phase: 'স্টার্টার ফেজ',
      duration: '১–১৮ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'সোনালী স্টার্টার – ইউনিফাইল্ড ক্লাসি ফিড সোনালী মুরগির প্রথম ১৮ দিনের সংবেদনশীল ব্রুডিং সময়ের জন্য বিশেষভাবে তৈরি। সোনালী বাচ্চার পরিপাকতন্ত্র ও প্রাকৃতিক রোগ প্রতিরোধ ক্ষমতা দ্রুত শক্তিশালী করে বাচ্চার মৃত্যুহার সর্বনিম্ন রাখা এবং ফ্লকের সমান দৈহিক বৃদ্ধি নিশ্চিত করাই এই ফিডের মূল লক্ষ্য।',
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
      ],
      functionality: {
        badge: 'সোনালী বাচ্চার জীবনীশক্তি ও টেকসই ভিত্তি',
        title: '১–১৮ দিনের সুষম পুষ্টি ও রোগ প্রতিরোধ বিজ্ঞান',
        items: [
          {
            icon: 'ShieldCheck',
            title: 'সর্বোচ্চ টিকে থাকার হার (Livability)',
            desc: 'ইমিউন বুস্টার ও ভিটামিন প্রিমিক্স সংবেদনশীল সোনালী বাচ্চার খামারে মৃত্যুহার ১% এর নিচে রাখতে সাহায্য করে।'
          },
          {
            icon: 'Zap',
            title: 'সমান ফ্লক গ্রোথ ও অভিন্নতা',
            desc: 'সুষম প্রোটিন ও এনার্জির সমন্বয় প্রতিটি বাচ্চার সমান বৃদ্ধি নিশ্চিত করে এবং ফ্লকে ছোট-বড় হওয়ার ঝুঁকি দূর করে।'
          },
          {
            icon: 'HeartPulse',
            title: 'স্ট্রেস প্রতিরোধ ও সক্রিয় আচরণ',
            desc: 'আবহাওয়া পরিবর্তনের ধকল কাটিয়ে সোনালী বাচ্চার চঞ্চলতা ও প্রাকৃতিক খাদ্য গ্রহণের আগ্রহ অটুট রাখে।'
          }
        ]
      }
    },
    en: {
      name: 'Sonali Starter – UNIFYLD CLASSY FEED',
      tagline: 'Ideal nutrition for a strong start for Sonali chickens.',
      phase: 'Starter Phase',
      duration: '1–18 Days',
      bagSize: '50 kg Bag',
      description: 'Sonali Starter – UNIFYLD CLASSY FEED is specially formulated for the delicate first 18 days of Sonali chicks. Proper nutrition, fortified immunity, and accelerated gut villi maturation ensure minimum brooding mortality and uniform early development.',
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
      ],
      functionality: {
        badge: 'Sonali Chick Vitality & Brooding Stability',
        title: 'Precision Nutrition for Sonali Brood (Days 1–18)',
        items: [
          {
            icon: 'ShieldCheck',
            title: 'High Livability & Disease Defense',
            desc: 'Immune stimulants and essential trace vitamins protect delicate Sonali chicks, keeping mortality under 1%.'
          },
          {
            icon: 'Zap',
            title: 'Uniform Flock Batch Development',
            desc: 'Balanced protein-energy ratio ensures synchronized growth across all chicks, eliminating uneven runts.'
          },
          {
            icon: 'HeartPulse',
            title: 'Anti-Stress & High Alertness',
            desc: 'Adaptogenic nutrients help chicks withstand temperature fluctuations and sustain brisk, lively feed foraging.'
          }
        ]
      }
    }
  },
  {
    id: 'sonali-grower',
    category: 'sonali',
    color: 'from-lime-400 to-green-600',
    price: 3377.50,
    bn: {
      name: 'সোনালী গ্রোয়ার – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'সোনালী মুরগির দ্রুত বৃদ্ধি ও উন্নত লাভের জন্য।',
      phase: 'গ্রোয়ার ফেজ',
      duration: '১৯–৪৫ দিন',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'সোনালী গ্রোয়ার – ইউনিফাইল্ড ক্লাসি ফিড সোনালী মুরগির দ্রুত গ্রোথ ফেজ (১৯–৪৫ দিন) লক্ষ্য করে তৈরি। দেশি মুরগির মতো শক্ত হাড়, প্রাকৃতিক পালকের আকর্ষণীয় দীপ্তি এবং আঁশযুক্ত সুস্বাদু মাংসের গঠন নিশ্চিত করে এটি খামারিকে অল্প খরচে দ্রুত বাজারজাত করার সেরা সুবিধা প্রদান করে।',
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
      ],
      functionality: {
        badge: 'প্রাকৃতিক রূপ ও দেশি মাংসের বৈশিষ্ট্য',
        title: '১৯–৪৫ দিনের টেকসই বৃদ্ধি, কম খরচ ও চঞ্চল স্বভাব',
        items: [
          {
            icon: 'Award',
            title: 'প্রাকৃতিক পালক ও উজ্জ্বল রূপ',
            desc: 'প্রাকৃতিক ক্যারোটিনয়েড সোনালী পালকে দেশি মুরগির মতো সোনালী-লালচে দীপ্তি ও আকর্ষণীয় হলুদ পা নিশ্চিত করে।'
          },
          {
            icon: 'TrendingUp',
            title: 'দৃঢ় হাড় ও দেশি মাংসের স্বাদ',
            desc: 'হাড় মজবুত রাখে এবং মাংসের ঘনত্ব দেশি মুরগির মতোই শক্ত ও আঁশযুক্ত করে যা ক্রেতাদের কাছে অত্যন্ত পছন্দনীয়।'
          },
          {
            icon: 'Zap',
            title: 'সাশ্রয়ী এফসিআর ও দ্রুত বাজারজাত',
            desc: 'উন্নত পুষ্টি শোষণ ক্ষমতার কারণে কম খাদ্য ব্যয়ে কাঙ্ক্ষিত দেড় থেকে দুই কেজি ওজন দ্রুত অর্জন সম্ভব হয়।'
          }
        ]
      }
    },
    en: {
      name: 'Sonali Grower – UNIFYLD CLASSY FEED',
      tagline: 'For rapid growth and better profit of Sonali chickens.',
      phase: 'Grower Phase',
      duration: '19–45 Days',
      bagSize: '50 kg Bag',
      description: 'Sonali Grower – UNIFYLD CLASSY FEED is formulated targeting the rapid growth phase (19–45 days) of Sonali chickens. Frame development, natural plumage coloration, and active movement are enhanced at this stage to achieve premium market returns.',
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
      ],
      functionality: {
        badge: 'Natural Plumage & Deshi Conformation',
        title: 'Cost-Efficient Weight Gain & Rugged Fitness (Days 19–45)',
        items: [
          {
            icon: 'Award',
            title: 'Vibrant Feather Color & Pigmentation',
            desc: 'Natural dietary carotenoids bestow rich reddish-golden plumage and bright shank color favored in wet markets.'
          },
          {
            icon: 'TrendingUp',
            title: 'Dense Skeletal & Lean Meat Quality',
            desc: 'Fortified bone density enables high active roaming while yielding firm, flavorful native-style meat fibers.'
          },
          {
            icon: 'Zap',
            title: 'Economical FCR & Fast Sale',
            desc: 'High feed bioavailability delivers targeted 1.5–1.8 kg marketable weights with reduced total feed expenditure.'
          }
        ]
      }
    }
  },
  {
    id: 'sweet-bran',
    category: 'cattle',
    color: 'from-orange-400 to-red-600',
    price: null,
    bn: {
      name: 'প্রিমিয়াম সুইট ব্রান – ইউনিফাইল্ড ক্যাটল ফিড',
      tagline: '“PREMIUM SWEET BRAN – More Intake, More Milk, More Profit.”',
      phase: 'ক্যাটল ফিড',
      duration: 'দুধাল গাভী ও ষাঁড়',
      bagSize: '৩৬ কেজি ব্যাগ',
      description: 'প্রিমিয়াম সুইট ব্রান হলো উন্নতমানের গবাদি পশুর জন্য বিশেষভাবে তৈরি একটি হাই–অ্যারোমা, হাই–ইনটেক ও মাল্টি–পারপাস ক্যাটল ফিড। প্রাকৃতিক মেথি ও মিষ্টি চিটাগুড়ের মিশ্রণ গাভী ও ষাঁড়ের খাদ্য গ্রহণের অনীহা দূর করে, প্রতিদিন ১.০–২.৫ লিটার দুধ বৃদ্ধি করে এবং রুমেন ফাংশন শক্তিশালী করে।',
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
      ],
      functionality: {
        badge: 'রুচি বর্ধক ও রুমেন স্টিমুলেশন',
        title: 'দুধের ফলন বৃদ্ধি, দ্রুত স্বাস্থ্য গঠন ও হজম শক্তির বিজ্ঞান',
        items: [
          {
            icon: 'Zap',
            title: 'প্রাকৃতিক মেথি ও তীব্র সুবাস',
            desc: 'মেথি ও মিষ্টি ভ্যানিলা-মোলাসেস অ্যারোমা খাদ্যের অনীহা দূর করে এবং প্রতিদিন প্রচুর ফিড ইনটেক নিশ্চিত করে।'
          },
          {
            icon: 'TrendingUp',
            title: 'দুধের পরিমাণ ১–২.৫ লিটার বৃদ্ধি',
            desc: 'দুধাল গাভীর দুধের উৎপাদন লক্ষণীয়ভাবে বৃদ্ধি করে এবং দুধের ফ্যাটের ঘনত্ব ও এসএনএফ (SNF) উন্নত করে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'লাইভ ইস্ট ও রুমেন pH ব্যালান্স',
            desc: 'রুমেনের অম্লতা (Acidosis) প্রতিরোধ করে, মাইক্রোবায়োম সক্রিয় রাখে এবং বদহজম ও পেট ফাঁপা দূর করে।'
          }
        ]
      }
    },
    en: {
      name: 'PREMIUM SWEET BRAN',
      tagline: '“PREMIUM SWEET BRAN – More Intake, More Milk, More Profit.”',
      phase: 'Cattle Feed',
      duration: 'Milking Cows & Bulls',
      bagSize: '36 kg Bag',
      description: 'PREMIUM SWEET BRAN is a high-aroma, high-intake, and multi-purpose cattle feed formulated with natural fenugreek, molasses, and live yeast. Engineered to boost daily milk yield, improve body condition score, and restore rumen digestive vigor in dairy cows and fattening bulls.',
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
      ],
      functionality: {
        badge: 'Palatability Surge & Rumen Optimization',
        title: 'Milk Production Surge & Body Conditioning Science',
        items: [
          {
            icon: 'Zap',
            title: 'Fenugreek Appetite Booster',
            desc: 'Natural fenugreek and molasses aroma stimulate saliva production and overcome feed refusal instantly.'
          },
          {
            icon: 'TrendingUp',
            title: 'Daily Milk Boost (1.0–2.5 L/day)',
            desc: 'Proved field trials show a 1.0–2.5 liter daily milk increase along with higher fat and solids-not-fat.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Live Yeast Rumen Stabilization',
            desc: 'Active live yeast buffers rumen pH, preventing subacute ruminal acidosis and optimizing fiber breakdown.'
          }
        ]
      }
    }
  },
  {
    id: 'layer-1',
    category: 'poultry',
    color: 'from-amber-500 to-rose-600',
    price: 3017.50,
    bn: {
      name: 'লেয়ার-১ – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'লেয়ার মুরগির সর্বোচ্চ ডিম উৎপাদন ও খোসার সুস্থতার জন্য আদর্শ পুষ্টি।',
      phase: 'লেয়ার ফেজ ১',
      duration: 'ডিম পাড়ার শুরু থেকে',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'লেয়ার-১ – ইউনিফাইল্ড ক্লাসি ফিড বিশেষভাবে বাণিজ্যিক লেয়ার মুরগির ডিম পাড়ার প্রথম পর্যায়ের জন্য বৈজ্ঞানিকভাবে তৈরি। সঠিক প্রোটিন, পর্যাপ্ত ক্যালসিয়াম ও ফসফরাসের নিখুঁত অনুপাত দীর্ঘস্থায়ী ডিমের উৎপাদন হার (পিক ৯০%+) এবং মজবুত, মসৃণ ডিমের খোসা নিশ্চিত করে।',
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
      ],
      functionality: {
        badge: 'সর্বোচ্চ ডিম উৎপাদন ও খোসার সুরক্ষা',
        title: 'ডিম উৎপাদন পিক ৯০%+ এবং দীর্ঘস্থায়ী ডিম পাড়ার পুষ্টি',
        items: [
          {
            icon: 'TrendingUp',
            title: 'পিক প্রোডাকশন দীর্ঘস্থায়ী রাখা',
            desc: 'বিশেষ অ্যামিনো এসিড ব্যালেন্স ডিম পাড়ার হার দীর্ঘদিন সর্বোচ্চ পর্যায়ে বজায় রাখে এবং অকাল উৎপাদন হ্রাস রোধ করে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'শক্ত ও মজবুত ডিমের খোসা',
            desc: 'জৈব ক্যালসিয়াম ও ফসফরাসের নিখুঁত অনুপাত ডিমের খোসার মাইক্রো-ক্র্যাক দূর করে এবং পরিবহনজনিত ক্ষতি কমায়।'
          },
          {
            icon: 'Award',
            title: 'গাঢ় সোনালী কুসুম ও পুষ্টি',
            desc: 'প্রাকৃতিক ক্যারোটিনয়েড ও ভিটামিন কুসুমের প্রাকৃতিক গাঢ় সোনালী রঙ ও ঘন অ্যালবুমিন নিশ্চিত করে।'
          }
        ]
      }
    },
    en: {
      name: 'Layer-1 – UNIFYLD CLASSY FEED',
      tagline: 'Ideal nutrition for peak egg production and optimal shell quality.',
      phase: 'Layer Phase 1',
      duration: 'Onset of laying',
      bagSize: '50 kg Bag',
      description: 'Layer-1 – UNIFYLD CLASSY FEED is scientifically formulated for the initial laying phase of commercial layer chickens. Balanced protein, optimal calcium, and available phosphorus ensure high laying persistence (90%+ peak) and superior eggshell strength.',
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
      ],
      functionality: {
        badge: 'Peak Laying Persistence & Shell Armor',
        title: '90%+ Peak Egg Yield & Crack-Resistant Shells',
        items: [
          {
            icon: 'TrendingUp',
            title: 'Sustained Peak Production',
            desc: 'Precision methionine-cystine balance sustains laying curves at peak 90%+ for extended weeks.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Crack-Proof Shell Calcification',
            desc: 'Calibrated calcium and phosphorus crystallization eliminates hair-line cracks and transport breakage.'
          },
          {
            icon: 'Award',
            title: 'Deep Golden Yolk & Quality Albumin',
            desc: 'Natural carotenoids enrich yolk pigmentation with thick, high-standing albumin for premium consumer appeal.'
          }
        ]
      }
    }
  },
  {
    id: 'layer-starter',
    category: 'poultry',
    color: 'from-indigo-400 to-blue-600',
    price: 3550.0,
    comingSoon: true,
    bn: {
      name: 'লেয়ার স্টার্টার – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'ভবিষ্যতের সফল ডিম উৎপাদনের মজবুত ভিত্তি।',
      phase: 'স্টার্টার ফেজ',
      duration: '১-৮ সপ্তাহ',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'লেয়ার স্টার্টার – ইউনিফাইল্ড ক্লাসি ফিড লেয়ার মুরগির বাচ্চার প্রথম ৮ সপ্তাহের সুষম দৈহিক ফ্রেম গঠনের জন্য বৈজ্ঞানিকভাবে প্রস্তুত। ভবিষ্যতে একটানা দীর্ঘমেয়াদী ডিম পাড়ার সক্ষমতা তৈরি করতে হাড়ের গঠন, অভিন্ন দৈহিক ওজন এবং পরিপক্ক প্রজনন অঙ্গের বিকাশ নিশ্চিত করে।',
      highlights: [
        { icon: 'Zap', text: 'মজবুত হাড় গঠন' },
        { icon: 'ShieldCheck', text: 'সুস্থ ও সতেজ বাচ্চা' },
        { icon: 'TrendingUp', text: 'সমান বৃদ্ধি' },
      ],
      characteristics: [
        { label: 'ধরন', value: 'লেয়ার স্টার্টার' },
        { label: 'ব্যবহার', value: 'লেয়ার বাচ্চার জন্য' },
      ],
      performance: [
        { label: 'গ্রোথ', value: 'সমান মাপের ফ্লক' },
        { label: 'মৃত্যুর হার', value: 'সর্বনিম্ন' },
      ],
      nutritional: [
        { label: 'ক্যালসিয়াম', value: 'হাড় মজবুত করার জন্য নির্দিষ্ট মাত্রায়' },
        { label: 'প্রোটিন', value: 'সুষম মাত্রায়' },
      ],
      advantages: [
        'ভবিষ্যতে লম্বা সময় ডিম দেওয়ার সক্ষমতা তৈরি করে',
        'ফ্লকের সমান বৃদ্ধি নিশ্চিত করে',
      ],
      functionality: {
        badge: 'স্কেলিটাল ফ্রেম ও ভবিষ্যত ডিমের ভিত্তি',
        title: '১–৮ সপ্তাহের দৈহিক কাঠামো ও প্রজনন অঙ্গ গঠন',
        items: [
          {
            icon: 'Zap',
            title: 'আদর্শ ফ্রেম ও হাড়ের গঠন',
            desc: 'নিখুঁত ক্যালসিয়াম ও ফসফরাস অনুপাত বাচ্চার শ্যাংক লেন্থ ও পেলভিক ফ্রেম ভবিষ্যতে ডিমের জন্য প্রস্তুত করে।'
          },
          {
            icon: 'ShieldCheck',
            title: '৮৫%+ অভিন্ন ফ্লক ওজন',
            desc: 'সব মুরগির বাচ্চার সমান ওজন বৃদ্ধি নিশ্চিত করে, যা ভবিষ্যতে একই সাথে একসাথে পিক উৎপাদনে সাহায্য করে।'
          },
          {
            icon: 'HeartPulse',
            title: 'সুস্থ প্রজনন অঙ্গ ও অন্ত্র',
            desc: 'ভবিষ্যতে দীর্ঘস্থায়ী ডিম পাড়ার জন্য প্রয়োজনীয় অভ্যন্তরীণ প্রজনন তন্ত্রের নিখুঁত বিকাশ ঘটায়।'
          }
        ]
      }
    },
    en: {
      name: 'Layer Starter – UNIFYLD CLASSY FEED',
      tagline: 'The strong foundation for successful future egg production.',
      phase: 'Starter Phase',
      duration: '1-8 Weeks',
      bagSize: '50 kg Bag',
      description: 'Layer Starter – UNIFYLD CLASSY FEED is scientifically designed for layer pullets from 1 to 8 weeks. It sets the skeletal foundation, body frame uniformity, and reproductive organ development necessary to support prolonged, profitable laying cycles over 80+ weeks.',
      highlights: [
        { icon: 'Zap', text: 'Strong Bone Structure' },
        { icon: 'ShieldCheck', text: 'Healthy & Fresh Chicks' },
        { icon: 'TrendingUp', text: 'Even Growth' },
      ],
      characteristics: [
        { label: 'Type', value: 'Layer Starter' },
        { label: 'Usage', value: 'For Layer Chicks' },
      ],
      performance: [
        { label: 'Growth', value: 'Even Flock Size' },
        { label: 'Mortality Rate', value: 'Minimal' },
      ],
      nutritional: [
        { label: 'Calcium', value: 'Specific levels for strong bones' },
        { label: 'Protein', value: 'Balanced levels' },
      ],
      advantages: [
        'Builds capacity for long-term egg production in future',
        'Ensures even growth across the flock',
      ],
      functionality: {
        badge: 'Pullet Skeletal Architecture & Longevity',
        title: 'Foundation Frame Building for Lifetime Egg Yield (1–8 Wks)',
        items: [
          {
            icon: 'Zap',
            title: 'Target Skeletal & Shank Length',
            desc: 'Exact mineral matrix builds optimal shank length and broad pelvic structure ready for adult egg size.'
          },
          {
            icon: 'ShieldCheck',
            title: '85%+ Flock Body Weight Uniformity',
            desc: 'Guarantees uniform flock bodyweights, ensuring synchronized sexual maturity and simultaneous peak.'
          },
          {
            icon: 'HeartPulse',
            title: 'Oviduct Development & Gut Health',
            desc: 'Organic trace minerals prime internal reproductive organs and oviduct health for lasting stamina.'
          }
        ]
      }
    }
  },
  {
    id: 'layer-mash',
    category: 'poultry',
    color: 'from-pink-500 to-rose-700',
    price: 3450.0,
    comingSoon: true,
    bn: {
      name: 'লেয়ার - ১ ম্যাশ – ইউনিফাইল্ড ক্লাসি ফিড',
      tagline: 'ডিম উৎপাদনের সেরা খাদ্য, পুষ্টি ও সফলতায় ভরপুর।',
      phase: 'ম্যাশ ফেজ',
      duration: 'ডিম পাড়ার সময়',
      bagSize: '৫০ কেজি ব্যাগ',
      description: 'লেয়ার - ১ ম্যাশ – ইউনিফাইল্ড ক্লাসি ফিড হলো বাণিজ্যিক লেয়ার খামারের জন্য তৈরি উচ্চমানের হোমোজেনিয়াস ম্যাশ ফিড। এটি সমান দানার মিশ্রণে প্রস্তুত হওয়ায় মুরগি খাবার বেছে বেছে অপচয় করতে পারে না এবং প্রতিটি দানা থেকে সুষম ক্যালসিয়াম, প্রোটিন ও মিনারেল গ্রহণ করে সর্বোচ্চ উৎপাদন দেয়।',
      highlights: [
        { icon: 'Zap', text: 'সর্বোচ্চ ডিম উৎপাদন' },
        { icon: 'ShieldCheck', text: 'সুস্থ মুরগি' },
        { icon: 'TrendingUp', text: 'দীর্ঘস্থায়ী প্রোডাকশন' },
      ],
      characteristics: [
        { label: 'ধরন', value: 'লেয়ার ম্যাশ' },
        { label: 'রং', value: 'সোনালী-বাদামী' },
      ],
      performance: [
        { label: 'প্রোডাকশন পীক', value: 'দীর্ঘস্থায়ী' },
        { label: 'ডিমের গুণগত মান', value: 'উচ্চমানের খোসা ও কুসুম' },
      ],
      nutritional: [
        { label: 'ক্যালসিয়াম', value: 'সর্বোচ্চ ডিমের খোসার জন্য' },
        { label: 'প্রোটিন ও শক্তি', value: 'উচ্চ উৎপাদনের জন্য সামঞ্জস্যপূর্ণ' },
      ],
      advantages: [
        'দীর্ঘসময় ডিম দেয়',
        'ডিমের মান প্রিমিয়াম হয়',
      ],
      functionality: {
        badge: 'হোমোজেনিয়াস ম্যাশ ও সুষম খাদ্য গ্রহণ',
        title: 'সুষম উপাদান বণ্টন ও সাশ্রয়ী ডিম উৎপাদনের নিশ্চয়তা',
        items: [
          {
            icon: 'Zap',
            title: 'সমান দানার আকৃতি ও জিরো অপচয়',
            desc: 'খাবারের সব দানা সমান আকারের হওয়ায় মুরগি বেছে বেছে খায় না, খাদ্যের অপচয় শূন্যের কোঠায় নেমে আসে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'গিজার্ড স্বাস্থ্য ও প্রাকৃতিক হজম',
            desc: 'ম্যাশ টেক্সচার গিজার্ডের মাংসপেশি শক্তিশালী রাখে, যা পাচনতন্ত্রে এনজাইমের ক্রিয়া ও খাদ্য শোষণ বাড়ায়।'
          },
          {
            icon: 'TrendingUp',
            title: 'ডিম প্রতি উৎপাদন খরচ হ্রাস',
            desc: 'সাশ্রয়ী মূল্যে উচ্চমাত্রার প্রোটিন ও এনার্জির সমন্বয় খামারির ডিম প্রতি উৎপাদন খরচ উল্লেখযোগ্যভাবে কমায়।'
          }
        ]
      }
    },
    en: {
      name: 'Layer - 1 Mash – UNIFYLD CLASSY FEED',
      tagline: 'Best feed for egg production, packed with nutrition.',
      phase: 'Mash Phase',
      duration: 'Laying Period',
      bagSize: '50 kg Bag',
      description: 'Layer - 1 Mash – UNIFYLD CLASSY FEED is a precision-milled, homogeneous mash feed for commercial laying hens. Its uniform particle texture eliminates selective feeding and feed separation, providing constant nutrient intake for sustained egg output at lower operational cost.',
      highlights: [
        { icon: 'Zap', text: 'Maximum Egg Production' },
        { icon: 'ShieldCheck', text: 'Healthy Hens' },
        { icon: 'TrendingUp', text: 'Long-lasting Production' },
      ],
      characteristics: [
        { label: 'Type', value: 'Layer Mash' },
        { label: 'Color', value: 'Golden-Brown' },
      ],
      performance: [
        { label: 'Production Peak', value: 'Long-lasting' },
        { label: 'Egg Quality', value: 'High quality shell & yolk' },
      ],
      nutritional: [
        { label: 'Calcium', value: 'For premium shell quality' },
        { label: 'Protein & Energy', value: 'Balanced for high yield' },
      ],
      advantages: [
        'Ensures long laying period',
        'Produces premium quality eggs',
      ],
      functionality: {
        badge: 'Homogeneous Mash Intake & Digestion',
        title: 'Uniform Particle Density & Low Cost-Per-Egg',
        items: [
          {
            icon: 'Zap',
            title: 'Homogeneous Grinding & Zero Waste',
            desc: 'Uniform particle size stops hens sorting large grains, ensuring complete consumption with zero floor waste.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Gizzard Stimulation & Gut Motility',
            desc: 'Coarse mash particle structure stimulates gizzard development and natural gut motility for maximum absorption.'
          },
          {
            icon: 'TrendingUp',
            title: 'Optimized Cost Per Dozen Eggs',
            desc: 'Delivers full nutritional potency at competitive pricing, lowering the cost of feed per dozen eggs.'
          }
        ]
      }
    }
  },
  {
    id: 'dairy-milk-master',
    image: '/products/dairy-milk-master-feed.png',
    category: 'cattle',
    color: 'from-emerald-500 to-teal-700',
    price: 3200.0,
    comingSoon: true,
    bn: {
      name: 'ডেইরি মিল্ক মাস্টার – ইউনিফাইল্ড ক্যাটল ফিড',
      tagline: 'দুধ উৎপাদন বৃদ্ধিতে এবং ডেইরি ফার্মের সফলতায় নির্ভরযোগ্য খাদ্য।',
      phase: 'মাস্টার ফেজ',
      duration: 'দুধ সংগ্রহের সময়',
      bagSize: '২৫ কেজি ব্যাগ',
      description: 'ডেইরি মিল্ক মাস্টার দুধাল গাভী ও মহিষের সর্বোচ্চ দুগ্ধ ফলন, দুধের ফ্যাট বৃদ্ধি এবং স্তনগ্রন্থি (ওলান) সুস্থ রাখার জন্য বিশেষভাবে প্রস্তুতকৃত একটি বৈজ্ঞানিক ক্যাটল ফিড। উচ্চমানের বাইপাস প্রোটিন ও শক্তির মেলবন্ধন ল্যাকটেশন পিরিয়ড দীর্ঘস্থায়ী করে খামারির মুনাফা বৃদ্ধি করে।',
      highlights: [
        { icon: 'Zap', text: 'অতিরিক্ত দুধ উৎপাদন' },
        { icon: 'ShieldCheck', text: 'উন্নত রোগ প্রতিরোধ ক্ষমতা' },
        { icon: 'Eye', text: 'দুধের উচ্চ পুষ্টিমান' },
      ],
      characteristics: [
        { label: 'ধরন', value: 'পেলট/ম্যাশ' },
        { label: 'উপাদান', value: 'ভিটামিন ও খনিজ' },
      ],
      performance: [
        { label: 'দুগ্ধ ফলন', value: '৫-১০% বৃদ্ধি' },
        { label: 'ল্যাকটেশন পিরিয়ড', value: 'দীর্ঘস্থায়ী' },
      ],
      nutritional: [
        { label: 'ক্যালসিয়াম', value: 'হাড় ও দুধের মান বৃদ্ধিতে' },
        { label: 'প্রোটিন', value: 'শরীরের ক্ষয় পূরণে' },
      ],
      advantages: [
        'দুধের ঘনত্বের মান উন্নত করা',
        'গাভীকে সুস্থ ও সবল রাখা',
      ],
      functionality: {
        badge: 'দুগ্ধ ফলন ও মেটাবলিক স্বাস্থ্য',
        title: 'প্রতিদিনের দুধের ফলন বৃদ্ধি, ফ্যাট ও এসএনএফ (SNF) উন্নয়ন',
        items: [
          {
            icon: 'TrendingUp',
            title: 'দুধের ফলন ৫–১০% বৃদ্ধি',
            desc: 'উচ্চ বাইপাস প্রোটিন ও নেট এনার্জি দুধের উৎপাদন দ্রুত বাড়ায় এবং পিক মিল্ক প্রোডাকশন দীর্ঘস্থায়ী রাখে।'
          },
          {
            icon: 'Award',
            title: 'দুধের ফ্যাট ও এসএনএফ উন্নয়ন',
            desc: 'সুষম ফাইবার ও ফ্যাটের উৎস দুধের মাখন ও ঘনত্বের মান উন্নত করে সর্বোচ্চ বাজারদর পেতে সহায়তা করে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'ওলান সুরক্ষা ও ম্যাসটাইটিস প্রতিরোধ',
            desc: 'চিলেটেড জিংক, সেলেনিয়াম ও ভিটামিন ই ওলানের কোষ সুস্থ রাখে এবং সোমাটিক সেল ও ম্যাসটাইটিসের ঝুঁকি কমায়।'
          }
        ]
      }
    },
    en: {
      name: 'DAIRY MILK MASTER',
      tagline: 'Reliable feed for increased milk production and dairy success.',
      phase: 'Master Phase',
      duration: 'Lactation Period',
      bagSize: '25 kg Bag',
      description: 'DAIRY MILK MASTER is a premium balanced cattle feed engineered to maximize milk production, boost butterfat and SNF levels, and maintain optimal body score in lactating dairy cows and buffaloes. Formulated with high bypass protein and protected fats for high-yielding dairy operations.',
      highlights: [
        { icon: 'Zap', text: 'Extra Milk Production' },
        { icon: 'ShieldCheck', text: 'Proven Immunity' },
        { icon: 'Eye', text: 'High Milk Quality' },
      ],
      characteristics: [
        { label: 'Type', value: 'Pellet/Mash' },
        { label: 'Source', value: 'Vitamin & Minaral Rich' },
      ],
      performance: [
        { label: 'Milk Yield', value: '5-10% increase' },
        { label: 'Lactation', value: 'Extended period' },
      ],
      nutritional: [
        { label: 'Calcium', value: 'Stronger bones & yield' },
        { label: 'Protein', value: 'Balanced maintenance' },
      ],
      advantages: [
        'Improves milk solids (SNF)',
        'Keeps cattle fit and active',
      ],
      functionality: {
        badge: 'Lactation Maximization & Udder Armor',
        title: 'Daily Milk Yield Surge & Higher Butterfat/SNF',
        items: [
          {
            icon: 'TrendingUp',
            title: '5–10% Milk Yield Surge',
            desc: 'High bypass protein and digestible net energy stimulate peak lactation yields by 5–10% sustainably.'
          },
          {
            icon: 'Award',
            title: 'Higher Butterfat & Milk Solids (SNF)',
            desc: 'Balanced fermentable fiber supports acetate production, visibly lifting butterfat % and milk density.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Udder Health & Mastitis Defense',
            desc: 'Organic chelated minerals and vitamin E fortify udder immune defenses, minimizing clinical mastitis.'
          }
        ]
      }
    }
  },
  {
    id: 'beef-master',
    image: '/products/beef-master-feed.png',
    category: 'cattle',
    color: 'from-blue-600 to-indigo-900',
    price: 3100.0,
    comingSoon: true,
    bn: {
      name: 'বিফ মাস্টার – ইউনিফাইল্ড ক্যাটল ফিড',
      tagline: 'পশু মোটাতাজাকরণ ও উন্নত জাতের ষাঁড়ের দ্রুত বৃদ্ধির বিশেষ খাদ্য।',
      phase: 'মাস্টার ফেজ',
      duration: 'বৃদ্ধির সময়',
      bagSize: '২৫ কেজি ব্যাগ',
      description: 'বিফ মাস্টার ষাঁড় ও কুরবানির পশুর দ্রুত, বৈজ্ঞানিক ও স্বাস্থ্যসম্মত মোটাতাজাকরণের জন্য প্রস্তুতকৃত একটি বিশেষায়িত ফিড। কোনো ক্ষতিকর স্টেরয়েড বা হরমোন ছাড়াই প্রাকৃতিক পুষ্টির মাধ্যমে মাংসপেশি গঠন, হাড়ের বিস্তার এবং চকচকে চামড়া নিশ্চিত করে বাজারে সর্বোচ্চ বিক্রয়মূল্য এনে দেয়।',
      highlights: [
        { icon: 'Zap', text: 'দ্রুত মাংস বৃদ্ধি' },
        { icon: 'ShieldCheck', text: 'উচ্চমানের চর্বিমুক্ত হাড়' },
        { icon: 'TrendingUp', text: 'সর্বোচ্চ কনভার্সন রেট' },
      ],
      characteristics: [
        { label: 'ফেজ', value: 'ফিনিশার ফেজ' },
        { label: 'ধরন', value: 'পেলট' },
      ],
      performance: [
        { label: 'ওজন বৃদ্ধি', value: 'দ্রুত ও সুষম' },
        { label: 'হضم শক্তি', value: 'অত্যন্ত উন্নত' },
      ],
      nutritional: [
        { label: 'শক্তি (Energy)', value: 'সবল দেহের জন্য' },
        { label: 'মিনারেল', value: 'সুগঠিত বডির জন্য' },
      ],
      advantages: [
        'পশুকে দ্রুত মোটাতাজা করা',
        'মাংসের মান প্রিমিয়াম করা',
      ],
      functionality: {
        badge: 'বৈজ্ঞানিক মোটাতাজাকরণ ও বডি কনডিশনিং',
        title: 'দৈনিক সর্বোচ্চ ওজন বৃদ্ধি ও সুঠাম পেশির গঠন',
        items: [
          {
            icon: 'TrendingUp',
            title: 'দৈনিক সর্বোচ্চ শারীরিক বৃদ্ধি (ADG)',
            desc: 'উচ্চ শক্তি ও প্রোটিনের মিশ্রণ পশুর দৈহিক ওজন প্রতিদিন দ্রুত বাড়িয়ে কাঙ্ক্ষিত বাজার ওজনে পৌঁছে দেয়।'
          },
          {
            icon: 'Award',
            title: 'মার্বলিং ও চর্বিমুক্ত সুষম মাংস',
            desc: 'চামড়ার নিচে অতিরিক্ত অপ্রয়োজনীয় চর্বি না জমিয়ে মাংসপেশির ঘনত্ব ও সুন্দর মার্বলিং তৈরি করে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'রুমেন বাফার ও চকচকে লোম',
            desc: 'সোডিয়াম বাইকার্বনেট বাফার পেট ফাঁপা ও এসিডোসিস রোধ করে, আর ফ্যাটি এসিড চামড়ায় আকর্ষণীয় জেল্লা আনে।'
          }
        ]
      }
    },
    en: {
      name: 'BEEF MASTER',
      tagline: 'Premium feed for rapid growth and weight gain in bulls.',
      phase: 'Master Phase',
      duration: 'Growth Period',
      bagSize: '25 kg Bag',
      description: 'BEEF MASTER is an advanced fattening cattle feed designed for bulls and feedlot operations. Formulated without harmful steroids or hormones, it accelerates Average Daily Gain (ADG), enhances lean intramuscular marbling, and creates a glossy, healthy coat for premium market value.',
      highlights: [
        { icon: 'Zap', text: 'Fast Meat Growth' },
        { icon: 'ShieldCheck', text: 'Premium Bone Quality' },
        { icon: 'TrendingUp', text: 'High Conversion Rate' },
      ],
      characteristics: [
        { label: 'Phase', value: 'Finisher Phase' },
        { label: 'Type', value: 'Pellet' },
      ],
      performance: [
        { label: 'Weight Gain', value: 'Fast & Natural' },
        { label: 'Digestion', value: 'High absorption' },
      ],
      nutritional: [
        { label: 'Energy', value: 'For bulk and strength' },
        { label: 'Minerals', value: 'Robust body design' },
      ],
      advantages: [
        'Rapid fattening naturally',
        'Premium meat grade',
      ],
      functionality: {
        badge: 'Rapid Fattening & Muscle Hypertrophy',
        title: 'Peak Daily Weight Gain (ADG) & Compact Finish',
        items: [
          {
            icon: 'TrendingUp',
            title: 'Rapid Average Daily Gain (ADG)',
            desc: 'High starch-energy and rumen-digestible protein accelerate daily weight gain without metabolic stall.'
          },
          {
            icon: 'Award',
            title: 'Lean Muscle & Superior Marbling',
            desc: 'Directs nutrients into dense intramuscular muscle fiber rather than excessive sub-cutaneous waste fat.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Metabolic Buffer & Glossy Coat',
            desc: 'Internal buffering agents safeguard against bloat, while chelated sulfur amino acids impart a brilliant shiny coat.'
          }
        ]
      }
    }
  },
  {
    id: 'premium-tea',
    category: 'food',
    color: 'from-emerald-500 to-green-700',
    price: 450.0,
    comingSoon: true,
    bn: {
      name: 'ইউনিফাইল্ড প্রিমিয়াম ব্লেন্ড চা',
      tagline: 'সতেজতার এক নতুন অনুভূতি – আভিজাত্যে ঘেরা মায়াবী স্বাদ, প্রতিটি চুমুকেই সতেজতা।',
      phase: 'ইউনিফাইল্ড প্রিমিয়াম চা',
      duration: 'ফুড ও বিভারেজ',
      bagSize: '৫০০ গ্রাম',
      description: 'ইউনিফাইল্ড প্রিমিয়াম ব্লেন্ড চা হলো সিলেটের ঐতিহ্যবাহী সেরা বাগানগুলো থেকে সংগৃহীত কচি দুটি পাতা ও একটি কুঁড়ির নিখুঁত মেলবন্ধন। কোনো ধুলো বা ডাস্ট মিশ্রণ ছাড়া শতভাগ প্রিমিয়াম গ্রেড সিটিসিতে প্রক্রিয়াজাত এই চা প্রতিটি কাপে দেয় গাঢ় গোল্ডেন-রেড লিকার, মায়াবী প্রাকৃতিক সুবাস এবং প্রতিটি চুমুকে অতুলনীয় সতেজতা ও স্বাস্থ্যসুরক্ষা।',
      highlights: [
        { icon: 'Zap', text: 'কড়া লিকার ও উজ্জ্বল গোল্ডেন-রেড রঙ' },
        { icon: 'ShieldCheck', text: 'শতভাগ শুদ্ধতার নিশ্চয়তা — কোনো কৃত্রিম রঙ নেই' },
        { icon: 'TrendingUp', text: 'অতুলনীয় প্রাকৃতিক ঘ্রাণ — দীর্ঘসময় অটুট' },
      ],
      characteristics: [
        { label: 'ব্লেন্ড টাইপ', value: 'প্রিমিয়াম ব্লেন্ড (High Quality CTC)' },
        { label: 'স্বাদ', value: 'কড়া ও সতেজ (Strong & Fresh)' },
        { label: 'ঘ্রাণ', value: 'প্রাকৃতিক সুগন্ধযুক্ত (Natural Aroma)' },
        { label: 'রঙ', value: 'উজ্জ্বল গোল্ডেন রেড' },
        { label: 'নেট ওজন', value: '৫০০ গ্রাম' },
        { label: 'প্রস্তুতকারক', value: 'MI UNIFYLD AGRO LTD' },
      ],
      performance: [
        { label: 'উৎস', value: 'সিলেটের নির্বাচিত প্রিমিয়াম চা বাগান' },
        { label: 'লিকার', value: 'উজ্জ্বল গোল্ডেন-রেড, কড়া ও গভীর' },
        { label: 'মান', value: 'প্রিমিয়াম গ্রেড CTC — বিশেষজ্ঞ পরীক্ষিত' },
      ],
      nutritional: [
        { label: 'অ্যান্টি-অক্সিডেন্ট', value: 'প্রাকৃতিকভাবে উচ্চমাত্রায় বিদ্যমান' },
        { label: 'ক্যাফেইন', value: 'সুষম ও প্রাকৃতিক মাত্রা' },
        { label: 'ফ্লেভোনয়েড', value: 'প্রাকৃতিক উপাদান সমৃদ্ধ' },
        { label: 'বিশুদ্ধতা', value: '১০০% প্রাকৃতিক — কোনো কেমিক্যাল নেই' },
      ],
      advantages: [
        'নির্বাচিত চা বাগানের পাতা: সিলেটের সেরা বাগান থেকে "দুটি পাতা একটি কুঁড়ি" সংগ্রহ',
        'অতুলনীয় প্রাকৃতিক ঘ্রাণ: বিশেষ ব্লেন্ডিং পদ্ধতি — ঘ্রাণ দীর্ঘসময় অটুট থাকে',
        'বিশেষজ্ঞ ব্লেন্ডারদের তত্ত্বাবধানে তৈরি — প্রতিটি ব্যাচ কঠোরভাবে পরীক্ষিত',
        'ব্রিউয়িং গাইড: পরিষ্কার পানি ফুটিয়ে ১ চামচ চা দিন, ৩–৫ মিনিট ঢেকে রাখুন',
        'সংরক্ষণ: এয়ারটাইট পাত্রে, আলো-তাপ ও তীব্র ঘ্রাণ থেকে দূরে, শুকনো চামচ ব্যবহার করুন',
        'কাস্টমার রিভিউ: "এত সুন্দর লিকার আর ঘ্রাণ সচরাচর দেখা যায় না।" — একজন সন্তুষ্ট গ্রাহক',
        'সতর্কতা: সিল ছেঁড়া বা প্যাকেট ক্ষতিগ্রস্ত হলে পণ্যটি গ্রহণ করবেন না',
      ],
      functionality: {
        badge: 'প্রাকৃতিক বিশুদ্ধতা ও স্বাস্থ্য উপকারিতা',
        title: 'সিলেটের প্রিমিয়াম ব্লেন্ডের অনন্য স্বাদ ও সতেজতার রহস্য',
        items: [
          {
            icon: 'Zap',
            title: 'কড়া লিকার ও সতেজ প্রাকৃতিক ঘ্রাণ',
            desc: 'সিলেটের সেরা ক্লোন চা পাতা থেকে পাওয়া যায় গাঢ় সোনালী-লালচে লিকার এবং দীর্ঘসময় অটুট থাকা চা বাগানের তাজা সুবাস।'
          },
          {
            icon: 'HeartPulse',
            title: 'উচ্চ অ্যান্টিঅক্সিডেন্ট ও ইমিউনিটি বুস্ট',
            desc: 'প্রাকৃতিক ক্যাটেচিন ও পলিফেনল ফ্রি-র‌্যাডিক্যাল দূর করে, শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়ায় এবং সারাদিনের ক্লান্তি দূর করে।'
          },
          {
            icon: 'ShieldCheck',
            title: 'আর্দ্রতারোধক সুরক্ষা ও জিরো কেমিক্যাল',
            desc: 'শতভাগ বিশুদ্ধ পাতা, কোনো কৃত্রিম রং বা কেমিক্যাল নেই এবং মাল্টি-লেয়ার ফয়েল প্যাকেজিংয়ে সর্বদা বাগানের মতো তাজা থাকে।'
          }
        ]
      }
    },
    en: {
      name: 'UNIFYLD Premium Blend Tea',
      tagline: '"Enchanting taste wrapped in elegance – freshness in every sip."',
      phase: 'Premium Tea',
      duration: 'Food & Beverage',
      bagSize: '500g Bag',
      description: 'UNIFYLD Premium Blend Tea is crafted exclusively from the tender "two leaves and a bud" handpicked across the pristine hills of Sylhet. Processed with zero dust or filler mixtures using top-grade CTC granulation, it yields a deep golden-red liquor, a lingering fresh garden aroma, and rich polyphenol antioxidants for mind and body rejuvenation.',
      highlights: [
        { icon: 'Zap', text: 'Strong Liquor & Bright Color' },
        { icon: 'ShieldCheck', text: '100% Purity Guarantee' },
        { icon: 'TrendingUp', text: 'Unmatched Natural Aroma' },
      ],
      characteristics: [
        { label: 'Blend Type', value: 'Premium Blend (High Quality CTC)' },
        { label: 'Taste', value: 'Strong & Fresh' },
        { label: 'Aroma', value: 'Natural Fragrance' },
        { label: 'Color', value: 'Bright Golden Red' },
        { label: 'Net Weight', value: '500 grams' },
        { label: 'Manufacturer', value: 'MI UNIFYLD AGRO LTD' },
      ],
      performance: [
        { label: 'Source', value: 'Premium Sylhet Tea Gardens' },
        { label: 'Liquor', value: 'Golden-Red, Strong & Deep' },
        { label: 'Grade', value: 'Premium CTC Grade' },
      ],
      nutritional: [
        { label: 'Antioxidants', value: 'Highly Present' },
        { label: 'Caffeine', value: 'Balanced & Natural Level' },
        { label: 'Flavonoids', value: 'Rich in Natural Compounds' },
        { label: 'Purity', value: '100% Natural, No Chemicals' },
      ],
      advantages: [
        'Finest "two leaves and a bud" from Sylhet premium gardens',
        'Expert blenders supervise — every batch tested for quality',
        'Modern hygienic packaging — no artificial coloring',
        'Brewing guide: steep 3-5 mins covered → full aroma & liquor',
        'Storage: airtight container, away from light & heat',
        'Caution: Do not accept torn or open-sealed packets',
      ],
      functionality: {
        badge: 'Natural Purity & Health Benefits',
        title: 'The Secret of Sylhet\'s Pure Aroma & Vitality',
        items: [
          {
            icon: 'Zap',
            title: 'Rich Golden Liquor & Fresh Aroma',
            desc: 'Selected high-grown clonal leaves produce an instant deep golden-red liquor with captivating garden freshness.'
          },
          {
            icon: 'HeartPulse',
            title: 'Antioxidant Defense & Vitality',
            desc: 'Packed with natural catechins and theaflavins that neutralize free radicals, sharpen alertness, and boost metabolism.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Aroma-Lock Foil & 100% Pure',
            desc: 'Multi-layer barrier packaging protects fragile aroma oils from humidity, with zero artificial colors or additives.'
          }
        ]
      }
    }
  },
  {
    id: 'premium-flour',
    category: 'food',
    color: 'from-amber-400 to-yellow-600',
    price: 180.0,
    comingSoon: true,
    bn: {
      name: 'ইউনিফাইল্ড প্রিমিয়াম আটা',
      tagline: 'পুষ্টির পূর্ণতা, প্রতিদিনের স্বাস্থ্যকর নাস্তা — বিশুদ্ধ গমের শক্তি, সুস্থ পরিবারের তৃপ্তি।',
      phase: 'ইউনিফাইল্ড প্রিমিয়াম আটা',
      duration: 'ফুড ও বিভারেজ',
      bagSize: '১ কেজি / ২ কেজি / ৫ কেজি',
      description: 'ইউনিফাইল্ড প্রিমিয়াম আটা আন্তর্জাতিক সেরা উৎস থেকে সংগৃহীত বাছাইকৃত সোনালী গম থেকে উৎপাদিত। অত্যাধুনিক ইউরোপীয় প্রযুক্তির স্বয়ংক্রিয় মেশিনে প্রস্তুত হওয়ায় গমের প্রাকৃতিক ফাইবার, ভিটামিন ও মিনারেল সম্পূর্ণ অক্ষুণ্ণ থাকে। কোনো প্রকার ক্ষতিকর ব্লিচিং বা কৃত্রিম উপাদান ছাড়াই এটি তৈরি করে দীর্ঘক্ষণ নরম, ফুলকো ও সুস্বাদু রুটি।',
      highlights: [
        { icon: 'Zap', text: 'বাছাইকৃত প্রিমিয়াম সোনালী গম — আন্তর্জাতিক মানসম্পন্ন' },
        { icon: 'ShieldCheck', text: 'শতভাগ হাইজেনিক অটোমেটিক প্যাকেজিং — কোনো কেমিক্যাল নেই' },
        { icon: 'TrendingUp', text: 'প্রাকৃতিক ফাইবার সমৃদ্ধ — দীর্ঘক্ষণ নরম ও ফুলকো রুটি' },
      ],
      characteristics: [
        { label: 'পণ্যের ধরন', value: 'প্রিমিয়াম গ্রেড আটা (Premium Grade Atta)' },
        { label: 'উপাদান', value: '১০০% বাছাইকৃত প্রাকৃতিক গম' },
        { label: 'প্রক্রিয়া', value: 'সম্পূর্ণ স্বয়ংক্রিয় ও ল্যাব পরীক্ষিত' },
        { label: 'পুষ্টিগুণ', value: 'প্রাকৃতিক ফাইবার, আয়রন ও মিনারেল সমৃদ্ধ' },
        { label: 'রঙ ও টেক্সচার', value: 'প্রাকৃতিক সাদা, মসৃণ ও সূক্ষ্ম' },
        { label: 'ব্যবহার', value: 'রুটি, পরোটা ও ঘরোয়া নাস্তার জন্য উপযোগী' },
        { label: 'নেট ওজন', value: '১ কেজি / ২ কেজি / ৫ কেজি' },
        { label: 'প্রস্তুতকারক', value: 'MI UNIFYLD AGRO LTD' },
      ],
      performance: [
        { label: 'রুটির মান', value: 'দীর্ঘসময় নরম, ফুলকো ও আকর্ষণীয় সাদা' },
        { label: 'বিশুদ্ধতা', value: '১০০% ভেজালমুক্ত — কোনো ব্লিচিং নেই' },
        { label: 'স্বাস্থ্য', value: 'হজম সহায়ক, দীর্ঘক্ষণ পেট ভরা অনুভূতি' },
      ],
      nutritional: [
        { label: 'কার্বোহাইড্রেট', value: 'সুষম ও প্রাকৃতিক' },
        { label: 'প্রোটিন', value: 'প্রাকৃতিক গমের প্রোটিন' },
        { label: 'ডায়েটারি ফাইবার', value: 'পর্যাপ্ত মাত্রায় — হজম প্রক্রিয়া সহায়ক' },
        { label: 'আয়রন ও মিনারেল', value: 'প্রাকৃতিকভাবে সমৃদ্ধ' },
      ],
      advantages: [
        'বাছাইকৃত প্রিমিয়াম গম: আন্তর্জাতিক মানসম্পন্ন উৎস থেকে সংগৃহীত সোনালী গম — সম্পূর্ণ ভেজালমুক্ত',
        'আধুনিক মাল্টি-স্টেজ মিলিং: ইউরোপীয় প্রযুক্তিতে গমের ফাইবার, ভিটামিন ও স্বাদ অক্ষুণ্ণ',
        'প্রাকৃতিক ফাইবার সমৃদ্ধ: স্বাস্থ্যকর হজম প্রক্রিয়া ও দীর্ঘক্ষণ পেট ভরা অনুভূতি',
        'দীর্ঘক্ষণ নরম রুটি: ঠান্ডা হলেও সহজে শক্ত হয় না — ফুলকো ও সাদা থাকে',
        'শতভাগ হাইজেনিক: উৎপাদন থেকে প্যাকেজিং — কোনো কৃত্রিম ব্লিচিং বা কেমিক্যাল নেই',
        'সংরক্ষণ: শুকনো এয়ারটাইট পাত্রে রাখুন, আর্দ্রতা ও তীব্র ঘ্রাণ থেকে দূরে',
        'সতর্কতা: মেয়াদোত্তীর্ণের তারিখ দেখে ক্রয় করুন, সিল ছেঁড়া থাকলে গ্রহণ করবেন না',
      ],
      functionality: {
        badge: 'পুষ্টিগুণ ও স্বাস্থ্যকর উপকারিতা',
        title: 'বিশুদ্ধ গমের পুষ্টি ও সারাদিন নরম রুটির নিশ্চয়তা',
        items: [
          {
            icon: 'TrendingUp',
            title: 'প্রাকৃতিক ফাইবার ও সহজ পরিপাক',
            desc: 'গমের প্রাকৃতিক ভূষি ও ফাইবার অটুট থাকায় এটি সহজে হজম হয় এবং রক্তে শর্করার মাত্রা নিয়ন্ত্রণে সহায়ক।'
          },
          {
            icon: 'Zap',
            title: 'দীর্ঘক্ষণ নরম ও ফুলকো রুটি',
            desc: 'উন্নত জলধারণ ক্ষমতার কারণে রুটি হয় নরম ও তুলতুলে, যা অনেক সময় পরেও সহজে শক্ত হয় না।'
          },
          {
            icon: 'ShieldCheck',
            title: 'ইউরোপীয় স্বয়ংক্রিয় মিলিং ও জিরো ব্লিচ',
            desc: 'সম্পূর্ণ স্পর্শহীন অটোমেটিক প্যাকেজিং, কোনো ক্ষতিকর ব্লিচিং এজেন্ট নেই — পরিবারের জন্য শতভাগ নিরাপদ খাদ্য।'
          }
        ]
      }
    },
    en: {
      name: 'UNIFYLD Premium Atta, Flour & Semolina',
      tagline: 'The power of pure wheat, the satisfaction of a healthy family.',
      phase: 'Premium Atta',
      duration: 'Food & Beverage',
      bagSize: 'Various Sizes',
      description: 'UNIFYLD Premium Atta, Flour & Semolina is milled from 100% selected whole golden wheat sourced from prime international harvests. Using automated European milling technology with zero human touch and no chemical bleaching, it preserves natural wheat bran fiber, iron, and B-vitamins, producing rotis that stay soft, fluffy, and wholesome for hours.',
      highlights: [
        { icon: 'Zap', text: 'Selected Premium Wheat' },
        { icon: 'ShieldCheck', text: 'Fully Automatic Hygienic Packaging' },
        { icon: 'TrendingUp', text: 'High Fiber & Nutritional Value' },
      ],
      characteristics: [
        { label: 'Product Type', value: 'Premium Grade Atta' },
        { label: 'Ingredient', value: '100% Selected Natural Wheat' },
        { label: 'Process', value: 'Fully automated & lab-tested' },
        { label: 'Nutrition', value: 'Rich in Iron, Folic Acid & Vitamins' },
        { label: 'Best For', value: 'Healthy roti, paratha & homemade food' },
        { label: 'Manufacturer', value: 'MI UNIFYLD AGRO LTD' },
      ],
      performance: [
        { label: 'Bread Quality', value: 'Stays soft, fluffy & white longer' },
        { label: 'Purity', value: '100% Adulteration-Free' },
        { label: 'Health', value: 'Improves digestion, keeps full longer' },
      ],
      nutritional: [
        { label: 'Carbohydrates', value: 'Balanced & Natural' },
        { label: 'Protein', value: 'Natural Wheat Protein' },
        { label: 'Dietary Fiber', value: 'High Level – Aids Digestion' },
        { label: 'Iron & Folic Acid', value: 'Naturally Enriched' },
      ],
      advantages: [
        'World\'s finest golden wheat → Maximum nutritional value guaranteed',
        'European milling technology → Vitamins & fiber fully preserved',
        'Fully automatic packaging → No artificial bleaching or chemicals',
        'Storage: Keep in dry airtight container, away from moisture',
        'Health: Supports diabetes management & reduces heart disease risk',
        'Caution: Check expiry date, do not accept torn/open-sealed packets',
      ],
      functionality: {
        badge: 'Wholesome Nutrition & Digestive Wellness',
        title: '100% Whole Wheat Nutrition & Lasting Softness',
        items: [
          {
            icon: 'TrendingUp',
            title: 'High Dietary Fiber & Easy Digestion',
            desc: 'Natural whole-wheat bran fiber promotes healthy gut flora, prevents spikes in blood sugar, and supports satiety.'
          },
          {
            icon: 'Zap',
            title: 'Lasting Softness & Fluffy Rotis',
            desc: 'Superior moisture retention elasticity ensures rotis puff effortlessly and remain tender even when packed for tiffin.'
          },
          {
            icon: 'ShieldCheck',
            title: 'Automated European Milling & Zero Bleach',
            desc: 'Untouched by human hands from milling to sealing, 100% chemical-free with zero bleaching agents or preservatives.'
          }
        ]
      }
    }
  }
];
