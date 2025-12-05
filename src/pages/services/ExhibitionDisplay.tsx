import { Presentation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exhibitionStandard from "@/assets/gallery/exhibition-standard-1.jpg";
import exhibitionBespoke from "@/assets/gallery/exhibition-bespoke-1.jpg";
import exhibitionPopup from "@/assets/gallery/exhibition-popup-1.jpg";

const ExhibitionDisplay = () => {
  const services = [
    {
      title: "Standard Exhibition Display",
      description: "Professional pop-up banners and modular display systems.",
      image: exhibitionStandard,
      link: "/services/exhibition-display/standard-exhibition-display",
    },
    {
      title: "Bespoke Exhibition Display",
      description: "Custom-designed exhibition stands tailored to your brand.",
      image: exhibitionBespoke,
      link: "/services/exhibition-display/bespoke-exhibition-display",
    },
    {
      title: "Pop-Up Banners",
      description: "Lightweight, portable, and easy to set up displays.",
      image: exhibitionPopup,
      link: "/services/exhibition-display/pop-up-banners",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Exhibition Display - Trade Show Stands & Pop-Up Banners"
        description="Professional exhibition displays, pop-up banners, and bespoke trade show stands. Portable, easy to set up, and designed for maximum impact."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Presentation className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Exhibition <span className="text-accent">Display</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Stand out at trade shows with professional exhibition systems designed for impact.
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
              <h2 className="text-3xl font-bold mb-4">Make Your Mark at Events</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Professional exhibition solutions that help you stand out from the competition.
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

export default ExhibitionDisplay;
