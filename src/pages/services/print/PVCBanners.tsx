import { Flag } from "lucide-react";
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
                Our PVC banners are printed on high-quality 440gsm vinyl using UV-resistant inks that won't fade in sunlight. Whether you need a banner for a one-day event or a permanent outdoor installation, our banners are built to last.
              </p>
              <p className="text-lg text-muted-foreground">
                All banners come with hemmed edges and brass eyelets for easy hanging. We offer a range of sizes and can produce custom dimensions to fit your exact requirements.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Material Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>440gsm PVC:</strong> Standard outdoor use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>510gsm PVC:</strong> Heavy duty applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mesh PVC:</strong> Wind-resistant option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Blockout PVC:</strong> Double-sided printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Fabric:</strong> Premium indoor option</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Finishing Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Hemmed Edges:</strong> All around for durability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Brass Eyelets:</strong> Corners or custom spacing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pole Pockets:</strong> Top/bottom for hanging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Velcro Strips:</strong> Easy attachment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Rope & Hem:</strong> Traditional finish</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small</h4>
                  <p className="text-sm text-muted-foreground mb-2">Up to 1m x 0.5m</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £25</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 440gsm PVC</li>
                    <li>• Full colour print</li>
                    <li>• Hemmed edges</li>
                    <li>• Corner eyelets</li>
                    <li>• 48hr turnaround available</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium</h4>
                  <p className="text-sm text-muted-foreground mb-2">Up to 3m x 1m</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £65</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 440gsm or 510gsm PVC</li>
                    <li>• Full colour print</li>
                    <li>• Reinforced hems</li>
                    <li>• Eyelets every 500mm</li>
                    <li>• Design service included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large</h4>
                  <p className="text-sm text-muted-foreground mb-2">Up to 5m x 1.5m</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £120</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Heavy duty 510gsm</li>
                    <li>• Premium print quality</li>
                    <li>• Double-stitched hems</li>
                    <li>• Full eyelet options</li>
                    <li>• Bulk discounts available</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Custom sizes available - contact us for a quote. Express service available for urgent requirements.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Building Wraps", "Event Signage", "Sale Promotions", "Grand Openings", "Sports Events", "Construction Sites", "Trade Shows", "Fence Banners"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Need a Banner Fast?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Express service available. Get your banner printed and delivered within 48 hours.
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

export default PVCBanners;