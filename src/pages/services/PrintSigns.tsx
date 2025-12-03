import { Printer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import printTray from "@/assets/gallery/print-tray-1.jpg";
import printVinyl from "@/assets/gallery/print-vinyl-1.jpg";
import printBanner from "@/assets/gallery/print-banner-1.jpg";
import printWindow from "@/assets/gallery/print-window-1.jpg";
import printWallArt from "@/assets/gallery/print-wall-art-1.jpg";
import printFloor from "@/assets/gallery/print-floor-1.jpg";
import printCeiling from "@/assets/gallery/print-ceiling-1.jpg";
import exteriorHoarding from "@/assets/gallery/exterior-hoarding-1.jpg";

const PrintSigns = () => {
  const services = [
    {
      title: "Printed Tray",
      description: "High-quality printed tray signage for storefronts.",
      image: printTray,
      link: "/services/print-signs/printed-tray",
    },
    {
      title: "Vinyl Lettering",
      description: "Precision-cut vinyl graphics for any surface.",
      image: printVinyl,
      link: "/services/print-signs/vinyl-lettering",
    },
    {
      title: "Site Hoarding Boards",
      description: "Large-format construction site graphics.",
      image: exteriorHoarding,
      link: "/services/exterior-signs/site-hoarding-boards",
    },
    {
      title: "Banner Printing",
      description: "Indoor and outdoor banners in various sizes.",
      image: printBanner,
      link: "/services/print-signs/banner-printing",
    },
    {
      title: "Window Graphics",
      description: "Eye-catching window displays that drive traffic.",
      image: printWindow,
      link: "/services/print-signs/window-graphics",
    },
    {
      title: "Wall Art",
      description: "Custom murals and decorative installations.",
      image: printWallArt,
      link: "/services/print-signs/wall-art",
    },
    {
      title: "Floor Graphics",
      description: "Anti-slip promotional floor decals.",
      image: printFloor,
      link: "/services/print-signs/floor-graphics",
    },
    {
      title: "Bespoke Ceiling",
      description: "Innovative ceiling graphics for retail spaces.",
      image: printCeiling,
      link: "/services/print-signs/bespoke-ceiling",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Printer className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Print <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Cutting-edge printing technology delivering stunning visual impact at any scale.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-premium transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">High-Quality Printing Solutions</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Experience superior print quality with fast turnaround times.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrintSigns;
