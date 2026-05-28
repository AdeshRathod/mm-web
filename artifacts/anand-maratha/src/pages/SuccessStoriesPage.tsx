import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { Heart } from "lucide-react";
import couple1 from "@/assets/images/couple-1.png";
import couple2 from "@/assets/images/couple-2.png";
import couple3 from "@/assets/images/couple-3.png";

type Story = {
  id: string;
  names: string;
  location: string;
  year: string;
  quote: string;
  image: string;
};

const STORIES: Story[] = [
  { id: "1", names: "Rahul & Priya Chavan", location: "Pune", year: "2023", quote: "The verified profiles gave our families peace of mind.", image: couple1 },
  { id: "2", names: "Amit & Sneha Deshmukh", location: "Nashik", year: "2022", quote: "Search filters made finding someone from my native place easy.", image: couple2 },
  { id: "3", names: "Sunil & Kavita More", location: "Mumbai", year: "2024", quote: "Our families met and everything fell into place beautifully.", image: couple3 },
  { id: "4", names: "Vikram & Pooja Pawar", location: "Solapur", year: "2023", quote: "Found my soulmate within 3 months of registering. Thank you!", image: couple1 },
  { id: "5", names: "Ganesh & Sarika Jadhav", location: "Kolhapur", year: "2022", quote: "Affordable, reliable, and trustworthy. Best decision ever.", image: couple2 },
  { id: "6", names: "Rohan & Dipika Shinde", location: "Thane", year: "2021", quote: "Our parents were delighted with the process and outcome.", image: couple3 },
  { id: "7", names: "Mahesh & Rutuja Bhosale", location: "Pune", year: "2023", quote: "From profile to marriage in 6 months. Simply wonderful.", image: couple1 },
  { id: "8", names: "Sachin & Shraddha Kadam", location: "Sangli", year: "2024", quote: "A platform that truly understands Maratha values.", image: couple2 },
  { id: "9", names: "Prasad & Manasi Mane", location: "Nagpur", year: "2022", quote: "Highly recommended to every Maratha family.", image: couple3 },
];

export default function SuccessStoriesPage() {
  return (
    <PageLayout>
      <PageHero title="Success Stories" subtitle="28,000+ couples found their perfect match through Anand Maratha" />
      
      <div className="bg-primary py-6 border-y border-secondary/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-secondary text-center">
          <div>
            <div className="text-3xl font-bold font-serif mb-1">28,000+</div>
            <div className="text-sm opacity-80 uppercase tracking-wider">Matches Made</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-secondary/30"></div>
          <div>
            <div className="text-3xl font-bold font-serif mb-1">26+</div>
            <div className="text-sm opacity-80 uppercase tracking-wider">Years of Trust</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-secondary/30"></div>
          <div>
            <div className="text-3xl font-bold font-serif mb-1">All Over</div>
            <div className="text-sm opacity-80 uppercase tracking-wider">Maharashtra</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div key={story.id} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-md transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={`${story.names} Success Story`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-serif font-bold mb-1">{story.names}</h3>
                  <div className="flex items-center text-sm text-white/80 gap-2">
                    <span>{story.location}</span>
                    <span className="w-1 h-1 rounded-full bg-secondary"></span>
                    <span>Married in {story.year}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <Heart className="absolute top-0 right-6 -translate-y-1/2 w-10 h-10 bg-secondary text-primary p-2 rounded-full shadow-lg" />
                <p className="text-foreground/80 italic">"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-muted rounded-2xl p-10 border border-border max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Did you find your match on Anand Maratha?</h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
            We would love to feature your story and inspire others who are looking for their life partner.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-colors" data-testid="button-share-story">
            Share Your Story
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
