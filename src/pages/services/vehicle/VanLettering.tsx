import { Car, Home, ArrowRight } from "lucide-react";
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
      
      {/* Hero Section */}
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
              Professional vinyl lettering for vans and commercial vehicles. Simple, effective, and affordable.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Van lettering is the most cost-effective way to turn your work vehicle into a mobile advertisement. 
              Perfect for tradespeople, delivery services, and small businesses who want professional branding 
              without the cost of a full wrap.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our high-quality vinyl lettering is durable, weather-resistant, and can be easily updated 
              when your business details change. We design and install graphics that make your van stand out 
              while you're on the road or parked at job sites.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Materials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Premium cast vinyl (5-7 year outdoor life)</li>
                  <li>• UV-resistant inks</li>
                  <li>• Weather-proof lamination</li>
                  <li>• Easy-remove adhesive</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom design consultation</li>
                  <li>• Professional installation</li>
                  <li>• Panel graphics & logos</li>
                  <li>• Contact details & branding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">£</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">Cost-Effective</h3>
                <p className="text-muted-foreground text-sm">Affordable branding solution for any budget</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Professional Look</h3>
                <p className="text-muted-foreground text-sm">Clean, professional appearance for your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Quick Turnaround</h3>
                <p className="text-muted-foreground text-sm">Fast production and installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Pricing Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Basic</h3>
                <p className="text-3xl font-bold text-accent mb-4">From £150</p>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>Company name</li>
                  <li>Phone number</li>
                  <li>Both sides of van</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border-2 border-accent text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Standard</h3>
                <p className="text-3xl font-bold text-accent mb-4">From £350</p>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>Logo included</li>
                  <li>Contact details</li>
                  <li>Sides + rear</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Premium</h3>
                <p className="text-3xl font-bold text-accent mb-4">From £550</p>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>Full design service</li>
                  <li>All panels</li>
                  <li>Including bonnet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Brand Your Van?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get professional lettering that turns your van into a moving advertisement.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VanLettering;
