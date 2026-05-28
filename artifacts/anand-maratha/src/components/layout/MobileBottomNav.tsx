import React from "react";
import { Link, useLocation } from "wouter";
import { Home, Search, UserPlus, LogIn, Phone } from "lucide-react";

export function MobileBottomNav() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-secondary/30 z-50 lg:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.1)] pb-safe">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/') ? 'text-secondary' : 'text-secondary/60 hover:text-secondary'}`}>
          <Home size={20} className={isActive('/') ? 'fill-secondary/20' : ''} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/search" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/search') ? 'text-secondary' : 'text-secondary/60 hover:text-secondary'}`}>
          <Search size={20} className={isActive('/search') ? 'stroke-[2.5px]' : ''} />
          <span className="text-[10px] font-medium">Search</span>
        </Link>
        <Link href="/enroll" className="flex flex-col items-center justify-center w-full h-full relative -top-3">
          <div className="bg-secondary text-primary p-3 rounded-full shadow-lg border-4 border-background">
            <UserPlus size={22} className="fill-primary/20" />
          </div>
          <span className="text-[10px] font-medium text-secondary mt-1">Enroll</span>
        </Link>
        <Link href="/login" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/login') ? 'text-secondary' : 'text-secondary/60 hover:text-secondary'}`}>
          <LogIn size={20} />
          <span className="text-[10px] font-medium">Login</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/contact') ? 'text-secondary' : 'text-secondary/60 hover:text-secondary'}`}>
          <Phone size={20} />
          <span className="text-[10px] font-medium">Contact</span>
        </Link>
      </div>
    </div>
  );
}
