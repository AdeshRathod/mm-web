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
