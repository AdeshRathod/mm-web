import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Users, 
  ShieldCheck, 
  Camera, 
  MessageSquare, 
  Lock, 
  RefreshCw, 
  HeartHandshake, 
  Ban, 
  CreditCard, 
  Scale 
} from "lucide-react";

export default function Rules() {
  const rules = [
    {
      id: "rule-1",
      icon: <Users className="text-accent w-5 h-5 mr-3" />,
      title: "1. Eligibility",
      content: "Only members belonging to the Maratha community (96 Kuli, Deshmukh, Kunbi, etc.) are eligible to register on Anand Maratha. Profiles of other communities will be rejected."
    },
    {
      id: "rule-2",
      icon: <ShieldCheck className="text-accent w-5 h-5 mr-3" />,
      title: "2. Profile Authenticity",
      content: "All details provided must be accurate, truthful, and verifiable. Providing false information regarding age, education, marital status, or income may result in immediate termination of membership."
    },
    {
      id: "rule-3",
      icon: <Camera className="text-accent w-5 h-5 mr-3" />,
      title: "3. Photo Policy",
      content: "Only recent, clear, and decent solo photographs are allowed. Group photos, heavily edited images, or photos with inappropriate clothing will be rejected during the verification process."
    },
    {
      id: "rule-4",
      icon: <MessageSquare className="text-accent w-5 h-5 mr-3" />,
      title: "4. Communication",
      content: "Direct contact details (phone numbers) are only shared after both parties express mutual consent through our system. Initial interest must be communicated via the platform."
    },
    {
      id: "rule-5",
      icon: <Lock className="text-accent w-5 h-5 mr-3" />,
      title: "5. Privacy",
      content: "Members must strictly maintain the privacy of other profiles. Sharing screenshots, contact details, or photos of other members with third parties is strictly prohibited."
    },
    {
      id: "rule-6",
      icon: <RefreshCw className="text-accent w-5 h-5 mr-3" />,
      title: "6. Renewal",
      content: "Standard membership is valid for 1 year from the date of registration. Members must renew their subscription to maintain an active status and continue accessing contact details."
    },
    {
      id: "rule-7",
      icon: <HeartHandshake className="text-accent w-5 h-5 mr-3" />,
      title: "7. Conduct",
      content: "All communication between members and with our staff must remain respectful, courteous, and family-oriented. Use of abusive language will result in an immediate ban."
    },
    {
      id: "rule-8",
      icon: <Ban className="text-accent w-5 h-5 mr-3" />,
      title: "8. Prohibited Activities",
      content: "Creating fake profiles, scamming, requesting money from other members, or using the platform for dating/casual relationships is strictly prohibited and may lead to legal action."
    },
    {
      id: "rule-9",
      icon: <CreditCard className="text-accent w-5 h-5 mr-3" />,
      title: "9. Payment & Refunds",
      content: "Membership fees are non-refundable and non-transferable once a profile is verified and published on the platform, regardless of whether a match is found."
    },
    {
      id: "rule-10",
      icon: <Scale className="text-accent w-5 h-5 mr-3" />,
      title: "10. Legal Jurisdiction",
      content: "Anand Maratha operates in accordance with Indian law. Any disputes arising from the use of this platform will be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra."
    }
  ];

  return (
    <PageLayout>
      <PageHero title="Member Rules & Guidelines" subtitle="Please read our terms carefully before registering" />
      
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {rules.map((rule) => (
              <AccordionItem key={rule.id} value={rule.id} className="border border-border rounded-lg px-4 bg-muted/30">
                <AccordionTrigger className="hover:no-underline font-serif text-lg font-semibold text-primary py-4" data-testid={`accordion-trigger-${rule.id}`}>
                  <div className="flex items-center text-left">
                    {rule.icon}
                    {rule.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-4 pt-1 pl-8" data-testid={`accordion-content-${rule.id}`}>
                  {rule.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center border-t border-border pt-8">
            <p className="text-lg font-medium text-foreground mb-6">
              By enrolling, you agree to all the above rules and our terms of service.
            </p>
            <Link href="/enroll">
              <Button size="lg" className="px-10 bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-enroll-rules">
                I Agree — Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
