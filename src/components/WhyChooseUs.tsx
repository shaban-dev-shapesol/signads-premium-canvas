import { Award, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 max-w-7xl mx-auto">
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block flex items-center gap-2">
              <span className="w-6 h-px bg-accent"></span>
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose signAds:
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl italic text-accent mt-2">
              Excellence in Every Detail
            </p>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Three pillars of excellence that set us apart in the signage industry.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
