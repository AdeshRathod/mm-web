import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import groomAvatar from "../../assets/images/groom-avatar.png";
import brideAvatar from "../../assets/images/bride-avatar.png";

type Profile = {
  id: string;
  name: string;
  age: number;
  height: string;
  education: string;
  occupationPlace: string;
  nativePlace: string;
};

const GROOMS: Profile[] = [
  { id: "MG148975", name: "Chavan", age: 28, height: "5'10\"", education: "BE Comp", occupationPlace: "Pune", nativePlace: "Satara" },
  { id: "MG148982", name: "Deshmukh", age: 30, height: "5'11\"", education: "MBA", occupationPlace: "Mumbai", nativePlace: "Pune" },
  { id: "MG149001", name: "More", age: 27, height: "5'8\"", education: "B.Tech IT", occupationPlace: "Nashik", nativePlace: "Nashik" },
  { id: "MG149015", name: "Jadhav", age: 31, height: "5'9\"", education: "M.Sc Agri", occupationPlace: "Kolhapur", nativePlace: "Kolhapur" },
  { id: "MG149022", name: "Pawar", age: 29, height: "6'0\"", education: "B.Arch", occupationPlace: "Pune", nativePlace: "Solapur" },
  { id: "MG149045", name: "Shinde", age: 28, height: "5'7\"", education: "CA", occupationPlace: "Mumbai", nativePlace: "Sangli" },
  { id: "MG149060", name: "Kadam", age: 32, height: "5'10\"", education: "MBBS", occupationPlace: "Pune", nativePlace: "Ahilyanagar" },
  { id: "MG149088", name: "Bhosale", age: 26, height: "5'11\"", education: "ME Mech", occupationPlace: "Thane", nativePlace: "Dharashiv" },
];

const BRIDES: Profile[] = [
  { id: "MB135622", name: "Patil", age: 25, height: "5'4\"", education: "BDS", occupationPlace: "Pune", nativePlace: "Pune" },
  { id: "MB135640", name: "Kadam", age: 26, height: "5'5\"", education: "MCA", occupationPlace: "Mumbai", nativePlace: "Satara" },
  { id: "MB135655", name: "Jadhav", age: 24, height: "5'3\"", education: "B.E. IT", occupationPlace: "Pune", nativePlace: "Sangli" },
  { id: "MB135671", name: "Deshmukh", age: 27, height: "5'6\"", education: "MBA HR", occupationPlace: "Nashik", nativePlace: "Nashik" },
  { id: "MB135689", name: "Chavan", age: 25, height: "5'2\"", education: "B.Sc", occupationPlace: "Kolhapur", nativePlace: "Kolhapur" },
  { id: "MB135702", name: "Shinde", age: 28, height: "5'4\"", education: "M.Com", occupationPlace: "Mumbai", nativePlace: "Solapur" },
  { id: "MB135715", name: "Mane", age: 26, height: "5'5\"", education: "B.Arch", occupationPlace: "Pune", nativePlace: "Dharashiv" },
  { id: "MB135730", name: "Pawar", age: 24, height: "5'3\"", education: "B.Tech", occupationPlace: "Thane", nativePlace: "Pune" },
];

function ProfileCard({ profile, gender }: { profile: Profile; gender: 'groom' | 'bride' }) {
  const avatar = gender === 'groom' ? groomAvatar : brideAvatar;
  
  return (
    <div className="bg-card border border-card-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full flex flex-col group">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={avatar} 
          alt={`${profile.name} placeholder`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-primary shadow-sm border border-secondary/30">
          {profile.id}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-foreground mb-1">{profile.name}</h3>
        <p className="text-sm text-foreground/70 mb-4">{profile.age} yrs • {profile.height}</p>
        
        <div className="space-y-2 mb-6 flex-1 text-sm">
          <div className="flex items-start">
            <span className="text-primary font-medium w-24 flex-shrink-0">Education</span>
            <span className="text-foreground">{profile.education}</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-medium w-24 flex-shrink-0">Working in</span>
            <span className="text-foreground">{profile.occupationPlace}</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-medium w-24 flex-shrink-0">Native</span>
            <span className="text-foreground">{profile.nativePlace}</span>
          </div>
        </div>
        
        <button className="w-full py-2.5 bg-background border border-secondary text-primary font-semibold rounded-lg hover:bg-secondary transition-colors mt-auto text-sm">
          Get Details
        </button>
      </div>
    </div>
  );
}

export function RecentProfiles() {
  const [tab, setTab] = useState<'grooms' | 'brides'>('grooms');
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', skipSnaps: false, loop: false });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const profiles = tab === 'grooms' ? GROOMS : BRIDES;

  // Reset carousel when tab changes
  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [tab, emblaApi]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-border pb-4 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Recently Registered Profiles</h2>
            <p className="text-foreground/70">New verified profiles added this week</p>
          </div>
          <Link href="/profiles" className="text-accent font-semibold hover:text-primary transition-colors whitespace-nowrap hidden md:block">
            View All Profiles →
          </Link>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-muted p-1.5 rounded-xl inline-flex shadow-inner border border-border">
            <button
              onClick={() => setTab('grooms')}
              className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all ${
                tab === 'grooms' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Grooms
            </button>
            <button
              onClick={() => setTab('brides')}
              className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all ${
                tab === 'brides' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Brides
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {profiles.map((profile) => (
                <div key={profile.id} className="pl-4 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_25%]">
                  <ProfileCard profile={profile} gender={tab === 'grooms' ? 'groom' : 'bride'} />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-border flex items-center justify-center text-primary hover:bg-secondary hover:text-primary transition-colors z-10 hidden md:flex"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-border flex items-center justify-center text-primary hover:bg-secondary hover:text-primary transition-colors z-10 hidden md:flex"
          >
            <ChevronRight />
          </button>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/profiles" className="inline-block px-6 py-3 bg-background border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-secondary transition-colors">
            View All Profiles
          </Link>
        </div>
      </div>
    </section>
  );
}
