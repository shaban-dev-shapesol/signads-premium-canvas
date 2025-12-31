import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exteriorImage1 from "@/assets/gallery/exterior-fascia-tray-1.jpg";
import exteriorImage2 from "@/assets/gallery/exterior-fascia-tray-2.jpg";
import exteriorImage3 from "@/assets/gallery/exterior-fascia-tray-3.jpg";
import exteriorImage4 from "@/assets/gallery/exterior-fascia-tray-4.jpg";

const galleryImages = [
  { src: exteriorImage1, alt: "Shop front ACM sign" },
  { src: exteriorImage2, alt: "ACM fascia panel" },
  { src: exteriorImage3, alt: "Vinyl graphics on ACM" },
  { src: exteriorImage4, alt: "Aluminium composite signage" },
];

const ShopFrontACM = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Shop Front Plain ACM Vinyl Signs - Affordable Business Signage"
        description="Professional shop front signs using ACM panels with vinyl graphics. Affordable, durable signage for retail and commercial premises across Liverpool and UK."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shop Front <span className="text-accent">ACM Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Clean, professional aluminium composite signage with vinyl graphics. The smart choice for budget-conscious businesses.
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
                ACM (Aluminium Composite Material) panels provide a sleek, flat surface that's perfect for vinyl graphics. This cost-effective solution gives your shop front a clean, professional look without the expense of fabricated lettering or illumination.
              </p>
              <p className="text-lg text-muted-foreground">
                Our shop front ACM signs are weather-resistant and durable, making them ideal for long-term outdoor use. They can be mounted directly to your existing fascia or as a new panel over older signage.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Material Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Construction:</strong> Lightweight yet rigid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durability:</strong> Weather and UV resistant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Finish:</strong> Smooth, professional appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lifespan:</strong> 10+ years outdoors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Thickness:</strong> 3mm standard</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Vinyl Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Full Colour:</strong> Printed graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Cut Vinyl:</strong> Precision lettering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Finishes:</strong> Matt or gloss available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Updates:</strong> Easy to rebrand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Colours:</strong> Unlimited options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Available Colours */}
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Available Panel Colours</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-full aspect-square rounded-xl bg-white border-2 border-primary-foreground/20 mb-2"></div>
                  <span className="font-medium">White</span>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square rounded-xl bg-gray-900 mb-2"></div>
                  <span className="font-medium">Black</span>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square rounded-xl bg-gray-400 mb-2"></div>
                  <span className="font-medium">Silver</span>
                </div>
                <div className="text-center">
                  <div className="w-full aspect-square rounded-xl bg-gray-700 mb-2"></div>
                  <span className="font-medium">Anthracite</span>
                </div>
              </div>
              <p className="text-center text-primary-foreground/80 mt-4">Custom RAL colours available on request</p>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small</h4>
                  <p className="text-sm text-muted-foreground mb-2">Up to 2m x 0.5m</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £195</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3mm ACM panel</li>
                    <li>• Vinyl graphics</li>
                    <li>• Design included</li>
                    <li>• Standard colours</li>
                    <li>• Supply only</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium</h4>
                  <p className="text-sm text-muted-foreground mb-2">Up to 4m x 0.6m</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £395</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3mm ACM panel</li>
                    <li>• Full colour print</li>
                    <li>• Design included</li>
                    <li>• Any panel colour</li>
                    <li>• Installation available</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large</h4>
                  <p className="text-sm text-muted-foreground mb-2">Up to 6m x 0.8m</p>
                  <p className="text-3xl font-bold text-accent mb-4">From £595</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-panel option</li>
                    <li>• Premium graphics</li>
                    <li>• Full design service</li>
                    <li>• Custom RAL colours</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices include panel, vinyl graphics, and design. Installation available from £150.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Retail Shops", "Takeaways & Cafes", "Salons & Barbers", "Offices & Agencies", "Restaurants", "Trade Counters", "Service Centres", "High Street Stores"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Refresh Your Shop Front</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a professional look at an affordable price with ACM signage.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request Detailed Quote
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

export default ShopFrontACM;