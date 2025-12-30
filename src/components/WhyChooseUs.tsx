import { Award, Zap, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Premium materials and expert installation ensuring your signage stands the test of time with exceptional durability.",
    },
    {
      icon: Zap,
      title: "Express Service",
      description: "Fast turnaround times without compromising quality. We understand your business can't wait.",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personalized service for complex projects with a single point of contact throughout your journey.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-accent">signAds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars of excellence that set us apart in the signage industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-premium hover:shadow-glow transition-smooth hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
