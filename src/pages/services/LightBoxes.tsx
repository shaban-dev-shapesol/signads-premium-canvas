import { Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exteriorFlexFace from "@/assets/gallery/exterior-flex-face-1.jpg";
import lightboxAcrylic from "@/assets/gallery/lightbox-acrylic-1.jpg";
import lightboxPromotional from "@/assets/gallery/lightbox-promotional-1.jpg";

const LightBoxes = () => {
  const services = [
    {
      title: "Flex Face LightBox",
      description: "Durable illuminated signage with weather-resistant flex face material.",
      image: exteriorFlexFace,
      link: "/services/light-boxes/flex-face-lightbox",
    },
    {
      title: "Acrylic Lightbox",
      description: "Premium acrylic face panels with superior clarity.",
      image: lightboxAcrylic,
      link: "/services/light-boxes/acrylic-lightbox",
    },
    {
      title: "Promotional Lightbox",
      description: "Eye-catching illuminated displays for retail and promotions.",
      image: lightboxPromotional,
      link: "/services/light-boxes/promotional-lightbox",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Light Boxes - Illuminated Signage & LED Displays"
        description="Energy-efficient LED lightbox signage including flex face, acrylic, and promotional displays. Bright, even illumination for 24/7 visibility."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Light <span className="text-accent">Boxes</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Illuminate your brand with energy-efficient LED lightbox solutions.
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
              <h2 className="text-3xl font-bold mb-4">Brighten Your Brand Presence</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Energy-efficient, eye-catching lightbox solutions that work around the clock.
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

export default LightBoxes;
