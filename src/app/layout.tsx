// 'use client';
// // import type { Metadata } from "next";
// import { Inter, Manrope } from "next/font/google";
// import "./globals.css";
// import Topbar from "../components/layout/Topbar";
// import Sidebar from "../components/layout/Sidebar";
// import { ThemeProvider } from "../components/ThemeProvider";
// import { useState } from "react";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// // export const metadata: Metadata = {
// //   title: "The Ledger | Dashboard",
// // };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link 
//           rel="stylesheet" 
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
//         />
//       </head>
//       <body className={`${inter.variable} ${manrope.variable} font-body bg-surface text-on-surface`}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <div className="flex min-h-screen">
//             {/* 1. Ensure Sidebar component also uses xl: as its visibility breakpoint */}
//             <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            
//             {/* 2. Changed lg:ml-72 to xl:ml-72 to free up space for iPad Pro */}
//             <div className="flex-1 flex flex-col min-w-0 xl:ml-72 transition-all duration-300">
//               <Topbar onOpen={() => setIsSidebarOpen(true)}/>
              
//               {/* 3. Added a mid-tier padding (p-6) for tablets */}
//               <main className="p-4 md:p-6 xl:p-10 pb-24">
//                 {children}
//               </main>
//             </div>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

//2nd
'use client';
// import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Topbar from "../components/layout/Topbar";
import Sidebar from "../components/layout/Sidebar";
import { ThemeProvider } from "../components/ThemeProvider";
import { useState } from "react";
import NewEntryModal from "../components/modals/NewEntryModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// export const metadata: Metadata = {
//    title: "The Ledger | Dashboard",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-body bg-surface text-on-surface`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            {/* Pass the modal trigger down to the Sidebar */}
            <Sidebar 
              isOpen={isSidebarOpen} 
              onClose={() => setIsSidebarOpen(false)}
              onOpenModal={() => setIsModalOpen(true)}
            />
            
            <div className="flex-1 flex flex-col min-w-0 xl:ml-72 transition-all duration-300">
              <Topbar onOpen={() => setIsSidebarOpen(true)}/>
              
              <main className="p-4 md:p-6 xl:p-10 pb-24">
                {children}
              </main>
            </div>
          </div>

          {/* Global Modal - Centered and free from Sidebar constraints */}
          <NewEntryModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}