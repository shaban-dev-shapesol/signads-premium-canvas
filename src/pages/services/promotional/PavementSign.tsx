import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const PavementSign = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pavement Signs & A-Boards - Sidewalk Advertising Displays"
        description="Classic pavement signs and A-boards for storefronts and events. Chalkboards, snap-frame displays, and custom branded A-boards."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Pavement Signs (A-Boards)
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Classic sidewalk advertising that captures passing foot traffic. From chalkboards to snap-frame A-boards, turn pavement space into sales opportunities.
          </p>
          <Button variant="premium" size="lg">Get Custom Quote</Button>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-muted rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Pavement Sign Example {i}
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
                Pavement signs remain one of the most cost-effective ways to attract walk-in customers. Positioned at eye level where foot traffic is highest, these versatile signs can be updated daily with special offers, menu items, or promotional messages. Perfect for cafes, restaurants, retail shops, and service businesses looking to boost spontaneous visits.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Sign Types</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Traditional chalkboard A-frames</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Snap-frame poster A-boards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Swing sign pavement boards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Water/sand weighted bases</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Custom branded A-frames</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Captures impulse customers at decision point</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Easy to move and store daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Change messaging instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Extremely cost-effective advertising</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ideal Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Cafes and restaurants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Retail shops and boutiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Salons and beauty services</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Estate agents and showrooms</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Chalkboard</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £65</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• A1 size chalkboard</li>
                <li>• Wooden or metal frame</li>
                <li>• Weather-resistant finish</li>
                <li>• Chalk markers included</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Best Seller
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Snap-Frame</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £95</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Quick poster changes</li>
                <li>• A1/A0 sizes available</li>
                <li>• Waterproof protection</li>
                <li>• Heavy-duty construction</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Custom Branded</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £280</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bespoke shape & branding</li>
                <li>• Full-color printed frame</li>
                <li>• Premium materials</li>
                <li>• Matches brand identity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Drive More Footfall Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a quote for pavement signs that convert passersby into customers
          </p>
          <Button variant="premium" size="lg">Request Quote</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PavementSign;