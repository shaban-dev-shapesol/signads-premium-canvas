import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import printVinyl1 from "@/assets/gallery/print-vinyl-1.jpg";
import printVinyl2 from "@/assets/gallery/print-vinyl-2.jpg";
import printVinyl3 from "@/assets/gallery/print-vinyl-3.jpg";
import printVinyl4 from "@/assets/gallery/print-vinyl-4.jpg";

const VinylLettering = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Type className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vinyl <span className="text-accent">Lettering</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Crisp, clean cut vinyl graphics for windows, walls, and vehicles. The versatile, cost-effective solution for professional signage.
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
                {[printVinyl1, printVinyl2, printVinyl3, printVinyl4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Vinyl lettering project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Cut vinyl lettering is the foundation of professional signage. Precision-cut from high-quality self-adhesive vinyl, these graphics offer unmatched versatility for everything from window displays to vehicle graphics.
              </p>
              <p className="text-lg text-muted-foreground">
                With hundreds of colors and finishes available, vinyl lettering delivers crisp, professional results that last for years with proper care.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Premium cast or calendared vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Cut:</strong> Computer-cut precision graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Colors:</strong> Hundreds of options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Finish:</strong> Matte, gloss, or specialty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durability:</strong> 5-10 year outdoor lifespan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Vinyl Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Standard matte and gloss colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Metallic and chrome finishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Reflective for low light visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Frosted and etched glass effects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Carbon fiber and textured patterns</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £45</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Up to 300mm lettering</li>
                    <li>• Single color vinyl</li>
                    <li>• Standard colors</li>
                    <li>• Supply only or installed</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £180</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Up to 1m signage</li>
                    <li>• Multiple colors</li>
                    <li>• Premium vinyl options</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Over 2m installations</li>
                    <li>• Complex multi-color designs</li>
                    <li>• Specialty finishes</li>
                    <li>• Site survey included</li>
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
                {["Shop Windows", "Vehicle Graphics", "Wall Lettering", "Equipment Labels", "Opening Hours", "Fleet Branding", "Wayfinding Signs", "Interior Displays"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Precision Graphics, Professional Results</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a quote for your vinyl lettering project.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request Quote
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

export default VinylLettering;
