"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Nexios-Mobile & Web development",
//   description: "Nexios Technologies LLP",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const appTitle = pathName.substring(1)
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  return (
    <html lang="en">
      <head>
        <title>{`${pathName === "/" ? "Nexios-Mobile & Web development" : `${appTitle} - Nexios Technologies`}`}</title>
        <meta name="description" content={"Nexios Technologies LLP"} />
        <link rel="icon" href="/icon.png" sizes="32*32" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
