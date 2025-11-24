import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PromotionalSigns = () => {
  const services = [
    {
      title: "Custom Flags",
      description: "Eye-catching feather and teardrop flags for outdoor promotions. Portable and weather-resistant with easy setup.",
    },
    {
      title: "Pavement Sign",
      description: "A-frame signs perfect for storefronts and events. Weather-resistant with changeable graphics options.",
    },
    {
      title: "Projection Sign",
      description: "Traditional projecting signs that extend visibility and attract attention from multiple angles.",
    },
    {
      title: "Window Graphics",
      description: "Promotional window displays that drive foot traffic. Removable adhesive for temporary campaigns.",
    },
    {
      title: "Light Boxes",
      description: "Illuminated promotional displays that ensure your message is seen day and night.",
    },
    {
      title: "Bespoke Printed Ceiling",
      description: "Innovative overhead graphics that capture attention in retail and exhibition spaces.",
    },
  ];

  return (
    <div className="min-h-screen">
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
              Maximize your promotional impact with versatile signage solutions designed for campaigns, 
              events, and seasonal promotions.
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
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-secondary p-8 rounded-2xl border border-border hover:shadow-premium transition-smooth"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Amplify Your Promotions</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Flexible, impactful promotional signage that drives results for your campaigns.
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
