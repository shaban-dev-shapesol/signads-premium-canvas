import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectVehicle from "@/assets/project-vehicle.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectExhibition from "@/assets/project-exhibition.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Corporate Headquarters Signage",
      category: "exterior",
      industry: "Corporate",
      image: projectCorporate,
      description: "Premium illuminated 3D signage for modern corporate headquarters with sophisticated lighting.",
      services: ["Exterior Signage", "3D Letters", "LED Lighting"]
    },
    {
      id: 2,
      title: "Fleet Vehicle Graphics",
      category: "vehicle",
      industry: "Logistics",
      image: projectVehicle,
      description: "Full vehicle wrap for commercial fleet creating mobile brand ambassadors.",
      services: ["Vehicle Wraps", "Fleet Graphics", "Branded Materials"]
    },
    {
      id: 3,
      title: "Luxury Retail Interior",
      category: "interior",
      industry: "Retail",
      image: projectInterior,
      description: "High-end interior signage and wall graphics creating immersive brand experience.",
      services: ["Interior Signage", "Wall Graphics", "Premium Materials"]
    },
    {
      id: 4,
      title: "Trade Show Exhibition Stand",
      category: "exhibition",
      industry: "Healthcare",
      image: projectExhibition,
      description: "Modular exhibition system with integrated graphics for maximum impact.",
      services: ["Exhibition Stands", "Pop-up Banners", "Event Graphics"]
    },
    {
      id: 5,
      title: "Restaurant Exterior Signage",
      category: "exterior",
      industry: "Hospitality",
      image: projectCorporate,
      description: "Eye-catching illuminated signage driving foot traffic to premium restaurant.",
      services: ["Light Box", "Window Graphics", "Menu Boards"]
    },
    {
      id: 6,
      title: "Office Wayfinding System",
      category: "interior",
      industry: "Corporate",
      image: projectInterior,
      description: "Comprehensive wayfinding and directional signage for multi-floor office.",
      services: ["Wayfinding", "Office Signs", "Directory Systems"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "exterior", name: "Exterior" },
    { id: "interior", name: "Interior" },
    { id: "vehicle", name: "Vehicle Graphics" },
    { id: "exhibition", name: "Exhibition" },
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
            <p className="text-xl text-primary-foreground/80 mb-8">
              Explore our work across diverse industries and signage solutions. 
              Each project represents our commitment to quality and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "premium" : "outline"}
                onClick={() => setFilter(cat.id)}
                size="default"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-premium transition-smooth"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {project.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
