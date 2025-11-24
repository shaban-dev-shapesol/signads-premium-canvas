import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const LightBoxes = () => {
  const services = [
    {
      title: "Flex Face LightBox Sign",
      description: "Durable illuminated signage with weather-resistant flex face material. Perfect for exterior applications with 24/7 visibility.",
    },
    {
      title: "Acrylic Printed Lightbox",
      description: "Premium acrylic face panels with edge-lit or backlit illumination. Superior clarity and vibrant color reproduction.",
    },
    {
      title: "Promotional Lightboxes",
      description: "Eye-catching illuminated displays for retail and promotional use. Quick-change graphic systems available.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Light <span className="text-accent">Boxes</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Illuminate your brand with energy-efficient LED lightbox solutions. 
              Maximum visibility day and night with stunning visual impact.
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
              <h2 className="text-3xl font-bold mb-4">Brighten Your Brand Presence</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Energy-efficient, eye-catching lightbox solutions that work around the clock.
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

export default LightBoxes;
