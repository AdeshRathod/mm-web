import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { useLocation } from "wouter";
import groomAvatar from "@/assets/images/groom-avatar.png";
import brideAvatar from "@/assets/images/bride-avatar.png";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const GROOMS = [
  { id: "MG148975", name: "Chavan", age: 28, height: "5'10\"", education: "BE Comp", occupationPlace: "Pune", nativePlace: "Satara" },
  { id: "MG148982", name: "Deshmukh", age: 30, height: "5'11\"", education: "MBA", occupationPlace: "Mumbai", nativePlace: "Pune" },
  { id: "MG149001", name: "More", age: 27, height: "5'8\"", education: "B.Tech IT", occupationPlace: "Nashik", nativePlace: "Nashik" },
  { id: "MG149015", name: "Jadhav", age: 31, height: "5'9\"", education: "M.Sc Agri", occupationPlace: "Kolhapur", nativePlace: "Kolhapur" },
  { id: "MG149022", name: "Pawar", age: 29, height: "6'0\"", education: "B.Arch", occupationPlace: "Pune", nativePlace: "Solapur" },
  { id: "MG149045", name: "Shinde", age: 28, height: "5'7\"", education: "CA", occupationPlace: "Mumbai", nativePlace: "Sangli" },
  { id: "MG149060", name: "Kadam", age: 32, height: "5'10\"", education: "MBBS", occupationPlace: "Pune", nativePlace: "Ahilyanagar" },
  { id: "MG149088", name: "Bhosale", age: 26, height: "5'11\"", education: "ME Mech", occupationPlace: "Thane", nativePlace: "Dharashiv" },
];

function ProfileCard({ profile, gender }: { profile: any; gender: 'groom' | 'bride' }) {
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
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-serif font-bold text-foreground mb-1">{profile.name}</h3>
        <p className="text-xs text-foreground/70 mb-3">{profile.age} yrs • {profile.height}</p>
        
        <div className="space-y-1.5 mb-4 flex-1 text-xs">
          <div className="flex items-start">
            <span className="text-primary font-medium w-16 flex-shrink-0">Edu</span>
            <span className="text-foreground truncate">{profile.education}</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-medium w-16 flex-shrink-0">City</span>
            <span className="text-foreground truncate">{profile.occupationPlace}</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-medium w-16 flex-shrink-0">Native</span>
            <span className="text-foreground truncate">{profile.nativePlace}</span>
          </div>
        </div>
        
        <button className="w-full py-2 bg-background border border-secondary text-primary font-semibold rounded-lg hover:bg-secondary transition-colors mt-auto text-xs">
          Get Details
        </button>
      </div>
    </div>
  );
}

function FilterSidebar() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-primary font-bold">Age Range (Yrs)</Label>
        <div className="flex items-center gap-2">
          <Input type="number" placeholder="21" className="h-9" />
          <span className="text-muted-foreground">-</span>
          <Input type="number" placeholder="35" className="h-9" />
        </div>
      </div>
      
      <div className="space-y-3">
        <Label className="text-primary font-bold">Height Range</Label>
        <div className="flex items-center gap-2">
          <Select defaultValue="5'0">
            <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="5'0">5'0"</SelectItem>
              <SelectItem value="5'2">5'2"</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-muted-foreground">-</span>
          <Select defaultValue="6'0">
            <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="5'8">5'8"</SelectItem>
              <SelectItem value="6'0">6'0"</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-primary font-bold">Education</Label>
        <Select defaultValue="any">
          <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="any">All</SelectItem>
            <SelectItem value="eng">Engineering</SelectItem>
            <SelectItem value="med">Medical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label className="text-primary font-bold">Working City</Label>
        <Select defaultValue="any">
          <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="any">All</SelectItem>
            <SelectItem value="pune">Pune</SelectItem>
            <SelectItem value="mumbai">Mumbai</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90">
        Apply Filters
      </Button>
    </div>
  );
}

export default function Profiles() {
  const [location] = useLocation();
  
  let title = "Browse Profiles";
  let gender: 'groom' | 'bride' = 'groom';
  
  if (location.includes('brides')) {
    title = "Maratha Brides";
    gender = 'bride';
  } else if (location.includes('grooms')) {
    title = "Maratha Grooms";
  }
  
  if (location.includes('divorcee')) {
    title = `Divorcee ${title.split(' ')[1]}`;
  }

  return (
    <PageLayout>
      <PageHero title={title} subtitle="Find verified Maratha profiles matching your preferences" />
      
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full border-primary text-primary">
                  <Filter className="mr-2 w-4 h-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <SheetHeader className="mb-6">
                  <SheetTitle className="font-serif text-xl text-primary text-left">Refine Search</SheetTitle>
                </SheetHeader>
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 border-b border-border pb-3">
                <Filter className="w-5 h-5 text-accent" />
                <h2 className="text-lg font-serif font-bold text-primary">Filters</h2>
              </div>
              <FilterSidebar />
            </div>
          </div>

          {/* Profiles Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm font-medium text-foreground/70">Showing 1-8 of 1,240 profiles</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-foreground/70">Sort by:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-32 h-8 text-xs border-border bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {GROOMS.map((profile, i) => (
                <ProfileCard key={`${profile.id}-${i}`} profile={profile} gender={gender} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" className="w-9 h-9 p-0" disabled>&lt;</Button>
                <Button variant="default" size="sm" className="w-9 h-9 p-0 bg-primary text-secondary">1</Button>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0">2</Button>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0">3</Button>
                <span className="px-2 text-foreground/50">...</span>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0">15</Button>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0">&gt;</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
