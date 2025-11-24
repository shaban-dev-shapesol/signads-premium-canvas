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
      items: [
        { name: "Built up 3D letters", href: "/services/exterior-signs/built-up-3d-letters" },
        { name: "Fascia Sign Tray", href: "/services/exterior-signs/fascia-sign-tray" },
        { name: "Flex face LightBox Sign", href: "#" },
        { name: "Projection Sign", href: "#" },
        { name: "Totem Sign Solutions", href: "#" },
        { name: "Site Hoarding Boards", href: "#" }
      ]
    },
    {
      name: "Interior Signs",
      href: "/services/interior-signs",
      items: [
        { name: "Reception Signs", href: "/services/interior-signs/reception-signs" },
        { name: "Neon Signs", href: "#" },
        { name: "Light Boxes", href: "#" },
        { name: "Creative Office Wall Graphics", href: "#" },
        { name: "Office Window frosting", href: "#" }
      ]
    },
    {
      name: "Print Signs",
      href: "/services/print-signs",
      items: [
        { name: "Printed tray", href: "#" },
        { name: "Vinyl lettering", href: "#" },
        { name: "Site Hoarding Boards", href: "#" },
        { name: "Banner Printing", href: "/services/print-signs/banner-printing" },
        { name: "Window Graphics", href: "#" },
        { name: "Wall Art", href: "#" },
        { name: "Floor Graphics", href: "#" },
        { name: "Bespoke printed ceiling", href: "#" }
      ]
    },
    {
      name: "Light Boxes",
      href: "/services/light-boxes",
      items: [
        { name: "Flex face LightBox Sign", href: "#" },
        { name: "Acrylic printed lightbox", href: "#" },
        { name: "Promotional lightboxes", href: "#" }
      ]
    },
    {
      name: "Promotional Signs",
      href: "/services/promotional-signs",
      items: [
        { name: "Custom Flags", href: "#" },
        { name: "Pavement sign", href: "#" },
        { name: "Projection Sign", href: "#" },
        { name: "Window Graphics", href: "#" },
        { name: "Light boxes", href: "#" },
        { name: "Bespoke printed Ceiling", href: "#" }
      ]
    },
    {
      name: "Digital Signage",
      href: "/services/digital-signage",
      items: [
        { name: "Outdoor digital signs", href: "/services/digital-signage/outdoor-digital-signs" },
        { name: "Indoor digital signage", href: "#" },
        { name: "Digital takeaway menu", href: "#" },
        { name: "Shop window display", href: "#" }
      ]
    },
    {
      name: "Exhibition Display",
      href: "/services/exhibition-display",
      items: [
        { name: "Standard exhibition display", href: "#" },
        { name: "Bespoke exhibition display", href: "#" }
      ]
    },
    {
      name: "Vehicle Graphics",
      href: "/services/vehicle-graphics",
      items: [
        { name: "Car Wrap", href: "/services/vehicle-graphics/car-wrap" },
        { name: "Van Wrap", href: "#" },
        { name: "Truck wrap", href: "#" },
        { name: "Food Truck Wrap", href: "#" },
        { name: "Lorry & HGV Wrap", href: "#" },
        { name: "Bus Wrap", href: "#" }
      ]
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
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="text-sm text-muted-foreground hover:text-accent transition-smooth block"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {item.name}
                              </Link>
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
              <div className="pl-4 space-y-3">
                {serviceCategories.map((category) => (
                  <div key={category.name}>
                    <Link
                      to={category.href}
                      className="block text-sm font-bold text-foreground hover:text-accent transition-smooth mb-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                    <div className="pl-3 space-y-1">
                      {category.items.slice(0, 3).map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block text-xs text-muted-foreground hover:text-accent transition-smooth"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
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
