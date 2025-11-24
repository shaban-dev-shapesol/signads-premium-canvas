import { Building2, Home, Car, Printer, Presentation, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import exteriorImg from "@/assets/service-exterior.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import vehicleImg from "@/assets/service-vehicle.jpg";
import printingImg from "@/assets/service-printing.jpg";
import exhibitionImg from "@/assets/service-exhibition.jpg";
import digitalImg from "@/assets/service-digital.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Exterior Signage",
      description: "Premium exterior signage solutions from illuminated 3D letters to striking totem signs that attract customers 24/7.",
      features: ["Built-up 3D Letters", "Fascia Sign Trays", "Illuminated Totems", "Flex Face Light Boxes", "Projection Signs", "Site Hoarding"],
      link: "/services/exterior-signs",
      image: exteriorImg,
    },
    {
      icon: Home,
      title: "Interior Signage",
      description: "Sophisticated interior branding from reception signs to custom neon installations that reinforce your brand identity.",
      features: ["Reception Signs", "Neon Signs", "Office Light Boxes", "Wall Graphics", "Window Frosting", "Wayfinding Systems"],
      link: "/services/interior-signs",
      image: interiorImg,
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Professional wraps for cars, vans, trucks, and buses that deliver thousands of brand impressions daily.",
      features: ["Car Wraps", "Van Wraps", "Truck & HGV Wraps", "Fleet Branding", "Food Truck Graphics", "Bus Wraps"],
      link: "/services/vehicle-graphics",
      image: vehicleImg,
    },
    {
      icon: Printer,
      title: "Large Format Printing",
      description: "High-impact printed solutions from wall art to site hoarding using cutting-edge print technology.",
      features: ["Banner Printing", "Wall Art & Murals", "Floor Graphics", "Window Graphics", "Vinyl Lettering", "Bespoke Ceilings"],
      link: "/services/print-signs",
      image: printingImg,
    },
    {
      icon: Presentation,
      title: "Exhibition & Display",
      description: "Professional exhibition solutions from portable displays to custom stands designed for maximum impact.",
      features: ["Pop-up Banners", "Exhibition Stands", "Custom Flags", "Pavement Signs", "Promotional Lightboxes", "Event Backdrops"],
      link: "/services/exhibition-display",
      image: exhibitionImg,
    },
    {
      icon: Monitor,
      title: "Digital Signage",
      description: "Dynamic digital displays from indoor LED screens to interactive menu boards delivering real-time content.",
      features: ["Outdoor Digital Signs", "Indoor Digital Displays", "Digital Menu Boards", "Interactive Screens", "LED Video Walls", "Window Displays"],
      link: "/services/digital-signage",
      image: digitalImg,
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
                className="relative bg-card border border-border rounded-2xl hover:shadow-premium transition-smooth hover:-translate-y-2 group block overflow-hidden h-[520px]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/90 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-smooth shadow-lg">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-accent text-sm font-semibold group-hover:underline flex items-center gap-2">
                    View Services →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="premium" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
