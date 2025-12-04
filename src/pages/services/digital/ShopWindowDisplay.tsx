import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

import galleryWindow1 from "@/assets/gallery/digital-window-1.jpg";
import galleryWindow2 from "@/assets/gallery/digital-window-2.jpg";
import galleryWindow3 from "@/assets/gallery/digital-window-3.jpg";
import galleryWindow4 from "@/assets/gallery/digital-window-4.jpg";

const galleryImages = [
  { src: galleryWindow1, alt: "Digital window display in retail storefront" },
  { src: galleryWindow2, alt: "High-brightness window display in fashion store" },
  { src: galleryWindow3, alt: "Estate agent window with property displays" },
  { src: galleryWindow4, alt: "Video wall in shop window at night" },
];

const ShopWindowDisplay = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Shop <span className="text-accent">Window Displays</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your storefront into an attention-grabbing digital showcase. High-brightness displays that captivate passersby and drive foot traffic 24/7.
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
                Digital window displays turn your storefront into a dynamic advertising platform that works around the clock. With ultra-high-brightness panels designed specifically for window applications, these displays remain perfectly visible even in direct sunlight.
              </p>
              <p className="text-lg text-muted-foreground">
                Showcase products, promotions, and brand stories with eye-catching motion graphics that stop foot traffic in its tracks.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Brightness:</strong> Ultra-high (2500-5000 nits)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Resolution:</strong> 4K/8K displays available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Sensors:</strong> Automated brightness adjustment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Cooling:</strong> Integrated systems for window installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Config:</strong> Portrait, landscape, or video wall</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Visible in bright daylight conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Motion graphics attract 400% more attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Update content remotely anytime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Works 24/7 as a digital billboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Weather-resistant professional installation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Single Display</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £3,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 43"-55" high-brightness display</li>
                    <li>• 2500 nit brightness</li>
                    <li>• Basic content management</li>
                    <li>• Installation & setup</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium Display</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £6,800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 65"-75" ultra-bright display</li>
                    <li>• 4000+ nit brightness</li>
                    <li>• Content creation included</li>
                    <li>• Cloud-based CMS</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Video Wall</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £18,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-screen video wall</li>
                    <li>• 4K/8K resolution</li>
                    <li>• Stunning visual impact</li>
                    <li>• Full creative & tech support</li>
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
                {["Retail Stores", "Fashion Boutiques", "Estate Agents", "Shopping Centers", "Showrooms", "Banks", "Restaurants", "Malls"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Make Your Window Work Harder</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation to see how digital displays can transform your storefront.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Book Consultation
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

export default ShopWindowDisplay;