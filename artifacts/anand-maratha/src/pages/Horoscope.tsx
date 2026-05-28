import { useState } from "react";
import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Horoscope() {
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <PageLayout>
      <PageHero title="Kundali Matching — Gun Milan" subtitle="Check compatibility between two Maratha profiles" />
      
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-foreground/80 leading-relaxed">
            Gun Milan checks the compatibility of two horoscopes across 8 categories (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakut, Nadi). A score of 18+ out of 36 is considered acceptable for marriage.
          </p>
        </div>

        {!showResult ? (
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column */}
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-primary border-b border-border pb-2">Your Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="myName">Name</Label>
                      <Input id="myName" required data-testid="input-myname" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="myDob">Date of Birth</Label>
                        <Input id="myDob" type="date" required data-testid="input-mydob" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="myTime">Time of Birth</Label>
                        <Input id="myTime" type="time" required data-testid="input-mytime" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="myPlace">Place of Birth</Label>
                      <Input id="myPlace" required placeholder="e.g. Pune" data-testid="input-myplace" />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold text-primary border-b border-border pb-2">Partner's Details</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="partnerName">Name</Label>
                      <Input id="partnerName" required data-testid="input-partnername" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partnerDob">Date of Birth</Label>
                        <Input id="partnerDob" type="date" required data-testid="input-partnerdob" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnerTime">Time of Birth</Label>
                        <Input id="partnerTime" type="time" required data-testid="input-partnertime" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="partnerPlace">Place of Birth</Label>
                      <Input id="partnerPlace" required placeholder="e.g. Satara" data-testid="input-partnerplace" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 max-w-md mx-auto">
                <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-check-compatibility">
                  Check Compatibility
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-primary text-white rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-2 relative z-10">28 / 36</h2>
              <p className="text-xl font-medium relative z-10 mb-2">Excellent Match</p>
              <p className="text-white/80 text-sm relative z-10">The compatibility score is highly favorable for a successful marriage.</p>
            </div>

            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-serif font-bold text-primary mb-6 text-center">Detailed Gun Milan Score</h3>
              
              <div className="space-y-0 border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-muted font-semibold text-sm py-3 px-4 text-primary">
                  <div>Category (Koota)</div>
                  <div className="text-center">Max Points</div>
                  <div className="text-right">Obtained</div>
                </div>
                
                {[
                  { name: "Varna (Work)", max: 1, score: 1 },
                  { name: "Vashya (Dominance)", max: 2, score: 2 },
                  { name: "Tara (Destiny)", max: 3, score: 1.5 },
                  { name: "Yoni (Mentality)", max: 4, score: 3 },
                  { name: "Graha Maitri (Friendship)", max: 5, score: 4 },
                  { name: "Gana (Temperament)", max: 6, score: 5 },
                  { name: "Bhakut (Love)", max: 7, score: 7 },
                  { name: "Nadi (Health)", max: 8, score: 4.5 },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-3 border-t border-border py-3 px-4 text-sm hover:bg-muted/30 transition-colors">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-center text-foreground/70">{item.max}</div>
                    <div className="text-right font-bold text-primary">{item.score}</div>
                  </div>
                ))}
                
                <div className="grid grid-cols-3 bg-primary/10 border-t border-primary/20 py-4 px-4 font-bold">
                  <div>Total Score</div>
                  <div className="text-center">36</div>
                  <div className="text-right text-primary">28</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button onClick={() => setShowResult(false)} variant="outline" className="border-primary text-primary" data-testid="button-check-another">
                  Check Another
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-foreground/80 mb-2">Want a detailed analysis by our expert astrologer?</p>
          <p className="font-bold text-primary text-lg">Contact our office: +91 98222 14005 <span className="text-sm font-normal text-foreground/60">(Tue-Sun 11AM-7PM)</span></p>
        </div>
      </div>
    </PageLayout>
  );
}
