

import "./globals.css";
import Link from "next/link";


import Navigation from "./Components/Nav/Navigation";
import Logo from "./Components/Content/Logo";

/* import Social from "./Components/Social"; */

//Change font
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
  
];

/* App router SEO  */
export const metadata = {
  title: "Aurora Tax Consultants",
  description: "Enlightening your Tax Worries",
  metadataBase: new URL("https://..."),
  openGraph: {
    title: "fda",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "",
    site: "@", // Your Twitter handle
    description: "",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/Logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[url(/background.png)] bg-cover  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header className="flex flex-wrap items-center justify-between p-5  gap-10 text-(--text-primary)">
          <div className="">
            <Logo
              imagePath="/logo.png"
              size={40}
              text="AURORA"
              href="/Contact"
            />
          </div>

          {/* Desktop Navbar */}
          <div className=" flex-grow ml-20 ">
            <Navigation
              items={items}
              itemClassName="btn p-2 border"
            />
          </div>

          {/* CTA Link - shown on medium and up */}
          <div className="hidden lg:inline btn  ">
            <Link className=" " href="/Contact">
              <span>Get a free quote</span>
            </Link>
          </div>
        </header>

        {children}

        <footer className="flex flex-wrap items-center justify-between p-4 gap-4">
          <div className="flex-shrink-0 button">
            <Logo
              imagePath="/logo.png"
              size={40}
              text="AURORA"
              href="/Contact"
            />
            <span className="text-sm">Enlighten your tax worries.</span>
          </div>
          <div className="hidden md:block flex-grow text-center ml-20">
            <Navigation
              items={items}
              itemClassName="button "
            />
          </div>
          <div className="mr-20">

            {/* Dont have social media yet.
            
            <Social urls={["xxx", "xxx"]} />*/}
          </div>
        </footer>
      </body>
    </html>
  );
}
