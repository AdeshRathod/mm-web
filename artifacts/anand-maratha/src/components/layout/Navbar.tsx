import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profilesOpen, setProfilesOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-full text-secondary">
              <Heart size={20} className="fill-secondary" />
            </div>
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">Anand Maratha</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent ${isActive('/') ? 'text-accent border-b-2 border-secondary' : 'text-foreground'}`}>Home</Link>
            <Link href="/rules" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent ${isActive('/rules') ? 'text-accent border-b-2 border-secondary' : 'text-foreground'}`}>Rules</Link>
            
            {/* Search Dropdown */}
            <div className="relative group" onMouseEnter={() => setSearchOpen(true)} onMouseLeave={() => setSearchOpen(false)}>
              <button className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent text-foreground flex items-center">
                Search <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {searchOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-card rounded-md shadow-lg border border-border overflow-hidden">
                  <Link href="/search/matching" className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">Matching Search</Link>
                  <Link href="/search/id" className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">Single ID Search</Link>
                </div>
              )}
            </div>

            {/* Profiles Dropdown */}
            <div className="relative group" onMouseEnter={() => setProfilesOpen(true)} onMouseLeave={() => setProfilesOpen(false)}>
              <button className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent text-foreground flex items-center">
                Profiles <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {profilesOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-card rounded-md shadow-lg border border-border overflow-hidden">
                  <Link href="/profiles/grooms" className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">Maratha Unmarried Grooms</Link>
                  <Link href="/profiles/brides" className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">Maratha Unmarried Brides</Link>
                  <Link href="/profiles/divorcee-grooms" className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">Maratha Divorcee Grooms</Link>
                  <Link href="/profiles/divorcee-brides" className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">Maratha Divorcee Brides</Link>
                </div>
              )}
            </div>

            <Link href="/response" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent ${isActive('/response') ? 'text-accent border-b-2 border-secondary' : 'text-foreground'}`}>Response</Link>
            <Link href="/horoscope" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent ${isActive('/horoscope') ? 'text-accent border-b-2 border-secondary' : 'text-foreground'}`}>Horoscope</Link>
            <Link href="/success-stories" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent ${isActive('/success-stories') ? 'text-accent border-b-2 border-secondary' : 'text-foreground'}`}>Success Stories</Link>
            <Link href="/contact" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-accent ${isActive('/contact') ? 'text-accent border-b-2 border-secondary' : 'text-foreground'}`}>Contact Us</Link>
            
            <div className="flex items-center ml-4 space-x-3 border-l border-border pl-4">
              <Link href="/login" className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors">Login</Link>
              <Link href="/renew" className="px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors">Renew</Link>
              <Link href="/enroll" className="px-5 py-2.5 text-sm font-medium bg-secondary text-primary rounded-md shadow-sm hover:bg-secondary/90 transition-colors">Enroll</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">Home</Link>
            <Link href="/rules" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">Rules</Link>
            <Link href="/search" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">Search</Link>
            <Link href="/profiles" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">Profiles</Link>
            <Link href="/success-stories" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">Success Stories</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">Contact Us</Link>
            <div className="border-t border-border pt-4 pb-2 mt-4 flex flex-col space-y-3 px-3">
              <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-3 text-base font-medium text-primary border border-primary rounded-md">Login</Link>
              <Link href="/enroll" onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-3 text-base font-medium bg-secondary text-primary rounded-md">Enroll Now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
