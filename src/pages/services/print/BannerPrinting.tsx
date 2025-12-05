import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import printBanner1 from "@/assets/gallery/print-banner-1.jpg";
import printBanner2 from "@/assets/gallery/print-banner-2.jpg";
import printBanner3 from "@/assets/gallery/print-banner-3.jpg";
import printBanner4 from "@/assets/gallery/print-banner-4.jpg";

const BannerPrinting = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Banner Printing - PVC, Mesh & Fabric Banners"
        description="High-quality banner printing for indoor and outdoor use. PVC, mesh, and fabric banners with hemming and eyelets. Fast turnaround available."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Printer className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Banner <span className="text-accent">Printing</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              High-quality, versatile banners for indoor and outdoor use. Fast turnaround with professional finishing and competitive pricing.
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
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[printBanner1, printBanner2, printBanner3, printBanner4].map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={img} alt={`Banner printing project ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Printed banners are one of the most versatile and cost-effective marketing tools available. Whether you need indoor displays for exhibitions or weather-resistant outdoor advertising, our large-format printing delivers vibrant colors and sharp graphics that command attention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Material Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>PVC Banner:</strong> 510gsm heavy-duty outdoor vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mesh Banner:</strong> Wind-resistant with 70% airflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Fabric Banner:</strong> Lightweight, wrinkle-resistant textile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Blockout Banner:</strong> Double-sided printing possible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Eco Banner:</strong> Recyclable PET material option</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Finishing Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Eyelets:</strong> Brass or rustproof eyelets every 50cm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Hem & Rope:</strong> Reinforced edges with rope for hanging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pole Pockets:</strong> Top and/or bottom pockets for poles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Welded Edges:</strong> Clean, professional heat-sealed edges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Reinforced Corners:</strong> Extra durability for outdoor use</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Print Specifications</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Resolution</h4>
                  <p className="text-primary-foreground/80">720-1440 DPI for photographic quality at viewing distances</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Inks</h4>
                  <p className="text-primary-foreground/80">UV-resistant eco-solvent inks for long-lasting outdoor durability</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Turnaround</h4>
                  <p className="text-primary-foreground/80">Same-day or next-day service available for urgent requirements</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="bg-secondary p-8 rounded-2xl border border-border mb-6">
                <h4 className="text-xl font-bold text-foreground mb-4">Price per Square Meter</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-foreground mb-3">Standard PVC Banner (510gsm)</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 1-5 m²: <span className="text-accent font-bold">£18/m²</span></li>
                      <li>• 6-15 m²: <span className="text-accent font-bold">£14/m²</span></li>
                      <li>• 16-30 m²: <span className="text-accent font-bold">£12/m²</span></li>
                      <li>• 31+ m²: <span className="text-accent font-bold">£10/m²</span></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-3">Premium Options</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Mesh Banner: <span className="text-accent font-bold">+£4/m²</span></li>
                      <li>• Fabric Banner: <span className="text-accent font-bold">+£6/m²</span></li>
                      <li>• Blockout Banner: <span className="text-accent font-bold">+£3/m²</span></li>
                      <li>• Rush Service (24hr): <span className="text-accent font-bold">+50%</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Banner</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £35</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1m x 2m example</li>
                    <li>• PVC 510gsm</li>
                    <li>• Eyelet finish</li>
                    <li>• 2-3 day turnaround</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Banner</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £140</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2m x 5m example</li>
                    <li>• PVC 510gsm</li>
                    <li>• Hem & rope finish</li>
                    <li>• 2-3 day turnaround</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Banner</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £350</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3m x 12m example</li>
                    <li>• Mesh or PVC</li>
                    <li>• Reinforced finish</li>
                    <li>• 3-5 day turnaround</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Popular Uses</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Shop Frontages", "Event Backdrops", "Construction Sites", "Sports Events", "Trade Shows", "Grand Openings", "Building Wraps", "Fence Advertising"].map((use) => (
                  <div key={use} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Need Banners Fast?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get instant quotes and same-day printing for urgent requirements.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Get Instant Quote
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

export default BannerPrinting;
