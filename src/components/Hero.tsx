import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-signage-premium.jpg";
const Hero = () => {
  const stats = [
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Clock,
      value: "24hr",
      label: "Express Service",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Happy Clients",
    },
  ];
  const features = [
    "Premium Quality Materials",
    "Express 24hr Service Available",
    "Expert Installation Team",
    "Dedicated Account Manager",
  ];

  // Set to null to use image fallback, or provide video URL
  const heroVideoUrl = null;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-20">
      {/* Video or Image Background */}
      {heroVideoUrl ? (
        <motion.div
          initial={{
            scale: 1.1,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0 z-0"
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        </motion.div>
      ) : (
        <motion.div
          initial={{
            scale: 1.1,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />

      {/* Decorative accent glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-[2]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Award-Winning Signage Solutions</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="text-5xl md:text-6xl xl:text-5xl font-bold text-white leading-[1.1]"
            >
              Elevate Your Brand
              <br />
              <span className="text-accent">with Stunning Signage</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl"
            >
              From eye-catching exterior signs to dynamic vehicle wraps — we deliver premium signage solutions that
              transform your business visibility.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9 + index * 0.1,
                  }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button variant="hero" size="xl" className="group shadow-glow">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
