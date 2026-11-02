export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  projectOutcome?: string;
  rating?: number;
}

/**
 * Genuine client feedback will be populated here as verified reviews are collected.
 * No fake or invented client names, companies, or reviews are included.
 */
export const testimonialsData: Testimonial[] = [];
