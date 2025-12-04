import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-signage-premium.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Abstract Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle element */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-accent"
        />
        {/* Medium circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/2 -left-20 w-[400px] h-[400px] rounded-full bg-accent/10"
        />
        {/* Small decorative circles */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-40 right-1/4 w-4 h-4 rounded-full bg-accent"
        />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full border border-accent"
        />
        {/* Diagonal lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent origin-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8 max-w-5xl"
        >
          Where Vision
          <br />
          <span className="text-accent">Takes Form:</span>
          <br />
          <span className="text-white/90">Innovative Sign Solutions</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-2xl font-light tracking-wide"
        >
          Unlocking Design Potential for Every Surface and Space.
        </motion.p>

        {/* Circular CTA Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
        >
          <Link
            to="/portfolio"
            className="group relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-center hover:shadow-glow transition-all duration-500 hover:scale-110"
          >
            <span className="flex flex-col items-center gap-1 px-4">
              <span className="text-sm md:text-base leading-tight">View Our</span>
              <span className="text-sm md:text-base leading-tight">Creative</span>
              <span className="text-sm md:text-base leading-tight">Portfolio</span>
              <ArrowRight className="mt-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/30"
            />
          </Link>
        </motion.div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/40 text-sm tracking-widest uppercase"
        >
          <span className="w-12 h-[1px] bg-white/30" />
          <span>Scroll to Explore</span>
          <span className="w-12 h-[1px] bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
