import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const DigitalSignage = () => {
  const services = [
    {
      title: "Outdoor Digital Signs",
      description: "High-brightness LED displays designed for outdoor environments. Weather-resistant with dynamic content capabilities.",
    },
    {
      title: "Indoor Digital Signage",
      description: "Professional display solutions for retail, corporate, and hospitality environments. Content management systems included.",
    },
    {
      title: "Digital Takeaway Menu",
      description: "Interactive menu boards for restaurants and cafes. Easy content updates and vibrant food photography display.",
    },
    {
      title: "Shop Window Display",
      description: "Attention-grabbing digital window displays that drive foot traffic. High-brightness screens for visibility in direct sunlight.",
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
              Engage audiences with dynamic digital displays. Update content instantly and maximize 
              impact with vibrant, attention-grabbing visuals.
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
