import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const CustomFlags = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Custom Flags & Banners
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Eye-catching promotional flags that flutter in the breeze. Perfect for events, retail locations, and outdoor advertising that demands attention.
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
                  Custom Flag Example {i}
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
                Custom flags create dynamic, attention-grabbing displays that move with the wind, naturally drawing the eye. From feather flags to large advertising banners, our printed flags are perfect for temporary promotions, events, and permanent outdoor advertising. Lightweight, portable, and weather-resistant for reliable outdoor performance.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Flag Types</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Feather/teardrop flags (2.5m-5.5m)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Rectangle advertising flags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Custom-shaped promotional flags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Double-sided printed options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Ground spike, cross base, or weighted bases</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Movement naturally attracts attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Portable and easy to relocate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Quick setup with no tools required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Weather-resistant materials</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ideal Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Store entrances and sidewalks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Events and exhibitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Car dealerships and forecourts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Sports events and festivals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Pricing Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Small Feather</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £95</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 2.5m height</li>
                <li>• Single-sided print</li>
                <li>• Ground spike included</li>
                <li>• Carry bag</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Large Feather</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £165</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 4.5m height</li>
                <li>• Double-sided print option</li>
                <li>• Water base or cross base</li>
                <li>• Premium fabric</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Custom Shape</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £220</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bespoke flag shapes</li>
                <li>• Multiple sizes available</li>
                <li>• Premium hardware</li>
                <li>• Bulk order discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Make Your Brand Fly
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a quote for custom promotional flags
          </p>
          <Button variant="premium" size="lg">Request Quote</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomFlags;