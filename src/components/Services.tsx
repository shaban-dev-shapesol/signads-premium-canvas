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
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 max-w-7xl mx-auto">
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block flex items-center gap-2">
              <span className="w-6 h-px bg-accent"></span>
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Explore Our Services:
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-accent mt-2">
              Premium Signage Solutions
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" size="lg" className="group bg-transparent border-accent text-accent hover:bg-accent hover:text-primary">
              <ArrowRight className="w-4 h-4 mr-2" />
              View All Services
            </Button>
          </Link>
        </div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.slice(0, 6).map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={service.link}
                className="group block bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image with Arrow Button */}
                <div className="relative px-4 pb-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5 text-primary rotate-[-45deg]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
