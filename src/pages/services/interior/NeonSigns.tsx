import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

import galleryNeon1 from "@/assets/gallery/interior-neon-1.jpg";
import galleryNeon2 from "@/assets/gallery/interior-neon-2.jpg";
import galleryNeon3 from "@/assets/gallery/interior-neon-3.jpg";
import galleryNeon4 from "@/assets/gallery/interior-neon-4.jpg";

const galleryImages = [
  { src: galleryNeon1, alt: "Custom LED neon sign in restaurant interior" },
  { src: galleryNeon2, alt: "Vibrant neon bar signage at night" },
  { src: galleryNeon3, alt: "Retro coffee shop neon sign" },
  { src: galleryNeon4, alt: "Motivational neon quote in modern office" },
];

const NeonSigns = () => {
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
              Neon <span className="text-accent">Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contemporary LED neon signs that add character and vibrant ambiance to modern spaces. Energy-efficient and fully customizable.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Examples</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {galleryImages.map((image, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-border hover:shadow-premium transition-smooth">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                LED neon signs offer the classic aesthetic of traditional neon with the benefits of modern LED technology. Perfect for creating Instagrammable moments in restaurants, retail spaces, offices, and entertainment venues. Our custom neon signs are handcrafted with flexible LED neon tubing mounted on acrylic backboards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Technology:</strong> Flexible LED neon tube (not glass)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Power:</strong> 12V low voltage, safe to touch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lifespan:</strong> 50,000+ hours LED life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Energy:</strong> 80% more efficient than glass neon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Mounting:</strong> Clear acrylic or colored backboard</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Color Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Warm White:</strong> Classic elegant glow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Cool White:</strong> Modern bright appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>RGB Colors:</strong> Red, blue, green, yellow, pink, purple, orange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Multi-Color:</strong> Different colors in one design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>RGB Programmable:</strong> Color-changing with remote control</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Popular Applications</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Retail & Hospitality</h4>
                  <p className="text-primary-foreground/80">Feature walls, bars, restaurants, cafes, and boutique stores</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Corporate Spaces</h4>
                  <p className="text-primary-foreground/80">Reception areas, break rooms, motivational quotes, and logos</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Events & Weddings</h4>
                  <p className="text-primary-foreground/80">Photo backdrops, venue decor, and personalized messages</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Signs</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£150 - £400</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Up to 50cm width</li>
                    <li>• Single color</li>
                    <li>• Simple text/logo</li>
                    <li>• Clear acrylic backing</li>
                    <li>• Basic mounting</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Signs</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£400 - £900</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 50cm to 120cm width</li>
                    <li>• Multiple colors</li>
                    <li>• Complex designs</li>
                    <li>• Colored backing options</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Signs</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£900+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Over 120cm width</li>
                    <li>• RGB programmable</li>
                    <li>• Complex artwork</li>
                    <li>• Custom backing design</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices based on design complexity. Contact us with your artwork for accurate quote.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Design Process</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">1</div>
                  <h4 className="font-bold text-foreground mb-2">Submit Design</h4>
                  <p className="text-sm text-muted-foreground">Send us your text, logo, or custom artwork</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">2</div>
                  <h4 className="font-bold text-foreground mb-2">Preview & Approve</h4>
                  <p className="text-sm text-muted-foreground">Review digital mockup and select colors</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">3</div>
                  <h4 className="font-bold text-foreground mb-2">Handcrafted</h4>
                  <p className="text-sm text-muted-foreground">Expert fabrication with quality materials</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">4</div>
                  <h4 className="font-bold text-foreground mb-2">Installation</h4>
                  <p className="text-sm text-muted-foreground">Professional mounting and testing</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Illuminate Your Space</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Create a stunning focal point with custom LED neon signage.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Design Your Neon Sign
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

export default NeonSigns;
