import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GlobalParticles from "@/components/GlobalParticles";
import LandingScreen from "@/components/LandingScreen";
import Index from "./pages/Index.tsx";
import MindBridgeProject from "./pages/MindBridgeProject.tsx";
import DigiLockerProject from "./pages/DigiLockerProject.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const INTRO_KEY = "introPlayed";

const App = () => {
  const [entered, setEntered] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(INTRO_KEY) === "true";
  });

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY) === "true") return;

    const timeoutId = window.setTimeout(() => {
      setEntered(true);
      sessionStorage.setItem(INTRO_KEY, "true");
    }, 1100);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="app-layer-root">
          {entered && <GlobalParticles />}
          <div className="grid-background" />
          <div className="gradient-blobs" />
          <div className="app-content-layer">
            <LandingScreen entered={entered} />

            {entered && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              >
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/projects/mindbridge" element={<MindBridgeProject />} />
                    <Route path="/project/digilocker" element={<DigiLockerProject />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </motion.div>
            )}
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
