import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Creatives from "@/pages/Creatives";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "next-themes";

// All routes currently point to Home (as a single page app) for the prototype
// In a real app, you would have separate components for each page
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Home} />
      <Route path="/portfolio" component={Home} />
      <Route path="/contact" component={Home} />
      <Route path="/creatives" component={Creatives} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;