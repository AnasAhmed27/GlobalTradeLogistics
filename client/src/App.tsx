import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import IndustriesPage from "@/pages/IndustriesPage";
import TrackingPage from "@/pages/TrackingPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/industries" component={IndustriesPage} />
          <Route path="/tracking" component={TrackingPage} />
          {/* TODO: Add remaining pages */}
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
