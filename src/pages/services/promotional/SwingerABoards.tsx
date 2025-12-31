import { Flag, ArrowRight } from "lucide-react";
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
      
      {/* Hero Section */}
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
              Pavement signs are essential for attracting passing foot traffic to your business. Whether you need 
              a classic A-board, a swinging panel sign, or a forecourt poster holder, we have options to suit 
              every budget and location.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our pavement signs are built to withstand the elements and daily use. Many come with easy-change 
              graphics so you can update promotions and offers quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Product Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">A-Boards & A-Frames</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wooden A-boards (traditional look)</li>
                  <li>• Steel A-frames (durable)</li>
                  <li>• Snap frame A-boards (easy change)</li>
                  <li>• Chalkboard A-boards</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Swinger Signs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single panel swingers</li>
                  <li>• Double panel swingers</li>
                  <li>• Weighted base options</li>
                  <li>• Custom branded panels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Weather Resistant", desc: "Built to withstand rain, wind, and sun" },
                { title: "Portable", desc: "Easy to move in and out daily" },
                { title: "Customisable", desc: "Your branding, your message" },
                { title: "Durable", desc: "Built for years of daily use" },
                { title: "Visible", desc: "Designed to catch the eye" },
                { title: "Affordable", desc: "Low-cost advertising solution" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Pricing Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Basic A-Board</h3>
                <p className="text-3xl font-bold text-accent mb-4">From £75</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>Steel frame</li>
                  <li>Printed panels</li>
                  <li>Single or double sided</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border-2 border-accent text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Swinger Sign</h3>
                <p className="text-3xl font-bold text-accent mb-4">From £125</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>Weighted base</li>
                  <li>Swinging panel</li>
                  <li>Custom printing</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Premium A-Frame</h3>
                <p className="text-3xl font-bold text-accent mb-4">From £195</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>Heavy duty construction</li>
                  <li>Snap-change graphics</li>
                  <li>Water-filled base option</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Attract More Foot Traffic</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a pavement sign that brings customers through your door.
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

export default SwingerABoards;
