import { loadStripe, Stripe } from '@stripe/stripe-js';

// Initialize Stripe
let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    // Use your publishable key here - for now using placeholder
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');
  }
  return stripePromise;
};

export default getStripe;

// Stripe product configuration
export const STRIPE_PRODUCTS = {
  lite: {
    priceId: process.env.NEXT_PUBLIC_STRIPE_LITE_PRICE_ID || 'price_lite_placeholder',
    name: 'Lite Plan',
    price: 4999, // $49.99 in cents
  },
  premium: {
    priceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID || 'price_premium_placeholder',
    name: 'Premium Plan',
    price: 19999, // $199.99 in cents
  },
  spectre: {
    // Enterprise plans typically use custom pricing/contact sales
    priceId: null,
    name: 'Spectre Enterprise',
    price: null,
  },
} as const;

export type StripePlan = keyof typeof STRIPE_PRODUCTS;
