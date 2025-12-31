import { Store, Briefcase, GraduationCap, Heart, Truck, Building } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 max-w-7xl mx-auto">
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block flex items-center gap-2">
              <span className="w-6 h-px bg-accent"></span>
              INDUSTRIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Industries We Serve:
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-accent mt-2">
              Trusted Across Sectors
            </p>
          </div>
          <p className="text-primary-foreground/70 max-w-md lg:text-right">
            Delivering premium signage solutions to leading businesses across diverse industries.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
