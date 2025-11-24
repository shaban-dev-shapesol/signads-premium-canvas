import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
  ];

  const serviceCategories = [
    {
      name: "Exterior Signs",
      href: "/services/exterior-signs",
      items: ["Built up 3D letters", "Fascia Sign Tray", "Flex face LightBox Sign", "Projection Sign", "Totem Sign Solutions", "Site Hoarding Boards"]
    },
    {
      name: "Interior Signs",
      href: "/services/interior-signs",
      items: ["Reception Signs", "Neon Signs", "Light Boxes", "Creative Office Wall Graphics", "Office Window frosting"]
    },
    {
      name: "Print Signs",
      href: "/services/print-signs",
      items: ["Printed tray", "Vinyl lettering", "Site Hoarding Boards", "Banner Printing", "Window Graphics", "Wall Art", "Floor Graphics", "Bespoke printed ceiling"]
    },
    {
      name: "Light Boxes",
      href: "/services/light-boxes",
      items: ["Flex face LightBox Sign", "Acrylic printed lightbox", "Promotional lightboxes"]
    },
    {
      name: "Promotional Signs",
      href: "/services/promotional-signs",
      items: ["Custom Flags", "Pavement sign", "Projection Sign", "Window Graphics", "Light boxes", "Bespoke printed Ceiling"]
    },
    {
      name: "Digital Signage",
      href: "/services/digital-signage",
      items: ["Outdoor digital signs", "Indoor digital signage", "Digital takeaway menu", "Shop window display"]
    },
    {
      name: "Exhibition Display",
      href: "/services/exhibition-display",
      items: ["Standard exhibition display", "Bespoke exhibition display"]
    },
    {
      name: "Vehicle Graphics",
      href: "/services/vehicle-graphics",
      items: ["Car Wrap", "Van Wrap", "Truck wrap", "Food Truck Wrap", "Lorry & HGV Wrap", "Bus Wrap"]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-smooth">
              sign<span className="text-accent">Ads</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative" ref={servicesRef}>
              <button
                className="text-foreground hover:text-accent transition-smooth font-medium flex items-center gap-1"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-6xl bg-background border border-border rounded-2xl shadow-premium p-8 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-4 gap-8">
                    {serviceCategories.map((category) => (
                      <div key={category.name}>
                        <Link
                          to={category.href}
                          className="text-lg font-bold text-foreground hover:text-accent transition-smooth mb-3 block"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {category.name}
                        </Link>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-border text-center">
                    <Link to="/services">
                      <Button variant="premium" onClick={() => setIsServicesOpen(false)}>
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground hover:text-accent transition-smooth font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="premium" size="default" onClick={scrollToContact}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <div className="space-y-2">
              <Link
                to="/services"
                className="block text-foreground hover:text-accent transition-smooth font-bold"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <div className="pl-4 space-y-2">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-foreground hover:text-accent transition-smooth font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="premium" size="default" className="w-full" onClick={scrollToContact}>
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
