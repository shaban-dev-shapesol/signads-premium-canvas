import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ExteriorSigns = () => {
  const services = [
    {
      title: "Built up 3D Letters",
      description: "Premium dimensional lettering that creates depth and impact. Available in various materials including acrylic, metal, and foam with illumination options.",
    },
    {
      title: "Fascia Sign Tray",
      description: "Eye-catching tray signs that provide a professional backdrop for your brand. Perfect for retail and commercial frontages.",
    },
    {
      title: "Flex Face LightBox Sign",
      description: "Durable, weather-resistant illuminated signage with vibrant graphics. Ideal for 24/7 visibility and maximum brand exposure.",
    },
    {
      title: "Projection Sign",
      description: "Traditional projecting signs that extend from building facades, ensuring visibility from multiple angles and distances.",
    },
    {
      title: "Totem Sign Solutions",
      description: "Freestanding monumental signage perfect for multi-tenant properties, shopping centers, and corporate campuses.",
    },
    {
      title: "Site Hoarding Boards",
      description: "Large-format temporary signage for construction sites and events. Weather-resistant with high-impact graphics.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Exterior <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Make a lasting impression with premium exterior signage that commands attention 24/7. 
              Weather-resistant, professionally installed, and built to last.
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Exterior?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our expert team will help you choose the perfect exterior signage solution for your business.
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

export default ExteriorSigns;
