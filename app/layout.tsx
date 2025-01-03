import type { Metadata } from "next";
import "./globals.css";
import { Fira_Sans } from "next/font/google";


const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fira-sans',
});

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${firaSans.variable} antialiased font-fira`}
      >
        {children}
      </body>
    </html>
  );
}
