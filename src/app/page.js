"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import email from "../assets/images/email.png";
import styles from "./page.module.css";

const Home = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://type-blog.onrender.com/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        }
      );

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      if (response.ok) {
        setMessage(data.message);
      }
      console.log(userEmail);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 8000);
  }, [message]);

  return (
    <main className={styles.main}>
      {message && <p className={styles.success}>{message}</p>}

      <p className={styles.info}>
        Welcome to <strong>Ventmoir</strong>, where we connect you with the
        resources and support needed to prioritize your mental well-being.
        Subscribe to our newsletter to stay informed with the latest articles,
        research, and insights on mental health.
      </p>

      <section className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Image src={email} alt="Email Icon" className={styles["email-img"]} />

          <div>
            <h1 className={styles.head}>Subscribe to our Newsletter.</h1>
            <p className={styles.text}>
              Subscribe to receive the latest insights, support tips, and
              valuable resources on mental health.
            </p>
            <input
              type="email"
              placeholder="Your email"
              onChange={handleInputChange}
              required
            />
            <button disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      </section>

      <p className={styles.info}>
        We respect your privacy and only use your information to deliver the
        content you request. You can unsubscribe anytime. By subscribing, you
        agree to let us store and process your information to provide the
        content you requested.
      </p>
    </main>
  );
};

export default Home;
