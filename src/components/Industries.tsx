import { Store, Briefcase, GraduationCap, Heart, Truck, Building } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Store,
      title: "Retail",
      description: "Drive foot traffic with eye-catching storefront signage",
    },
    {
      icon: Briefcase,
      title: "Corporate & Office",
      description: "Professional branding for modern workspaces",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Wayfinding and informational signage for campuses",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Clear, compliant signage for medical facilities",
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Fleet graphics and warehouse signage",
    },
    {
      icon: Building,
      title: "Hospitality",
      description: "Premium signage for hotels and restaurants",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-accent">Serve</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Trusted by leading businesses across diverse sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-smooth group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-smooth">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-white/70 text-sm">{industry.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
