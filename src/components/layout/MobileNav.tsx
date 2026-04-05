"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", href: "/", icon: "dashboard" },
    { name: "Sales", href: "/sales", icon: "payments" },
    { name: "Exp.", href: "/expenses", icon: "receipt_long" },
    { name: "Reports", href: "/reports", icon: "analytics" },
    { name: "Set.", href: "/settings", icon: "settings" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl flex justify-around items-center border-t border-outline-variant/10 px-4 z-50">
      {navItems.map((item) => (
        <Link 
          key={item.name} 
          href={item.href}
          className={`flex flex-col items-center gap-1 ${pathname === item.href ? 'text-primary' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="text-[10px] font-bold uppercase">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}