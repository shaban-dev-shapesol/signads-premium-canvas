import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const ShopWindowDisplay = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <Monitor className="w-12 h-12 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold text-accent">
              Digital Shop Window Displays
            </h1>
          </div>
          <p className="text-xl text-primary-foreground mb-8 max-w-3xl">
            Transform your storefront into an attention-grabbing digital showcase. High-brightness displays that captivate passersby and drive foot traffic 24/7.
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
                  Window Display Example {i}
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
                Digital window displays turn your storefront into a dynamic advertising platform that works around the clock. With ultra-high-brightness panels designed specifically for window applications, these displays remain perfectly visible even in direct sunlight. Showcase products, promotions, and brand stories with eye-catching motion graphics that stop foot traffic in its tracks.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Ultra-high brightness (2500-5000 nits)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">4K/8K resolution displays available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Automated brightness adjustment sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Cooling systems for window installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Portrait, landscape, or video wall configurations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Visible in bright daylight conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Motion graphics attract 400% more attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Update content remotely anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Works 24/7 as a digital billboard</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Perfect For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">High street retail stores</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Fashion and lifestyle boutiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Estate agents and showrooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Shopping centers and malls</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Single Display</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £3,500</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 43"-55" high-brightness display</li>
                <li>• 2500 nit brightness</li>
                <li>• Basic content management</li>
                <li>• Installation & setup</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Recommended
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Display</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £6,800</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 65"-75" ultra-bright display</li>
                <li>• 4000+ nit brightness</li>
                <li>• Content creation included</li>
                <li>• Cloud-based CMS</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Video Wall</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £18,000</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multi-screen video wall</li>
                <li>• 4K/8K resolution</li>
                <li>• Stunning visual impact</li>
                <li>• Full creative & tech support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Make Your Window Work Harder
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a consultation to see how digital displays can transform your storefront
          </p>
          <Link to="/#contact">
            <Button variant="hero" size="lg">Book Consultation</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopWindowDisplay;