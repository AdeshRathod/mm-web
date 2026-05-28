import { useState } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { Heart, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { login } = useAdminAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(username, password);
    if (success) {
      setLocation("/admin");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background shadow-xl border-secondary/20">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary p-3 rounded-full">
              <Heart className="h-8 w-8 text-secondary fill-current" />
            </div>
          </div>
          <CardTitle className="text-2xl font-serif text-primary">Admin Panel Login</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">Anand Maratha Matrimony</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                data-testid="admin-login-username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                data-testid="admin-login-password"
              />
            </div>
            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2" data-testid="admin-login-error">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold mt-6"
              data-testid="admin-login-submit"
            >
              Login to Admin
            </Button>
            <p className="text-center text-xs text-muted-foreground pt-2">
              Use username <strong>admin</strong> and password <strong>admin123</strong>
            </p>
          </form>
        </CardContent>
        <CardFooter className="justify-center border-t py-4">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← Back to Website
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
