"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Nexios-Mobile & Web development",
//   description: "Nexios Technologies LLP",
// };

const titleMap = {
  "/": "Nexios-Mobile & Web development",
  "/about-us": "About Us",
  "/portfolio": "Portfolio",
  "/mobile-app-development": "Mobile App Development",
  "/web-development": "Web Development",
  "/ui-ux": "UI/UX",
  "/internet-of-things": "Internet of Things",
  "/qa": "QA",
  "/career": "Career",
  "/contact": "Contact Us",
  "/applynow": "Apply Now",
  "/contact-us": "Contact Us",
};

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const [appTitle, setAppTitle] = useState("Nexios-Mobile & Web development");

  const handleRouteChange = () => {
    const title = titleMap[pathName] || "Nexios-Mobile & Web development";
    setAppTitle(`${title} - Nexios Technologies`);
  };

  useEffect(() => {
    handleRouteChange();
  }, [pathName]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="32*32" />
        <title>{appTitle}</title>
        <meta name="description" content={"Nexios Technologies LLP"} />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
