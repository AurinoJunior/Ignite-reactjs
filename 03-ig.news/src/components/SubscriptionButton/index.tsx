import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripePublic } from "../../services/stripePublic";
import styles from "./styles.module.scss";

type SubscriptionButtonProps = {
  priceId: string;
};

export function SubscriptionButton({ priceId }: SubscriptionButtonProps) {
  const [session] = useSession();

  async function handleSubscriptionNow() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;
      const stripe = await getStripePublic();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="submit"
      className={styles.subscription__button}
      onClick={handleSubscriptionNow}
    >
      Subscription now
    </button>
  );
}
