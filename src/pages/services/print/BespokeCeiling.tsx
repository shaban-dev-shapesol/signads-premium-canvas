import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const BespokeCeiling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Bespoke Printed Ceilings
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Transform overlooked ceiling space into stunning visual experiences. Custom-printed acoustic or stretch ceiling systems that inspire and impress.
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
                  Ceiling Graphics Example {i}
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
                Printed ceiling graphics create immersive environments that captivate from every angle. Whether transforming retail spaces, restaurants, or corporate environments, our custom ceiling solutions combine stunning visuals with practical acoustic and lighting benefits. Turn unused ceiling space into a powerful brand experience.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Stretch fabric or acoustic panel systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">High-resolution dye-sublimation printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Fire-rated materials (Class 0/A)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Integrated LED backlighting options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Seamless or modular installation</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Design Options</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Photorealistic sky and nature scenes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Abstract patterns and geometric designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Brand storytelling and product imagery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">3D depth effects and trompe-l'œil</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ideal Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Retail stores and shopping centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Restaurants and hospitality venues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Corporate lobbies and atriums</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Healthcare and wellness facilities</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Acoustic Panels</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £120/sqm</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modular panel system</li>
                <li>• Acoustic performance</li>
                <li>• Custom printed designs</li>
                <li>• Easy maintenance</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Premium Solution
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Stretch Fabric</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £180/sqm</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Seamless appearance</li>
                <li>• Integrated LED lighting</li>
                <li>• Photographic quality print</li>
                <li>• Professional installation</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Complete Project</h3>
              <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Large-scale installations</li>
                <li>• 3D design visualization</li>
                <li>• Engineering & compliance</li>
                <li>• Full project management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Elevate Every View
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create an unforgettable ceiling experience for your space
          </p>
          <Button variant="premium" size="lg">Start Your Project</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BespokeCeiling;