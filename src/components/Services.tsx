import { Building2, Home, Car, Printer, Presentation, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      description: "Illuminated 3D letters, totem signs & shopfronts that attract customers 24/7.",
      features: ["Built-up 3D Letters", "Fascia Sign Trays", "Illuminated Totems", "Flex Face Light Boxes"],
      link: "/services/exterior-signs",
      image: exteriorImg,
      featured: true,
    },
    {
      icon: Home,
      title: "Interior Signage",
      description: "Reception signs, neon installations & wall graphics that reinforce your brand.",
      features: ["Reception Signs", "Neon Signs", "Office Light Boxes", "Wall Graphics"],
      link: "/services/interior-signs",
      image: interiorImg,
      featured: false,
    },
    {
      icon: Car,
      title: "Vehicle Graphics",
      description: "Professional wraps for cars, vans & fleets delivering thousands of impressions daily.",
      features: ["Car Wraps", "Van Wraps", "Truck & HGV Wraps", "Fleet Branding"],
      link: "/services/vehicle-graphics",
      image: vehicleImg,
      featured: true,
    },
    {
      icon: Printer,
      title: "Large Format Printing",
      description: "Wall art, banners & graphics using cutting-edge print technology.",
      features: ["Banner Printing", "Wall Art & Murals", "Floor Graphics", "Window Graphics"],
      link: "/services/print-signs",
      image: printingImg,
      featured: false,
    },
    {
      icon: Presentation,
      title: "Exhibition & Display",
      description: "Portable displays & custom stands designed for maximum impact.",
      features: ["Pop-up Banners", "Exhibition Stands", "Custom Flags", "Pavement Signs"],
      link: "/services/exhibition-display",
      image: exhibitionImg,
      featured: false,
    },
    {
      icon: Monitor,
      title: "Digital Signage",
      description: "Dynamic LED screens & interactive displays delivering real-time content.",
      features: ["Outdoor Digital Signs", "Indoor Displays", "Digital Menu Boards", "LED Video Walls"],
      link: "/services/digital-signage",
      image: digitalImg,
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 max-w-7xl mx-auto">
          <div>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-accent">Services</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            From concept to installation, we deliver premium signage solutions with expert craftsmanship and express turnaround.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 2;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${isLarge ? 'lg:row-span-2' : ''}`}
              >
                <Link
                  to={service.link}
                  className={`group relative block overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-accent/50 transition-all duration-500 ${
                    isLarge ? 'h-full min-h-[480px]' : 'h-full min-h-[240px]'
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isLarge 
                        ? 'bg-gradient-to-t from-background via-background/80 to-transparent group-hover:from-background/95'
                        : 'bg-gradient-to-r from-background/95 via-background/85 to-background/70 group-hover:from-background/90'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`relative z-10 h-full flex flex-col ${
                    isLarge ? 'justify-end p-8' : 'justify-between p-6'
                  }`}>
                    {/* Icon */}
                    <div className={`${isLarge ? 'mb-auto' : ''}`}>
                      <div className="w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className={isLarge ? 'mt-auto' : ''}>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {isLarge && (
                        <>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {!isLarge && (
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {service.description}
                        </p>
                      )}

                      {/* Arrow indicator */}
                      <div className="flex items-center gap-2 text-accent font-medium text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/services">
            <Button variant="premium" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
