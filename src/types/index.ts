export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  durations: {
    '6m': { price: number; perMonth: number; savingsPct?: number };
    '12m': { price: number; perMonth: number; savingsPct?: number };
    '24m': { price: number; perMonth: number; savingsPct?: number };
  };
  features: string[];
  exclusivePerks: string[];
  ctaText: string;
}

export interface DayPassOption {
  id: string;
  name: string;
  price: number;
  description: string;
  included: string[];
}

export interface GroupXClass {
  id: string;
  title: string;
  category: 'agility' | 'strength' | 'combat' | 'mobility' | 'recovery';
  durationMinutes: number;
  intensity: 1 | 2 | 3 | 4 | 5;
  coach: string;
  timeSlot: string;
  room: string;
  caloriesBurn: string;
  description: string;
  tag: string;
  image: string;
}

export interface ArenaZone {
  id: string;
  title: string;
  subtitle: string;
  sqft: string;
  equipmentBrand: string;
  highlights: string[];
  description: string;
  image: string;
  iconName: string;
}

export interface RecoveryFacility {
  id: string;
  title: string;
  metric: string;
  target: string;
  benefits: string[];
  description: string;
  image: string;
  tag: string;
}

export interface ClubHub {
  id: string;
  name: string;
  city: 'Mumbai' | 'Bengaluru' | 'Pune' | 'Delhi-NCR';
  area: string;
  sqft: string;
  address: string;
  phone: string;
  operatingHours: string;
  amenities: string[];
  image: string;
  status: 'Open' | 'Opening Soon';
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  city: string;
  weeks: number;
  statHeadline: string;
  stats: {
    weightChange: string;
    bodyFatChange: string;
    strengthMetric: string;
  };
  storyQuote: string;
  protocol: string;
  beforeImage: string;
  afterImage: string;
}

export interface CoachProfile {
  id: string;
  number: string;
  category: string;
  title: string;
  headline: string;
  shortName: string;
  experience: string;
  specialties: string[];
  description: string;
  quote: string;
  image?: string | null;
  imageAlt: string;
}

export interface ReviewItem {
  name: string;
  review: string;
  rating?: number;
  timeAgo?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface LiveMembershipTier {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  isRecommended?: boolean;
  features: { text: string; isBold?: boolean }[];
  buttonText: string;
}

export interface TrialLeadForm {
  fullName: string;
  mobile: string;
  email: string;
  preferredHub: string;
  primaryGoal: string;
  experienceLevel: string;
}
