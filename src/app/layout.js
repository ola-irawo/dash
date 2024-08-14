import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header/page";
import Footer from "@/layouts/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ventmoir Newsletter",
  description:
    "Subscribe to receive the latest insights, support tips, and valuable resources on mental health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
