import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import printTray1 from "@/assets/gallery/print-tray-1.jpg";
import printTray2 from "@/assets/gallery/print-tray-2.jpg";
import printTray3 from "@/assets/gallery/print-tray-3.jpg";
import printTray4 from "@/assets/gallery/print-tray-4.jpg";

const PrintedTray = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Printed Tray Signs - Full-Color Storefront Signage"
        description="High-quality printed tray signs for storefronts and commercial buildings. Full-color digital printing with weather-resistant finishes."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Printer className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Printed <span className="text-accent">Sign Trays</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Cost-effective alternative to built-up letters. Printed dibond or acrylic trays that deliver professional impact with faster turnaround times.
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
                {[printTray1, printTray2, printTray3, printTray4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Printed tray project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Printed sign trays offer a smart alternative to expensive 3D built-up letters. Using high-quality printed materials on dibond, acrylic, or composite panels with edge returns, these signs deliver dimensional appearance at a fraction of the cost and time of traditional fabricated letters.
              </p>
              <p className="text-lg text-muted-foreground">
                Perfect for budget-conscious projects that still demand professional results, with 50-70% cost savings versus fabricated letters.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Substrate:</strong> 3mm-6mm dibond or acrylic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Printing:</strong> UV-printed full-color graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Edge:</strong> Returns for 3D appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Cut:</strong> Precision CNC cut to shape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mounting:</strong> Locator pin or VHB tape</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">50-70% cost savings vs fabricated letters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">3-5 day turnaround time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Full-color capability including gradients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Lightweight and easy installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional dimensional appearance</span>
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
                  <p className="text-3xl font-bold text-accent mb-4">From £120</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Up to 500mm letters/logos</li>
                    <li>• 3mm dibond substrate</li>
                    <li>• UV-printed graphics</li>
                    <li>• Self-install option</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £450</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Up to 1.5m signage</li>
                    <li>• 5mm acrylic or dibond</li>
                    <li>• Edge returns included</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £1,200</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Over 2m installations</li>
                    <li>• Premium materials</li>
                    <li>• Illumination options</li>
                    <li>• Complete project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, materials, and installation requirements. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Retail Fascia", "Interior Lobbies", "Shop Windows", "Budget Projects", "Quick Turnarounds", "Office Signage", "Temporary Displays", "Event Spaces"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Professional Signs, Budget-Friendly Pricing</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a quote for your printed tray signage project.
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

export default PrintedTray;
