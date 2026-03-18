import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlobalParticles from "@/components/GlobalParticles";
import LandingScreen from "@/components/LandingScreen";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="app-layer-root">
          <GlobalParticles />
          <div className="grid-background" />
          <div className="gradient-blobs" />
          <div className="app-content-layer">
            <LandingScreen visible={showLanding} onEnter={() => setShowLanding(false)} />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
