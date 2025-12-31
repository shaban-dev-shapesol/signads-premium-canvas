import { Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exteriorImage1 from "@/assets/gallery/exterior-fascia-tray-1.jpg";
import exteriorImage2 from "@/assets/gallery/exterior-fascia-tray-2.jpg";
import exteriorImage3 from "@/assets/gallery/exterior-fascia-tray-3.jpg";
import exteriorImage4 from "@/assets/gallery/exterior-fascia-tray-4.jpg";

const galleryImages = [
  { src: exteriorImage1, alt: "Shop front ACM sign" },
  { src: exteriorImage2, alt: "ACM fascia panel" },
  { src: exteriorImage3, alt: "Vinyl graphics on ACM" },
  { src: exteriorImage4, alt: "Aluminium composite signage" },
];

const ShopFrontACM = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Shop Front Plain ACM Vinyl Signs - Affordable Business Signage"
        description="Professional shop front signs using ACM panels with vinyl graphics. Affordable, durable signage for retail and commercial premises across Liverpool and UK."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shop Front <span className="text-accent">ACM Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Clean, professional aluminium composite signage with vinyl graphics. The smart choice for budget-conscious businesses.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ACM (Aluminium Composite Material) panels provide a sleek, flat surface that's perfect for vinyl graphics. 
              This cost-effective solution gives your shop front a clean, professional look without the expense of 
              fabricated lettering or illumination.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our shop front ACM signs are weather-resistant and durable, making them ideal for long-term outdoor use. 
              They can be mounted directly to your existing fascia or as a new panel over older signage.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Features & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Material Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lightweight yet rigid construction</li>
                  <li>• Weather and UV resistant</li>
                  <li>• Smooth, professional finish</li>
                  <li>• 10+ year lifespan outdoors</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Vinyl Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full colour printed graphics</li>
                  <li>• Cut vinyl lettering</li>
                  <li>• Matt or gloss finish</li>
                  <li>• Easy to update or rebrand</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colours */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Available Panel Colours</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "White", color: "bg-white border-2 border-border" },
                { name: "Black", color: "bg-gray-900" },
                { name: "Silver", color: "bg-gray-400" },
                { name: "Anthracite", color: "bg-gray-700" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-full aspect-square rounded-xl ${item.color} mb-2`}></div>
                  <span className="text-foreground font-medium">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-4">Custom RAL colours available on request</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Pricing Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Small</h3>
                <p className="text-sm text-muted-foreground mb-2">Up to 2m x 0.5m</p>
                <p className="text-3xl font-bold text-accent mb-4">From £195</p>
              </div>
              <div className="bg-card p-6 rounded-xl border-2 border-accent text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Medium</h3>
                <p className="text-sm text-muted-foreground mb-2">Up to 4m x 0.6m</p>
                <p className="text-3xl font-bold text-accent mb-4">From £395</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Large</h3>
                <p className="text-sm text-muted-foreground mb-2">Up to 6m x 0.8m</p>
                <p className="text-3xl font-bold text-accent mb-4">From £595</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">Prices include panel, vinyl graphics, and design. Installation available from £150.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Refresh Your Shop Front</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a professional look at an affordable price with ACM signage.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopFrontACM;
