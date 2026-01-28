import { Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import printCeiling1 from "@/assets/gallery/print-ceiling-1.jpg";
import printCeiling2 from "@/assets/gallery/print-ceiling-2.jpg";
import printCeiling3 from "@/assets/gallery/print-ceiling-3.jpg";
import printCeiling4 from "@/assets/gallery/print-ceiling-4.jpg";

const BespokeCeiling = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Bespoke Printed Ceilings - Custom Ceiling Graphics"
        description="Transform overhead spaces with custom printed ceiling graphics. Retail, hospitality, and commercial installations with stunning visual impact."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bespoke Printed <span className="text-accent">Ceilings</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform overlooked ceiling space into stunning visual experiences. Custom-printed acoustic or stretch ceiling systems that inspire and impress.
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
                {[printCeiling1, printCeiling2, printCeiling3, printCeiling4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Bespoke ceiling project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Printed ceiling graphics create immersive environments that captivate from every angle. Whether transforming retail spaces, restaurants, or corporate environments, our custom ceiling solutions combine stunning visuals with practical acoustic and lighting benefits.
              </p>
              <p className="text-lg text-muted-foreground">
                Turn unused ceiling space into a powerful brand experience that leaves lasting impressions on visitors and customers.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>System:</strong> Stretch fabric or acoustic panels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Printing:</strong> High-resolution dye-sublimation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Safety:</strong> Fire-rated materials (Class 0/A)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lighting:</strong> Integrated LED backlighting options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Install:</strong> Seamless or modular</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Design Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Photorealistic sky and nature scenes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Abstract patterns and geometric designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Brand storytelling and product imagery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">3D depth effects and trompe-l'œil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom illustrations and artwork</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Acoustic Panels</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £120/sqm</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Modular panel system</li>
                    <li>• Acoustic performance</li>
                    <li>• Custom printed designs</li>
                    <li>• Easy maintenance</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Stretch Fabric</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £180/sqm</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Seamless appearance</li>
                    <li>• Integrated LED lighting</li>
                    <li>• Photographic quality print</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Complete Project</h4>
                  <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Large-scale installations</li>
                    <li>• 3D design visualization</li>
                    <li>• Engineering & compliance</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, complexity, and installation requirements. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Retail Stores", "Restaurants", "Corporate Lobbies", "Healthcare Facilities", "Shopping Centers", "Hotels", "Event Venues", "Wellness Centers"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Elevate Every View</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's create an unforgettable ceiling experience for your space.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Project
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

export default BespokeCeiling;
