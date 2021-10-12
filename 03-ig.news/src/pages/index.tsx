import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { SubscriptionButton } from "../components/SubscriptionButton";
import { stripe } from "../services/stripe";

import girlCode from "../../public/images/avatar.svg";

import styles from "../styles/home.module.scss";

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.main__hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all publication for
            <br />
            <span>{product.amount} month</span>
          </p>

          <SubscriptionButton priceId={product.priceId} />
        </section>

        <Image src={girlCode} alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(process.env.PRICE_API_ID);

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
