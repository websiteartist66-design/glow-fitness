export interface StudioInfo {
  name: string;
  tagline: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone: string;
  phoneRaw: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  openingHours: {
    days: string;
    morningBatch: string;
    eveningBatch: string;
    note: string;
  };
  googleMapsUrl: string;
  googleReviewsUrl: string;
}

export const STUDIO_INFO: StudioInfo = {
  name: "Glowfit Women's Fitness Studio",
  tagline: "Empowering Women to Become Stronger, Healthier & More Confident",
  category: "Women's Fitness Studio & Gym",
  rating: 4.8,
  reviewCount: 22,
  phone: "098144 06555",
  phoneRaw: "9814406555",
  address: {
    line1: "2nd Floor, ICICI Bank, 5-6, B-Block",
    line2: "Improvement Trust Road",
    landmark: "Above Engross Matrix Salon, Patel Chowk",
    area: "Patel Chowk",
    city: "Pathankot",
    state: "Punjab",
    pincode: "145001",
    full: "2nd Floor, ICICI Bank, 5-6, B-Block, Improvement Trust Road, above Engross Matrix Salon, Patel Chowk, Pathankot, Punjab 145001"
  },
  openingHours: {
    days: "Monday – Saturday (Closed Sundays)",
    morningBatch: "7:00 AM – 11:30 AM",
    eveningBatch: "4:00 PM – 8:30 PM",
    note: "Studio opens at 7:00 AM. Please contact us for specific batch schedules and trial slots."
  },
  googleMapsUrl: "https://maps.google.com/?q=Glowfit+Women's+Fitness+Studio+Patel+Chowk+Pathankot+Punjab",
  googleReviewsUrl: "https://maps.google.com/?q=Glowfit+Women's+Fitness+Studio+Patel+Chowk+Pathankot+Punjab"
};

export interface ProgramItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  equipmentUsed: string[];
  intensity: "Low to Medium" | "Medium" | "High" | "All Levels";
  targetGoal: string;
  image: string;
  badge: string;
}

export const FITNESS_PROGRAMS: ProgramItem[] = [
  {
    id: "strength-training",
    title: "Strength & Resistance Training",
    shortDesc: "Sculpt lean muscle, boost metabolic rate, and build lifelong bone density in an empowering women-focused environment.",
    fullDesc: "Our strength training area features premium ergonomic selectorized machinery, heavy-duty leg press machines, multi-angle cable stations, lat pull-downs, and free weights engineered to support female biomechanics safely.",
    benefits: [
      "Increases bone density and prevents osteoporosis",
      "Accelerates fat loss and tone development",
      "Improves posture, core stability, and balance",
      "Ergonomic machines suited for all fitness levels"
    ],
    equipmentUsed: ["Leg Press Machine", "Cable Cross Stations", "Lat Pulldown", "Dumbbells", "Resistance Bands"],
    intensity: "All Levels",
    targetGoal: "Toning, Strength, Bone Density",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular"
  },
  {
    id: "aerobics",
    title: "Aerobics & Step Aerobics",
    shortDesc: "High-energy rhythmic cardiovascular workouts combining step platforms, upbeat tempo music, and full-body endurance.",
    fullDesc: "Step into our vibrant studio floor for exhilarating aerobics routines using genuine multi-level step platforms (as featured in our studio). Led with infectious energy to build endurance, cardiovascular health, and coordination.",
    benefits: [
      "High calorie burn per session",
      "Tones calves, thighs, glutes, and core",
      "Boosts cardiovascular endurance and stamina",
      "Joyful, synchronized group motivation"
    ],
    equipmentUsed: ["Multi-level Step Decks", "Light Weights", "Aerobic Mats"],
    intensity: "Medium",
    targetGoal: "Cardio, Stamina, Lower-Body Toning",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    badge: "Verified Favorite"
  },
  {
    id: "zumba",
    title: "Zumba & Dance Fitness",
    shortDesc: "Turn workout into a celebration with dynamic Latin and international dance choreography that burns calories while having fun.",
    fullDesc: "Experience the vibrant energy and music of Zumba. No prior dance background needed! Our sessions are tailored to let you let loose, sweat out stress, and tone your whole body in a supportive, judgment-free women's community.",
    benefits: [
      "Burn 400–600 calories in a fun party atmosphere",
      "Enhances rhythm, coordination, and mood",
      "Zero-pressure, welcoming to total beginners",
      "Releases endorphins and relieves daily stress"
    ],
    equipmentUsed: ["Specialized Studio Dance Flooring", "Acoustic Sound System"],
    intensity: "Medium",
    targetGoal: "Weight Loss, Fun Cardio, Stress Relief",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80",
    badge: "High Energy"
  },
  {
    id: "yoga",
    title: "Yoga & Flexibility Training",
    shortDesc: "Mindful asanas, deep stretching, breath control, and core mobility to restore balance, flexibility, and inner peace.",
    fullDesc: "Rebalance your body and mind in our peaceful studio zones. Perfect for increasing joint mobility, relieving back tension, strengthening core postural muscles, and unwinding after intensive workouts or hectic daily routines.",
    benefits: [
      "Improves total-body flexibility and spine alignment",
      "Relieves chronic shoulder, back, and hip tension",
      "Strengthens deep core and stabilizing muscles",
      "Calms the nervous system through pranayama & mindfulness"
    ],
    equipmentUsed: ["Premium Yoga Mats", "Yoga Blocks", "Stretching Straps"],
    intensity: "Low to Medium",
    targetGoal: "Flexibility, Mind-Body Balance, Posture",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    badge: "Mind & Body"
  },
  {
    id: "hiit-cardio",
    title: "HIIT & Functional Cardio",
    shortDesc: "Short, intense bursts of exercise paired with active recovery periods for maximum metabolic conditioning and fat burning.",
    fullDesc: "High-Intensity Interval Training designed specifically for female physiology. Improve your VO2 max, ignite the post-workout afterburn effect (EPOC), and achieve rapid conditioning in time-efficient, structured sessions.",
    benefits: [
      "Continuous calorie burn even hours after training (EPOC)",
      "Time-efficient workouts tailored for busy women",
      "Enhances functional speed, agility, and stamina",
      "Adaptable intensity levels for beginners to advanced"
    ],
    equipmentUsed: ["Kettlebells", "Agility Ladders", "Jump Ropes", "Plyo Steps"],
    intensity: "High",
    targetGoal: "Rapid Fat Burn, Stamina, Peak Conditioning",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    badge: "Fat Loss Accelerator"
  },
  {
    id: "weight-management",
    title: "Weight Management & Body Toning",
    shortDesc: "Holistic fitness routines and lifestyle habits to achieve healthy, sustainable, and lasting body composition goals.",
    fullDesc: "Tailored workout combinations blending progressive resistance, cardio, and personalized guidance to help women in Pathankot lose excess body fat, gain lean tone, and sustain high daily energy without restrictive extremes.",
    benefits: [
      "Sustainable fat loss tailored to female hormonal cycles",
      "Comprehensive guidance on weekly activity balance",
      "Consistent progress tracking and encouragement",
      "Encouraging, supportive sisterhood"
    ],
    equipmentUsed: ["Full Studio Equipment Suite", "Body Composition Metrics"],
    intensity: "All Levels",
    targetGoal: "Sustainable Weight Loss, Core & Full Body Toning",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    badge: "Holistic Results"
  }
];

export interface ClassItem {
  id: string;
  name: string;
  category: "Cardio & Dance" | "Strength & Tone" | "Mind & Body" | "HIIT & Functional";
  duration: string;
  intensity: "Low" | "Moderate" | "High";
  suitableFor: string;
  description: string;
  highlights: string[];
}

export const STUDIO_CLASSES: ClassItem[] = [
  {
    id: "cls-aerobics",
    name: "Classic & Step Aerobics",
    category: "Cardio & Dance",
    duration: "45 - 50 mins",
    intensity: "Moderate",
    suitableFor: "Beginners to Advanced",
    description: "Rhythmic stepping sequences choreographed to energizing beats, utilizing our studio step boxes to tone legs and sculpt hips.",
    highlights: ["Cardio Conditioning", "Rhythm & Coordination", "Leg & Glute Focus"]
  },
  {
    id: "cls-zumba",
    name: "Zumba Party Fitness",
    category: "Cardio & Dance",
    duration: "45 mins",
    intensity: "Moderate",
    suitableFor: "All Fitness Levels",
    description: "High-spirit dance fitness session blending Latin, Bollywood, and international rhythms for full-body calorie burn and pure joy.",
    highlights: ["400+ Calorie Burn", "Mood Booster", "No Experience Required"]
  },
  {
    id: "cls-strength",
    name: "Women's Machine & Free-Weight Circuit",
    category: "Strength & Tone",
    duration: "45 - 60 mins",
    intensity: "Moderate",
    suitableFor: "All Women",
    description: "Guided circuit utilizing our studio's leg press, cable pulley stations, chest press, and dumbbells for overall tone and posture.",
    highlights: ["Ergonomic Gym Machines", "Form Correction", "Metabolic Tone"]
  },
  {
    id: "cls-yoga",
    name: "Gentle Flow & Restorative Yoga",
    category: "Mind & Body",
    duration: "50 mins",
    intensity: "Low",
    suitableFor: "Beginners & Rest Days",
    description: "Holistic asana sequences focusing on flexibility, spinal alignment, breath control, and releasing pelvic and back tightness.",
    highlights: ["Joint Mobility", "Stress Reduction", "Postural Alignment"]
  },
  {
    id: "cls-hiit",
    name: "Cardio HIIT & Core Burn",
    category: "HIIT & Functional",
    duration: "40 mins",
    intensity: "High",
    suitableFor: "Intermediate & Energy Seekers",
    description: "High-intensity intervals combining bodyweight movements, plyometric steppers, and core stability drills for rapid conditioning.",
    highlights: ["Afterburn Effect (EPOC)", "Core Sculpting", "Time-Efficient"]
  },
  {
    id: "cls-dance",
    name: "Dance Fitness & Rhythm Workout",
    category: "Cardio & Dance",
    duration: "45 mins",
    intensity: "Moderate",
    suitableFor: "All Women",
    description: "Fast-paced, uplifting dance choreography designed to improve agility, cardiovascular endurance, and fitness stamina.",
    highlights: ["High Energy", "Full-Body Movement", "Fun Group Dynamics"]
  }
];

export interface VerifiedReview {
  id: string;
  author: string;
  avatarSeed: string;
  rating: number;
  date: string;
  text: string;
  highlightPhrase: string;
  verifiedOnGoogle: boolean;
}

export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: "rev-1",
    author: "Studio Member",
    avatarSeed: "Pooja",
    rating: 5,
    date: "Google Verified Review",
    text: "Vibrant atmosphere , Great energy sessions with Proper hygiene! The environment is truly welcoming for women and the workouts leave you energized.",
    highlightPhrase: "Vibrant atmosphere, Great energy sessions with Proper hygiene!",
    verifiedOnGoogle: true
  },
  {
    id: "rev-2",
    author: "Gym Client",
    avatarSeed: "Kiran",
    rating: 5,
    date: "Google Verified Review",
    text: "The owner is very polite and happy & satisfied with the service. Really appreciate the safe and supportive space created for ladies in Pathankot.",
    highlightPhrase: "The owner is very polite and happy & satisfied with the service",
    verifiedOnGoogle: true
  },
  {
    id: "rev-3",
    author: "Fitness Enthusiast",
    avatarSeed: "Simran",
    rating: 5,
    date: "Google Verified Review",
    text: "People highlight the excellent equipment, vibrant atmosphere, and variety of classes including aerobics, yoga, and Zumba. Effective training sessions that improve fitness and strength in a safe environment.",
    highlightPhrase: "Excellent equipment, vibrant atmosphere, and variety of classes",
    verifiedOnGoogle: true
  },
  {
    id: "rev-4",
    author: "Local Member (Pathankot)",
    avatarSeed: "Ananya",
    rating: 5,
    date: "Google Verified Review",
    text: "Safe and encouraging environment for all women in Pathankot. The polite staff and well-maintained equipment make working out here an absolute pleasure.",
    highlightPhrase: "Safe environment and the polite staff",
    verifiedOnGoogle: true
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Gym Equipment" | "Studio Floor" | "Aerobics & Steppers" | "Lighting & Vibe";
  image: string;
  description: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Strength & Resistance Zone",
    category: "Gym Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    description: "Ergonomic multi-station cable machines, lat pull-downs, and weight resistance systems engineered for women's strength.",
    caption: "Heavy-duty strength and toning machinery at Glowfit Studio"
  },
  {
    id: "gal-2",
    title: "Heavy-Duty Leg Press & Lower Body Zone",
    category: "Gym Equipment",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
    description: "Angled leg press machine and dedicated lower-body equipment for building leg strength, toning glutes, and boosting bone density.",
    caption: "Leg press & lower body workout stations"
  },
  {
    id: "gal-3",
    title: "Aerobics Step Platforms & Floor Zone",
    category: "Aerobics & Steppers",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    description: "Stacked red and black aerobics step platforms ready for upbeat group cardio, rhythm stepping, and fat burn sessions.",
    caption: "Step aerobics area with specialized decks"
  },
  {
    id: "gal-4",
    title: "Vibrant Ceiling Lighting & Modern Aesthetic",
    category: "Lighting & Vibe",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    description: "Custom geometric neon/LED ceiling lighting creating an energized, modern, and inspiring atmosphere for every session.",
    caption: "Modern geometric neon ceiling setup & studio atmosphere"
  },
  {
    id: "gal-5",
    title: "Zumba & Group Dance Fitness Floor",
    category: "Studio Floor",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1000&q=80",
    description: "Spacious studio floor designed for free movement, dynamic Zumba choreography, and heart-pumping group workouts.",
    caption: "Group fitness and dance workout zone"
  },
  {
    id: "gal-6",
    title: "Mindful Yoga & Core Mat Area",
    category: "Studio Floor",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80",
    description: "Sanitized mat zone dedicated to yoga asanas, deep stretching, abdominal conditioning, and flexibility drills.",
    caption: "Yoga & restorative stretching station"
  }
];

export interface MembershipPlan {
  id: string;
  name: string;
  durationLabel: string;
  tagline: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-monthly",
    name: "Monthly Starter Pass",
    durationLabel: "1 Month Membership",
    tagline: "Flexible entry for women beginning their fitness routine.",
    features: [
      "Access to Gym & Strength Equipment",
      "Participation in Group Aerobics & Zumba",
      "Yoga & Stretching Sessions",
      "Clean & Sanitized Locker Facilities",
      "Initial Fitness & Machine Orientation"
    ],
    recommendedFor: "Beginners & Short-Term Trial"
  },
  {
    id: "plan-quarterly",
    name: "Quarterly Transformation",
    durationLabel: "3 Months Membership",
    tagline: "Our most popular choice for visible toning, stamina, and consistency.",
    features: [
      "Full Gym & All Group Classes Access",
      "Unlimited Aerobics, Zumba & Yoga Batches",
      "Periodic Body Measurement & Progress Check",
      "Priority Batch Slot Reservation",
      "Personalized Routine Guidance"
    ],
    recommendedFor: "Consistent Results & Weight Management",
    popular: true
  },
  {
    id: "plan-halfyearly",
    name: "Half-Yearly Fitness Pass",
    durationLabel: "6 Months Membership",
    tagline: "Long-term commitment to sustainable health, vitality, and strength.",
    features: [
      "Full Studio Access (Morning or Evening)",
      "All Cardio, Strength, HIIT & Dance Classes",
      "Dedicated Trainer Guidance & Form Correction",
      "Special Discounts on Personal Training Add-ons",
      "Complimentary Guest Pass for a Friend"
    ],
    recommendedFor: "Committed Fitness Enthusiasts"
  },
  {
    id: "plan-annual",
    name: "Annual VIP Wellness Pass",
    durationLabel: "12 Months Membership",
    tagline: "The ultimate 365-day investment in your health, confidence, and strength.",
    features: [
      "365 Days Unlimited Access to Glowfit Studio",
      "Unlimited Access to All Class Formats",
      "Comprehensive Fitness Goal Tracking",
      "Complimentary Freeze Period (Vacation / Travel)",
      "Highest Value Per Month Rate"
    ],
    recommendedFor: "Lifelong Wellness & Maximum Value"
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Classes & Facilities" | "Location & Timing" | "Safety & Beginners";
}

export const FAQS: FaqItem[] = [
  {
    question: "Is Glowfit strictly an exclusive women-only fitness studio?",
    answer: "Yes, 100%! Glowfit Women's Fitness Studio in Pathankot is designed exclusively for women, providing a safe, comfortable, judgment-free, and empowering environment where you can work out with complete peace of mind.",
    category: "General"
  },
  {
    question: "I have never worked out in a gym before. Is Glowfit suitable for total beginners?",
    answer: "Absolutely. A large number of our members started their fitness journey with zero prior experience. Our polite and supportive staff will introduce you to all equipment (such as our leg press, cable stations, and steppers) and guide you through beginner-friendly routines in aerobics, Zumba, and yoga.",
    category: "Safety & Beginners"
  },
  {
    question: "What types of group fitness classes are offered at Glowfit?",
    answer: "We offer a diverse variety of high-energy and restorative classes, including Aerobics & Step Aerobics, Zumba & Dance Fitness, Yoga & Flexibility, HIIT & Cardio Conditioning, and structured Strength & Resistance Training.",
    category: "Classes & Facilities"
  },
  {
    question: "Where is Glowfit Women's Fitness Studio located in Pathankot?",
    answer: "We are centrally located at: 2nd Floor, ICICI Bank, 5-6, B-Block, Improvement Trust Road, above Engross Matrix Salon, Patel Chowk, Pathankot, Punjab 145001. It is easily accessible with convenient landmark references.",
    category: "Location & Timing"
  },
  {
    question: "What are the studio's operating hours and batch timings?",
    answer: "Glowfit opens early at 7:00 AM. We offer flexible morning batches (typically 7:00 AM – 11:30 AM) and evening batches (typically 4:00 PM – 8:30 PM) Monday through Saturday. Please call us at 098144 06555 to inquire about current batch slots.",
    category: "Location & Timing"
  },
  {
    question: "What equipment does the gym have?",
    answer: "Our studio features specialized gym equipment including heavy-duty leg press machines, multi-angle cable pulleys, chest & lat machines, aerobic step decks, dumbbells, and sanitized workout mats designed for women's ergonomic safety.",
    category: "Classes & Facilities"
  },
  {
    question: "How can I book a trial workout or enquire about membership fees?",
    answer: "You can easily book a trial session by filling out the booking form on this website, calling us directly at 098144 06555, or sending us a message on WhatsApp. We will promptly share membership packages and reserve your trial spot!",
    category: "General"
  },
  {
    question: "What should I bring to my first workout session?",
    answer: "Please bring clean indoor workout shoes, comfortable fitness attire, a personal water bottle, and a small workout towel. Sanitized equipment and changing facilities are readily available at the studio.",
    category: "Safety & Beginners"
  }
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Strength Training" | "Cardio & Dance" | "Women's Wellness" | "Beginner Tips";
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "beginners-guide-strength-training-women",
    title: "Beginner's Guide to Strength Training for Women: Busting Myths & Building Confidence",
    excerpt: "Why lifting weights won't make you bulky, and how progressive resistance training accelerates fat loss, protects bones, and enhances daily vitality.",
    category: "Strength Training",
    readTime: "4 min read",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    content: [
      "For decades, an outdated myth suggested that women should stick purely to light cardio and avoid the weight room. Science and modern fitness have proven the exact opposite: resistance training is one of the most transformative practices for female health.",
      "Lifting weights increases your basal metabolic rate, meaning your body burns more calories even when at rest. Furthermore, strength training places healthy mechanical stress on bones, stimulating osteoblast activity to maintain strong bone density — crucial for lifelong joint and bone health.",
      "At Glowfit Women's Fitness Studio in Pathankot, our equipment includes beginner-friendly selectorized machines and guided leg press stations so you can learn proper form safely without intimidation.",
      "Start with 2-3 sessions per week focusing on compound movements: squats, leg presses, cable rows, and core stabilization. You will quickly notice higher energy levels, toned posture, and greater self-confidence!"
    ]
  },
  {
    id: "post-2",
    slug: "zumba-vs-aerobics-which-workout-for-you",
    title: "Zumba vs. Aerobics: Which Cardio Workout Best Matches Your Fitness Goals?",
    excerpt: "Comparing high-energy dance routines with rhythmic step aerobics to help you choose the ideal cardio session for maximum calorie burn.",
    category: "Cardio & Dance",
    readTime: "5 min read",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    content: [
      "Cardiovascular exercise is essential for heart health, stamina, and burning calories. Two of the most popular group workouts at Glowfit are Aerobics (specifically step aerobics) and Zumba dance fitness.",
      "**Zumba** is characterized by fluid dance moves set to Latin, Bollywood, and international beats. It feels like an uplifting party where you forget you're working out while torching 400–600 calories.",
      "**Step Aerobics**, on the other hand, utilizes elevated step platforms (decks) in synchronized rhythmic patterns. It provides intense lower-body sculpting for calves, thighs, and glutes, with strong core engagement.",
      "**The Best Strategy:** You don't have to choose! Combining 2 days of Zumba for pure cardio joy with 2 days of Step Aerobics and Strength Training gives your body the ultimate balance of conditioning and tone."
    ]
  },
  {
    id: "post-3",
    slug: "why-women-only-gym-creates-consistency",
    title: "Why an Exclusive Women-Only Gym Creates Greater Consistency and Comfort",
    excerpt: "How a safe, supportive, and polite environment eliminates gym anxiety and empowers women to achieve lasting fitness milestones.",
    category: "Women's Wellness",
    readTime: "4 min read",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=800&q=80",
    content: [
      "Gym intimidation is a real barrier for many women. Walking into a crowded, co-ed gym can sometimes feel overwhelming, especially for beginners who are unsure of how to use machinery or execute movements.",
      "An exclusive women's fitness studio completely transforms this dynamic. At Glowfit, the atmosphere is vibrant, polite, hygienic, and deeply encouraging.",
      "When you work out among fellow women sharing similar health aspirations, self-consciousness disappears. You feel free to push your limits, try new classes like HIIT or heavy leg presses, and celebrate personal milestones.",
      "Our members frequently remark on the polite owner and staff, the clean hygiene standards, and the positive sisterhood that makes daily workouts a highlight of the day rather than a chore."
    ]
  },
  {
    id: "post-4",
    slug: "morning-vs-evening-workouts-pathankot-women",
    title: "Morning vs. Evening Workouts: Finding Your Ideal Rhythm at Glowfit",
    excerpt: "Discover the metabolic and mental benefits of early morning sessions vs. evening stress-busting workouts to fit your daily schedule.",
    category: "Beginner Tips",
    readTime: "3 min read",
    date: "August 2026",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    content: [
      "Glowfit opens its doors at 7:00 AM to accommodate early risers, as well as offering evening batches for students, professionals, and homemakers.",
      "**Morning Workouts (7:00 AM – 11:30 AM):** Exercising in the morning sets a positive hormonal tone for the day, stabilizes blood sugar levels, and ensures your fitness commitment is fulfilled before daily errands arise.",
      "**Evening Workouts (4:00 PM – 8:30 PM):** Body temperature and muscle strength peak in the late afternoon, making evening sessions great for heavier strength training and releasing accumulated daily mental fatigue through Zumba.",
      "The most effective workout time is simply the time you can maintain consistently. Our flexible batch options make it convenient for every woman in Pathankot to stay on track."
    ]
  }
];

export const LOCAL_AREAS_SERVED = [
  "Patel Chowk",
  "Improvement Trust Road",
  "B-Block",
  "Gandhi Nagar",
  "Mission Road",
  "Model Town",
  "Dalhousie Road",
  "Defence Road",
  "Civil Lines",
  "Sujanpur Road",
  "Dhangu Road"
];
