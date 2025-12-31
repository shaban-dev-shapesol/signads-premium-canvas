import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import promoImage1 from "@/assets/gallery/promotional-flags-1.jpg";
import promoImage2 from "@/assets/gallery/promotional-pavement-1.jpg";
import promoImage3 from "@/assets/gallery/print-banner-1.jpg";
import promoImage4 from "@/assets/gallery/print-banner-2.jpg";

const galleryImages = [
  { src: promoImage1, alt: "Feather flag display" },
  { src: promoImage2, alt: "Promotional flags outdoor" },
  { src: promoImage3, alt: "Custom branded flags" },
  { src: promoImage4, alt: "Event flag banners" },
];

const CustomFlags = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Custom Flags & Banners - Feather Flags & Promotional Displays"
        description="Eye-catching custom flags and banners for events, retail, and outdoor advertising. Feather flags, teardrop flags, and branded promotional displays."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Flag className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom <span className="text-accent">Flags & Banners</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Eye-catching promotional flags that flutter in the breeze. Perfect for events, retail locations, and outdoor advertising.
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
                Custom flags create dynamic, attention-grabbing displays that move with the wind, naturally drawing the eye. From feather flags to large advertising banners, our printed flags are perfect for temporary promotions, events, and permanent outdoor advertising.
              </p>
              <p className="text-lg text-muted-foreground">
                Lightweight, portable, and weather-resistant for reliable outdoor performance. Quick setup with no tools required makes them ideal for businesses that need flexible promotional solutions.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Flag Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Feather Flags:</strong> 2.5m to 5.5m heights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Teardrop Flags:</strong> Compact and eye-catching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Rectangle Flags:</strong> Maximum print area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Custom Shapes:</strong> Bespoke designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Double-Sided:</strong> Visible from all angles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Movement:</strong> Naturally attracts attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Portable:</strong> Easy to relocate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Quick Setup:</strong> No tools required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Weather-Resistant:</strong> Durable materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Base Options:</strong> Spike, cross, or weighted</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Feather</h4>
                  <p className="text-sm text-muted-foreground mb-2">2.5m height</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £95</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Single-sided print</li>
                    <li>• Ground spike included</li>
                    <li>• Carry bag</li>
                    <li>• Premium fabric</li>
                    <li>• Design service</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Feather</h4>
                  <p className="text-sm text-muted-foreground mb-2">4.5m height</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £165</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Double-sided option</li>
                    <li>• Water or cross base</li>
                    <li>• Premium fabric</li>
                    <li>• Carry case</li>
                    <li>• Full design included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Custom Shape</h4>
                  <p className="text-sm text-muted-foreground mb-2">Bespoke sizes</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £220</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Bespoke flag shapes</li>
                    <li>• Multiple sizes</li>
                    <li>• Premium hardware</li>
                    <li>• Bulk discounts</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices include flag, pole, and base. Replacement flags available at reduced cost.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Store Entrances", "Events & Exhibitions", "Car Dealerships", "Sports Events", "Festivals", "Trade Shows", "Retail Forecourts", "Outdoor Markets"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Make Your Brand Fly</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a quote for custom promotional flags that catch every eye.
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

export default CustomFlags;