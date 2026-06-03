export interface ThemeConfig {
  primary: string;
  secondary: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  logo: string;
}

export interface ContactConfig {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  googleMapLink: string;
  businessHours: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface HeroConfig {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  highlightedWord: string;
  subheading: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string; // React component name or URL depending on how we handle icons
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  instagram: string;
  twitter: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  isPopular?: boolean;
  features: PricingFeature[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  beforeImage: string;
  afterImage: string;
  clientName: string;
  duration: string;
}

export interface CTAConfig {
  headingLine1: string;
  headingLine2: string;
  highlightedWord: string;
  subheading: string;
  buttonText: string;
}

export interface SiteConfig {
  business: BusinessConfig;
  theme: ThemeConfig;
  contact: ContactConfig;
  socialLinks: SocialLinks;
  seo: SEOConfig;
  hero: HeroConfig;
  programs: Program[];
  trainers: Trainer[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  transformations: GalleryImage[];
  cta: CTAConfig;
}
