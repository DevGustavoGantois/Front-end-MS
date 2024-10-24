import type { Metadata } from "next";
import { Audiowide, Inter } from 'next/font/google';
import "./globals.css";



const inter = Inter({
  weight: ["400", "300", "200", "100", "500", "600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter"
});


const audiowide = Audiowide({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-audiowide',
});



export const metadata: Metadata = {
  title: "DashTech",
  description: "Financy Dashboard",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${audiowide.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}