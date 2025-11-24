import { Building2, Home, Car, Printer, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Exterior Signage",
      description: "Fascia signs, 3D built-up letters, totem signs, and illuminated light boxes that make your business impossible to miss.",
      features: ["Fascia Signs", "3D Letters", "Totem Signs", "Light Boxes"],
    },
    {
      icon: Home,
      title: "Interior Signage",
      description: "Sophisticated reception signs, office wall graphics, wayfinding solutions, and custom neon signs for memorable interiors.",
      features: ["Reception Signs", "Wall Graphics", "Wayfinding", "Neon Signs"],
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Full and partial wraps for cars, vans, trucks, and fleets. Transform your vehicles into mobile billboards.",
      features: ["Full Wraps", "Partial Wraps", "Fleet Graphics", "Custom Designs"],
    },
    {
      icon: Printer,
      title: "Large Format Printing",
      description: "Hoarding boards, banners, floor graphics, wall art, and bespoke prints for any application or scale.",
      features: ["Hoarding Boards", "Banners", "Floor Graphics", "Wall Art"],
    },
    {
      icon: Presentation,
      title: "Exhibition & Display",
      description: "Pop-up banners, modular stands, and feather flags designed to make your brand stand out at events.",
      features: ["Pop-up Banners", "Modular Stands", "Feather Flags", "Event Graphics"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive signage solutions tailored to elevate your brand presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border p-8 rounded-2xl hover:shadow-premium transition-smooth hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-smooth">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="premium" size="lg">
            Request a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
