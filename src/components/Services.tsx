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
      description: "Make a powerful first impression with premium exterior signage. From illuminated 3D letters to striking totem signs, we create weather-resistant solutions engineered to attract customers 24/7.",
      features: ["Built-up 3D Letters", "Fascia Sign Trays", "Illuminated Totems", "Flex Face Light Boxes", "Projection Signs", "Site Hoarding"],
      link: "/services/exterior-signs",
      image: exteriorImg,
    },
    {
      icon: Home,
      title: "Interior Signage",
      description: "Transform your workspace with sophisticated interior branding. Our reception signs, wall graphics, and custom neon installations create memorable experiences that reinforce your brand identity.",
      features: ["Reception Signs", "Neon Signs", "Office Light Boxes", "Wall Graphics", "Window Frosting", "Wayfinding Systems"],
      link: "/services/interior-signs",
      image: interiorImg,
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Turn your fleet into a mobile advertising powerhouse. Professional wraps for cars, vans, trucks, and buses that deliver thousands of brand impressions daily while protecting your vehicle's paintwork.",
      features: ["Car Wraps", "Van Wraps", "Truck & HGV Wraps", "Fleet Branding", "Food Truck Graphics", "Bus Wraps"],
      link: "/services/vehicle-graphics",
      image: vehicleImg,
    },
    {
      icon: Printer,
      title: "Large Format Printing",
      description: "High-impact printed solutions for any surface or scale. From floor-to-ceiling wall art to durable site hoarding, we deliver stunning visual communications using cutting-edge print technology.",
      features: ["Banner Printing", "Wall Art & Murals", "Floor Graphics", "Window Graphics", "Vinyl Lettering", "Bespoke Ceilings"],
      link: "/services/print-signs",
      image: printingImg,
    },
    {
      icon: Presentation,
      title: "Exhibition & Display",
      description: "Stand out at every event with professional exhibition solutions. Portable displays, custom stands, and promotional signage designed for maximum impact and effortless setup.",
      features: ["Pop-up Banners", "Exhibition Stands", "Custom Flags", "Pavement Signs", "Promotional Lightboxes", "Event Backdrops"],
      link: "/services/exhibition-display",
      image: exhibitionImg,
    },
    {
      icon: Monitor,
      title: "Digital Signage",
      description: "Captivate audiences with dynamic digital displays. Indoor and outdoor LED screens, interactive displays, and digital menu boards that deliver real-time content with stunning clarity and impact.",
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
                  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/85 group-hover:from-background/70 group-hover:via-background/60 group-hover:to-background/80 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-smooth shadow-lg">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed drop-shadow-md">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-white/85 flex items-center drop-shadow">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0 shadow-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-accent text-sm font-semibold group-hover:underline flex items-center gap-2 drop-shadow-lg">
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
