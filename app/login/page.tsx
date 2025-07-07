import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <main className={styles.loginMain}>
        <div className={styles.loginContainer}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>BriffAI</span>
            </Link>
          </div>

          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in to your account</p>

          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className={styles.loginButton}>
              Sign In
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Don't have an account?{" "}
              <Link href="/signup" className={styles.link}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
