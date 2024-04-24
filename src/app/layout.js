"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { pathDescriptions } from "@/utils";
import { useEffect } from "react";
import ReactGA from 'react-ga';
import Script from "next/script";

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
    ReactGA.pageview(pathName + window.location.search);
  }, [pathName]);

  return (
    <html lang="en">
      <head>
        <title>{`${pathName === "/" ? "Nexios-Mobile & Web development" : `${appTitle} - Nexios Technologies`}`}</title>
        <meta name="description" content={description} />
        <meta name="google-site-verification" content="2RotKNz-4bf_xmgnkcyTQgZoNy-_g5TL6-pfXo_vBgI" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/icon.png" sizes="32*32" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YESDGWM45W"></Script>
        <Script id="google-analytics">
          {
            `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YESDGWM45W');
            `
          }
        </Script>

      </head>
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
