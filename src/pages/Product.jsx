import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img src="img-1.jpg" alt="person with dog overlooking mountain with sunset" />
        <div>
          <h2>About TravelSnap.</h2>
          <p>
            From intuitive trip planning tools to real-time updates, TravelSnap is your go-to
            companion for all things travel-related. Delve into the world of TravelSnap and explore
            the multitude of features and services crafted to make your travel experience seamless
            and unforgettable.
          </p>
          <p>
            Immerse yourself in a travel ecosystem that prioritizes convenience, connectivity, and
            the joy of exploration. This is TravelSnap – redefining the way you experience and share
            your adventures.
          </p>
        </div>
      </section>
    </main>
  );
}
