import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/svgs/brandLogo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="Logo" className={styles.logo} />

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/unsubscribe" className={styles.link}>
              Unsubscribe
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
