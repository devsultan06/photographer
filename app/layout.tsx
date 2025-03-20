import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

export const metadata: Metadata = {
  title: "DAMIEN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
      >
        <Navbar />
        <div className="pt-[80px] bg-dark03">
          {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
