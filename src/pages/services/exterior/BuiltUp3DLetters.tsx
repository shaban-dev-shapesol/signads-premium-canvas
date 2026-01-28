import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import gallery3DLetters1 from "@/assets/gallery/exterior-3d-letters-1.jpg";
import gallery3DLetters2 from "@/assets/gallery/exterior-3d-letters-2.jpg";
import gallery3DLetters3 from "@/assets/gallery/exterior-3d-letters-3.jpg";
import gallery3DLetters4 from "@/assets/gallery/exterior-3d-letters-4.jpg";

const galleryImages = [
  { src: gallery3DLetters1, alt: "Professional 3D built-up letters on modern building" },
  { src: gallery3DLetters2, alt: "Illuminated channel letters at dusk" },
  { src: gallery3DLetters3, alt: "Colorful acrylic 3D letters on storefront" },
  { src: gallery3DLetters4, alt: "Gold brass 3D letters on marble wall" },
];

const BuiltUp3DLetters = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Built-Up 3D Letters - Premium Dimensional Signage"
        description="Custom built-up 3D letters in acrylic, aluminium, stainless steel & brass. Illuminated and non-illuminated options for storefronts, reception areas & buildings."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built-Up <span className="text-accent">3D Letters</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Premium dimensional lettering that creates depth and lasting impact. Perfect for making your brand stand out with sophisticated 3D signage.
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
                Built-up 3D letters offer a premium, dimensional appearance that creates a powerful visual impact. These custom-fabricated letters add depth and sophistication to any space, making them ideal for reception areas, building facades, and retail environments.
              </p>
              <p className="text-lg text-muted-foreground">
                Available in a variety of materials, finishes, and illumination options, 3D built-up letters can be customized to perfectly match your brand identity and architectural requirements.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Letter Heights:</strong> 100mm to 1500mm+</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Depth:</strong> 20mm to 200mm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Weight:</strong> Varies by material (lightweight foam to solid metal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mounting:</strong> Stud-fixed, flush-mounted, or stand-off</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Location:</strong> Indoor or outdoor (weather-resistant options)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Materials & Finishes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Acrylic:</strong> Lightweight, versatile, various colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Aluminium:</strong> Durable, weather-resistant, brushed or polished</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Stainless Steel:</strong> Premium finish, corrosion-resistant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Foam/PVC:</strong> Cost-effective, lightweight, painted finishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Brass/Copper:</strong> Luxury appearance, develops natural patina</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Illumination Options */}
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Illumination Options</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Front-Lit LED</h4>
                  <p className="text-primary-foreground/80">LEDs illuminate the face of letters for maximum brightness and visibility</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Halo/Back-Lit</h4>
                  <p className="text-primary-foreground/80">Creates elegant glow effect behind letters for sophisticated ambiance</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Non-Illuminated</h4>
                  <p className="text-primary-foreground/80">Clean, professional appearance relying on material finish and depth</p>
                </div>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Standard Range</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£500 - £1,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Foam or basic acrylic</li>
                    <li>• Letter heights 200-500mm</li>
                    <li>• Painted finish</li>
                    <li>• Non-illuminated</li>
                    <li>• Basic installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium Range</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£1,500 - £5,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Acrylic or aluminium</li>
                    <li>• Letter heights 500-1000mm</li>
                    <li>• LED illumination</li>
                    <li>• Multiple colors/finishes</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Luxury Range</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£5,000+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Stainless steel or brass</li>
                    <li>• Letter heights 1000mm+</li>
                    <li>• Complex illumination</li>
                    <li>• Bespoke finishes</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices are indicative and vary based on size, materials, complexity, and installation requirements. Contact us for an accurate quote.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Reception Areas", "Building Facades", "Retail Storefronts", "Corporate Offices", "Hotels & Restaurants", "Shopping Centers", "Educational Institutions", "Healthcare Facilities"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Custom 3D Letters?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our experts help you design the perfect dimensional signage for your space.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Detailed Quote
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

export default BuiltUp3DLetters;
