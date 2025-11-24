import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FoodTruckWrap = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Food Truck <span className="text-accent">Wraps</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Eye-catching food truck graphics that make mouths water and draw hungry customers. Stand out at every location with appetite-inspiring designs.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Project Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-secondary rounded-2xl border border-border hover:shadow-premium transition-smooth" />
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Food truck wraps are your mobile storefront. Our designs combine mouth-watering food photography, vibrant colors, and clear menu information to attract customers from across any venue.
              </p>
              <p className="text-lg text-muted-foreground">
                We understand the unique challenges of food service graphics including heat resistance and easy-clean surfaces.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Heat-resistant vinyl for cooking areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Coating:</strong> Anti-graffiti laminate protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Surface:</strong> Easy-clean for food environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Features:</strong> Menu board integration options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Windows:</strong> Service window graphics included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Instant brand recognition at any venue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Social media-worthy Instagram appeal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Clear menu and pricing display</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Weather and grease resistant materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Attracts customers from distance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Essential</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £2,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Strategic panel coverage</li>
                    <li>• Logo and brand colors</li>
                    <li>• Basic menu display</li>
                    <li>• 3 design revisions</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £3,800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full vehicle wrap</li>
                    <li>• Custom food photography</li>
                    <li>• Menu board graphics</li>
                    <li>• Unlimited revisions</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Deluxe</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £5,200</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete custom design</li>
                    <li>• 3D renderings</li>
                    <li>• Window graphics & decals</li>
                    <li>• Brand consultation included</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, materials, and features. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Street Food", "Mobile Catering", "Food Festivals", "Event Catering", "Coffee Vans", "Gourmet Trucks", "Specialty Cuisine", "Pop-Up Restaurants"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Make Your Food Truck Unforgettable</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a custom design mockup and quote for your food truck wrap.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Start Your Design
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodTruckWrap;