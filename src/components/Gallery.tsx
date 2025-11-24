import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import exterior3DLetters from "@/assets/gallery/exterior-3d-letters-1.jpg";
import vehicleCarWrap from "@/assets/gallery/vehicle-car-wrap-1.jpg";
import interiorReception from "@/assets/gallery/interior-reception-1.jpg";
import exhibitionStandard from "@/assets/gallery/exhibition-standard-1.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "Premium 3D Built-Up Letters",
      category: "Exterior Signage",
      image: exterior3DLetters,
    },
    {
      title: "Professional Car Wrap",
      category: "Vehicle Graphics",
      image: vehicleCarWrap,
    },
    {
      title: "Corporate Reception Signs",
      category: "Interior Signage",
      image: interiorReception,
    },
    {
      title: "Exhibition Display Stand",
      category: "Events & Exhibitions",
      image: exhibitionStandard,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours make a lasting impression
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-premium hover:shadow-glow transition-smooth"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <span className="text-accent text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="premium" size="lg" className="group">
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
