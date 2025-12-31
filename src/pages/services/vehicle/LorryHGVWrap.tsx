import { TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import vehicleLorryWrap1 from "@/assets/gallery/vehicle-lorry-wrap-1.jpg";
import vehicleLorryWrap2 from "@/assets/gallery/vehicle-lorry-wrap-2.jpg";
import vehicleLorryWrap3 from "@/assets/gallery/vehicle-lorry-wrap-3.jpg";
import vehicleLorryWrap4 from "@/assets/gallery/vehicle-lorry-wrap-4.jpg";

const LorryHGVWrap = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Lorry & HGV Wraps - Heavy Goods Vehicle Graphics"
        description="Maximum brand exposure with lorry and HGV wraps. Full and partial wraps for heavy goods vehicles with nationwide coverage and fleet discounts."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TruckIcon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Lorry & <span className="text-accent">HGV Wraps</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Large-scale vehicle graphics for lorries and HGVs. Maximize your brand's motorway visibility with professional fleet wraps.
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
                {[vehicleLorryWrap1, vehicleLorryWrap2, vehicleLorryWrap3, vehicleLorryWrap4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Lorry HGV wrap project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                HGV and lorry wraps provide massive advertising impact on motorways and major routes. Our specialized installation teams handle the unique challenges of articulated vehicles, curtain-siders, and refrigerated units with precision and professionalism.
              </p>
              <p className="text-lg text-muted-foreground">
                Turn your fleet into powerful mobile billboards that reach thousands of commuters daily.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Heavy-duty commercial-grade vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Sealing:</strong> Reinforced edge sealing for high speeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Technology:</strong> Air-release for smooth finish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durability:</strong> 7+ year lifespan rating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Specialty:</strong> Curtain-sider solutions available</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Massive billboard-scale advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">National brand visibility on major routes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Fleet consistency and professionalism</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Cost-effective reach vs traditional media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">High-speed motorway durability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Cab Only</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £2,800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tractor unit only</li>
                    <li>• Full wrap or livery</li>
                    <li>• Standard turnaround</li>
                    <li>• Design mockups included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full Artic</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £7,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cab and trailer wrap</li>
                    <li>• Both sides coverage</li>
                    <li>• Premium materials</li>
                    <li>• 5-7 day turnaround</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Fleet Package</h4>
                  <p className="text-3xl font-bold text-accent mb-4">Volume Pricing</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 10+ vehicle discounts</li>
                    <li>• Flexible scheduling</li>
                    <li>• Nationwide coverage</li>
                    <li>• Dedicated account manager</li>
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
                {["Articulated Lorries", "Rigid HGVs", "Curtain-Siders", "Refrigerated Units", "Box Trucks", "Fleet Branding", "Logistics Companies", "Distribution"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Dominate The Motorways</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a fleet wrapping quote and see your brand on the road.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request Fleet Quote
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

export default LorryHGVWrap;