import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const InteriorSigns = () => {
  const services = [
    {
      title: "Reception Signs",
      description: "Make a powerful first impression with premium lobby signage. Custom-designed to reflect your brand identity and values.",
    },
    {
      title: "Neon Signs",
      description: "Contemporary illuminated features that add character and ambiance to modern spaces. Energy-efficient LED neon technology.",
    },
    {
      title: "Light Boxes",
      description: "Backlit displays that ensure your messaging stands out in any interior environment. Perfect for retail and corporate spaces.",
    },
    {
      title: "Creative Office Wall Graphics",
      description: "Transform your workspace with inspiring branded environments. Boost morale and reinforce company culture.",
    },
    {
      title: "Office Window Frosting",
      description: "Privacy solutions that maintain natural light while adding professional branding. Available in various opacities and designs.",
    },
  ];

  return (
    <div className="min-h-screen">
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
              Transform your interior spaces with sophisticated signage that reinforces brand identity 
              and enhances customer experience at every touchpoint.
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
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-secondary p-8 rounded-2xl border border-border hover:shadow-premium transition-smooth"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Elevate Your Interior Spaces</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Create memorable experiences with professionally designed interior signage solutions.
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

export default InteriorSigns;
