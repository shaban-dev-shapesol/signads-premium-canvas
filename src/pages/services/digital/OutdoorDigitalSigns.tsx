import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryOutdoor1 from "@/assets/gallery/digital-outdoor-1.jpg";
import galleryOutdoor2 from "@/assets/gallery/digital-outdoor-2.jpg";
import galleryOutdoor3 from "@/assets/gallery/digital-outdoor-3.jpg";
import galleryOutdoor4 from "@/assets/gallery/digital-outdoor-4.jpg";

const galleryImages = [
  { src: galleryOutdoor1, alt: "Outdoor digital LED billboard" },
  { src: galleryOutdoor2, alt: "Digital billboard on commercial building at night" },
  { src: galleryOutdoor3, alt: "High-brightness outdoor display at storefront" },
  { src: galleryOutdoor4, alt: "Transportation hub digital information display" },
];

const OutdoorDigitalSigns = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Outdoor Digital Signs - LED Billboards & Displays"
        description="High-brightness outdoor digital signage and LED billboards. Weather-resistant displays with remote content management for advertising and information."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Outdoor <span className="text-accent">Digital Signs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              High-brightness LED displays designed for maximum visibility in any weather. Update content instantly and captivate audiences 24/7.
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

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Outdoor digital signage combines cutting-edge LED technology with weather-resistant construction to deliver dynamic content in any environment. Perfect for retail, hospitality, transportation, and advertising applications where real-time content updates and high visibility are essential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Brightness:</strong> 2,500-10,000 nits for daylight visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Resolution:</strong> Full HD (1920x1080) to 4K (3840x2160)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Weather Rating:</strong> IP65/IP66 weatherproof enclosures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Temperature Range:</strong> -40°C to +50°C operating range</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lifespan:</strong> 100,000+ hours LED lifespan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Display Sizes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Small Format:</strong> 32" - 55" for focused messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Medium Format:</strong> 65" - 85" for high-impact displays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Large Format:</strong> 98" and above for maximum visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>LED Video Walls:</strong> Modular panels for custom sizes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Billboards:</strong> Large-scale LED billboards up to 10m+</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Content Management Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Remote Updates</h4>
                  <p className="text-primary-foreground/80">Update content instantly from anywhere via cloud-based CMS platform</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Scheduling</h4>
                  <p className="text-primary-foreground/80">Schedule content changes by time, day, or triggered events automatically</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Multi-Zone Display</h4>
                  <p className="text-primary-foreground/80">Display multiple content areas simultaneously with split-screen layouts</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Small Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£3,000 - £6,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 32"-55" display</li>
                    <li>• 2,500-4,000 nits</li>
                    <li>• Basic CMS software</li>
                    <li>• Wall/pole mounting</li>
                    <li>• 1-year warranty</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Medium Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£6,000 - £15,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 65"-85" display</li>
                    <li>• 4,000-6,000 nits</li>
                    <li>• Advanced CMS</li>
                    <li>• Custom mounting</li>
                    <li>• 3-year warranty</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Large Format</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£15,000+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 98"+ or LED walls</li>
                    <li>• 6,000-10,000 nits</li>
                    <li>• Enterprise CMS</li>
                    <li>• Full installation</li>
                    <li>• 5-year warranty</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *Prices include hardware, software, installation, and training. Monthly CMS subscriptions from £50/month.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Ideal Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Retail Storefronts", "Quick Service Restaurants", "Transportation Hubs", "Shopping Centers", "Car Dealerships", "Petrol Stations", "Sports Venues", "Entertainment Venues"].map((app) => (
                  <div key={app} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Go Digital. Go Dynamic.</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Transform your outdoor advertising with state-of-the-art digital signage.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Technical Consultation
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

export default OutdoorDigitalSigns;
