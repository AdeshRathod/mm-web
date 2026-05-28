import { useState } from "react";
import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, AlertTriangle, Instagram, Facebook, Twitter, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero title="Contact Us" subtitle="We're here to help — Tuesday to Sunday, 11 AM to 7 PM" />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-primary border-b border-border pb-3">Get in Touch</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-5 rounded-xl border border-border flex items-start gap-4">
                <MapPin className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-1">Office Address</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">207, 2nd Floor, Atharva Plaza, Opp. Shankar Math, Satara Road, Dhankawadi, Pune 411043</p>
                </div>
              </div>
              
              <div className="bg-card p-5 rounded-xl border border-border flex items-start gap-4">
                <Clock className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-1">Office Hours</h3>
                  <p className="text-sm text-foreground/80">Tue to Sun — 11 AM to 7 PM</p>
                  <p className="text-sm font-medium text-destructive mt-1">Monday: Closed</p>
                </div>
              </div>
              
              <div className="bg-card p-5 rounded-xl border border-border flex items-start gap-4">
                <Phone className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-1">Phone</h3>
                  <a href="tel:+919822214005" className="text-sm text-foreground/80 hover:text-primary transition-colors">+91 98222 14005</a>
                </div>
              </div>
              
              <div className="bg-card p-5 rounded-xl border border-border flex items-start gap-4">
                <Mail className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <a href="mailto:contact@anandmaratha.com" className="text-sm text-foreground/80 hover:text-primary transition-colors">contact@anandmaratha.com</a>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex gap-4">
              <AlertTriangle className="text-red-500 w-6 h-6 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-900 leading-relaxed">
                <span className="font-bold">Important:</span> Official payment links are only sent from info@anandmaratha.com or contact@anandmaratha.com and via SMS from sender ID ANANDM-S. Beware of fraud.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-primary mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-foreground/80 mb-6">Thank you for contacting us. Our team will get back to you shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary" data-testid="button-send-another-msg">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="Your name" data-testid="input-contact-name" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="your@email.com" data-testid="input-contact-email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" required placeholder="+91" data-testid="input-contact-phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select required>
                    <SelectTrigger id="subject" data-testid="select-contact-subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Enquiry">General Enquiry</SelectItem>
                      <SelectItem value="Registration Help">Registration Help</SelectItem>
                      <SelectItem value="Payment Issue">Payment Issue</SelectItem>
                      <SelectItem value="Technical Problem">Technical Problem</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="How can we help you?" 
                    className="h-32 resize-none"
                    data-testid="input-contact-message"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold" data-testid="button-submit-contact">
                  Send Message
                </Button>
              </form>
            )}
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="w-full h-80 bg-muted rounded-2xl border border-border flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://maps.wikimedia.org/osm-intl/13/5829/3681.png')] opacity-30 bg-cover bg-center grayscale mix-blend-multiply"></div>
          <MapPin className="text-accent w-12 h-12 mb-3 relative z-10 drop-shadow-md group-hover:-translate-y-2 transition-transform" />
          <h3 className="font-serif font-bold text-xl text-primary relative z-10 bg-white/80 px-4 py-1 rounded backdrop-blur">Anand Maratha Marriage Bureau</h3>
          <p className="text-sm font-medium mt-2 relative z-10 bg-white/80 px-3 py-1 rounded backdrop-blur">Satara Road, Dhankawadi, Pune</p>
        </div>
      </div>
    </PageLayout>
  );
}
