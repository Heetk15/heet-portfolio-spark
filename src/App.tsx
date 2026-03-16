import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AnimatedCursor
        innerSize={9}
        outerSize={34}
        innerScale={1.05}
        outerScale={1.6}
        outerAlpha={0.25}
        innerStyle={{ backgroundColor: "rgba(96, 165, 250, 0.95)" }}
        outerStyle={{ border: "1px solid rgba(147, 197, 253, 0.55)", boxShadow: "0 0 26px rgba(59,130,246,0.28)" }}
        clickables={[
          "a",
          "button",
          ".glow-button",
          ".project-card",
          ".skill-badge",
          "[role='button']",
        ]}
      />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
