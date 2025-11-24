import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const TruckWrap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-6">
            <Truck className="w-12 h-12 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold text-accent">
              Truck Wrap Services
            </h1>
          </div>
          <p className="text-xl text-primary-foreground mb-8 max-w-3xl">
            Transform your fleet trucks into mobile billboards with professional full or partial wraps. Maximum impact for your brand on every journey.
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
                  Truck Wrap Example {i}
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
                Truck wraps offer unparalleled advertising reach as your vehicles travel thousands of miles. Our premium vinyl wraps are designed to withstand harsh conditions while maintaining vibrant colors for years. Perfect for delivery fleets, logistics companies, and mobile service providers.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Premium cast vinyl (3M, Avery, or equivalent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">UV-resistant laminate protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">5-7 year outdoor durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Removable without paint damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Custom design and templating</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Thousands of daily impressions per vehicle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Cost-effective advertising compared to billboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Professional fleet branding consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Protects original paintwork</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Vehicle Types</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Box trucks and delivery vehicles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Refrigerated trucks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Flatbed trucks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-muted-foreground">Pickup trucks with toppers</span>
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
              <h3 className="text-xl font-bold text-foreground mb-2">Partial Wrap</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £2,200</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Strategic panel coverage</li>
                <li>• High-impact areas</li>
                <li>• Professional design</li>
                <li>• 2-3 day turnaround</li>
              </ul>
            </div>
            <div className="bg-background border-2 border-accent rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                Best Value
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Full Wrap</h3>
              <p className="text-3xl font-bold text-accent mb-4">From £3,800</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Complete vehicle coverage</li>
                <li>• Box and cab wrap</li>
                <li>• Premium vinyl materials</li>
                <li>• 4-5 day turnaround</li>
              </ul>
            </div>
            <div className="bg-background border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Fleet Package</h3>
              <p className="text-3xl font-bold text-accent mb-4">Volume Discount</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 5+ vehicle discounts</li>
                <li>• Fleet design consistency</li>
                <li>• Flexible scheduling</li>
                <li>• Account management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Turn Your Fleet Into Moving Advertisements
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a detailed quote and see design mockups for your truck
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

export default TruckWrap;