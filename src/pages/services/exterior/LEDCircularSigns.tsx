import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exteriorImage1 from "@/assets/gallery/exterior-projection-1.jpg";
import exteriorImage2 from "@/assets/gallery/exterior-projection-2.jpg";
import exteriorImage3 from "@/assets/gallery/exterior-projection-3.jpg";
import exteriorImage4 from "@/assets/gallery/exterior-projection-4.jpg";

const galleryImages = [
  { src: exteriorImage1, alt: "LED illuminated circular project sign" },
  { src: exteriorImage2, alt: "Illuminated round signage" },
  { src: exteriorImage3, alt: "Circular LED sign installation" },
  { src: exteriorImage4, alt: "Projecting illuminated sign" },
];

const LEDCircularSigns = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="LED Illuminated Circular Project Signs - Premium Round Signage"
        description="Eye-catching LED illuminated circular project signs for maximum visibility. Perfect for retail, hospitality, and commercial premises across Liverpool and UK."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              LED Illuminated <span className="text-accent">Circular Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Eye-catching round projecting signs that grab attention day and night. Perfect for retail and hospitality.
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
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Project Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryImages.map((image, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                LED illuminated circular project signs are the classic choice for pubs, cafes, salons, and retail shops. These double-sided signs project from your building, catching the attention of pedestrians and passing traffic.
              </p>
              <p className="text-lg text-muted-foreground">
                Our circular signs are fully illuminated with energy-efficient LED modules, providing consistent brightness and visibility in all conditions. Available in various sizes from 400mm to 1000mm diameter.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Frame:</strong> Powder-coated aluminium</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Face:</strong> Acrylic or polycarbonate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Printing:</strong> Double-sided full colour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mounting:</strong> Heavy-duty wall bracket</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Sizes:</strong> 400mm to 1000mm diameter</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Illumination Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>LED Type:</strong> High-output energy-efficient modules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lifespan:</strong> 50,000+ hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Distribution:</strong> Even light across face</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Energy:</strong> Low consumption, cost-effective</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Rating:</strong> IP65 weather-resistant</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">400mm Diameter</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £295</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Compact size</li>
                    <li>• Full LED illumination</li>
                    <li>• Double-sided print</li>
                    <li>• Wall bracket included</li>
                    <li>• Design service</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">600mm Diameter</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £495</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Most popular size</li>
                    <li>• Premium LED modules</li>
                    <li>• Double-sided print</li>
                    <li>• Heavy-duty bracket</li>
                    <li>• Professional installation available</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">800mm+ Diameter</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £695</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Maximum visibility</li>
                    <li>• High-output LEDs</li>
                    <li>• Double-sided print</li>
                    <li>• Reinforced bracket</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices include design, manufacture, and standard bracket. Installation available.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Pubs & Bars", "Cafes & Restaurants", "Hair & Beauty Salons", "Retail Shops", "Professional Services", "Estate Agents", "Hotels & B&Bs", "Medical Practices"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Stand Out?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a custom circular sign that makes your business unmissable.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request Detailed Quote
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

export default LEDCircularSigns;