import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              sign<span className="text-accent">Ads</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Premium signage solutions that illuminate brands and captivate audiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-smooth">Exterior Signage</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Interior Signage</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Vehicle Graphics</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Large Format Printing</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Exhibition & Display</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-smooth">Retail</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Corporate & Office</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Education</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Healthcare</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Transport & Logistics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+44 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@signads.co.uk</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2025 signAds. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
