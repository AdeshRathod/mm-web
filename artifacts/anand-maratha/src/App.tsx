import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Enroll from "@/pages/Enroll";
import Rules from "@/pages/Rules";
import Response from "@/pages/Response";
import Horoscope from "@/pages/Horoscope";
import SuccessStoriesPage from "@/pages/SuccessStoriesPage";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Renew from "@/pages/Renew";
import Search from "@/pages/Search";
import Profiles from "@/pages/Profiles";
import AdminLogin from "@/pages/admin/AdminLogin";
import Dashboard from "@/pages/admin/Dashboard";
import Members from "@/pages/admin/Members";
import Approvals from "@/pages/admin/Approvals";
import Responses from "@/pages/admin/Responses";
import AdminSuccessStories from "@/pages/admin/AdminSuccessStories";
import Renewals from "@/pages/admin/Renewals";
import Payments from "@/pages/admin/Payments";
import Settings from "@/pages/admin/Settings";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/enroll" component={Enroll} />
      <Route path="/rules" component={Rules} />
      <Route path="/response" component={Response} />
      <Route path="/horoscope" component={Horoscope} />
      <Route path="/success-stories" component={SuccessStoriesPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/renew" component={Renew} />
      <Route path="/search" component={Search} />
      <Route path="/search/:type" component={Search} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/profiles/:type" component={Profiles} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={Dashboard} />
      <Route path="/admin/members" component={Members} />
      <Route path="/admin/approvals" component={Approvals} />
      <Route path="/admin/responses" component={Responses} />
      <Route path="/admin/success-stories" component={AdminSuccessStories} />
      <Route path="/admin/renewals" component={Renewals} />
      <Route path="/admin/payments" component={Payments} />
      <Route path="/admin/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
