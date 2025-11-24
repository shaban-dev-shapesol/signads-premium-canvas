import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const BespokeExhibitionDisplay = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Bespoke Exhibition Displays
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Custom-designed exhibition stands that make unforgettable impressions. From concept to completion, we create unique displays that dominate show floors.
          </p>
          <Button variant="premium" size="lg">Get Custom Quote</Button>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-muted rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Bespoke Display Example {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-muted-foreground mb-6">
                Bespoke exhibition stands are architectural statements that position your brand as an industry leader. Our design team creates unique structures incorporating the latest exhibition technology—from interactive displays and product showcases to multi-level builds with private meeting areas. Every element is crafted to reflect your brand identity and achieve your event objectives.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Design Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Custom architectural structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Multi-level and mezzanine builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Integrated digital screens and technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Private meeting rooms and hospitality areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Product display showcases</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Full Service Includes</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">3D design visualization and walkthroughs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Project management and coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Build, installation, and breakdown</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Storage and refurbishment options</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Perfect For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Large-scale international exhibitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Major product launches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Corporate flagship events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Premium brand activations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Investment Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Modular Custom</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £5,500</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 3x4m stand footprint</li>
                <li>• Semi-custom design</li>
                <li>• Modular reusable system</li>
                <li>• Graphics and lighting</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Popular Choice
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Full Custom Build</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £15,000</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 6x6m+ unique design</li>
                <li>• Custom fabrication</li>
                <li>• Meeting areas included</li>
                <li>• Complete project management</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Showcase</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £35,000</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multi-level structures</li>
                <li>• Integrated technology</li>
                <li>• VIP hospitality areas</li>
                <li>• International exhibitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Create An Unforgettable Exhibition Presence
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discuss your vision with our exhibition design specialists
          </p>
          <Button variant="premium" size="lg">Schedule Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BespokeExhibitionDisplay;