import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryReception1 from "@/assets/gallery/interior-reception-1.jpg";
import galleryReception2 from "@/assets/gallery/interior-reception-2.jpg";
import galleryReception3 from "@/assets/gallery/interior-reception-3.jpg";
import galleryReception4 from "@/assets/gallery/interior-reception-4.jpg";

const galleryImages = [
  { src: galleryReception1, alt: "Professional reception sign in corporate lobby" },
  { src: galleryReception2, alt: "Illuminated 3D company logo behind reception desk" },
  { src: galleryReception3, alt: "Luxury hotel reception signage" },
  { src: galleryReception4, alt: "Colorful startup office reception sign" },
];

const ReceptionSigns = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Reception Signs - Lobby & Corporate Signage"
        description="Premium reception and lobby signs for corporate offices, hotels, and businesses. 3D letters, illuminated logos, and custom designs that impress."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reception <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Make a powerful first impression with premium lobby signage that reflects your brand's values and professionalism.
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

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Reception signs are the cornerstone of your corporate identity. Located at the heart of your business, they create lasting impressions on clients, partners, and employees. Our custom-designed reception signage combines premium materials with expert craftsmanship to elevate your brand presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Popular Styles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>3D Dimensional Letters:</strong> Raised lettering with depth and impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Backlit Acrylic:</strong> Illuminated panels for elegant glow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Metal Plaques:</strong> Premium brushed or polished finishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Logo Walls:</strong> Large-scale branded feature walls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Halo-Lit:</strong> Sophisticated back-lit glow effects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Premium Materials</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Brushed Aluminum:</strong> Modern, durable, and professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Stainless Steel:</strong> Premium finish with timeless elegance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Acrylic:</strong> Versatile with multiple color and finish options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Wood Veneers:</strong> Natural warmth for traditional settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Brass/Copper:</strong> Luxury materials for high-end spaces</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Essential</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£400 - £1,200</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vinyl or basic acrylic</li>
                    <li>• Up to 1.5m width</li>
                    <li>• Non-illuminated</li>
                    <li>• Standard mounting</li>
                    <li>• Single color</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Professional</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£1,200 - £3,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3D letters or illuminated</li>
                    <li>• Premium materials</li>
                    <li>• Up to 3m width</li>
                    <li>• LED lighting options</li>
                    <li>• Multiple finishes</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Executive</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£3,500+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Luxury materials</li>
                    <li>• Full logo walls</li>
                    <li>• Complex illumination</li>
                    <li>• Bespoke design</li>
                    <li>• Premium installation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Design Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Brand Consistency</h4>
                  <p className="text-primary-foreground/80">Ensure reception signage aligns with corporate branding guidelines for cohesive identity.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Lighting & Visibility</h4>
                  <p className="text-primary-foreground/80">Consider ambient lighting conditions to optimize sign visibility and impact.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Scale & Proportion</h4>
                  <p className="text-primary-foreground/80">Size signage appropriately for your reception space and viewing distances.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Material Selection</h4>
                  <p className="text-primary-foreground/80">Choose materials that complement your interior design and convey desired brand values.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Create Your Perfect Reception Sign</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our design team create a reception sign that makes a lasting impression.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Schedule Design Consultation
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

export default ReceptionSigns;
