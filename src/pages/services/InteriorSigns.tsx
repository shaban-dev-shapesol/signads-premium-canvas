import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import interiorReception from "@/assets/gallery/interior-reception-1.jpg";
import interiorNeon from "@/assets/gallery/interior-neon-1.jpg";
import interiorLightbox from "@/assets/gallery/interior-lightbox-1.jpg";
import interiorWallGraphics from "@/assets/gallery/interior-wall-graphics-1.jpg";
import interiorWindowFrosting from "@/assets/gallery/interior-window-frosting-1.jpg";

const InteriorSigns = () => {
  const services = [
    {
      title: "Reception Signs",
      description: "Make a powerful first impression with premium lobby signage.",
      image: interiorReception,
      link: "/services/interior-signs/reception-signs",
    },
    {
      title: "Neon Signs",
      description: "Contemporary illuminated features for modern spaces.",
      image: interiorNeon,
      link: "/services/interior-signs/neon-signs",
    },
    {
      title: "Office Light Boxes",
      description: "Backlit displays that stand out in any environment.",
      image: interiorLightbox,
      link: "/services/interior-signs/office-lightboxes",
    },
    {
      title: "Office Wall Graphics",
      description: "Transform your workspace with inspiring branded environments.",
      image: interiorWallGraphics,
      link: "/services/interior-signs/office-wall-graphics",
    },
    {
      title: "Window Frosting",
      description: "Privacy solutions with professional branding.",
      image: interiorWindowFrosting,
      link: "/services/interior-signs/window-frosting",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Interior Signs - Reception, Neon, Wall Graphics & More"
        description="Transform your interior spaces with reception signs, LED neon, lightboxes, wall graphics, and window frosting. Professional design and installation."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Interior <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your interior spaces with sophisticated signage that reinforces brand identity.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-premium transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Elevate Your Interior Spaces</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Create memorable experiences with professionally designed interior signage.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Quote
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

export default InteriorSigns;
