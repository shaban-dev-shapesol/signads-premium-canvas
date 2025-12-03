import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative z-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              sign<span className="text-accent">Ads</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Premium signage solutions that illuminate brands and captivate audiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/services/exterior-signs" className="hover:text-accent transition-smooth">Exterior Signs</Link></li>
              <li><Link to="/services/interior-signs" className="hover:text-accent transition-smooth">Interior Signs</Link></li>
              <li><Link to="/services/vehicle-graphics" className="hover:text-accent transition-smooth">Vehicle Graphics</Link></li>
              <li><Link to="/services/print-signs" className="hover:text-accent transition-smooth">Print Signs</Link></li>
              <li><Link to="/services/digital-signage" className="hover:text-accent transition-smooth">Digital Signage</Link></li>
              <li><Link to="/services/exhibition-display" className="hover:text-accent transition-smooth">Exhibition Display</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-smooth">Portfolio</Link></li>
              <li><Link to="/industries" className="hover:text-accent transition-smooth">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-accent transition-smooth">
                <Phone className="w-4 h-4 text-accent" />
                <span>+44 (0) 123 456 7890</span>
              </a>
              <a href="mailto:hello@signads.co.uk" className="flex items-center gap-2 hover:text-accent transition-smooth">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@signads.co.uk</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2025 signAds. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/services" className="hover:text-accent transition-smooth">All Services</Link>
              <Link to="/contact" className="hover:text-accent transition-smooth">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
