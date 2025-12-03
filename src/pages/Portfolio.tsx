import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// Import gallery images
import exteriorFasciaTray from "@/assets/gallery/exterior-fascia-tray-1.jpg";
import exterior3DLetters from "@/assets/gallery/exterior-3d-letters-1.jpg";
import exteriorTotem from "@/assets/gallery/exterior-totem-1.jpg";
import exteriorFlexFace from "@/assets/gallery/exterior-flex-face-1.jpg";
import exteriorProjection from "@/assets/gallery/exterior-projection-1.jpg";
import exteriorHoarding from "@/assets/gallery/exterior-hoarding-1.jpg";

import interiorReception from "@/assets/gallery/interior-reception-1.jpg";
import interiorNeon from "@/assets/gallery/interior-neon-1.jpg";
import interiorLightbox from "@/assets/gallery/interior-lightbox-1.jpg";
import interiorWallGraphics from "@/assets/gallery/interior-wall-graphics-1.jpg";
import interiorWindowFrosting from "@/assets/gallery/interior-window-frosting-1.jpg";

import vehicleCarWrap from "@/assets/gallery/vehicle-car-wrap-1.jpg";
import vehicleVanWrap from "@/assets/gallery/vehicle-van-wrap-1.jpg";
import vehicleTruckWrap from "@/assets/gallery/vehicle-truck-wrap-1.jpg";
import vehicleBusWrap from "@/assets/gallery/vehicle-bus-wrap-1.jpg";
import vehicleFoodTruck from "@/assets/gallery/vehicle-food-truck-1.jpg";
import vehicleLorryWrap from "@/assets/gallery/vehicle-lorry-wrap-1.jpg";

import exhibitionStandard from "@/assets/gallery/exhibition-standard-1.jpg";
import exhibitionBespoke from "@/assets/gallery/exhibition-bespoke-1.jpg";
import exhibitionPopup from "@/assets/gallery/exhibition-popup-1.jpg";

import digitalOutdoor from "@/assets/gallery/digital-outdoor-1.jpg";
import digitalIndoor from "@/assets/gallery/digital-indoor-1.jpg";
import digitalMenu from "@/assets/gallery/digital-menu-1.jpg";
import digitalWindow from "@/assets/gallery/digital-window-1.jpg";

import lightboxAcrylic from "@/assets/gallery/lightbox-acrylic-1.jpg";
import lightboxPromotional from "@/assets/gallery/lightbox-promotional-1.jpg";

import printBanner from "@/assets/gallery/print-banner-1.jpg";
import printVinyl from "@/assets/gallery/print-vinyl-1.jpg";
import printWindow from "@/assets/gallery/print-window-1.jpg";
import printWallArt from "@/assets/gallery/print-wall-art-1.jpg";
import printFloor from "@/assets/gallery/print-floor-1.jpg";

import promotionalFlags from "@/assets/gallery/promotional-flags-1.jpg";
import promotionalPavement from "@/assets/gallery/promotional-pavement-1.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [isInProjectsSection, setIsInProjectsSection] = useState(true);
  const projectsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInProjectsSection(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    );

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    // Exterior Projects
    {
      id: 1,
      title: "Corporate Fascia Sign Tray",
      category: "exterior",
      industry: "Corporate",
      image: exteriorFasciaTray,
      description: "Premium illuminated fascia signage for modern office building.",
      services: ["Fascia Sign Tray", "LED Lighting"]
    },
    {
      id: 2,
      title: "Retail 3D Letters",
      category: "exterior",
      industry: "Retail",
      image: exterior3DLetters,
      description: "Built-up 3D letters creating bold storefront presence.",
      services: ["3D Letters", "Illuminated Signs"]
    },
    {
      id: 3,
      title: "Shopping Centre Totem",
      category: "exterior",
      industry: "Retail",
      image: exteriorTotem,
      description: "Multi-tenant totem sign for retail park navigation.",
      services: ["Totem Signs", "Wayfinding"]
    },
    {
      id: 4,
      title: "Restaurant Flex Face Sign",
      category: "exterior",
      industry: "Hospitality",
      image: exteriorFlexFace,
      description: "Large format flex face light box for restaurant visibility.",
      services: ["Flex Face Light Box", "LED Lighting"]
    },
    {
      id: 5,
      title: "Hotel Projection Sign",
      category: "exterior",
      industry: "Hospitality",
      image: exteriorProjection,
      description: "Double-sided projection sign for hotel entrance.",
      services: ["Projection Signs", "Premium Branding"]
    },
    {
      id: 6,
      title: "Construction Site Hoarding",
      category: "exterior",
      industry: "Construction",
      image: exteriorHoarding,
      description: "Full site hoarding with branded graphics.",
      services: ["Site Hoarding", "Large Format Print"]
    },

    // Interior Projects
    {
      id: 7,
      title: "Law Firm Reception Sign",
      category: "interior",
      industry: "Corporate",
      image: interiorReception,
      description: "Elegant reception signage with backlit logo.",
      services: ["Reception Signs", "LED Illumination"]
    },
    {
      id: 8,
      title: "Bar Neon Signage",
      category: "interior",
      industry: "Hospitality",
      image: interiorNeon,
      description: "Custom LED neon signs creating vibrant atmosphere.",
      services: ["Neon Signs", "Custom Design"]
    },
    {
      id: 9,
      title: "Office Light Box Display",
      category: "interior",
      industry: "Corporate",
      image: interiorLightbox,
      description: "Illuminated light box showcasing company values.",
      services: ["Light Boxes", "Brand Graphics"]
    },
    {
      id: 10,
      title: "Creative Agency Wall Graphics",
      category: "interior",
      industry: "Corporate",
      image: interiorWallGraphics,
      description: "Bold wall graphics transforming office space.",
      services: ["Wall Graphics", "Interior Branding"]
    },
    {
      id: 11,
      title: "Medical Centre Window Frosting",
      category: "interior",
      industry: "Healthcare",
      image: interiorWindowFrosting,
      description: "Privacy frosting with branded elements.",
      services: ["Window Frosting", "Privacy Solutions"]
    },

    // Vehicle Projects
    {
      id: 12,
      title: "Delivery Fleet Car Wrap",
      category: "vehicle",
      industry: "Logistics",
      image: vehicleCarWrap,
      description: "Full vehicle wrap for delivery service fleet.",
      services: ["Car Wraps", "Fleet Graphics"]
    },
    {
      id: 13,
      title: "Plumber Van Wrap",
      category: "vehicle",
      industry: "Trade Services",
      image: vehicleVanWrap,
      description: "Eye-catching van wrap for local plumbing company.",
      services: ["Van Wraps", "Mobile Advertising"]
    },
    {
      id: 14,
      title: "Logistics Truck Wrap",
      category: "vehicle",
      industry: "Logistics",
      image: vehicleTruckWrap,
      description: "Full truck wrap maximizing brand exposure.",
      services: ["Truck Wraps", "Large Format"]
    },
    {
      id: 15,
      title: "City Bus Wrap",
      category: "vehicle",
      industry: "Transport",
      image: vehicleBusWrap,
      description: "High-impact bus wrap for public transport advertising.",
      services: ["Bus Wraps", "OOH Advertising"]
    },
    {
      id: 16,
      title: "Gourmet Food Truck",
      category: "vehicle",
      industry: "Hospitality",
      image: vehicleFoodTruck,
      description: "Vibrant food truck wrap attracting customers.",
      services: ["Food Truck Wraps", "Menu Graphics"]
    },
    {
      id: 17,
      title: "National Lorry Fleet",
      category: "vehicle",
      industry: "Logistics",
      image: vehicleLorryWrap,
      description: "Branded HGV fleet covering nationwide routes.",
      services: ["Lorry Wraps", "Fleet Branding"]
    },

    // Exhibition Projects
    {
      id: 18,
      title: "Trade Show Standard Display",
      category: "exhibition",
      industry: "Corporate",
      image: exhibitionStandard,
      description: "Professional exhibition stand for trade shows.",
      services: ["Exhibition Display", "Pop-up Banners"]
    },
    {
      id: 19,
      title: "Bespoke Exhibition Stand",
      category: "exhibition",
      industry: "Technology",
      image: exhibitionBespoke,
      description: "Custom-built exhibition stand with integrated displays.",
      services: ["Bespoke Displays", "Event Graphics"]
    },
    {
      id: 20,
      title: "Conference Pop-up Display",
      category: "exhibition",
      industry: "Corporate",
      image: exhibitionPopup,
      description: "Portable pop-up banners for conference events.",
      services: ["Pop-up Banners", "Portable Displays"]
    },

    // Digital Projects
    {
      id: 21,
      title: "Outdoor Digital Billboard",
      category: "digital",
      industry: "Advertising",
      image: digitalOutdoor,
      description: "High-brightness outdoor digital display.",
      services: ["Outdoor Digital", "LED Displays"]
    },
    {
      id: 22,
      title: "Retail Indoor Digital",
      category: "digital",
      industry: "Retail",
      image: digitalIndoor,
      description: "Interactive indoor digital signage for retail.",
      services: ["Indoor Digital", "Interactive Displays"]
    },
    {
      id: 23,
      title: "Restaurant Digital Menu",
      category: "digital",
      industry: "Hospitality",
      image: digitalMenu,
      description: "Dynamic digital menu boards for fast service.",
      services: ["Digital Menus", "Content Management"]
    },
    {
      id: 24,
      title: "Shop Window Digital Display",
      category: "digital",
      industry: "Retail",
      image: digitalWindow,
      description: "High-visibility window-facing digital display.",
      services: ["Window Displays", "Digital Signage"]
    },

    // Light Box Projects
    {
      id: 25,
      title: "Gallery Acrylic Light Box",
      category: "lightbox",
      industry: "Arts",
      image: lightboxAcrylic,
      description: "Premium acrylic light box for gallery display.",
      services: ["Acrylic Light Box", "LED Illumination"]
    },
    {
      id: 26,
      title: "Retail Promotional Light Box",
      category: "lightbox",
      industry: "Retail",
      image: lightboxPromotional,
      description: "Eye-catching promotional light box for retail.",
      services: ["Promotional Light Box", "Brand Activation"]
    },

    // Print Projects
    {
      id: 27,
      title: "Event Banner Printing",
      category: "print",
      industry: "Events",
      image: printBanner,
      description: "Large format banners for outdoor event.",
      services: ["Banner Printing", "Event Graphics"]
    },
    {
      id: 28,
      title: "Storefront Vinyl Lettering",
      category: "print",
      industry: "Retail",
      image: printVinyl,
      description: "Precision cut vinyl lettering for storefront.",
      services: ["Vinyl Lettering", "Window Graphics"]
    },
    {
      id: 29,
      title: "Boutique Window Graphics",
      category: "print",
      industry: "Retail",
      image: printWindow,
      description: "Seasonal window graphics for fashion boutique.",
      services: ["Window Graphics", "Promotional Print"]
    },
    {
      id: 30,
      title: "Office Wall Art Installation",
      category: "print",
      industry: "Corporate",
      image: printWallArt,
      description: "Custom wall art creating inspiring workspace.",
      services: ["Wall Art", "Interior Print"]
    },
    {
      id: 31,
      title: "Showroom Floor Graphics",
      category: "print",
      industry: "Automotive",
      image: printFloor,
      description: "Directional floor graphics guiding customers.",
      services: ["Floor Graphics", "Wayfinding"]
    },

    // Promotional Projects
    {
      id: 32,
      title: "Festival Custom Flags",
      category: "promotional",
      industry: "Events",
      image: promotionalFlags,
      description: "Vibrant custom flags for outdoor festival.",
      services: ["Custom Flags", "Event Branding"]
    },
    {
      id: 33,
      title: "Café Pavement Sign",
      category: "promotional",
      industry: "Hospitality",
      image: promotionalPavement,
      description: "A-frame pavement sign driving foot traffic.",
      services: ["Pavement Signs", "Street Advertising"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "exterior", name: "Exterior" },
    { id: "interior", name: "Interior" },
    { id: "vehicle", name: "Vehicle" },
    { id: "exhibition", name: "Exhibition" },
    { id: "digital", name: "Digital" },
    { id: "lightbox", name: "Light Box" },
    { id: "print", name: "Print" },
    { id: "promotional", name: "Promotional" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
              Explore our work across diverse industries and signage solutions.
            </p>
            <p className="text-lg text-primary-foreground/60">
              {projects.length} projects showcasing our commitment to quality
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-8 bg-secondary border-b border-border transition-all duration-300 ease-in-out ${isInProjectsSection ? 'sticky top-20 z-40' : 'relative'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "premium" : "outline"}
                onClick={() => setFilter(cat.id)}
                size="sm"
              >
                {cat.name}
                {filter === cat.id && (
                  <span className="ml-2 text-xs bg-accent/20 px-2 py-0.5 rounded-full">
                    {cat.id === "all" ? projects.length : projects.filter(p => p.category === cat.id).length}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={projectsSectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-premium transition-smooth"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                      <div className="flex flex-wrap gap-1">
                        {project.services.map((service, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-accent/90 text-accent-foreground px-2 py-0.5 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold bg-accent text-accent-foreground px-2 py-1 rounded-full uppercase tracking-wide">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-base font-bold text-foreground mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Project to Shine?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's create signage solutions that showcase your brand and drive results.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
