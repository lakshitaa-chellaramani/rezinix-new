import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

const regular = localFont({
  src: "./fonts/regular.otf",
  variable: "--font-regular",
  weight: "400",
});

const bold = localFont({
  src: "./fonts/bold.otf",
  variable: "--font-bold",
  weight: "700",
});

const gsans = localFont({
  src: "./fonts/gsans.ttf",
  variable: "--font-gsans",
  weight: "400 700",
});

export const metadata = {
  title: "Rezinix - AI Solutions",
  description: "Start your AI PoC with Rezinix. We deliver cutting-edge AI solutions that transform businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${regular.variable} ${bold.variable} ${gsans.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-gsans), var(--font-regular), sans-serif' }}
      >
         {/* <Navbar/> */}
        {children}

        <Footer/>
      </body>
    </html>
  );
}
