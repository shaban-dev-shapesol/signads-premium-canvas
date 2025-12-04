import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import galleryStandard1 from "@/assets/gallery/exhibition-standard-1.jpg";
import galleryStandard2 from "@/assets/gallery/exhibition-standard-2.jpg";
import galleryStandard3 from "@/assets/gallery/exhibition-standard-3.jpg";
import galleryStandard4 from "@/assets/gallery/exhibition-standard-4.jpg";

const galleryImages = [
  { src: galleryStandard1, alt: "Standard exhibition display at trade show" },
  { src: galleryStandard2, alt: "Portable pop-up backdrop with printed graphics" },
  { src: galleryStandard3, alt: "Exhibition stand with fabric tension display" },
  { src: galleryStandard4, alt: "Modular exhibition display with counter" },
];

const StandardExhibitionDisplay = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Standard <span className="text-accent">Exhibition Displays</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Professional, portable exhibition stands that set up in minutes. Cost-effective solutions for trade shows, conferences, and promotional events.
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
                Standard exhibition displays provide professional presence without the complexity of custom builds. These modular systems combine lightweight frames with high-quality printed graphics, offering the perfect balance of impact, portability, and value.
              </p>
              <p className="text-lg text-muted-foreground">
                Ideal for businesses attending multiple events throughout the year, these displays set up in minutes with no tools required.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Display Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Pop-up backdrop stands (3x2m, 3x3m)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Linked roller banners for larger displays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Fabric exhibition walls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Modular shell scheme graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Tension fabric displays with lights</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">15-minute setup with no tools required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Lightweight for easy transport</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Reusable for multiple events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional appearance every time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Cost-effective event presence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Banner Package</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £380</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3x roller banners</li>
                    <li>• Printed graphics</li>
                    <li>• Carry cases</li>
                    <li>• Ready to use</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Pop-Up Stand</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £850</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3x3m curved backdrop</li>
                    <li>• Printed fabric graphics</li>
                    <li>• LED spotlights included</li>
                    <li>• Wheeled carry case</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Complete Package</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £1,850</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pop-up backdrop</li>
                    <li>• Counter & literature stand</li>
                    <li>• Lighting & accessories</li>
                    <li>• Professional design service</li>
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
                {["Trade Shows", "Exhibitions", "Conferences", "Product Launches", "Recruitment Fairs", "Industry Events", "Pop-Up Stores", "Demonstrations"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Stand Out At Your Next Event</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert advice on the perfect exhibition package for your needs.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Get Started
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

export default StandardExhibitionDisplay;