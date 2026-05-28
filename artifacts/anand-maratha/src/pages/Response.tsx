import { useState } from "react";
import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Info } from "lucide-react";

export default function Response() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero title="Get Profile Response" subtitle="Submit your details to receive the contact information of profiles you are interested in" />
      
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8 flex gap-4">
          <Info className="text-accent w-6 h-6 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/90 leading-relaxed">
            To protect member privacy, contact details are only shared after you submit your interest. An automatic notification will be sent to the profile — they will respond Yes or No within 48 hours.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Interest Sent Successfully!</h2>
              <p className="text-foreground/80 mb-8 max-w-md mx-auto">
                Your interest has been sent. The member will be notified and you'll receive their response within 48 hours.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary" data-testid="button-send-another">
                Send Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="myId">Your Profile ID</Label>
                <Input id="myId" required placeholder="Enter your member ID e.g. MG148975" data-testid="input-myid" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="targetId">Profile ID you're interested in</Label>
                <Input id="targetId" required placeholder="Enter the profile ID e.g. MB135622" data-testid="input-targetid" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" required placeholder="Your full name" data-testid="input-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Your Mobile Number</Label>
                  <Input id="mobile" required placeholder="+91" data-testid="input-mobile" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Introduce yourself or your family briefly..." 
                  className="h-24 resize-none"
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-submit-response">
                Send Interest Request
              </Button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center bg-muted py-4 px-6 rounded-lg border border-border">
          <p className="text-sm font-medium text-primary">
            <span className="font-bold">Tip:</span> Make sure your own profile is active and renewed before sending interest requests.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
