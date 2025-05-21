import type { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";

import { Providers } from './providers'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const rubikMono = Rubik_Mono_One({
  subsets: ['latin'],
  variable: '--font-rubik-mono',
  weight: '400',
})

export const metadata = {
  title: 'Jurybee',
  description: 'AI Contract Assistant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${rubikMono.variable}`}>
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
