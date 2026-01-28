import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryFlexFace1 from "@/assets/gallery/exterior-flex-face-1.jpg";
import galleryFlexFace2 from "@/assets/gallery/exterior-flex-face-2.jpg";
import galleryFlexFace3 from "@/assets/gallery/exterior-flex-face-3.jpg";
import galleryFlexFace4 from "@/assets/gallery/exterior-flex-face-4.jpg";

const galleryImages = [
  { src: galleryFlexFace1, alt: "Large flex face light box on commercial building" },
  { src: galleryFlexFace2, alt: "Illuminated flex face signage at night" },
  { src: galleryFlexFace3, alt: "Petrol station flex face light box" },
  { src: galleryFlexFace4, alt: "Shopping mall flex face advertising sign" },
];

const FlexFaceLightBox = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Flex Face Light Box Signs - Large Format Illuminated Signage"
        description="Flex face light box signs for large format advertising. Weather-resistant, energy-efficient LED illumination for 24/7 brand visibility."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Flex Face <span className="text-accent">Light Box Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Large-format illuminated signage with durable fabric face. Perfect for high-impact outdoor advertising and building facades.
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
          <div className="max-w-6xl mx-auto space-y-16">
            
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

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Flex face light boxes combine aluminum frame construction with high-quality tensioned fabric and internal LED illumination. These signs offer superior brightness, weather resistance, and easy graphic replacement compared to traditional rigid face signs.
              </p>
            </div>
              
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Frame:</strong> Aluminum with powder-coated finish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Face Material:</strong> High-tension PVC fabric (13-18 oz)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lighting:</strong> Energy-efficient LED modules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Weather:</strong> IP65 rated, fully sealed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Sizes:</strong> Custom up to 20m wide</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Benefits & Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Uniform illumination across large areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Quick graphic changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Building fascia signage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Retail storefronts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Shopping centers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £1,200</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Up to 2m x 1m</li>
                <li>• Single-sided illumination</li>
                <li>• Standard aluminum frame</li>
                    <li>• LED lighting included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £2,800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Up to 5m x 2m</li>
                <li>• Double-sided available</li>
                <li>• Premium powder coating</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Over 5m dimensions</li>
                <li>• Complex shapes</li>
                <li>• Structural engineering</li>
                    <li>• Complete project management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Illuminate Your Brand?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a detailed quote for your flex face light box project
              </p>
              <Link to="/contact">
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

export default FlexFaceLightBox;