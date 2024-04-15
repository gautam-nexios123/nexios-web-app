"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { pathDescriptions } from "@/utils";
import { useEffect } from "react";
import ReactGA from 'react-ga';
ReactGA.initialize('G-YESDGWM45W');

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Nexios-Mobile & Web development",
//   description: "Nexios Technologies LLP",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const description = pathDescriptions[pathName] || "Nexios Technologies LLP";

  const appTitle = pathName.substring(1)
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [pathName]);

  return (
    <html lang="en">
      <head>
        <title>{`${pathName === "/" ? "Nexios-Mobile & Web development" : `${appTitle} - Nexios Technologies`}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/icon.png" sizes="32*32" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YESDGWM45W"></script>
      </head>
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
