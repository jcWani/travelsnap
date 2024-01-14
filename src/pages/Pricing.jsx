// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $11/month.
          </h2>
          <p>
            We offer uncomplicated and transparent pricing structures designed to make the process
            straightforward and easy for our customers to understand. We believe in providing a
            hassle-free experience for our clients, where they can easily comprehend the costs
            associated with our products or services.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
