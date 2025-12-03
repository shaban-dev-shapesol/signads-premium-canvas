import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-signage-premium.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Full Width */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Curved Shape Overlay */}
      <div 
        className="absolute inset-0 bg-primary"
        style={{
          clipPath: "ellipse(75% 100% at 0% 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-xl pt-20 lg:pt-0">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Make Your
            <br />
            <span className="text-accent">Statement</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-md"
          >
            Transform Your Business with signAds Custom Sign and Visual Solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={scrollToContact}
            >
              Get Your Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white bg-transparent hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/portfolio">
                Explore Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20"
          >
            <Link 
              to="/services" 
              className="text-white/70 hover:text-accent transition-colors text-sm font-medium"
            >
              Our Services →
            </Link>
            <Link 
              to="/about" 
              className="text-white/70 hover:text-accent transition-colors text-sm font-medium"
            >
              About Us →
            </Link>
            <Link 
              to="/contact" 
              className="text-white/70 hover:text-accent transition-colors text-sm font-medium"
            >
              Contact →
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
