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
        { name: "Flex face LightBox Sign", href: "/services/exterior-signs/flex-face-lightbox" },
        { name: "Projection Sign", href: "/services/exterior-signs/projection-sign" },
        { name: "Totem Sign Solutions", href: "/services/exterior-signs/totem-sign" },
        { name: "Site Hoarding Boards", href: "/services/exterior-signs/site-hoarding-boards" }
      ]
    },
    {
      name: "Interior Signs",
      href: "/services/interior-signs",
      items: [
        { name: "Reception Signs", href: "/services/interior-signs/reception-signs" },
        { name: "Neon Signs", href: "/services/interior-signs/neon-signs" },
        { name: "Light Boxes", href: "/services/interior-signs/light-boxes" },
        { name: "Creative Office Wall Graphics", href: "/services/interior-signs/office-wall-graphics" },
        { name: "Office Window frosting", href: "/services/interior-signs/window-frosting" }
      ]
    },
    {
      name: "Print Signs",
      href: "/services/print-signs",
      items: [
        { name: "Printed tray", href: "/services/print-signs/printed-tray" },
        { name: "Vinyl lettering", href: "/services/print-signs/vinyl-lettering" },
        { name: "Site Hoarding Boards", href: "/services/exterior-signs/site-hoarding-boards" },
        { name: "Banner Printing", href: "/services/print-signs/banner-printing" },
        { name: "Window Graphics", href: "/services/print-signs/window-graphics" },
        { name: "Wall Art", href: "/services/print-signs/wall-art" },
        { name: "Floor Graphics", href: "/services/print-signs/floor-graphics" },
        { name: "Bespoke printed ceiling", href: "/services/print-signs/bespoke-ceiling" }
      ]
    },
    {
      name: "Light Boxes",
      href: "/services/light-boxes",
      items: [
        { name: "Flex face LightBox Sign", href: "/services/exterior-signs/flex-face-lightbox" },
        { name: "Acrylic printed lightbox", href: "/services/light-boxes/acrylic-lightbox" },
        { name: "Promotional lightboxes", href: "/services/light-boxes/promotional-lightbox" }
      ]
    },
    {
      name: "Promotional Signs",
      href: "/services/promotional-signs",
      items: [
        { name: "Custom Flags", href: "/services/promotional-signs/custom-flags" },
        { name: "Pavement sign", href: "/services/promotional-signs/pavement-sign" },
        { name: "Projection Sign", href: "/services/exterior-signs/projection-sign" },
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
        { name: "Indoor digital signage", href: "/services/digital-signage/indoor-digital-signage" },
        { name: "Digital takeaway menu", href: "/services/digital-signage/digital-takeaway-menu" },
        { name: "Shop window display", href: "/services/digital-signage/shop-window-display" }
      ]
    },
    {
      name: "Exhibition Display",
      href: "/services/exhibition-display",
      items: [
        { name: "Pop-Up Banners", href: "/services/exhibition-display/pop-up-banners" },
        { name: "Standard exhibition display", href: "/services/exhibition-display/standard-exhibition" },
        { name: "Bespoke exhibition display", href: "/services/exhibition-display/bespoke-exhibition" }
      ]
    },
    {
      name: "Vehicle Graphics",
      href: "/services/vehicle-graphics",
      items: [
        { name: "Car Wrap", href: "/services/vehicle-graphics/car-wrap" },
        { name: "Van Wrap", href: "/services/vehicle-graphics/van-wrap" },
        { name: "Truck wrap", href: "/services/vehicle-graphics/truck-wrap" },
        { name: "Food Truck Wrap", href: "/services/vehicle-graphics/food-truck-wrap" },
        { name: "Lorry & HGV Wrap", href: "/services/vehicle-graphics/lorry-hgv-wrap" },
        { name: "Bus Wrap", href: "/services/vehicle-graphics/bus-wrap" }
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
