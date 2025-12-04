import { Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import printFloor1 from "@/assets/gallery/print-floor-1.jpg";
import printFloor2 from "@/assets/gallery/print-floor-2.jpg";
import printFloor3 from "@/assets/gallery/print-floor-3.jpg";
import printFloor4 from "@/assets/gallery/print-floor-4.jpg";

const FloorGraphics = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Footprints className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Floor <span className="text-accent">Graphics</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Eye-catching, durable floor decals that capture attention at ground level. Anti-slip and perfect for high-traffic areas.
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
            
            {/* Project Examples Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Floor Graphics Showcase</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[printFloor1, printFloor2, printFloor3, printFloor4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Floor graphics project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Floor graphics are an innovative way to utilize often-overlooked advertising space. Our anti-slip laminated floor decals are perfect for retail promotions, wayfinding, social distancing markers, branding, and creating immersive experiences. Certified slip-resistant for safety in high-traffic areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Heavy-duty vinyl with textured laminate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Thickness:</strong> 250 micron with R10 slip-resistant rating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durability:</strong> 6-12 months in high-traffic areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Application:</strong> Indoor or outdoor (different laminates)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Removal:</strong> Clean removal without residue</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Popular Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Retail Promotions:</strong> Point-of-sale and product launches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Wayfinding:</strong> Directional arrows and navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Safety Messaging:</strong> Social distancing and hazard warnings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Branding:</strong> Logos and brand messaging at entry points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Events:</strong> Exhibition stands and temporary installations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Surface Compatibility</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Smooth Floors</h4>
                  <p className="text-primary-foreground/80">Polished concrete, tiles, vinyl flooring</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Textured Surfaces</h4>
                  <p className="text-primary-foreground/80">Non-slip tiles, sealed concrete</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Carpet (Low Pile)</h4>
                  <p className="text-primary-foreground/80">Exhibition carpet and short-pile flooring</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Outdoor Surfaces</h4>
                  <p className="text-primary-foreground/80">Pavement, asphalt with special laminate</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Standard Graphics</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£25 - £45/m²</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Indoor use</li>
                    <li>• R10 slip-resistant</li>
                    <li>• Standard shapes</li>
                    <li>• 6-month durability</li>
                    <li>• Basic installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium Graphics</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£45 - £75/m²</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Indoor/outdoor</li>
                    <li>• R11 slip-resistant</li>
                    <li>• Custom shapes</li>
                    <li>• 12-month durability</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">3D/Textured</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£75 - £120/m²</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3D illusion effects</li>
                    <li>• Extra-thick laminate</li>
                    <li>• Complex designs</li>
                    <li>• High-impact areas</li>
                    <li>• Full installation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Common Sizes & Pricing</h2>
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Circle Floor Graphics</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 30cm diameter: <span className="text-accent font-bold">£12 each</span></li>
                      <li>• 50cm diameter: <span className="text-accent font-bold">£22 each</span></li>
                      <li>• 100cm diameter: <span className="text-accent font-bold">£65 each</span></li>
                      <li>• 150cm diameter: <span className="text-accent font-bold">£135 each</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Custom Shaped Graphics</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Up to 1m²: <span className="text-accent font-bold">£35-65</span></li>
                      <li>• 1-3m²: <span className="text-accent font-bold">£85-180</span></li>
                      <li>• 3-5m²: <span className="text-accent font-bold">£180-350</span></li>
                      <li>• 5m²+: <span className="text-accent font-bold">Contact for quote</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Installation & Care</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Preparation</h4>
                  <p className="text-sm text-muted-foreground">Floor must be clean, dry, and free from dust, grease, and wax for proper adhesion</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Application</h4>
                  <p className="text-sm text-muted-foreground">Professional installation recommended for large graphics to ensure bubble-free finish</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Maintenance</h4>
                  <p className="text-sm text-muted-foreground">Clean with damp mop and mild detergent. Avoid harsh chemicals and abrasive cleaners</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Stand Out From The Ground Up</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Create memorable brand experiences with custom floor graphics that demand attention.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Design Floor Graphics
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

export default FloorGraphics;
