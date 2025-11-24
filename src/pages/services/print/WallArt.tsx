import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const WallArt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wall Art & Murals
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Transform blank walls into inspiring brand experiences with custom-printed wall art, murals, and environmental graphics.
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
                  Wall Art Example {i}
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
                Wall art and environmental graphics create immersive brand experiences that inspire employees, impress clients, and reinforce your company culture. From photorealistic imagery to abstract designs, we bring your vision to life on any scale.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">High-resolution digital printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Removable wallpaper material</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Eco-solvent or latex inks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Suitable for textured walls</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Sizes up to 50m+ continuous run</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Design Options</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Photorealistic imagery and photography</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Abstract patterns and geometric designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Typography and motivational quotes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Brand storytelling graphics</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ideal Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Office reception and lobbies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Conference rooms and meeting spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Retail store environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Restaurant and hospitality venues</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Feature Wall</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £12/sq ft</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Single wall coverage</li>
                <li>• Standard material</li>
                <li>• Simple designs</li>
                <li>• Professional installation</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Best Value
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Environmental Graphics</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £18/sq ft</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multi-wall coverage</li>
                <li>• Premium materials</li>
                <li>• Complex imagery</li>
                <li>• Design consultation included</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Custom Mural</h3>
              <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bespoke artwork</li>
                <li>• Artist collaboration</li>
                <li>• Large-scale installations</li>
                <li>• Project management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Create Inspiring Spaces
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your wall art vision and bring it to life
          </p>
          <Button variant="premium" size="lg">Start Your Project</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WallArt;