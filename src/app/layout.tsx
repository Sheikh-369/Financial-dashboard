'use client';
// import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Topbar from "../components/layout/Topbar";
import Sidebar from "../components/layout/Sidebar";
import { ThemeProvider } from "../components/ThemeProvider";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// export const metadata: Metadata = {
//   title: "The Ledger | Dashboard",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    // 1. Remove "light" class and add suppressHydrationWarning
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body bg-surface text-on-surface`}>
        {/* 2. Wrap the entire UI structure inside the Provider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            <div className="flex-1 ml-0 lg:ml-72 flex flex-col transition-all duration-300">
              <Topbar onOpen={() => setIsSidebarOpen(true)}/>
              <main className="p-4 md:p-10 pb-24">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}