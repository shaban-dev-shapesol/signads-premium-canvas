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
// Exterior Signs Sub-pages
import BuiltUp3DLetters from "./pages/services/exterior/BuiltUp3DLetters";
import FasciaSignTray from "./pages/services/exterior/FasciaSignTray";
// Interior Signs Sub-pages
import ReceptionSigns from "./pages/services/interior/ReceptionSigns";
import NeonSigns from "./pages/services/interior/NeonSigns";
// Digital Signage Sub-pages
import OutdoorDigitalSigns from "./pages/services/digital/OutdoorDigitalSigns";
import IndoorDigitalSignage from "./pages/services/digital/IndoorDigitalSignage";
// Print Signs Sub-pages
import BannerPrinting from "./pages/services/print/BannerPrinting";
import FloorGraphics from "./pages/services/print/FloorGraphics";
// Vehicle Graphics Sub-pages
import CarWrap from "./pages/services/vehicle/CarWrap";
import VanWrap from "./pages/services/vehicle/VanWrap";
// Exhibition Sub-pages
import PopUpBanners from "./pages/services/exhibition/PopUpBanners";
// Lightbox Sub-pages
import AcrylicLightbox from "./pages/services/lightbox/AcrylicLightbox";

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
          
          {/* Exterior Signs Sub-services */}
          <Route path="/services/exterior-signs/built-up-3d-letters" element={<BuiltUp3DLetters />} />
          <Route path="/services/exterior-signs/fascia-sign-tray" element={<FasciaSignTray />} />
          
          {/* Interior Signs Sub-services */}
          <Route path="/services/interior-signs/reception-signs" element={<ReceptionSigns />} />
          <Route path="/services/interior-signs/neon-signs" element={<NeonSigns />} />
          
          {/* Digital Signage Sub-services */}
          <Route path="/services/digital-signage/outdoor-digital-signs" element={<OutdoorDigitalSigns />} />
          <Route path="/services/digital-signage/indoor-digital-signage" element={<IndoorDigitalSignage />} />
          
          {/* Print Signs Sub-services */}
          <Route path="/services/print-signs/banner-printing" element={<BannerPrinting />} />
          <Route path="/services/print-signs/floor-graphics" element={<FloorGraphics />} />
          
          {/* Vehicle Graphics Sub-services */}
          <Route path="/services/vehicle-graphics/car-wrap" element={<CarWrap />} />
          <Route path="/services/vehicle-graphics/van-wrap" element={<VanWrap />} />
          
          {/* Exhibition Sub-services */}
          <Route path="/services/exhibition-display/pop-up-banners" element={<PopUpBanners />} />
          
          {/* Lightbox Sub-services */}
          <Route path="/services/light-boxes/acrylic-lightbox" element={<AcrylicLightbox />} />
          
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
