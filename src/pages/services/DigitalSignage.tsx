import { Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import digitalOutdoor from "@/assets/gallery/digital-outdoor-1.jpg";
import digitalIndoor from "@/assets/gallery/digital-indoor-1.jpg";
import digitalMenu from "@/assets/gallery/digital-menu-1.jpg";
import digitalWindow from "@/assets/gallery/digital-window-1.jpg";

const DigitalSignage = () => {
  const services = [
    {
      title: "Outdoor Digital Signs",
      description: "High-brightness LED displays for outdoor environments.",
      image: digitalOutdoor,
      link: "/services/digital-signage/outdoor-digital-signs",
    },
    {
      title: "Indoor Digital Signage",
      description: "Professional display solutions for retail and corporate.",
      image: digitalIndoor,
      link: "/services/digital-signage/indoor-digital-signage",
    },
    {
      title: "Digital Takeaway Menu",
      description: "Interactive menu boards for restaurants and cafes.",
      image: digitalMenu,
      link: "/services/digital-signage/digital-takeaway-menu",
    },
    {
      title: "Shop Window Display",
      description: "High-brightness screens that drive foot traffic.",
      image: digitalWindow,
      link: "/services/digital-signage/shop-window-display",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital <span className="text-accent">Signage</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Engage audiences with dynamic digital displays and instant content updates.
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
              <h2 className="text-3xl font-bold mb-4">Go Digital Today</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Transform your communication with cutting-edge digital signage solutions.
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

export default DigitalSignage;
