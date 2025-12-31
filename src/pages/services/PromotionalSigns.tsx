import { Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import promotionalFlags from "@/assets/gallery/promotional-flags-1.jpg";
import promotionalPavement from "@/assets/gallery/promotional-pavement-1.jpg";
import exteriorProjection from "@/assets/gallery/exterior-projection-1.jpg";
import printWindow from "@/assets/gallery/print-window-1.jpg";
import lightboxPromotional from "@/assets/gallery/lightbox-promotional-1.jpg";
import printCeiling from "@/assets/gallery/print-ceiling-1.jpg";

const PromotionalSigns = () => {
  const services = [
    {
      title: "Custom Flags",
      description: "Eye-catching feather and teardrop flags for outdoor promotions.",
      image: promotionalFlags,
      link: "/services/promotional-signs/custom-flags",
    },
    {
      title: "Pavement Signs & A-Boards",
      description: "Swinger signs and A-frame signs perfect for storefronts.",
      image: promotionalPavement,
      link: "/services/promotional-signs/swinger-a-boards",
    },
    {
      title: "Projection Sign",
      description: "Projecting signs for multi-angle visibility.",
      image: exteriorProjection,
      link: "/services/exterior-signs/projection-sign",
    },
    {
      title: "Window Graphics",
      description: "Promotional window displays that drive traffic.",
      image: printWindow,
      link: "/services/print-signs/window-graphics",
    },
    {
      title: "Light Boxes",
      description: "Illuminated displays seen day and night.",
      image: lightboxPromotional,
      link: "/services/light-boxes/promotional-lightbox",
    },
    {
      title: "Bespoke Ceiling",
      description: "Innovative overhead graphics for retail spaces.",
      image: printCeiling,
      link: "/services/print-signs/bespoke-ceiling",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Promotional Signs - Flags, Pavement Signs & Displays"
        description="Versatile promotional signage including custom flags, A-frame pavement signs, window graphics, and lightboxes. Drive foot traffic and boost visibility."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Megaphone className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Promotional <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Maximize your promotional impact with versatile signage solutions.
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h2 className="text-3xl font-bold mb-4">Amplify Your Promotions</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Flexible, impactful promotional signage that drives results.
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

export default PromotionalSigns;
