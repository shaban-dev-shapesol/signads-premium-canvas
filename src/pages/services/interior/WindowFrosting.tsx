import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";

const WindowFrosting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <Snowflake className="w-12 h-12 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold text-accent">
              Office Window Frosting
            </h1>
          </div>
          <p className="text-xl text-primary-foreground mb-8 max-w-3xl">
            Privacy, style, and brand integration for office glazing. Transform plain glass into elegant, functional design elements.
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
                  Window Frosting Example {i}
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
                Window frosting provides elegant privacy solutions while maintaining natural light flow. Perfect for conference rooms, private offices, and glazed partitions, our frosted films can incorporate branding, patterns, and decorative elements to enhance your workspace aesthetics.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">High-quality frosted vinyl film</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Maintains 80%+ light transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Removable or permanent options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Custom patterns and branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Meeting regulatory requirements</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Design Options</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Full frosted coverage for privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Decorative patterns and textures</span>
</li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Branded frosting with logos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Gradient and manifestation designs</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ideal Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Conference and meeting rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Private offices and management suites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Glass partitions in open-plan offices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Bathroom and wellness area windows</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Full Frost</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £12/sq ft</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complete privacy coverage</li>
                <li>• Standard frosted film</li>
                <li>• Simple application</li>
                <li>• Professional installation</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Recommended
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Branded Frosting</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £18/sq ft</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom cut patterns</li>
                <li>• Logo integration</li>
                <li>• Decorative designs</li>
                <li>• Design consultation included</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Full Office Suite</h3>
              <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multiple rooms/partitions</li>
                <li>• Complex design schemes</li>
                <li>• Project coordination</li>
                <li>• After-hours installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Enhance Privacy With Style
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a quote for your office window frosting project
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

export default WindowFrosting;