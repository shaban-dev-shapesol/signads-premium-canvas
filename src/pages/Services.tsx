import { Building2, Home, Car, Printer, Presentation, Lightbulb, Flag, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import serviceExterior from "@/assets/service-exterior.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceVehicle from "@/assets/service-vehicle.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceExhibition from "@/assets/service-exhibition.jpg";
import serviceDigital from "@/assets/service-digital.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Exterior Signs",
      description: "Premium exterior signage that commands attention and elevates your brand presence 24/7.",
      image: serviceExterior,
      link: "/services/exterior-signs",
      features: [
        "Built-up 3D Letters",
        "Fascia Sign Trays",
        "Flex Face Light Boxes",
        "Projection Signs",
        "Totem Signs",
        "Site Hoarding Boards"
      ],
      benefits: "Weather-resistant materials, professional installation, and compliance with local regulations."
    },
    {
      icon: Home,
      title: "Interior Signs",
      description: "Sophisticated interior signage that reinforces brand identity and enhances customer experience.",
      image: serviceInterior,
      link: "/services/interior-signs",
      features: [
        "Reception Signs",
        "Neon Signs",
        "Office Light Boxes",
        "Creative Wall Graphics",
        "Window Frosting"
      ],
      benefits: "Custom design consultation, precise manufacturing, and expert installation."
    },
    {
      icon: Printer,
      title: "Print Signs",
      description: "Cutting-edge printing technology delivering stunning visual impact at any scale.",
      image: servicePrinting,
      link: "/services/print-signs",
      features: [
        "Printed Trays",
        "Vinyl Lettering",
        "Banner Printing",
        "Window Graphics",
        "Wall Art",
        "Floor Graphics",
        "Bespoke Ceilings"
      ],
      benefits: "High-resolution output, UV-resistant inks, and fast turnaround times."
    },
    {
      icon: Lightbulb,
      title: "Light Boxes",
      description: "Eye-catching illuminated displays that make your brand shine day and night.",
      image: serviceExterior,
      link: "/services/light-boxes",
      features: [
        "Flex Face Light Box Signs",
        "Acrylic Printed Light Boxes",
        "Promotional Light Boxes"
      ],
      benefits: "Energy-efficient LED technology, even illumination, and durable construction."
    },
    {
      icon: Flag,
      title: "Promotional Signs",
      description: "Versatile promotional solutions designed for maximum visibility and engagement.",
      image: servicePrinting,
      link: "/services/promotional-signs",
      features: [
        "Custom Flags",
        "Pavement Signs",
        "Projection Signs",
        "Window Graphics",
        "Light Boxes",
        "Bespoke Ceilings"
      ],
      benefits: "Portable designs, quick setup, and high-impact visibility."
    },
    {
      icon: Monitor,
      title: "Digital Signage",
      description: "Dynamic digital displays that captivate audiences with stunning visuals.",
      image: serviceDigital,
      link: "/services/digital-signage",
      features: [
        "Outdoor Digital Signs",
        "Indoor Digital Signage",
        "Digital Takeaway Menus",
        "Shop Window Displays"
      ],
      benefits: "Remote content management, real-time updates, and engaging animations."
    },
    {
      icon: Presentation,
      title: "Exhibition Display",
      description: "Professional exhibition systems designed for impact, portability, and ease of setup.",
      image: serviceExhibition,
      link: "/services/exhibition-display",
      features: [
        "Standard Exhibition Displays",
        "Bespoke Exhibition Displays",
        "Pop-up Banners",
        "Modular Stands"
      ],
      benefits: "Lightweight designs, tool-free assembly, and graphic replacement services."
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Transform your fleet into mobile billboards generating thousands of impressions daily.",
      image: serviceVehicle,
      link: "/services/vehicle-graphics",
      features: [
        "Car Wraps",
        "Van Wraps",
        "Truck Wraps",
        "Food Truck Wraps",
        "Lorry & HGV Wraps",
        "Bus Wraps"
      ],
      benefits: "Premium 3M and Avery materials, precision application, and paint protection."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Comprehensive signage solutions designed to elevate your brand and drive business growth.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-foreground mb-4">What We Offer:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-secondary p-6 rounded-xl border border-border mb-6">
                      <p className="text-sm text-foreground">
                        <strong>Why Choose Us:</strong> {service.benefits}
                      </p>
                    </div>

                    <Link to={service.link}>
                      <Button variant="default" size="lg">
                        Explore {service.title}
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's discuss your project and create signage solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
                  View Our Work
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

export default Services;
