import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const OfficeWallGraphics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Creative Office Wall Graphics
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Transform your workspace with inspiring wall graphics that reinforce company culture and create memorable environments for employees and visitors.
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
                  Wall Graphics Example {i}
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
                Office wall graphics go beyond decoration—they communicate brand values, inspire teams, and create Instagram-worthy spaces that attract talent. From motivational quotes to data visualizations, we transform empty walls into powerful brand storytelling tools.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Removable wallpaper material</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Eco-friendly latex printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Matte or gloss finish options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Suitable for textured walls</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Cut vinyl lettering option</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Creative Applications</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Company values and mission statements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Timeline of company history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Data visualizations and infographics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Motivational quotes and typography</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Perfect For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Reception and lobby areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Conference and meeting rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Break rooms and social spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Open-plan office feature walls</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Cut Vinyl</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £10/sq ft</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Typography and logos</li>
                <li>• Single or multi-color</li>
                <li>• Clean, modern aesthetic</li>
                <li>• Professional installation</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Most Versatile
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Full-Color Print</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £16/sq ft</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Photographic quality</li>
                <li>• Complex designs</li>
                <li>• Custom artwork</li>
                <li>• Design consultation included</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Full Room</h3>
              <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multi-wall installations</li>
                <li>• Environmental design</li>
                <li>• Project management</li>
                <li>• 3D renderings provided</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Create An Inspiring Workspace
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your office wall graphics vision
          </p>
          <Button variant="premium" size="lg">Start Your Project</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeWallGraphics;