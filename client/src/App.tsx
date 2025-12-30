import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Creatives from "@/pages/Creatives";
import Automations from "@/pages/Automations";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "next-themes";
import { LocationProvider } from "@/context/LocationContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Home} />
      <Route path="/portfolio" component={Home} />
      <Route path="/contact" component={Home} />
      <Route path="/creatives">{() => <Creatives />}</Route>
      <Route path="/automations" component={Automations} />
      <Route path="/raleigh">{() => <Creatives initialLocation="raleigh" />}</Route>
      <Route path="/columbus">{() => <Creatives initialLocation="columbus" />}</Route>
      <Route path="/moscow">{() => <Creatives initialLocation="moscow" />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LocationProvider>
          <Toaster />
          <Router />
        </LocationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
