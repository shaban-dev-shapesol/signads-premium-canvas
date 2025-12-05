import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import galleryIndoor1 from "@/assets/gallery/digital-indoor-1.jpg";
import galleryIndoor2 from "@/assets/gallery/digital-indoor-2.jpg";
import galleryIndoor3 from "@/assets/gallery/digital-indoor-3.jpg";
import galleryIndoor4 from "@/assets/gallery/digital-indoor-4.jpg";

const galleryImages = [
  { src: galleryIndoor1, alt: "Indoor digital signage in retail environment" },
  { src: galleryIndoor2, alt: "Commercial display showing promotional content" },
  { src: galleryIndoor3, alt: "Corporate lobby video wall display" },
  { src: galleryIndoor4, alt: "Shopping mall digital kiosk" },
];

const IndoorDigitalSignage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Indoor Digital Signage - Commercial Display Solutions"
        description="Professional indoor digital signage for retail, corporate, and hospitality. Video walls, touchscreens, and interactive displays with CMS."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Indoor <span className="text-accent">Digital Signage</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Engage, inform, and entertain with professional indoor displays. Perfect for retail, corporate, hospitality, and healthcare environments.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Installation Examples</h2>
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
                Indoor digital signage transforms how you communicate with customers and staff. From menu boards in restaurants to corporate communications in offices, our professional-grade displays deliver dynamic content that captures attention and drives engagement. Complete with cloud-based content management for easy updates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Display Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Wall-Mounted:</strong> Landscape or portrait orientation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Freestanding Kiosks:</strong> Interactive touchscreen options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Video Walls:</strong> Multi-screen configurations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Ceiling-Mounted:</strong> Overhead displays for retail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Window Displays:</strong> High-brightness for storefront</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Menu Boards:</strong> Restaurants and quick-service food</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Corporate Comms:</strong> Office lobbies and break rooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Wayfinding:</strong> Hospitals, universities, shopping centers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Product Promotion:</strong> Retail environments and showrooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Queue Management:</strong> Service centers and banks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Content Management Features</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Cloud-Based</h4>
                  <p className="text-primary-foreground/80">Access from anywhere, update multiple screens instantly</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Scheduling</h4>
                  <p className="text-primary-foreground/80">Daypart scheduling for breakfast, lunch, dinner menus</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Templates</h4>
                  <p className="text-primary-foreground/80">Pre-designed layouts for quick content creation</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Analytics</h4>
                  <p className="text-primary-foreground/80">Track engagement and content performance</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pricing Guide</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Single Display</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£1,200 - £2,500</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 32"-55" commercial display</li>
                    <li>• Media player included</li>
                    <li>• Basic CMS license (1 year)</li>
                    <li>• Wall mount & cables</li>
                    <li>• Installation & training</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border-2 border-accent">
                  <h4 className="text-xl font-bold text-foreground mb-2">Multi-Display</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£4,500 - £9,000</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 3-5 displays (43"-65")</li>
                    <li>• Professional media players</li>
                    <li>• Advanced CMS (3 years)</li>
                    <li>• Network configuration</li>
                    <li>• Full project management</li>
                  </ul>
                </div>
                <div className="bg-secondary p-6 rounded-xl border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-2">Video Wall</h4>
                  <p className="text-3xl font-bold text-accent mb-4">£12,000+</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2x2 or 3x3 configurations</li>
                    <li>• Ultra-narrow bezel displays</li>
                    <li>• Enterprise CMS</li>
                    <li>• Video wall controller</li>
                    <li>• Bespoke installation</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                *CMS subscriptions from £15-50/month per screen after initial period. Content creation services available.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Technical Specifications</h2>
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Display Specs</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Resolution: Full HD or 4K</li>
                      <li>• Brightness: 400-700 nits</li>
                      <li>• Panel: Commercial-grade</li>
                      <li>• Operating: 16-24 hours/day</li>
                      <li>• Warranty: 3-year commercial</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Media Player</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Android or Windows based</li>
                      <li>• WiFi & Ethernet connectivity</li>
                      <li>• Remote management</li>
                      <li>• Auto-restart functionality</li>
                      <li>• Content caching</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">CMS Platform</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Drag-and-drop interface</li>
                      <li>• Multi-user access</li>
                      <li>• Content library</li>
                      <li>• Mobile app control</li>
                      <li>• API integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Industry Solutions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Retail Stores", "Restaurants & Cafes", "Corporate Offices", "Healthcare Facilities", "Hotels & Venues", "Education", "Fitness Centers", "Banking"].map((industry) => (
                  <div key={industry} className="bg-secondary p-4 rounded-xl border border-border text-center">
                    <p className="font-medium text-foreground">{industry}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Engage Your Audience Digitally</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Transform your communication with professional indoor digital signage solutions.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Schedule Consultation
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

export default IndoorDigitalSignage;
