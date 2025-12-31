import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
import FlexFaceLightBox from "./pages/services/exterior/FlexFaceLightBox";
import ProjectionSign from "./pages/services/exterior/ProjectionSign";
import TotemSign from "./pages/services/exterior/TotemSign";
import SiteHoardingBoards from "./pages/services/exterior/SiteHoardingBoards";
// Interior Signs Sub-pages
import ReceptionSigns from "./pages/services/interior/ReceptionSigns";
import NeonSigns from "./pages/services/interior/NeonSigns";
import OfficeLightBoxes from "./pages/services/interior/OfficeLightBoxes";
import OfficeWallGraphics from "./pages/services/interior/OfficeWallGraphics";
import WindowFrosting from "./pages/services/interior/WindowFrosting";
// Digital Signage Sub-pages
import OutdoorDigitalSigns from "./pages/services/digital/OutdoorDigitalSigns";
import IndoorDigitalSignage from "./pages/services/digital/IndoorDigitalSignage";
// Print Signs Sub-pages
import BannerPrinting from "./pages/services/print/BannerPrinting";
import FloorGraphics from "./pages/services/print/FloorGraphics";
import WindowGraphics from "./pages/services/print/WindowGraphics";
import WallArt from "./pages/services/print/WallArt";
import PrintedTray from "./pages/services/print/PrintedTray";
import VinylLettering from "./pages/services/print/VinylLettering";
import BespokeCeiling from "./pages/services/print/BespokeCeiling";
// Vehicle Graphics Sub-pages
import VanWrap from "./pages/services/vehicle/VanWrap";
import VanLettering from "./pages/services/vehicle/VanLettering";
import TruckWrap from "./pages/services/vehicle/TruckWrap";
import FoodTruckWrap from "./pages/services/vehicle/FoodTruckWrap";
// New Service Pages
import PVCBanners from "./pages/services/print/PVCBanners";
import LEDCircularSigns from "./pages/services/exterior/LEDCircularSigns";
import ShopFrontACM from "./pages/services/exterior/ShopFrontACM";
import SwingerABoards from "./pages/services/promotional/SwingerABoards";
// Exhibition Sub-pages
import PopUpBanners from "./pages/services/exhibition/PopUpBanners";
import StandardExhibitionDisplay from "./pages/services/exhibition/StandardExhibitionDisplay";
import BespokeExhibitionDisplay from "./pages/services/exhibition/BespokeExhibitionDisplay";
// Lightbox Sub-pages
import AcrylicLightbox from "./pages/services/lightbox/AcrylicLightbox";
import PromotionalLightbox from "./pages/services/lightbox/PromotionalLightbox";
// Digital Signage Additional
import DigitalTakeawayMenu from "./pages/services/digital/DigitalTakeawayMenu";
import ShopWindowDisplay from "./pages/services/digital/ShopWindowDisplay";
// Promotional Signs
import CustomFlags from "./pages/services/promotional/CustomFlags";
import PavementSign from "./pages/services/promotional/PavementSign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/services/exterior-signs/flex-face-lightbox" element={<FlexFaceLightBox />} />
          <Route path="/services/exterior-signs/projection-sign" element={<ProjectionSign />} />
          <Route path="/services/exterior-signs/totem-sign" element={<TotemSign />} />
          <Route path="/services/exterior-signs/site-hoarding-boards" element={<SiteHoardingBoards />} />
          
          {/* Interior Signs Sub-services */}
          <Route path="/services/interior-signs/reception-signs" element={<ReceptionSigns />} />
          <Route path="/services/interior-signs/neon-signs" element={<NeonSigns />} />
          <Route path="/services/interior-signs/light-boxes" element={<OfficeLightBoxes />} />
          <Route path="/services/interior-signs/office-wall-graphics" element={<OfficeWallGraphics />} />
          <Route path="/services/interior-signs/window-frosting" element={<WindowFrosting />} />
          
          {/* Digital Signage Sub-services */}
          <Route path="/services/digital-signage/outdoor-digital-signs" element={<OutdoorDigitalSigns />} />
          <Route path="/services/digital-signage/indoor-digital-signage" element={<IndoorDigitalSignage />} />
          
          {/* Print Signs Sub-services */}
          <Route path="/services/print-signs/banner-printing" element={<BannerPrinting />} />
          <Route path="/services/print-signs/floor-graphics" element={<FloorGraphics />} />
          <Route path="/services/print-signs/window-graphics" element={<WindowGraphics />} />
          <Route path="/services/print-signs/wall-art" element={<WallArt />} />
          <Route path="/services/print-signs/printed-tray" element={<PrintedTray />} />
          <Route path="/services/print-signs/vinyl-lettering" element={<VinylLettering />} />
          <Route path="/services/print-signs/bespoke-ceiling" element={<BespokeCeiling />} />
          
          {/* Vehicle Graphics Sub-services */}
          <Route path="/services/vehicle-graphics/van-wrap" element={<VanWrap />} />
          <Route path="/services/vehicle-graphics/van-lettering" element={<VanLettering />} />
          <Route path="/services/vehicle-graphics/truck-wrap" element={<TruckWrap />} />
          <Route path="/services/vehicle-graphics/food-truck-wrap" element={<FoodTruckWrap />} />
          
          {/* New Service Routes */}
          <Route path="/services/print-signs/pvc-banners" element={<PVCBanners />} />
          <Route path="/services/exterior-signs/led-circular-signs" element={<LEDCircularSigns />} />
          <Route path="/services/exterior-signs/shop-front-acm" element={<ShopFrontACM />} />
          <Route path="/services/promotional-signs/swinger-a-boards" element={<SwingerABoards />} />
          
          {/* Digital Signage Sub-services */}
          <Route path="/services/digital-signage/outdoor-digital-signs" element={<OutdoorDigitalSigns />} />
          <Route path="/services/digital-signage/indoor-digital-signage" element={<IndoorDigitalSignage />} />
          <Route path="/services/digital-signage/digital-takeaway-menu" element={<DigitalTakeawayMenu />} />
          <Route path="/services/digital-signage/shop-window-display" element={<ShopWindowDisplay />} />
          
          {/* Exhibition Sub-services */}
          <Route path="/services/exhibition-display/pop-up-banners" element={<PopUpBanners />} />
          <Route path="/services/exhibition-display/standard-exhibition" element={<StandardExhibitionDisplay />} />
          <Route path="/services/exhibition-display/bespoke-exhibition" element={<BespokeExhibitionDisplay />} />
          
          {/* Lightbox Sub-services */}
          <Route path="/services/light-boxes/acrylic-lightbox" element={<AcrylicLightbox />} />
          <Route path="/services/light-boxes/promotional-lightbox" element={<PromotionalLightbox />} />
          
          {/* Promotional Signs Sub-services */}
          <Route path="/services/promotional-signs/custom-flags" element={<CustomFlags />} />
          <Route path="/services/promotional-signs/pavement-sign" element={<PavementSign />} />
          
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
