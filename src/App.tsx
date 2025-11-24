import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ExteriorSigns from "./pages/services/ExteriorSigns";
import InteriorSigns from "./pages/services/InteriorSigns";
import PrintSigns from "./pages/services/PrintSigns";
import LightBoxes from "./pages/services/LightBoxes";
import PromotionalSigns from "./pages/services/PromotionalSigns";
import DigitalSignage from "./pages/services/DigitalSignage";
import ExhibitionDisplay from "./pages/services/ExhibitionDisplay";
import VehicleGraphics from "./pages/services/VehicleGraphics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/exterior-signs" element={<ExteriorSigns />} />
          <Route path="/services/interior-signs" element={<InteriorSigns />} />
          <Route path="/services/print-signs" element={<PrintSigns />} />
          <Route path="/services/light-boxes" element={<LightBoxes />} />
          <Route path="/services/promotional-signs" element={<PromotionalSigns />} />
          <Route path="/services/digital-signage" element={<DigitalSignage />} />
          <Route path="/services/exhibition-display" element={<ExhibitionDisplay />} />
          <Route path="/services/vehicle-graphics" element={<VehicleGraphics />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
