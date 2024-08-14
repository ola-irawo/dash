"use client";
import React, { useEffect, useState } from "react";
import styles from "./unsubscribe.module.css";

const Page = () => {
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
        "https://type-blog.onrender.com/newsletter/unsubscribe",
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.head}>Unsubscribe</h1>
        <p className={styles.text}>
          Kindly enter your email below to unsubscribe:
        </p>
        {/* <p className={styles.text}>
          Click on &quot;Unsubscribe&quot; to stop receiving emails from
          Ventmoir on this email address:
        </p> */}
        {/* <center>test302@gmail.com</center> */}
        <input
          type="email"
          placeholder="Your email"
          onChange={handleInputChange}
          required
        />
        <button>Unsubscribe</button>
      </form>
    </main>
  );
};

export default Page;
