// // src/app/layout.tsx
// import type { Metadata } from "next";
// import { Inter, Manrope } from "next/font/google";
// import "./globals.css";
// import Topbar from "../components/layout/Topbar";
// import Sidebar from "../components/layout/Sidebar";
// import { ThemeProvider } from "../components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// export const metadata: Metadata = {
//   title: "The Ledger | Dashboard",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="light">
//       <head>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
//       </head>
//       <body className={`${inter.variable} ${manrope.variable} font-body bg-surface text-on-surface`}>
//         <div className="flex min-h-screen">
//           <Sidebar />
//           <div className="flex-1 md:ml-64 flex flex-col">
//             <Topbar />
//             <main className="p-6 md:p-10 pb-24">
//               <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//                 {children}
//               </ThemeProvider>
//               </main>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

//2nd
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Topbar from "../components/layout/Topbar";
import Sidebar from "../components/layout/Sidebar";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "The Ledger | Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
            <Sidebar />
            <div className="flex-1 md:ml-64 flex flex-col">
              <Topbar />
              <main className="p-6 md:p-10 pb-24">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}