import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryLightbox1 from "@/assets/gallery/interior-lightbox-1.jpg";
import galleryLightbox2 from "@/assets/gallery/interior-lightbox-2.jpg";
import galleryLightbox3 from "@/assets/gallery/interior-lightbox-3.jpg";
import galleryLightbox4 from "@/assets/gallery/interior-lightbox-4.jpg";

const galleryImages = [
  { src: galleryLightbox1, alt: "Office lightbox display in corporate setting" },
  { src: galleryLightbox2, alt: "LED lightbox promotional display in corridor" },
  { src: galleryLightbox3, alt: "Backlit fabric lightbox in retail showroom" },
  { src: galleryLightbox4, alt: "Edge-lit acrylic lightbox in waiting room" },
];

const OfficeLightBoxes = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Office Light Boxes - LED Backlit Display Signs"
        description="Professional LED lightbox displays for offices, reception areas, and corporate spaces. Even illumination, easy graphic changes, and energy efficient."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Office <span className="text-accent">Light Boxes</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Elegant illuminated signage for interior spaces. Perfect for corporate lobbies, retail displays, and branded environments.
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
                Interior light boxes provide sophisticated illuminated branding for offices, retail spaces, and hospitality venues. Our slim-profile LED solutions deliver uniform lighting with minimal depth, perfect for modern interior designs.
              </p>
              <p className="text-lg text-muted-foreground">
                From reception areas to retail displays, these versatile units enhance your brand presence with professional, even illumination that works 24/7.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Frame:</strong> Slim-profile aluminum (25-50mm depth)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lighting:</strong> Energy-efficient LED edge-lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Face:</strong> Acrylic or fabric options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Graphics:</strong> Easy change systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mounting:</strong> Wall, ceiling, or freestanding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Even illumination without hotspots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Modern, professional appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Low energy consumption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Quick graphic updates when needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Slim profile maximizes space</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">A3-A2 Size</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £180</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Small format displays</li>
                    <li>• Single-sided</li>
                    <li>• Wall-mounted</li>
                    <li>• Snap-frame graphic change</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">A1-A0 Size</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £450</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Medium to large format</li>
                    <li>• Ultra-slim profile</li>
                    <li>• Premium LED lighting</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Custom Large</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £1,200</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bespoke sizes</li>
                    <li>• Fabric or acrylic faces</li>
                    <li>• Double-sided options</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, materials, and installation requirements. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Reception Branding", "Retail Windows", "Menu Boards", "Wayfinding Signs", "Corporate Lobbies", "Hotel Displays", "Trade Show Booths", "Meeting Rooms"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Elevate Your Interior Branding</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert advice on light box solutions for your space.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request Quote
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

export default OfficeLightBoxes;
