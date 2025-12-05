import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exterior3DLetters from "@/assets/gallery/exterior-3d-letters-1.jpg";
import exteriorFasciaTray from "@/assets/gallery/exterior-fascia-tray-1.jpg";
import exteriorFlexFace from "@/assets/gallery/exterior-flex-face-1.jpg";
import exteriorProjection from "@/assets/gallery/exterior-projection-1.jpg";
import exteriorTotem from "@/assets/gallery/exterior-totem-1.jpg";
import exteriorHoarding from "@/assets/gallery/exterior-hoarding-1.jpg";

const ExteriorSigns = () => {
  const services = [
    {
      title: "Built up 3D Letters",
      description: "Premium dimensional lettering with depth and impact.",
      image: exterior3DLetters,
      link: "/services/exterior-signs/built-up-3d-letters",
    },
    {
      title: "Fascia Sign Tray",
      description: "Eye-catching tray signs for retail and commercial frontages.",
      image: exteriorFasciaTray,
      link: "/services/exterior-signs/fascia-sign-tray",
    },
    {
      title: "Flex Face LightBox",
      description: "Illuminated signage with 24/7 visibility.",
      image: exteriorFlexFace,
      link: "/services/exterior-signs/flex-face-lightbox",
    },
    {
      title: "Projection Sign",
      description: "Projecting signs for multi-angle visibility.",
      image: exteriorProjection,
      link: "/services/exterior-signs/projection-sign",
    },
    {
      title: "Totem Sign",
      description: "Freestanding monumental signage solutions.",
      image: exteriorTotem,
      link: "/services/exterior-signs/totem-sign",
    },
    {
      title: "Site Hoarding Boards",
      description: "Large-format temporary signage for construction sites.",
      image: exteriorHoarding,
      link: "/services/exterior-signs/site-hoarding-boards",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Exterior Signs - Shop Fronts, 3D Letters & Building Signage"
        description="Premium exterior signage including 3D letters, fascia signs, lightboxes, totems, and projection signs. Weather-resistant and professionally installed."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Exterior <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Make a lasting impression with premium exterior signage that commands attention 24/7.
            </p>
            <Link to="/#contact">
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Exterior?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Our expert team will help you choose the perfect exterior signage solution.
              </p>
              <Link to="/#contact">
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

export default ExteriorSigns;
