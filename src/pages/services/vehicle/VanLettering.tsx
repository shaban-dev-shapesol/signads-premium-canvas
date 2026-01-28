import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import vanImage1 from "@/assets/gallery/vehicle-van-lettering-1.jpg";
import vanImage2 from "@/assets/gallery/vehicle-van-lettering-2.jpg";
import vanImage3 from "@/assets/gallery/vehicle-van-lettering-3.jpg";
import vanImage4 from "@/assets/gallery/vehicle-van-lettering-4.jpg";

const galleryImages = [
  { src: vanImage1, alt: "Van lettering branding example" },
  { src: vanImage2, alt: "Professional van signage" },
  { src: vanImage3, alt: "Commercial van graphics" },
  { src: vanImage4, alt: "Van vinyl lettering" },
];

const VanLettering = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Van Lettering & Branding - Professional Vehicle Graphics"
        description="Professional van lettering and vinyl branding for commercial vehicles. Cost-effective signage solution for tradespeople and businesses across Liverpool and the UK."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Van Lettering <span className="text-accent">& Branding</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Professional vinyl lettering for vans and commercial vehicles. Simple, effective, and affordable branding that works.
            </p>
            <Link to="/contact">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryImages.map((image, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Van lettering is the most cost-effective way to turn your work vehicle into a mobile advertisement. Perfect for tradespeople, delivery services, and small businesses who want professional branding without the cost of a full wrap.
              </p>
              <p className="text-lg text-muted-foreground">
                Our high-quality vinyl lettering is durable, weather-resistant, and can be easily updated when your business details change. We design and install graphics that make your van stand out while you're on the road or parked at job sites.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Premium cast vinyl (5-7 year life)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Inks:</strong> UV-resistant for color longevity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Protection:</strong> Weather-proof lamination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Adhesive:</strong> Easy-remove without damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Installation:</strong> Professional fitting included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom design consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Panel graphics & logos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Contact details & branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Digital mockup before production</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Cost-Effective</h4>
                  <p className="text-primary-foreground/80">Affordable branding solution for any budget without compromising quality</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Professional Look</h4>
                  <p className="text-primary-foreground/80">Clean, professional appearance that builds trust and credibility</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Quick Turnaround</h4>
                  <p className="text-primary-foreground/80">Fast production and installation to get you on the road quickly</p>
                </div>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Basic</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £150</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Company name</li>
                    <li>• Phone number</li>
                    <li>• Both sides of van</li>
                    <li>• Single color vinyl</li>
                    <li>• Standard installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Standard</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £350</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Logo included</li>
                    <li>• Contact details</li>
                    <li>• Sides + rear</li>
                    <li>• Multi-color vinyl</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £550</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full design service</li>
                    <li>• All panels covered</li>
                    <li>• Including bonnet</li>
                    <li>• Premium materials</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on van size and design complexity. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Tradespeople", "Delivery Services", "Plumbers", "Electricians", "Builders", "Landscapers", "Mobile Services", "Small Businesses"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Brand Your Van?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get professional lettering that turns your van into a moving advertisement.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Quote
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

export default VanLettering;
