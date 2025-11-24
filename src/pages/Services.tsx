import { Building2, Home, Car, Printer, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Exterior Signage",
      description: "Make an unforgettable first impression with premium exterior signage solutions that command attention and elevate your brand presence 24/7.",
      features: [
        "Fascia Signs - Premium illuminated and non-illuminated options",
        "3D Built-up Letters - Dimensional signage with depth and impact",
        "Totem Signs - Freestanding structures for maximum visibility",
        "Illuminated Light Boxes - Eye-catching displays that shine day and night",
        "LED Signage - Energy-efficient, vibrant digital displays",
        "Window Graphics - Professional vinyl applications and manifestations"
      ],
      benefits: "Weather-resistant materials, professional installation, compliance with local regulations, and maintenance support included."
    },
    {
      icon: Home,
      title: "Interior Signage",
      description: "Transform your interior spaces with sophisticated signage that reinforces brand identity and enhances the customer experience at every touchpoint.",
      features: [
        "Reception Signs - Make a powerful statement in your lobby",
        "Office Wall Graphics - Inspire and motivate with branded environments",
        "Wayfinding Systems - Guide visitors seamlessly through your space",
        "Neon Signs - Contemporary illuminated features for modern spaces",
        "Acrylic Displays - Premium transparent and colored options",
        "Directory Boards - Professional information systems"
      ],
      benefits: "Custom design consultation, precise manufacturing, expert installation, and materials that meet safety standards."
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Transform your fleet into mobile billboards that generate thousands of impressions daily. Professional vehicle wrapping that protects and promotes.",
      features: [
        "Full Vehicle Wraps - Complete transformation with maximum impact",
        "Partial Wraps - Strategic coverage for targeted messaging",
        "Fleet Graphics - Consistent branding across multiple vehicles",
        "Truck & Van Wraps - Large format solutions for commercial vehicles",
        "Car Magnets - Flexible, removable branding options",
        "Window Perforated Vinyl - Visibility from inside, advertising from outside"
      ],
      benefits: "Premium 3M and Avery materials, precision application, paint protection, and removal services available."
    },
    {
      icon: Printer,
      title: "Large Format Printing",
      description: "Cutting-edge printing technology delivering stunning visual impact at any scale. From temporary campaigns to permanent installations.",
      features: [
        "Hoarding Boards - Construction site and event perimeter graphics",
        "Banners - Indoor and outdoor, various materials and sizes",
        "Floor Graphics - Durable, anti-slip promotional floor decals",
        "Wall Art - Custom murals and decorative installations",
        "Bespoke Prints - Canvas, fabric, rigid substrates",
        "Event Graphics - Backdrops, displays, and promotional materials"
      ],
      benefits: "High-resolution output, UV-resistant inks, fast turnaround, and expert finishing services."
    },
    {
      icon: Presentation,
      title: "Exhibition & Display",
      description: "Stand out at trade shows and events with professional exhibition systems designed for impact, portability, and ease of setup.",
      features: [
        "Pop-up Banners - Quick setup, professional appearance",
        "Modular Exhibition Stands - Flexible, reusable systems",
        "Feather Flags - Eye-catching outdoor promotional displays",
        "Display Counters - Professional presentation surfaces",
        "Poster Frames - Premium display solutions for marketing materials",
        "Promotional Tables - Branded furniture for events"
      ],
      benefits: "Lightweight designs, carry cases included, tool-free assembly, and graphic replacement services."
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
              From concept to installation, we deliver excellence at every stage.
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
                    
                    <div className="bg-secondary p-6 rounded-xl border border-border">
                      <p className="text-sm text-foreground">
                        <strong>Why Choose Us:</strong> {service.benefits}
                      </p>
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-muted rounded-2xl aspect-[4/3] shadow-premium" />
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
