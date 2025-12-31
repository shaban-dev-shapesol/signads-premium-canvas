import { Flag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import bannerImage1 from "@/assets/gallery/print-banner-1.jpg";
import bannerImage2 from "@/assets/gallery/print-banner-2.jpg";
import bannerImage3 from "@/assets/gallery/print-banner-3.jpg";
import bannerImage4 from "@/assets/gallery/print-banner-4.jpg";

const galleryImages = [
  { src: bannerImage1, alt: "PVC banner example" },
  { src: bannerImage2, alt: "Outdoor vinyl banner" },
  { src: bannerImage3, alt: "Event banner printing" },
  { src: bannerImage4, alt: "Custom PVC signage" },
];

const PVCBanners = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="PVC Banners - Durable Outdoor Vinyl Banners"
        description="High-quality PVC banners for outdoor and indoor use. Weather-resistant vinyl banners with vibrant full-colour printing. Fast turnaround across Liverpool and UK."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Flag className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              PVC <span className="text-accent">Banners</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Durable, weather-resistant vinyl banners for any occasion. Perfect for events, promotions, and outdoor advertising.
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
              Our PVC banners are printed on high-quality 440gsm vinyl using UV-resistant inks that won't fade 
              in sunlight. Whether you need a banner for a one-day event or a permanent outdoor installation, 
              our banners are built to last.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              All banners come with hemmed edges and brass eyelets for easy hanging. We offer a range of 
              sizes and can produce custom dimensions to fit your exact requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Material Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 440gsm PVC (standard outdoor)</li>
                  <li>• 510gsm PVC (heavy duty)</li>
                  <li>• Mesh PVC (wind-resistant)</li>
                  <li>• Blockout PVC (double-sided)</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Finishing Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hemmed edges all around</li>
                  <li>• Brass eyelets (corners or custom)</li>
                  <li>• Pole pockets (top/bottom)</li>
                  <li>• Velcro strips available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Popular Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Building wraps",
                "Event signage",
                "Sale promotions",
                "Grand openings",
                "Sports events",
                "Construction sites",
                "Trade shows",
                "Fence banners"
              ].map((app, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                  <span className="text-foreground font-medium">{app}</span>
                </div>
              ))}
            </div>
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
                <p className="text-sm text-muted-foreground mb-2">Up to 1m x 0.5m</p>
                <p className="text-3xl font-bold text-accent mb-4">From £25</p>
              </div>
              <div className="bg-card p-6 rounded-xl border-2 border-accent text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Medium</h3>
                <p className="text-sm text-muted-foreground mb-2">Up to 3m x 1m</p>
                <p className="text-3xl font-bold text-accent mb-4">From £65</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Large</h3>
                <p className="text-sm text-muted-foreground mb-2">Up to 5m x 1.5m</p>
                <p className="text-3xl font-bold text-accent mb-4">From £120</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">Custom sizes available - contact us for a quote</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Banner Fast?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Express service available. Get your banner printed and delivered within 48 hours.
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

export default PVCBanners;
