import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "SM Tawfiq | Full-Stack Developer",
  description:
    "I'm SM Tawfiq, a Full-Stack Developer building modern web applications with Next.js, React, Node.js, and MongoDB.",
  metadataBase: new URL("https://smtawfiq.vercel.app"),
  openGraph: {
    title: "SM Tawfiq | Full-Stack Developer",
    description:
      "Explore SM Tawfiq's portfolio featuring modern web applications built with Next.js, React, Node.js, and MongoDB.",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Tawfiq | Full-Stack Developer",
    description:
      "Explore modern web applications built by SM Tawfiq.",
    images: ["/opengraph-image"],
  },
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
