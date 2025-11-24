import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const VehicleGraphics = () => {
  const services = [
    {
      title: "Car Wrap",
      description: "Transform your vehicle into a mobile billboard. Premium 3M and Avery materials with professional installation and paint protection.",
    },
    {
      title: "Van Wrap",
      description: "Full and partial wrap options for commercial vans. High-impact graphics that generate thousands of daily impressions.",
    },
    {
      title: "Truck Wrap",
      description: "Large-format wraps for trucks and commercial vehicles. Weather-resistant and designed for long-term durability.",
    },
    {
      title: "Food Truck Wrap",
      description: "Eye-catching designs for food trucks that attract customers. Vibrant graphics that showcase your menu and brand.",
    },
    {
      title: "Lorry & HGV Wrap",
      description: "Heavy goods vehicle wraps for maximum brand exposure. Professional installation with material warranties.",
    },
    {
      title: "Bus Wrap",
      description: "Full bus wraps for transit and tour operators. High-visibility advertising that reaches wide audiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vehicle <span className="text-accent">Graphics</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your fleet into mobile billboards that generate thousands of impressions daily. 
              Professional vehicle wrapping that protects and promotes.
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
              <h2 className="text-3xl font-bold mb-4">Turn Your Fleet into Marketing Assets</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Professional vehicle wraps that protect your investment while promoting your brand.
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

export default VehicleGraphics;
