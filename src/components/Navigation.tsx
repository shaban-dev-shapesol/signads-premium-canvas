import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Service images
import exteriorImg from "@/assets/service-exterior.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import printImg from "@/assets/service-printing.jpg";
import digitalImg from "@/assets/service-digital.jpg";
import exhibitionImg from "@/assets/service-exhibition.jpg";
import vehicleImg from "@/assets/service-vehicle.jpg";
import promotionalImg from "@/assets/service-promotional.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);

  const leftNavLinks = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const rightNavLinks = [
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
  ];

  const serviceCategories = [
    {
      name: "Exterior Signs",
      href: "/services/exterior-signs",
      image: exteriorImg,
      description: "Bold outdoor signage solutions",
      items: [
        { name: "Built up 3D letters", href: "/services/exterior-signs/built-up-3d-letters" },
        { name: "Fascia Sign Tray", href: "/services/exterior-signs/fascia-sign-tray" },
        { name: "Flex face LightBox Sign", href: "/services/exterior-signs/flex-face-lightbox" },
        { name: "LED Circular Signs", href: "/services/exterior-signs/led-circular-signs" },
        { name: "Shop Front ACM Signs", href: "/services/exterior-signs/shop-front-acm" },
        { name: "Projection Sign", href: "/services/exterior-signs/projection-sign" },
        { name: "Totem Sign Solutions", href: "/services/exterior-signs/totem-sign" },
        { name: "Site Hoarding Boards", href: "/services/exterior-signs/site-hoarding-boards" }
      ]
    },
    {
      name: "Interior Signs",
      href: "/services/interior-signs",
      image: interiorImg,
      description: "Elevate your indoor spaces",
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
      image: printImg,
      description: "High-quality print solutions",
      items: [
        { name: "PVC Banners", href: "/services/print-signs/pvc-banners" },
        { name: "Printed tray", href: "/services/print-signs/printed-tray" },
        { name: "Vinyl lettering", href: "/services/print-signs/vinyl-lettering" },
        { name: "Banner Printing", href: "/services/print-signs/banner-printing" },
        { name: "Window Graphics", href: "/services/print-signs/window-graphics" },
        { name: "Wall Art", href: "/services/print-signs/wall-art" },
        { name: "Floor Graphics", href: "/services/print-signs/floor-graphics" }
      ]
    },
    {
      name: "Light Boxes",
      href: "/services/light-boxes",
      image: exteriorImg,
      description: "Illuminated display solutions",
      items: [
        { name: "Flex face LightBox Sign", href: "/services/exterior-signs/flex-face-lightbox" },
        { name: "Acrylic printed lightbox", href: "/services/light-boxes/acrylic-lightbox" },
        { name: "Promotional lightboxes", href: "/services/light-boxes/promotional-lightbox" }
      ]
    },
    {
      name: "Promotional Signs",
      href: "/services/promotional-signs",
      image: promotionalImg,
      description: "Eye-catching promotional displays",
      items: [
        { name: "Custom Flags", href: "/services/promotional-signs/custom-flags" },
        { name: "Pavement Signs & A-Boards", href: "/services/promotional-signs/swinger-a-boards" },
        { name: "Projection Sign", href: "/services/exterior-signs/projection-sign" },
        { name: "Window Graphics", href: "/services/print-signs/window-graphics" },
        { name: "Light boxes", href: "/services/light-boxes/promotional-lightbox" }
      ]
    },
    {
      name: "Digital Signage",
      href: "/services/digital-signage",
      image: digitalImg,
      description: "Dynamic digital displays",
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
      image: exhibitionImg,
      description: "Stand out at events",
      items: [
        { name: "Pop-Up Banners", href: "/services/exhibition-display/pop-up-banners" },
        { name: "Standard exhibition display", href: "/services/exhibition-display/standard-exhibition" },
        { name: "Bespoke exhibition display", href: "/services/exhibition-display/bespoke-exhibition" }
      ]
    },
    {
      name: "Vehicle Graphics",
      href: "/services/vehicle-graphics",
      image: vehicleImg,
      description: "Mobile brand advertising",
      items: [
        { name: "Van Wrap", href: "/services/vehicle-graphics/van-wrap" },
        { name: "Van Lettering Branding", href: "/services/vehicle-graphics/van-lettering" },
        { name: "Truck Wrap", href: "/services/vehicle-graphics/truck-wrap" },
        { name: "Food Truck Wrap", href: "/services/vehicle-graphics/food-truck-wrap" }
      ]
    }
  ];

  // Determine which service category is active based on current URL
  const getActiveServiceFromUrl = () => {
    const path = location.pathname;
    return serviceCategories.find(category => 
      path.startsWith(category.href) || 
      category.items.some(item => path === item.href)
    );
  };

  const urlActiveService = getActiveServiceFromUrl();
  
  const activeCategory = hoveredCategory 
    ? serviceCategories.find(c => c.name === hoveredCategory) 
    : (urlActiveService || serviceCategories[0]);
  
  const defaultHighlightedCategory = hoveredCategory || urlActiveService?.name || serviceCategories[0].name;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {leftNavLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={servicesRef}>
                  <button
                    className={`font-medium flex items-center gap-1 transition-all duration-300 ${
                      scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {isServicesOpen && (
                    <div 
                      className="fixed left-1/2 -translate-x-1/2 top-20 mt-2 w-screen max-w-6xl bg-background border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
                      onMouseLeave={() => {
                        setIsServicesOpen(false);
                        setHoveredCategory(null);
                      }}
                    >
                      <div className="flex">
                        {/* Left: Category List */}
                        <div className="w-1/3 bg-muted/30 p-6 border-r border-border">
                          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Our Services</p>
                          <div className="space-y-1">
                            {serviceCategories.map((category) => (
                              <Link
                                key={category.name}
                                to={category.href}
                                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                                  category.name === defaultHighlightedCategory
                                    ? 'bg-accent text-accent-foreground'
                                    : 'hover:bg-muted text-foreground'
                                }`}
                                onMouseEnter={() => setHoveredCategory(category.name)}
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <span className="font-medium">{category.name}</span>
                                <ArrowRight className={`w-4 h-4 transition-transform ${
                                  category.name === defaultHighlightedCategory
                                    ? 'translate-x-1'
                                    : 'opacity-0 group-hover:opacity-100'
                                }`} />
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-border">
                            <Link to="/services" onClick={() => setIsServicesOpen(false)}>
                              <Button variant="premium" className="w-full">
                                View All Services
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Right: Subcategories + Image */}
                        <div className="w-2/3 p-6">
                          {activeCategory && (
                            <div className="flex gap-6 h-full">
                              {/* Subcategory List */}
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-foreground mb-2">{activeCategory.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{activeCategory.description}</p>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                                  {activeCategory.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      className="text-sm text-foreground hover:text-accent transition-all duration-200 py-1.5 flex items-center gap-2 group"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Category Image */}
                              <div className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
                                <img 
                                  src={activeCategory.image} 
                                  alt={activeCategory.name}
                                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-all duration-300 ${
                    scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Link to="/" className={`text-3xl font-bold transition-all duration-300 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}>
              Sign<span className="text-accent">ad</span>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {rightNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-all duration-300 ${
                  scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant={scrolled ? "premium" : "ghost"} 
              size="default" 
              onClick={goToContact}
              className={!scrolled ? "border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold" : ""}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Navigation - Outside nav for proper z-index stacking */}
    {isOpen && (
      <div className="lg:hidden fixed inset-0 top-20 bg-background z-[100]">
            <div className="h-full overflow-y-auto px-6 py-6 space-y-2">
              {/* Services Section with Accordion */}
              <div className="border-b border-border pb-2">
                <button
                  className={`w-full flex items-center justify-between py-3 font-semibold text-lg transition-colors ${
                    mobileServicesOpen ? 'text-accent' : 'text-foreground'
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <div className="pb-4 space-y-1">
                    {serviceCategories.map((category) => (
                      <div key={category.name}>
                        <button
                          className="w-full flex items-center justify-between py-2.5 pl-4 text-foreground hover:text-accent transition-colors"
                          onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                        >
                          <Link
                            to={category.href}
                            className="flex-1 text-left font-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {category.name}
                          </Link>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {expandedCategory === category.name && (
                          <div className="pl-8 pb-2 space-y-1 bg-muted/30 rounded-lg mx-2 py-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block text-sm text-muted-foreground hover:text-accent transition-colors py-2 px-3"
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileServicesOpen(false);
                                  setExpandedCategory(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-3 px-4">
                      <Link to="/services">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          View All Services
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                to="/portfolio"
                className="block py-3 text-lg font-semibold text-foreground hover:text-accent transition-colors border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/industries"
                className="block py-3 text-lg font-semibold text-foreground hover:text-accent transition-colors border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                to="/about"
                className="block py-3 text-lg font-semibold text-foreground hover:text-accent transition-colors border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="pt-6">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default Navigation;
