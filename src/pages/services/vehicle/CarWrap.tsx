import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import vehicleCarWrap1 from "@/assets/gallery/vehicle-car-wrap-1.jpg";
import vehicleCarWrap2 from "@/assets/gallery/vehicle-car-wrap-2.jpg";
import vehicleCarWrap3 from "@/assets/gallery/vehicle-car-wrap-3.jpg";
import vehicleCarWrap4 from "@/assets/gallery/vehicle-car-wrap-4.jpg";

const CarWrap = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Car <span className="text-accent">Wrap</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your vehicle into a mobile billboard with premium vinyl wraps. High-impact branding that generates thousands of impressions daily.
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
              <div className="grid md:grid-cols-4 gap-6">
                {[vehicleCarWrap1, vehicleCarWrap2, vehicleCarWrap3, vehicleCarWrap4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Car wrap project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Professional car wraps transform your vehicle into a powerful marketing tool while protecting the original paintwork. Using premium 3M and Avery Dennison materials, we create stunning full-color graphics that turn heads and generate brand awareness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Materials:</strong> Premium 3M or Avery Dennison cast vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durability:</strong> 5-7 years outdoor lifespan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Finish Options:</strong> Gloss, matte, satin, metallic, chrome</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Application:</strong> Heat-formed around complex curves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Removal:</strong> Clean removal without paint damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Wrap Coverage Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Full Wrap:</strong> Complete vehicle transformation (100% coverage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>3/4 Wrap:</strong> All visible sides excluding roof (75% coverage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Half Wrap:</strong> Two sides of vehicle (50% coverage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Partial Wrap:</strong> Strategic panels and doors (25-40% coverage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Spot Graphics:</strong> Logos, text, and specific design elements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Vehicle Wraps?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Cost-Effective Marketing</h4>
                  <p className="text-primary-foreground/80">Lowest cost-per-impression of any advertising medium. Reach thousands daily.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Paint Protection</h4>
                  <p className="text-primary-foreground/80">Protects original paintwork from UV, scratches, and environmental damage.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Resale Value</h4>
                  <p className="text-primary-foreground/80">Maintains vehicle condition and preserves resale value. Clean removal.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Spot Graphics</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£300 - £800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Logos and text</li>
                    <li>• Door panels</li>
                    <li>• Contact details</li>
                    <li>• Basic design</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Partial Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£800 - £1,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 25-40% coverage</li>
                    <li>• Key panels</li>
                    <li>• 2-3 year warranty</li>
                    <li>• Design included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Half/3/4 Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£1,500 - £2,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 50-75% coverage</li>
                    <li>• Multiple sides</li>
                    <li>• 3-5 year warranty</li>
                    <li>• Premium design</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£2,500 - £4,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 100% coverage</li>
                    <li>• Complete transform</li>
                    <li>• 5-7 year warranty</li>
                    <li>• Full design service</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices based on standard saloon/hatchback. SUVs and luxury vehicles may incur additional costs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Installation Process</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">1</div>
                  <h4 className="font-bold text-foreground mb-2">Design Consultation</h4>
                  <p className="text-sm text-muted-foreground">We create custom designs that reflect your brand and goals</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">2</div>
                  <h4 className="font-bold text-foreground mb-2">Vehicle Preparation</h4>
                  <p className="text-sm text-muted-foreground">Thorough cleaning and surface preparation for optimal adhesion</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">3</div>
                  <h4 className="font-bold text-foreground mb-2">Professional Application</h4>
                  <p className="text-sm text-muted-foreground">Expert installation using heat-forming techniques</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">4</div>
                  <h4 className="font-bold text-foreground mb-2">Quality Inspection</h4>
                  <p className="text-sm text-muted-foreground">Final inspection and care instructions provided</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Turn your car into a powerful marketing asset with a professional vehicle wrap.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Get Free Design Consultation
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

export default CarWrap;
