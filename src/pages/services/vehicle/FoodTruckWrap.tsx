import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const FoodTruckWrap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <ChefHat className="w-12 h-12 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold text-accent">
              Food Truck Wraps
            </h1>
          </div>
          <p className="text-xl text-primary-foreground mb-8 max-w-3xl">
            Eye-catching food truck graphics that make mouths water and draw hungry customers. Stand out at every location with appetite-inspiring designs.
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
                  Food Truck Wrap Example {i}
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
                Food truck wraps are your mobile storefront. Our designs combine mouth-watering food photography, vibrant colors, and clear menu information to attract customers from across any venue. We understand the unique challenges of food service graphics including heat resistance and easy-clean surfaces.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Heat-resistant vinyl for cooking areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Anti-graffiti laminate coating</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Easy-clean surface for food environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Menu board integration options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Service window graphics included</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Instant brand recognition at any venue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Social media-worthy Instagram appeal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Clear menu and pricing display</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Weather and grease resistant materials</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Design Elements Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Logo and brand identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Menu and pricing graphics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Food photography integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Social media handles</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Essential</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £2,500</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Strategic panel coverage</li>
                <li>• Logo and brand colors</li>
                <li>• Basic menu display</li>
                <li>• 3 design revisions</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Premium</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £3,800</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full vehicle wrap</li>
                <li>• Custom food photography</li>
                <li>• Menu board graphics</li>
                <li>• Unlimited revisions</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Deluxe</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £5,200</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complete custom design</li>
                <li>• 3D renderings</li>
                <li>• Window graphics & decals</li>
                <li>• Brand consultation included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Make Your Food Truck Unforgettable
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a custom design mockup and quote for your food truck wrap
          </p>
          <Link to="/#contact">
            <Button variant="hero" size="lg">Start Your Design</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodTruckWrap;