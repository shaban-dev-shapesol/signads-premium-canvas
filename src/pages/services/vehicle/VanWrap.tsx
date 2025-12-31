import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import vehicleVanWrap1 from "@/assets/gallery/vehicle-van-wrap-1.jpg";
import vehicleVanWrap2 from "@/assets/gallery/vehicle-van-wrap-2.jpg";
import vehicleVanWrap3 from "@/assets/gallery/vehicle-van-wrap-3.jpg";
import vehicleVanWrap4 from "@/assets/gallery/vehicle-van-wrap-4.jpg";

const VanWrap = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Van Wrap - Commercial Van Graphics & Branding"
        description="Professional van wraps for commercial vehicles. Full and partial wraps, fleet branding, and mobile advertising with premium vinyl materials."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Van <span className="text-accent">Wrap</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your commercial van into a mobile advertising powerhouse. Generate thousands of daily impressions with professional van wraps.
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
                {[vehicleVanWrap1, vehicleVanWrap2, vehicleVanWrap3, vehicleVanWrap4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Van wrap project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Van wraps are the most cost-effective form of outdoor advertising for businesses with fleet vehicles. Whether you operate a single van or an entire fleet, professional vehicle wrapping transforms your vans into mobile billboards that promote your brand 24/7 while protecting the original paintwork.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Popular Van Models</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mercedes Sprinter:</strong> Large format, high impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Ford Transit:</strong> UK&apos;s most popular commercial van</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Volkswagen Transporter:</strong> Compact and versatile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Renault Master:</strong> Large commercial vehicle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Citroen Relay:</strong> Budget-friendly option</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Coverage Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Full Wrap:</strong> Complete coverage including roof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>3/4 Wrap:</strong> All sides except roof (most popular)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Half Wrap:</strong> Both sides and rear doors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Panel Wrap:</strong> Selected panels for budget-conscious</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Decal Graphics:</strong> Logo and contact details only</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Wrap Your Van?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Massive Reach</h4>
                  <p className="text-primary-foreground/80">70,000+ impressions per day in urban areas according to industry research</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Professional Image</h4>
                  <p className="text-primary-foreground/80">Build trust and credibility with branded fleet vehicles</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Asset Protection</h4>
                  <p className="text-primary-foreground/80">Preserve resale value while advertising your business</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Decal Package</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£400 - £800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Logo both sides</li>
                    <li>• Contact details</li>
                    <li>• Simple design</li>
                    <li>• 2-3 year warranty</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Partial Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£1,200 - £2,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 30-50% coverage</li>
                    <li>• Key panels</li>
                    <li>• Custom design</li>
                    <li>• 3-5 year warranty</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">3/4 Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£2,200 - £3,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sides and rear</li>
                    <li>• Premium vinyl</li>
                    <li>• Full color design</li>
                    <li>• 5 year warranty</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£3,500 - £5,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete coverage</li>
                    <li>• Premium materials</li>
                    <li>• Complex graphics</li>
                    <li>• 5-7 year warranty</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices based on standard panel vans. Larger vehicles may incur additional costs. Fleet discounts available.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Installation Timeline</h2>
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Design Phase</h4>
                    <p className="text-accent text-2xl font-bold mb-2">3-5 days</p>
                    <p className="text-sm text-muted-foreground">Concept development and approval</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Production</h4>
                    <p className="text-accent text-2xl font-bold mb-2">2-3 days</p>
                    <p className="text-sm text-muted-foreground">Printing and material preparation</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Installation</h4>
                    <p className="text-accent text-2xl font-bold mb-2">1-3 days</p>
                    <p className="text-sm text-muted-foreground">Professional application process</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Total Time</h4>
                    <p className="text-accent text-2xl font-bold mb-2">7-14 days</p>
                    <p className="text-sm text-muted-foreground">From approval to completion</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Brand Your Fleet?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Turn your vans into powerful marketing tools with professional vehicle wraps.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Get Fleet Quote
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

export default VanWrap;
