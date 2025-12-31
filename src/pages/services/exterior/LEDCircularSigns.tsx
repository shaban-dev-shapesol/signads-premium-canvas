import { Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import exteriorImage1 from "@/assets/gallery/exterior-projection-1.jpg";
import exteriorImage2 from "@/assets/gallery/exterior-projection-2.jpg";
import exteriorImage3 from "@/assets/gallery/exterior-projection-3.jpg";
import exteriorImage4 from "@/assets/gallery/exterior-projection-4.jpg";

const galleryImages = [
  { src: exteriorImage1, alt: "LED illuminated circular project sign" },
  { src: exteriorImage2, alt: "Illuminated round signage" },
  { src: exteriorImage3, alt: "Circular LED sign installation" },
  { src: exteriorImage4, alt: "Projecting illuminated sign" },
];

const LEDCircularSigns = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="LED Illuminated Circular Project Signs - Premium Round Signage"
        description="Eye-catching LED illuminated circular project signs for maximum visibility. Perfect for retail, hospitality, and commercial premises across Liverpool and UK."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              LED Illuminated <span className="text-accent">Circular Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Eye-catching round projecting signs that grab attention day and night. Perfect for retail and hospitality.
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
              LED illuminated circular project signs are the classic choice for pubs, cafes, salons, and retail shops. 
              These double-sided signs project from your building, catching the attention of pedestrians and passing traffic.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our circular signs are fully illuminated with energy-efficient LED modules, providing consistent 
              brightness and visibility in all conditions. Available in various sizes from 400mm to 1000mm diameter.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Construction</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Powder-coated aluminium frame</li>
                  <li>• Acrylic or polycarbonate face</li>
                  <li>• Double-sided printing</li>
                  <li>• Heavy-duty wall bracket</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Illumination</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-output LED modules</li>
                  <li>• 50,000+ hour lifespan</li>
                  <li>• Even light distribution</li>
                  <li>• Low energy consumption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Available Sizes</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { size: "400mm", price: "From £295" },
                { size: "500mm", price: "From £395" },
                { size: "600mm", price: "From £495" },
                { size: "800mm", price: "From £695" },
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.size}</h3>
                  <p className="text-accent font-bold">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">Prices include design, manufacture, and standard bracket. Installation available.</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ideal For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Pubs & Bars", desc: "Classic pub signs with your logo and branding" },
                { title: "Salons & Spas", desc: "Elegant illuminated signage for beauty businesses" },
                { title: "Cafes & Restaurants", desc: "Inviting signs that draw customers in" },
                { title: "Retail Shops", desc: "Stand out on busy high streets" },
                { title: "Professional Services", desc: "Dentists, opticians, and medical practices" },
                { title: "Estate Agents", desc: "Prominent corner signs for visibility" },
              ].map((item, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stand Out?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a custom circular sign that makes your business unmissable.
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

export default LEDCircularSigns;
