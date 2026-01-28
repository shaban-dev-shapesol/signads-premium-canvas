import { LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryHoarding1 from "@/assets/gallery/exterior-hoarding-1.jpg";
import galleryHoarding2 from "@/assets/gallery/exterior-hoarding-2.jpg";
import galleryHoarding3 from "@/assets/gallery/exterior-hoarding-3.jpg";
import galleryHoarding4 from "@/assets/gallery/exterior-hoarding-4.jpg";

const galleryImages = [
  { src: galleryHoarding1, alt: "Construction site hoarding with printed graphics" },
  { src: galleryHoarding2, alt: "Colorful site hoarding with developer branding" },
  { src: galleryHoarding3, alt: "Property development hoarding with CGI renders" },
  { src: galleryHoarding4, alt: "Creative artistic hoarding panels" },
];

const SiteHoardingBoards = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Site Hoarding Boards - Construction Site Graphics"
        description="Large format site hoarding boards for construction and development sites. High-impact graphics, durable materials, and professional installation."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LayoutGrid className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Site <span className="text-accent">Hoarding Boards</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform construction barriers into powerful advertising space. Professional site hoarding graphics that promote your project and enhance street appeal.
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
                Site hoarding boards serve dual purposes: security and marketing. Our large-format printed graphics turn temporary construction barriers into compelling visual displays that showcase architectural renderings, brand messaging, and project information to passing pedestrians and traffic.
              </p>
              <p className="text-lg text-muted-foreground">
                Perfect for property developers, construction companies, and contractors looking to maximize the advertising potential of their site perimeter.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Heavy-duty banner mesh or vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Finish:</strong> Wind-resistant perforated material options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Printing:</strong> UV-resistant eco-solvent printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Fixing:</strong> Hemmed edges with eyelets for secure installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Size:</strong> Custom sizes up to 30m+ continuous length</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Turn empty barriers into revenue-generating ads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Showcase architectural visualizations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Improve neighborhood perception of construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Cost-effective long-term outdoor graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Up to 3 years outdoor durability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Standard Vinyl</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £18/sqm</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Solid vinyl banner material</li>
                    <li>• Full-color printing</li>
                    <li>• Hemmed with eyelets</li>
                    <li>• Up to 2 years outdoor life</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Mesh Banner</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £22/sqm</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Wind-resistant mesh material</li>
                    <li>• High-resolution printing</li>
                    <li>• Reduced wind loading</li>
                    <li>• 3+ years outdoor durability</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Complete Project</h4>
                  <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Design & artwork creation</li>
                    <li>• Multiple panel installation</li>
                    <li>• Site survey included</li>
                    <li>• Maintenance & replacement</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, quantity, and installation complexity. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Construction Sites", "Property Development", "Event Perimeters", "Festival Branding", "Temporary Advertising", "Site Security", "Public Works", "Urban Regeneration"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Construction Site</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a quote for professional hoarding board graphics that make an impact.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Quote
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

export default SiteHoardingBoards;
