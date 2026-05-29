import type { Metadata } from "next";
import { Geist, Geist_Mono, Erica_One, Space_Grotesk, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const erica_one = Erica_One({
  variable: "--font-erica-one",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "Portfolio of Ulises D'Agostino",
};

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={` ${erica_one.variable} ${nunito.variable} ${space_grotesk.variable} h-full antialiased`}>
      <body className="min-h-full w-full flex flex-col ">{children}</body>
    </html>
  );
}
