import { loadStripe } from '@stripe/stripe-js'

export async function getStripePublic(){
  return await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
}
