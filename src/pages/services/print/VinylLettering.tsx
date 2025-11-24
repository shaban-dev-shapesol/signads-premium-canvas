import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Type } from "lucide-react";
import { Link } from "react-router-dom";

const VinylLettering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <Type className="w-12 h-12 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold text-accent">
              Vinyl Lettering
            </h1>
          </div>
          <p className="text-xl text-primary-foreground mb-8 max-w-3xl">
            Crisp, clean cut vinyl graphics for windows, walls, and vehicles. The versatile, cost-effective solution for professional signage.
          </p>
          <Link to="/#contact">
            <Button variant="hero" size="lg">Get Custom Quote</Button>
          </Link>
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
                  Vinyl Lettering Example {i}
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
                Cut vinyl lettering is the foundation of professional signage. Precision-cut from high-quality self-adhesive vinyl, these graphics offer unmatched versatility for everything from window displays to vehicle graphics. With hundreds of colors and finishes available, vinyl lettering delivers crisp, professional results that last for years.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Premium cast or calendared vinyl</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Computer-cut precision graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Hundreds of colors and finishes available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Matte, gloss, or specialty finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">5-10 year outdoor durability</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vinyl Types</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Standard matte and gloss colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Metallic and chrome finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Reflective for visibility in low light</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Frosted and etched glass effects</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ideal Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Shop window displays and opening hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Vehicle graphics and fleet branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Wall lettering and wayfinding signs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Equipment and machinery labeling</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Small Format</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £45</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Up to 300mm lettering</li>
                <li>• Single color vinyl</li>
                <li>• Standard colors</li>
                <li>• Supply only or installed</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Medium Format</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £180</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Up to 1m signage</li>
                <li>• Multiple colors</li>
                <li>• Premium vinyl options</li>
                <li>• Professional installation</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Large Format</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £500</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Over 2m installations</li>
                <li>• Complex multi-color designs</li>
                <li>• Specialty finishes</li>
                <li>• Site survey included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Precision Graphics, Professional Results
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a quote for your vinyl lettering project
          </p>
          <Link to="/#contact">
            <Button variant="hero" size="lg">Request Quote</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VinylLettering;