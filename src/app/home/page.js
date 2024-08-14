import React from "react";
import styles from "./home.module.css";

const page = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>{newsletterContent.title}</h1>
      </header>

      <article className={styles.content}>
        <p>{newsletterContent.intro}</p>
        <p>{newsletterContent.content}</p>
        <img
          src={newsletterContent.image_url}
          className={styles.newsletterImg}
          alt="Newsletter"
        />
        <p>{newsletterContent.conclusion}</p>
        <a className={styles.btn} href={newsletterContent.unsubscribe_link}>
          Unsubscribe_
        </a>

        <p>
          You are receiving this because this email was added to Ventmoir's
          mental health survey or waitlist.
        </p>
        <p>Regards,</p>
        <p>The Ventmoir Team.</p>
      </article>

      <footer className={styles.footer}>
        <p>&copy; 2024 Ventmoir. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default page;

// Convert the data URL to a Buffer
const newsletterContent = {
  username: "John Doe",
  title: `Welcome to Ventmoir`,
  intro: `Thank you for joining Ventmoir's waitlist! We're glad to have you on this journey with us to create a supportive and inclusive space for mental health.`,
  content:
    "You can kindly subscribe to our newsletters to stay connected and never miss an update on - exclusive content such as tips, articles and insights on mental health.",
  conclusion:
    "Thanks for being part of Ventmoir. Together, we will eradicate the isolation struggles associated with mental health.",
  image_url: "https://i.ibb.co/MnZt4Kt/welcome-Vemt.png",
  unsubscribe_link: "http://example.com/unsubscribe",
};

async function sendNewsletter() {
  console.log("sending");
  const newsletterContent = {
    username: "John Doe",
    title: `Welcome to Ventmoir`,
    intro: `Thank you for joining Ventmoir's waitlist! We're glad to have you on this journey with us to create a supportive and inclusive space for mental health.`,
    content:
      "You can kindly subscribe to our newsletters to stay connected and never miss an update on - exclusive content such as tips, articles and insights on mental health.",
    conclusion:
      "Thanks for being part of Ventmoir. Together, we will eradicate the isolation struggles associated with mental health.",
    image_url: "https://i.ibb.co/MnZt4Kt/welcome-Vemt.png",
    unsubscribe_link: "http://example.com/unsubscribe",
  };

  const template = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
              // *{
              //   margin: 0;
              //   padding: 0;
              // }
  
              html {
              box-sizing: border-box;
              }
  
             body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                div.container {
                    width: 100%;
                    max-width: 40rem;
                    margin: 2rem auto;
                    background-color: #ffffff;
                    padding: .4rem .6rem;
                    border: .1rem solid #ddd;
                    border-radius: .8rem;
                    box-shadow: 0 .4rem .6rem rgb(0, 0, 0, .4);
                }
                .header {
                    text-align: center;
                    background-color: #407bff;
                    color: white;
                    border-radius: .6rem;
                    padding : .6rem 0;
                }
  
                h1{
                  font-size: 1.6rem;
                }
  
                p {
                  line-height: 1.6rem
                  margin-top: 1.6rem;
                }
                
                img.newsletter-img {
                  width: 100%;
                  height: 20rem;
                   max-width: 40rem;
                }
                .content {
                    padding: 0 .8rem;
                    margin-top: 2rem;
                }
                .footer {
                    text-align: center;
                    padding: 1rem 0;
                    font-size: 1.2rem;
                    color: #aaa;
                    background-color: black;
                    margin-top: 2em;
                }
                a.btn {
                    display: inline-block;
                    padding: 1rem 2rem;
                    background-color:  #407bff;
                    color: white;
                    text-decoration: none;
                    border-radius: .6rem;
                    margin-top: 2rem;
                }
  
                }
            </style>
        </head>
        <body>
            <div class="container">
  
                <header class="header">
                  <h1>${newsletterContent.title}</h1>
                </header>
  
                <article class="content">
                    <p>${newsletterContent.intro}</p>
                    <p>${newsletterContent.content}</p>
                    <img src="${newsletterContent.image_url}" class="newsletter-img" alt="Newsletter Image">
                    <p>${newsletterContent.conclusion}</p>
                    <a class="btn" href="${newsletterContent.unsubscribe_link}">Unsubscribe</a>
                
                  <p>You are receiving this because this email was added to Ventmoir's mental health survey or waitlist.</p>
                
                  <p>Regards,</p>
                  <p>The Ventmoir Team.</p>
        
                  </article>
  
                <footer class="footer">
                  <p>&copy; 2024 Ventmoir. All rights reserved.</p>
                </footer>
            </div>
        </body>
        </html>
    `;

  try {
    const response = await fetch(
      "https://type-blog.onrender.com/newsletter/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Welcome to Ventmoir– Your mental health social platform",
          content: template,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log("Newsletter sent successfully");
    } else {
      console.error("Error sending newsletter:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending newsletter:", error);
  }
}

// sendNewsletter();
