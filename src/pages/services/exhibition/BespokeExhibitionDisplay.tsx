import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import galleryBespoke1 from "@/assets/gallery/exhibition-bespoke-1.jpg";
import galleryBespoke2 from "@/assets/gallery/exhibition-bespoke-2.jpg";
import galleryBespoke3 from "@/assets/gallery/exhibition-bespoke-3.jpg";
import galleryBespoke4 from "@/assets/gallery/exhibition-bespoke-4.jpg";

const galleryImages = [
  { src: galleryBespoke1, alt: "Custom bespoke exhibition stand" },
  { src: galleryBespoke2, alt: "Multi-level exhibition booth with digital screens" },
  { src: galleryBespoke3, alt: "Premium custom booth with meeting area" },
  { src: galleryBespoke4, alt: "Large custom exhibition stand with mezzanine" },
];

const BespokeExhibitionDisplay = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bespoke <span className="text-accent">Exhibition Displays</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Custom-designed exhibition stands that make unforgettable impressions. From concept to completion, we create unique displays that dominate show floors.
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
                Bespoke exhibition stands are architectural statements that position your brand as an industry leader. Our design team creates unique structures incorporating the latest exhibition technology—from interactive displays and product showcases to multi-level builds with private meeting areas.
              </p>
              <p className="text-lg text-muted-foreground">
                Every element is crafted to reflect your brand identity and achieve your event objectives with maximum impact.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Design Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom architectural structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Multi-level and mezzanine builds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Integrated digital screens and technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Private meeting rooms and hospitality areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Product display showcases</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Full Service Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">3D design visualization and walkthroughs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Project management and coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Build, installation, and breakdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Storage and refurbishment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">On-site technical support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Investment Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Modular Custom</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £5,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3x4m stand footprint</li>
                    <li>• Semi-custom design</li>
                    <li>• Modular reusable system</li>
                    <li>• Graphics and lighting</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full Custom Build</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £15,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 6x6m+ unique design</li>
                    <li>• Custom fabrication</li>
                    <li>• Meeting areas included</li>
                    <li>• Complete project management</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium Showcase</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £35,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-level structures</li>
                    <li>• Integrated technology</li>
                    <li>• VIP hospitality areas</li>
                    <li>• International exhibitions</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, materials, and features. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["International Exhibitions", "Product Launches", "Corporate Events", "Brand Activations", "Industry Shows", "Flagship Events", "Premium Displays", "VIP Areas"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Create An Unforgettable Exhibition Presence</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Discuss your vision with our exhibition design specialists.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Schedule Consultation
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

export default BespokeExhibitionDisplay;