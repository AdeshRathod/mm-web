import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export function ProtectedAdminRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdminAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/admin/login");
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
