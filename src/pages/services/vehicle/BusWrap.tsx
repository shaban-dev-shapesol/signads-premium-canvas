import { Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BusWrap = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bus className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bus Wrap <span className="text-accent">Advertising</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform buses into moving billboards with full or partial wraps. Maximum urban exposure for your brand on high-traffic routes.
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
                Bus wraps offer unmatched urban advertising visibility as vehicles traverse busy city routes daily. Whether you're wrapping a single shuttle or an entire transit fleet, our expertise ensures stunning results that withstand constant public use and weather exposure.
              </p>
              <p className="text-lg text-muted-foreground">
                Turn every journey into a powerful brand statement with eye-catching graphics that dominate the urban landscape.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Transit-grade cast vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Coating:</strong> Anti-graffiti laminate protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Windows:</strong> Perforated vinyl for visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Options:</strong> Reflective for night visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Compliance:</strong> TfL and regulatory standards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">High-frequency urban exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Moving billboard on prime routes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Massive scale advertising canvas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Ideal for campaigns and promotions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Cost-effective reach vs static billboards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Partial Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £3,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Side panel coverage</li>
                    <li>• Single or double-decker</li>
                    <li>• Standard materials</li>
                    <li>• 3-4 day installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full Wrap</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £8,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete coverage</li>
                    <li>• All sides + rear</li>
                    <li>• Premium vinyl materials</li>
                    <li>• 5-7 day installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Fleet Campaign</h4>
                  <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multiple buses</li>
                    <li>• Campaign management</li>
                    <li>• Route optimization advice</li>
                    <li>• Removal included</li>
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
                {["Single-Decker Buses", "Double-Decker Buses", "Coaches", "Tour Buses", "Shuttle Buses", "Transit Advertising", "Brand Campaigns", "Event Promotions"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Own The Streets With Bus Advertising</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get pricing and campaign advice for your bus wrap project.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Start Your Campaign
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

export default BusWrap;