import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { fauna } from "../../services/fauna";
import {query as q} from 'faunadb'
import { stripe } from "../../services/stripe";

type User = {
  ref: {
    id: string;
  },
  data: {
    stripe_customer_id: string;
  }
}

async function createSubiscribeCheckout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }

  const session = await getSession({ req });

  const user: User = await fauna.query(
    q.Get(
      q.Match(
        q.Index('user_by_email'),
        q.Casefold(session.user.email),
      )
    )
  )

  let customerId = user.data.stripe_customer_id;

  if(!customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: session.user.email
    })


    await fauna.query(
      q.Update(
        q.Ref(q.Collection('users'), user.ref.id),
        {
          data: {
            stripe_customer_id: stripeCustomer.id,
          }
        }
      )
    )

    customerId = stripeCustomer.id
  }


  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ["card"],
    billing_address_collection: "required",
    line_items: [{ price: process.env.PRICE_API_ID, quantity: 1 }],
    mode: "subscription",
    allow_promotion_codes: true,
    success_url: `${process.env.HOST_ENV}/posts`,
    cancel_url: process.env.HOST_ENV,
  });

  return res.status(200).json({sessionId: stripeCheckoutSession.id})
}

export default createSubiscribeCheckout;
