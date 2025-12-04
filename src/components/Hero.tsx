import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-3d-illuminated.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient circle - top right - with pulse */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 animate-pulse"
        />
        {/* Medium circle outline - left - with glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1], opacity: [0, 0.1, 0.2, 0.1] }}
          transition={{ duration: 3, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 -left-24 w-[350px] h-[350px] rounded-full border border-accent/30"
          style={{ boxShadow: '0 0 60px hsl(var(--accent) / 0.15)' }}
        />
        {/* Small filled circle - bottom left - with pulse glow */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
          className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-accent/20"
          style={{ boxShadow: '0 0 30px hsl(var(--accent) / 0.2)' }}
        />
        {/* Tiny dot accent - pulsing */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, delay: 0.8, repeat: Infinity }}
          className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-accent/40"
          style={{ boxShadow: '0 0 15px hsl(var(--accent) / 0.5)' }}
        />
        {/* Horizontal line - subtle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 left-0 w-1/3 h-[1px] bg-gradient-to-r from-accent/20 to-transparent origin-left"
        />
        {/* Diagonal line - bottom right */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-1/4 right-0 w-1/4 h-[1px] bg-gradient-to-l from-accent/15 to-transparent origin-right"
        />
        {/* Rotating ring - center right */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full border border-dashed border-accent/20"
        />
        {/* Diamond shape - top left */}
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-20 left-20 w-16 h-16 border border-accent/15 bg-accent/5"
        />
        {/* Floating dots cluster - right side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/3 right-16 flex flex-col gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-accent/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/20 ml-4" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/25 ml-1" />
        </motion.div>
        {/* Arc line - bottom */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <svg width="300" height="100" viewBox="0 0 300 100" fill="none">
            <motion.path
              d="M0 100 Q150 0 300 100"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </motion.div>
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
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
