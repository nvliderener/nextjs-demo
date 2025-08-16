import type { Metadata } from "next";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "zy Shop",
  description: "zy Shop nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('RootLayout')
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
