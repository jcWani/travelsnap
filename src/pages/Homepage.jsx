import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Explore the world.
          <br />
          TravelSnap records your journeys.
        </h1>
        <h2>
          A world map documenting every city you've visited. Preserve your amazing experiences and
          share with friends the extent of your worldly explorations.
        </h2>

        <Link to="/login" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
