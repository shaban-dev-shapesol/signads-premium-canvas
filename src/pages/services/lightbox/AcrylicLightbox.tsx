import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import galleryAcrylic1 from "@/assets/gallery/lightbox-acrylic-1.jpg";
import galleryAcrylic2 from "@/assets/gallery/lightbox-acrylic-2.jpg";
import galleryAcrylic3 from "@/assets/gallery/lightbox-acrylic-3.jpg";
import galleryAcrylic4 from "@/assets/gallery/lightbox-acrylic-4.jpg";

const galleryImages = [
  { src: galleryAcrylic1, alt: "Premium acrylic lightbox in retail environment" },
  { src: galleryAcrylic2, alt: "Acrylic lightbox display in luxury store" },
  { src: galleryAcrylic3, alt: "Corporate lobby acrylic lightbox signage" },
  { src: galleryAcrylic4, alt: "Shopping mall acrylic lightbox displays" },
];

const AcrylicLightbox = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Acrylic <span className="text-accent">Lightbox</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Premium illuminated displays with crystal-clear acrylic faces. Perfect for high-end retail environments and modern interiors.
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
            
            {/* Project Examples Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Acrylic Lightbox Examples</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryImages.map((image, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Acrylic lightboxes represent the premium end of illuminated signage. Using high-grade acrylic face panels with edge-lit or back-lit LED technology, these displays deliver unmatched clarity and color vibrancy. The crystal-clear acrylic provides superior light transmission compared to traditional flex-face lightboxes, making them ideal for luxury retail, corporate lobbies, and high-traffic indoor locations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Face Material:</strong> 5-10mm cast acrylic sheet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Frame:</strong> Anodized aluminum extrusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Depth:</strong> 50-150mm depending on size</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>LED:</strong> Energy-efficient strips, 50,000+ hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Power:</strong> 230V mains with transformer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Illumination Methods</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Edge-Lit:</strong> LEDs around perimeter, ultra-slim profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Back-Lit:</strong> LEDs behind panel, even illumination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Front-Lit:</strong> LEDs illuminate printed surface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>RGB Color-Changing:</strong> Programmable multi-color</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Dimmable:</strong> Adjustable brightness control</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Acrylic vs. Flex-Face Comparison</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Image Quality</h4>
                  <p className="text-primary-foreground/80">Superior clarity and color depth. Photographic quality reproduction impossible with flex</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Durability</h4>
                  <p className="text-primary-foreground/80">Rigid, scratch-resistant surface. Won&apos;t sag or wrinkle like flex material</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Premium Appeal</h4>
                  <p className="text-primary-foreground/80">Luxury finish suitable for high-end brands and corporate environments</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£350 - £800</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• A2 to A1 size (up to 800mm)</li>
                    <li>• Edge-lit LED</li>
                    <li>• Wall-mounted</li>
                    <li>• Snap-frame design</li>
                    <li>• Graphic included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£800 - £2,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1m to 2m width</li>
                    <li>• Back-lit LED system</li>
                    <li>• Custom frame finish</li>
                    <li>• Double-sided option</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£2,000+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2m+ width</li>
                    <li>• RGB color-changing</li>
                    <li>• Freestanding or suspended</li>
                    <li>• Bespoke shapes</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices based on standard sizes and shapes. Bespoke configurations available.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Print & Graphics Options</h2>
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Vinyl Application</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Full Color Print:</strong> £45-85/m² depending on complexity</li>
                      <li>• <strong>Translucent Vinyl:</strong> Allows light transmission</li>
                      <li>• <strong>Opaque Vinyl:</strong> For window graphics style</li>
                      <li>• <strong>Duratrans Film:</strong> Premium photographic quality</li>
                      <li>• <strong>Changeable Graphics:</strong> Magnetic or snap-frame systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Direct Printing</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>UV Direct Print:</strong> Printed directly onto acrylic</li>
                      <li>• <strong>Layered Acrylic:</strong> Printed between two sheets</li>
                      <li>• <strong>Reverse Print:</strong> Protected behind clear layer</li>
                      <li>• <strong>Engraved + LED:</strong> Text/logos with edge-lit effect</li>
                      <li>• <strong>Permanent Solution:</strong> No graphic replacement needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Retail Storefronts", "Shopping Centers", "Corporate Lobbies", "Hotel Reception", "Restaurant Menus", "Estate Agents", "Banks & Finance", "Showrooms"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Maintenance & Lifespan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">LED Lifespan</h4>
                  <p className="text-sm text-muted-foreground">50,000+ hours typical lifespan. Running 12 hours/day equals 11+ years of operation</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Cleaning</h4>
                  <p className="text-sm text-muted-foreground">Wipe acrylic with soft cloth and anti-static cleaner. Avoid harsh chemicals and abrasive materials</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Warranty</h4>
                  <p className="text-sm text-muted-foreground">2-year manufacturer warranty on LED components. 1-year on installation workmanship</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Elevate Your Brand with Premium Lightboxes</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Crystal-clear acrylic displays that showcase your brand in stunning detail.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request Custom Quote
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

export default AcrylicLightbox;
