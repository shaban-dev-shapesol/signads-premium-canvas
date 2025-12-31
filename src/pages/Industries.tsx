import { Store, Briefcase, GraduationCap, Heart, Truck, Building, Hotel, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Industries = () => {
  const industries = [
    {
      icon: Store,
      title: "Retail",
      description: "Drive foot traffic and boost sales with compelling storefront signage, window displays, and interior branding that creates memorable shopping experiences.",
      solutions: [
        "Illuminated shopfront signs",
        "Window graphics and displays",
        "Point of sale materials",
        "In-store promotional signage",
        "Wayfinding and directories"
      ],
      caseStudy: "Helped a fashion retailer increase foot traffic by 40% with new illuminated signage and window graphics."
    },
    {
      icon: Briefcase,
      title: "Corporate & Office",
      description: "Project professionalism and strengthen brand identity with premium office signage, from lobby statements to workspace graphics that inspire.",
      solutions: [
        "Light Box Signs",
        "Foamex Cut Letters",
        "Reception and lobby signs",
        "Corporate wall graphics",
        "Directional wayfinding"
      ],
      caseStudy: "Transformed a corporate headquarters with cohesive branding across 5 floors, enhancing professional image."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Create safe, navigable learning environments with clear wayfinding, motivational graphics, and durable signage built for high-traffic areas.",
      solutions: [
        "Campus wayfinding systems",
        "Safety and regulatory signs",
        "Motivational wall graphics",
        "Sports facility branding",
        "Classroom identification"
      ],
      caseStudy: "Implemented comprehensive wayfinding system for university campus serving 15,000+ students."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient-first signage solutions that prioritize clarity, accessibility, and compliance while creating welcoming, calming environments.",
      solutions: [
        "ADA-compliant wayfinding",
        "Department identification",
        "Emergency and safety signage",
        "Privacy and regulatory signs",
        "Calming environmental graphics"
      ],
      caseStudy: "Designed accessible signage system for 200-bed hospital, improving patient experience scores."
    },
    {
      icon: Truck,
      title: "Trade Services",
      description: "Professional van branding and signage for tradespeople. Get noticed on every job site with clear, effective vehicle graphics.",
      solutions: [
        "Van Wraps Only",
        "Van Lettering Branding",
        "Site signage",
        "Magnetic vehicle signs",
        "Promotional materials"
      ],
      caseStudy: "Branded fleet of 20 trade vans with consistent lettering, increasing brand recognition across the region."
    },
    {
      icon: Building,
      title: "Property & Real Estate",
      description: "Attract tenants and buyers with premium property signage, development boards, and marketing displays that showcase value.",
      solutions: [
        "Development hoarding boards",
        "Property marketing signage",
        "Show suite displays",
        "Directional site signage",
        "Leasing and sales materials"
      ],
      caseStudy: "Created premium development signage for luxury residential project valued at £50M."
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Enhance guest experiences with elegant signage solutions that blend functionality with your brand's unique character and ambiance.",
      solutions: [
        "LED Neon Signs",
        "Exterior hotel signage",
        "Wayfinding and directories",
        "Room identification",
        "Menu boards and displays"
      ],
      caseStudy: "Designed cohesive signage package for boutique hotel group across 8 locations."
    },
    {
      icon: Utensils,
      title: "Restaurants & Food Service",
      description: "Appetite-appealing signage from eye-catching exteriors to digital menu boards that drive orders and enhance dining experiences.",
      solutions: [
        "Illuminated restaurant signs",
        "Menu boards and displays",
        "Window decals",
        "Interior branding",
        "Promotional materials"
      ],
      caseStudy: "Increased restaurant visibility and orders by 35% with new LED signage and menu boards."
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Professional van lettering and branding for delivery and logistics businesses. Make your fleet work harder with visible branding.",
      solutions: [
        "Van Lettering Branding",
        "Van Wraps",
        "Warehouse signage",
        "Loading bay markers",
        "Facility identification"
      ],
      caseStudy: "Branded 30-vehicle delivery fleet with consistent lettering, generating thousands of daily impressions."
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Industries We Serve - Retail, Corporate, Healthcare & More"
        description="Expert signage solutions for retail, corporate, healthcare, hospitality, education, and logistics industries. Industry-specific expertise delivering results."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industries We <span className="text-accent">Serve</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Deep industry expertise delivering signage solutions that understand your unique challenges, 
              regulations, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-card border border-border p-8 rounded-2xl hover:shadow-premium transition-smooth"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {industry.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Typical Solutions:
                    </h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong className="text-accent">Case Study:</strong> {industry.caseStudy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Industry, Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't see your industry listed? We work with businesses across all sectors. 
              Let's discuss how we can help yours.
            </p>
            <Link to="/#contact">
              <Button variant="premium" size="xl">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
