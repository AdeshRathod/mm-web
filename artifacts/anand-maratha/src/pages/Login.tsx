import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import { Heart } from "lucide-react";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prevent default form submission
  };

  return (
    <PageLayout>
      <PageHero title="Member Login" />
      
      <div className="container mx-auto px-4 py-12 flex justify-center min-h-[60vh] items-center">
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex bg-primary p-3 rounded-full text-secondary mb-4">
              <Heart size={28} className="fill-secondary" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary">Welcome Back</h2>
            <p className="text-foreground/70 text-sm mt-1">Login to access your Anand Maratha profile</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="memberId">Member ID</Label>
              <Input id="memberId" required placeholder="e.g. MG148975 or MB135622" data-testid="input-login-id" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-primary hover:text-accent font-medium transition-colors">Forgot Password?</a>
              </div>
              <Input id="password" type="password" required placeholder="••••••••" data-testid="input-login-password" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" data-testid="checkbox-remember" />
              <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold text-base py-6" data-testid="button-login">
              Login to My Profile
            </Button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-foreground/50">New to Anand Maratha?</span>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/enroll">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors" data-testid="button-goto-enroll">
                Enroll Now
              </Button>
            </Link>
          </div>

          <p className="text-center text-xs text-foreground/60 mt-8">
            For assistance, call <a href="tel:+919822214005" className="text-primary hover:underline font-medium">+91 98222 14005</a> (Tue-Sun 11AM-7PM)
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
