import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrintSigns = () => {
  const services = [
    {
      title: "Printed Tray",
      description: "High-quality printed tray signage for professional storefronts. Durable materials with vibrant, long-lasting colors.",
    },
    {
      title: "Vinyl Lettering",
      description: "Precision-cut vinyl graphics for windows, walls, and vehicles. Available in a wide range of colors and finishes.",
    },
    {
      title: "Site Hoarding Boards",
      description: "Large-format construction site graphics that promote your brand during development. Weather-resistant and impactful.",
    },
    {
      title: "Banner Printing",
      description: "Indoor and outdoor banners in various sizes and materials. Fast turnaround with professional finishing.",
    },
    {
      title: "Window Graphics",
      description: "Eye-catching window displays that drive foot traffic. One-way vision options available for privacy.",
    },
    {
      title: "Wall Art",
      description: "Custom murals and decorative installations that transform interior spaces. Photo-quality printing on various substrates.",
    },
    {
      title: "Floor Graphics",
      description: "Anti-slip promotional floor decals for retail and events. Durable laminated finish for high-traffic areas.",
    },
    {
      title: "Bespoke Printed Ceiling",
      description: "Innovative ceiling graphics that maximize unused space. Perfect for retail environments and exhibitions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Printer className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Print <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Cutting-edge printing technology delivering stunning visual impact at any scale. 
              From temporary campaigns to permanent installations.
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
              <h2 className="text-3xl font-bold mb-4">High-Quality Printing Solutions</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Experience superior print quality with fast turnaround times and expert finishing.
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

export default PrintSigns;
