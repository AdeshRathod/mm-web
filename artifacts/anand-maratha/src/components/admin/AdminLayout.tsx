import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  ClipboardList, 
  MessageSquare, 
  Heart, 
  RefreshCw, 
  IndianRupee, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    setLocation("/admin/login");
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Members", href: "/admin/members", icon: Users },
    { name: "Profiles", href: "/admin/profiles", icon: UserCheck },
    { name: "Pending Approvals", href: "/admin/approvals", icon: ClipboardList, badge: "12" },
    { name: "Responses", href: "/admin/responses", icon: MessageSquare },
    { name: "Success Stories", href: "/admin/success-stories", icon: Heart },
    { name: "Renewals", href: "/admin/renewals", icon: RefreshCw },
    { name: "Payments", href: "/admin/payments", icon: IndianRupee },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary text-primary-foreground transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 px-6 py-5 border-b border-primary-foreground/10">
          <Heart className="h-6 w-6 text-secondary fill-current" />
          <div>
            <h2 className="text-lg font-serif font-bold text-secondary">Anand Maratha</h2>
            <p className="text-xs text-secondary/70">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href || (item.href !== "/admin" && location.startsWith(item.href));
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium ${
                  isActive 
                    ? "bg-secondary text-primary" 
                    : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
                onClick={() => setIsMobileSidebarOpen(false)}
                data-testid={`admin-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
                {item.badge && (
                  <span className={`ml-auto text-xs py-0.5 px-2 rounded-full font-bold ${
                    isActive ? "bg-primary text-secondary" : "bg-secondary text-primary"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-primary-foreground/10">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10 border-2 border-secondary">
              <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground">SS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Suhas Shirke</p>
              <p className="text-xs text-secondary/80">Super Admin</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-white"
            onClick={handleLogout}
            data-testid="admin-logout-btn"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-card border-b">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileSidebarOpen(true)}
              data-testid="admin-mobile-menu-btn"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative hidden sm:block w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search profile ID..." 
                className="pl-9 bg-background/50 focus-visible:bg-background"
                data-testid="admin-global-search"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-foreground/70" data-testid="admin-notifications-btn">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive border-2 border-card"></span>
            </Button>
            <Avatar className="h-8 w-8 hidden sm:block">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">SS</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-background p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
