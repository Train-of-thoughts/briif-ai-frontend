import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <main className={styles.homeMain}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>BriffAI</span>
          </div>
        </div>

        <h1 className={styles.tagline}>Briff.ai - make SMM great again</h1>

        <Link href="/login" className={styles.getStartedButton}>
          Get Started
        </Link>
      </main>
    </div>
  );
}
