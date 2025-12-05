import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import printWindow1 from "@/assets/gallery/print-window-1.jpg";
import printWindow2 from "@/assets/gallery/print-window-2.jpg";
import printWindow3 from "@/assets/gallery/print-window-3.jpg";
import printWindow4 from "@/assets/gallery/print-window-4.jpg";

const WindowGraphics = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Window Graphics - Custom Printed Window Displays"
        description="Eye-catching window graphics and displays for retail storefronts. Vinyl lettering, full-color prints, and frosted film options."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Window <span className="text-accent">Graphics</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your storefront windows into powerful marketing assets with custom printed window graphics and frosting solutions.
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
                {[printWindow1, printWindow2, printWindow3, printWindow4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Window graphics project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Window graphics offer versatile solutions for retail displays, office privacy, and promotional messaging. From full-color digital prints to elegant frosted designs, we create window applications that enhance your space while communicating your brand message effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Materials:</strong> Perforated or solid vinyl options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Technology:</strong> One-way vision technology available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Printing:</strong> UV-resistant inks for fade prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Adhesive:</strong> Removable or permanent options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Customization:</strong> Cut-to-shape capability</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Application Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Full-color promotional graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Frosted privacy films</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Cut vinyl lettering and logos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">One-way vision perforated graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Seasonal and promotional displays</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Vinyl Lettering</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £8/sq ft</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cut vinyl graphics</li>
                    <li>• Single or multiple colors</li>
                    <li>• Logo and text</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full-Color Print</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £15/sq ft</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Digital printed graphics</li>
                    <li>• Full-color imagery</li>
                    <li>• Perforated or solid</li>
                    <li>• Design assistance included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Frosted Film</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £12/sq ft</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Privacy frosted film</li>
                    <li>• Decorative patterns</li>
                    <li>• Branded frosting</li>
                    <li>• Conference room applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Windows Today</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert advice and a quote for your window graphics project
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Get Started
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

export default WindowGraphics;