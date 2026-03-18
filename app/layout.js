import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rajeev Ranjan | Full Stack & AI Engineer",
  description: "Portfolio of Rajeev Ranjan — Full Stack Developer and AI Engineer building production-grade web and AI systems.",
};

export const viewport = {
  width: "device-width",
  initialScale: 0.9,
  maximumScale: 1.0,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
