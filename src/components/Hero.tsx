import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-signage-premium.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      <div className="container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full py-24 lg:py-0">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Where Vision
              <br />
              <span className="text-accent">Takes Form:</span>
              <br />
              Innovative Sign Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-lg"
            >
              Unlocking Design Potential for Every Surface and Space.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                asChild
              >
                <Link to="/portfolio">
                  View Our Creative Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-xl lg:max-w-none">
              <img
                src={heroImage}
                alt="Premium signage solutions"
                className="w-full h-full object-cover rounded-2xl shadow-premium"
              />
              {/* Decorative accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-2xl -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
