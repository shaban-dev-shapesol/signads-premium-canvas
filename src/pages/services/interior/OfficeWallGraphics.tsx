import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryWallGraphics1 from "@/assets/gallery/interior-wall-graphics-1.jpg";
import galleryWallGraphics2 from "@/assets/gallery/interior-wall-graphics-2.jpg";
import galleryWallGraphics3 from "@/assets/gallery/interior-wall-graphics-3.jpg";
import galleryWallGraphics4 from "@/assets/gallery/interior-wall-graphics-4.jpg";

const galleryImages = [
  { src: galleryWallGraphics1, alt: "Creative office wall graphics installation" },
  { src: galleryWallGraphics2, alt: "Colorful abstract wall mural in modern office" },
  { src: galleryWallGraphics3, alt: "Company values timeline wall display" },
  { src: galleryWallGraphics4, alt: "Geometric pattern wall graphics in meeting room" },
];

const OfficeWallGraphics = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Office Wall Graphics - Creative Workspace Branding"
        description="Transform your workspace with custom wall graphics, murals, and branded environments. Inspire creativity and reinforce company culture."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Palette className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Creative Office <span className="text-accent">Wall Graphics</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your workspace with inspiring wall graphics that reinforce company culture and create memorable environments for employees and visitors.
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
                Office wall graphics go beyond decoration—they communicate brand values, inspire teams, and create Instagram-worthy spaces that attract talent. From motivational quotes to data visualizations, we transform empty walls into powerful brand storytelling tools.
              </p>
              <p className="text-lg text-muted-foreground">
                Using premium materials and advanced printing techniques, our wall graphics create lasting impressions while being completely removable when needed.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Material:</strong> Removable wallpaper or vinyl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Printing:</strong> Eco-friendly latex printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Finish:</strong> Matte or gloss options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Surface:</strong> Suitable for textured walls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Options:</strong> Cut vinyl or full-color print</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Creative Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Company values and mission statements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Timeline of company history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Data visualizations and infographics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Motivational quotes and typography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Environmental photography and landscapes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Cut Vinyl</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £10/sq ft</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Typography and logos</li>
                    <li>• Single or multi-color</li>
                    <li>• Clean, modern aesthetic</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full-Color Print</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £16/sq ft</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Photographic quality</li>
                    <li>• Complex designs</li>
                    <li>• Custom artwork</li>
                    <li>• Design consultation included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Full Room</h4>
                  <p className="text-3xl font-bold text-accent mb-4">Custom Quote</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-wall installations</li>
                    <li>• Environmental design</li>
                    <li>• Project management</li>
                    <li>• 3D renderings provided</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, complexity, and installation requirements. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Reception Areas", "Conference Rooms", "Break Rooms", "Open-Plan Offices", "Lobbies", "Stairwells", "Corridors", "Social Spaces"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Create An Inspiring Workspace</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your office wall graphics vision.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Start Your Project
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

export default OfficeWallGraphics;
