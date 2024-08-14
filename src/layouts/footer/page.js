import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Ventmoir. All rights reserved.
        </p>
        {/* <nav className={styles.nav}>
          <a href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" className={styles.link}>
            Terms of Service
          </a>
          <a href="/unsubscribe" className={styles.link}>
            Unsubscribe
          </a>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
