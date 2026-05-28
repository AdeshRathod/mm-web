import { useState } from "react";
import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Search as SearchIcon, Filter } from "lucide-react";
import groomAvatar from "@/assets/images/groom-avatar.png";
import brideAvatar from "@/assets/images/bride-avatar.png";

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

export default function Search() {
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <PageLayout>
      <PageHero title="Search Maratha Profiles" subtitle="Find your perfect match with our advanced search tools" />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Tabs defaultValue="matching" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted p-1 border border-border h-auto">
              <TabsTrigger value="matching" className="px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white">Matching Search</TabsTrigger>
              <TabsTrigger value="id" className="px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-white">Single ID Search</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="matching">
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                <Filter className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-serif font-bold text-primary">Advanced Filters</h2>
              </div>
              
              <form onSubmit={handleSearch} className="space-y-8">
                {/* Basic */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-3 lg:col-span-2">
                    <Label className="text-primary font-bold">Looking For</Label>
                    <RadioGroup defaultValue="bride" className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bride" id="look-bride" />
                        <Label htmlFor="look-bride" className="font-normal cursor-pointer">Bride</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="groom" id="look-groom" />
                        <Label htmlFor="look-groom" className="font-normal cursor-pointer">Groom</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Age Range (Yrs)</Label>
                    <div className="flex items-center gap-2">
                      <Input type="number" placeholder="Min" defaultValue={21} className="w-full" />
                      <span className="text-muted-foreground">-</span>
                      <Input type="number" placeholder="Max" defaultValue={35} className="w-full" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Height Range</Label>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="5'0">
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5'0">5'0"</SelectItem>
                          <SelectItem value="5'2">5'2"</SelectItem>
                          <SelectItem value="5'4">5'4"</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="text-muted-foreground">-</span>
                      <Select defaultValue="6'0">
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5'8">5'8"</SelectItem>
                          <SelectItem value="6'0">6'0"</SelectItem>
                          <SelectItem value="6'2">6'2"</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Status & Subcaste */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-border/50">
                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Marital Status</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="status-unmarried" defaultChecked />
                        <Label htmlFor="status-unmarried" className="font-normal">Unmarried</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="status-divorced" />
                        <Label htmlFor="status-divorced" className="font-normal">Divorced</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="status-widowed" />
                        <Label htmlFor="status-widowed" className="font-normal">Widowed</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Sub-Caste</Label>
                    <Select defaultValue="any">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Doesn't Matter</SelectItem>
                        <SelectItem value="96k">96 Kuli Maratha</SelectItem>
                        <SelectItem value="deshmukh">Deshmukh Maratha</SelectItem>
                        <SelectItem value="kunbi">Kunbi Maratha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Education</Label>
                    <Select defaultValue="any">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Doesn't Matter</SelectItem>
                        <SelectItem value="pg">Post Graduate</SelectItem>
                        <SelectItem value="eng">Engineering/Tech</SelectItem>
                        <SelectItem value="med">Medical/Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Working City</Label>
                    <Select defaultValue="any">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any City</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="nashik">Nashik</SelectItem>
                        <SelectItem value="kolhapur">Kolhapur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-primary font-bold">Native District</Label>
                    <Select defaultValue="any">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any District</SelectItem>
                        <SelectItem value="satara">Satara</SelectItem>
                        <SelectItem value="sangli">Sangli</SelectItem>
                        <SelectItem value="kolhapur">Kolhapur</SelectItem>
                        <SelectItem value="solapur">Solapur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg h-14" data-testid="button-matching-search">
                    <SearchIcon className="mr-2" /> Search Profiles
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="id">
            <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-16 text-center max-w-2xl mx-auto">
              <div className="inline-flex bg-primary/10 p-4 rounded-full mb-6">
                <SearchIcon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Know the Profile ID?</h2>
              <p className="text-foreground/70 mb-8">Enter the exact member ID to view their full profile directly.</p>
              
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="e.g. MG148975" className="h-14 text-center sm:text-left text-lg" required data-testid="input-id-search" />
                <Button type="submit" className="h-14 px-8 bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-id-search">
                  Search
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>

        {hasSearched && (
          <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
              <h2 className="text-2xl font-serif font-bold text-primary">Search Results</h2>
              <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full border border-border">{GROOMS.length} profiles found</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {GROOMS.map(profile => (
                <ProfileCard key={profile.id} profile={profile} gender="groom" />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
