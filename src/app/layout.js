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

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const [appTitle, setAppTitle] = useState("Nexios-Mobile & Web development");

  const handleRouteChange = () => {
    let title = "";

    if (pathName === "/") {
      title = "Nexios-Mobile & Web development";
    } else if (pathName === "/about") {
      title = "About Us - Nexios Technologies";
    } else if (pathName === "/portfolio") {
      title = "Portfolio - Nexios Technologies";
    } else if (pathName === "/mobile-app-development") {
      title = "Mobile App Development - Nexios Technologies";
    } else if (pathName === "/web-development") {
      title = "Wev Development - Nexios Technologies";
    } else if (pathName === "/ui-ux") {
      title = "UI/UX - Nexios Technologies";
    } else if (pathName === "/internet-of-things") {
      title = "Internet of things - Nexios Technologies";
    } else if (pathName === "/qa") {
      title = "QA - Nexios Technologies";
    } else if (pathName === "/career") {
      title = "Career - Nexios Technologies";
    } else if (pathName === "/contact") {
      title = "Contact Us - Nexios Technologies";
    } else if (pathName === "/applynow") {
      title = "Apply Now - Nexios Technologies";
    } else if (pathName === "/contact-us") {
      title = "Contact Us - Nexios Technologies";
    }
    setAppTitle(title);
  };

  useEffect(() => {
    handleRouteChange();
  }, [pathName]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nexiosIcon.png" sizes="32*32" />
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
