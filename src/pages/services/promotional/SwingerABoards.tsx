import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import promoImage1 from "@/assets/gallery/promotional-pavement-1.jpg";
import promoImage2 from "@/assets/gallery/promotional-flags-1.jpg";
import promoImage3 from "@/assets/gallery/print-banner-1.jpg";
import promoImage4 from "@/assets/gallery/print-banner-2.jpg";

const galleryImages = [
  { src: promoImage1, alt: "Pavement A-board sign" },
  { src: promoImage2, alt: "Swinger sign example" },
  { src: promoImage3, alt: "Promotional pavement signage" },
  { src: promoImage4, alt: "A-frame advertising board" },
];

const SwingerABoards = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Pavement Signs - Swinger Signs & A-Boards | Signad"
        description="Eye-catching pavement signs, swinger signs, and A-boards for shops, cafes, and businesses. Durable outdoor advertising across Liverpool and UK."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Flag className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pavement Signs <span className="text-accent">& A-Boards</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Grab attention at street level with swinger signs, A-boards, and pavement advertising.
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
                Pavement signs are essential for attracting passing foot traffic to your business. Whether you need a classic A-board, a swinging panel sign, or a forecourt poster holder, we have options to suit every budget and location.
              </p>
              <p className="text-lg text-muted-foreground">
                Our pavement signs are built to withstand the elements and daily use. Many come with easy-change graphics so you can update promotions and offers quickly.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">A-Boards & A-Frames</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Wooden A-Boards:</strong> Traditional look and feel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Steel A-Frames:</strong> Durable and long-lasting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Snap Frame:</strong> Easy poster changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Chalkboard:</strong> Daily specials and offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Water-Filled Base:</strong> Extra stability</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Swinger Signs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Single Panel:</strong> Simple and effective</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Double Panel:</strong> Visible from both sides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Weighted Base:</strong> Secure positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Custom Branding:</strong> Full colour graphics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Interchangeable:</strong> Quick panel swaps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Weather Resistant</h4>
                  <p className="text-primary-foreground/80">Built to withstand rain, wind, and sun exposure</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Portable & Durable</h4>
                  <p className="text-primary-foreground/80">Easy to move daily, built for years of use</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Fully Customisable</h4>
                  <p className="text-primary-foreground/80">Your branding, your message, your way</p>
                </div>
              </div>
            </div>

            {/* Pricing Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Basic A-Board</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £75</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Steel frame</li>
                    <li>• Printed panels</li>
                    <li>• Single or double sided</li>
                    <li>• Weather resistant</li>
                    <li>• Design included</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Swinger Sign</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £125</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weighted base</li>
                    <li>• Swinging panel</li>
                    <li>• Custom printing</li>
                    <li>• Eye-catching motion</li>
                    <li>• Premium construction</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium A-Frame</h4>
                  <p className="text-3xl font-bold text-accent mb-4">From £195</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Heavy duty construction</li>
                    <li>• Snap-change graphics</li>
                    <li>• Water-filled base option</li>
                    <li>• Poster included</li>
                    <li>• Multi-year durability</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices include frame and printed graphics. Replacement panels available at reduced cost.
              </p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Cafes & Restaurants", "Retail Shops", "Salons & Barbers", "Pubs & Bars", "Estate Agents", "Market Stalls", "Service Centres", "High Street Stores"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Attract More Foot Traffic</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a pavement sign that brings customers through your door.
              </p>
              <Link to="/#contact">
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

export default SwingerABoards;