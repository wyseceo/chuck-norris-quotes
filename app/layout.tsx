
import React, { Suspense } from 'react';
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import CompanyLogo from "@/components/company-logo";
import Footer from "@/components/footer";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Chuck Norris Quotes",
  description: "Chuck Norris web apps don't have loading states — his data arrives early.",
};


const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-between items-center p-4 text-sm  border-b border-b-foreground/10">
                <a target="_blank" rel="noopener noreferrer" href={"https://www.wus.de/"}> <CompanyLogo /></a>
                <h1>Chuck Norris Quotes</h1></nav>
              {children}
              <Suspense fallback={<div>Loading...</div>}>
                <Footer />
              </Suspense>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
