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
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
        </div>

        {/* Grid Layout - Row 1: 3 equal cards, Row 2: 2 larger cards */}
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First Row - 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={service.link}
                  className="group relative block overflow-hidden rounded-2xl h-[280px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Larger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.slice(3, 5).map((service, index) => (
              <motion.div key={index + 3} variants={itemVariants}>
                <Link
                  to={service.link}
                  className="group relative block overflow-hidden rounded-2xl h-[320px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
