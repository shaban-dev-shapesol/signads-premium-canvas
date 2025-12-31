import { Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryPopup1 from "@/assets/gallery/exhibition-popup-1.jpg";
import galleryPopup2 from "@/assets/gallery/exhibition-popup-2.jpg";
import galleryPopup3 from "@/assets/gallery/exhibition-popup-3.jpg";
import galleryPopup4 from "@/assets/gallery/exhibition-popup-4.jpg";

const galleryImages = [
  { src: galleryPopup1, alt: "Pop-up roller banner at trade show" },
  { src: galleryPopup2, alt: "Professional roll-up banner stands" },
  { src: galleryPopup3, alt: "Multiple linked roller banners" },
  { src: galleryPopup4, alt: "Premium wide format banner at conference" },
];

const PopUpBanners = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Pop-Up Banners - Roller Banners & Pull-Up Displays"
        description="Portable pop-up and roller banners for trade shows, events, and retail. Easy setup, premium print quality, and various sizes available."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Presentation className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pop-Up <span className="text-accent">Banners</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Portable, professional exhibition displays that set up in seconds. Perfect for trade shows, events, and presentations.
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

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Pop-up banners (also known as roller banners or pull-up banners) are the most popular portable display solution for exhibitions, trade shows, and events. They combine professional appearance with incredible portability - each banner packs into a sleek carry case and sets up in seconds without tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Banner Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Standard Roller:</strong> 850mm x 2000mm, most popular size</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Wide Roller:</strong> 1000mm x 2000mm, maximum impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Premium Roller:</strong> Chrome base, luxury appearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Double-Sided:</strong> Graphics on both sides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Giant Roller:</strong> 1500mm x 2400mm for large spaces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Quick Setup:</strong> 30 seconds assembly, no tools required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Portable:</strong> Lightweight carry case, easy transport</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Reusable:</strong> Change graphics for different events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Professional:</strong> Premium materials and printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Durable:</strong> Aluminum base, 3+ year lifespan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Print Specifications</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Material</h4>
                  <p className="text-primary-foreground/80">Premium 440gsm anti-curl PET film</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Resolution</h4>
                  <p className="text-primary-foreground/80">1440 DPI photo-quality printing</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Finish</h4>
                  <p className="text-primary-foreground/80">Satin or matt anti-glare laminate</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Turnaround</h4>
                  <p className="text-primary-foreground/80">24-48 hours express available</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Budget Range</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£55 - £75</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 850mm x 2000mm</li>
                    <li>• Economy base</li>
                    <li>• Standard print</li>
                    <li>• Carry bag</li>
                    <li>• 3-5 day delivery</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Standard Range</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£85 - £120</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 850mm x 2000mm</li>
                    <li>• Premium base</li>
                    <li>• High-res print</li>
                    <li>• Padded case</li>
                    <li>• 24-48hr express</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Wide Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£110 - £165</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1000mm x 2000mm</li>
                    <li>• Chrome or silver</li>
                    <li>• Premium print</li>
                    <li>• Deluxe case</li>
                    <li>• Same-day available</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Premium</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£180+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Double-sided</li>
                    <li>• Giant sizes</li>
                    <li>• LED lighting</li>
                    <li>• Flight case</li>
                    <li>• Design service</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Graphic replacement service available from £35. Multi-banner discounts for orders of 3+
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Package Deals</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Event Starter</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£220</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2x Standard roller banners</li>
                    <li>• 500x A5 flyers</li>
                    <li>• Business cards (250)</li>
                    <li>• Design assistance</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Trade Show Pro</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£450</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3x Premium roller banners</li>
                    <li>• Promotion table + cover</li>
                    <li>• Literature holder</li>
                    <li>• Full design service</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Exhibition Elite</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£895</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 4x Wide roller banners</li>
                    <li>• 3x3m pop-up stand</li>
                    <li>• LED spotlights</li>
                    <li>• Project management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Design Tips</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Keep It Simple</h4>
                  <p className="text-sm text-muted-foreground">Use large, bold text and minimal content. People should grasp your message in 3 seconds from 3 meters away</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">High-Quality Images</h4>
                  <p className="text-sm text-muted-foreground">Use professional photography at 150 DPI minimum. Avoid stock photos that look generic</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-3">Strong CTA</h4>
                  <p className="text-sm text-muted-foreground">Include clear contact information and call-to-action. QR codes work well for instant engagement</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Stand Out at Your Next Event</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Professional pop-up banners delivered fast with exceptional print quality.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Order Your Banners
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

export default PopUpBanners;
