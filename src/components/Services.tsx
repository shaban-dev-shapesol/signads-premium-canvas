import { Building2, Home, Car, Printer, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Exterior Signage",
      description: "Make a powerful first impression with premium exterior signage. From illuminated 3D letters to striking totem signs, we create weather-resistant solutions engineered to attract customers 24/7.",
      features: ["Built-up 3D Letters", "Fascia Sign Trays", "Illuminated Totems", "Flex Face Light Boxes", "Projection Signs", "Site Hoarding"],
      link: "/services/exterior-signs",
    },
    {
      icon: Home,
      title: "Interior Signage",
      description: "Transform your workspace with sophisticated interior branding. Our reception signs, wall graphics, and custom neon installations create memorable experiences that reinforce your brand identity.",
      features: ["Reception Signs", "Neon Signs", "Office Light Boxes", "Wall Graphics", "Window Frosting", "Wayfinding Systems"],
      link: "/services/interior-signs",
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Turn your fleet into a mobile advertising powerhouse. Professional wraps for cars, vans, trucks, and buses that deliver thousands of brand impressions daily while protecting your vehicle's paintwork.",
      features: ["Car Wraps", "Van Wraps", "Truck & HGV Wraps", "Fleet Branding", "Food Truck Graphics", "Bus Wraps"],
      link: "/services/vehicle-graphics",
    },
    {
      icon: Printer,
      title: "Large Format Printing",
      description: "High-impact printed solutions for any surface or scale. From floor-to-ceiling wall art to durable site hoarding, we deliver stunning visual communications using cutting-edge print technology.",
      features: ["Banner Printing", "Wall Art & Murals", "Floor Graphics", "Window Graphics", "Vinyl Lettering", "Bespoke Ceilings"],
      link: "/services/print-signs",
    },
    {
      icon: Presentation,
      title: "Exhibition & Display",
      description: "Stand out at every event with professional exhibition solutions. Portable displays, custom stands, and promotional signage designed for maximum impact and effortless setup.",
      features: ["Pop-up Banners", "Exhibition Stands", "Custom Flags", "Pavement Signs", "Promotional Lightboxes", "Event Backdrops"],
      link: "/services/exhibition-display",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to installation, we deliver premium signage solutions that drive results. Expert craftsmanship, express turnaround, and dedicated support for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="bg-card border border-border p-8 rounded-2xl hover:shadow-premium transition-smooth hover:-translate-y-2 group block"
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
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-accent text-sm font-semibold group-hover:underline">
                  View Services →
                </div>
              </Link>
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
