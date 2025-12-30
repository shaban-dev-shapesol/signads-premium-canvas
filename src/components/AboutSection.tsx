import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, BadgeCheck } from "lucide-react";

// Import images from gallery
import signImage1 from "@/assets/gallery/exterior-3d-letters-1.jpg";
import signImage2 from "@/assets/gallery/exterior-fascia-tray-1.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Decorative Circle */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-muted/50 -z-10" />
            
            {/* Image Grid */}
            <div className="relative flex gap-4">
              {/* First Image - Lower Left */}
              <div className="w-[55%] mt-20 relative z-10">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={signImage1} 
                    alt="3D illuminated signage installation"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
              
              {/* Second Image - Upper Right */}
              <div className="w-[50%] -mt-4">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={signImage2} 
                    alt="Fascia signage for storefront"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Label */}
            <span className="text-muted-foreground uppercase tracking-widest text-sm font-medium">
              What We Do
            </span>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Experienced Sign and Graphic Professionals
            </h2>
            
            {/* Orange Accent Line */}
            <div className="w-12 h-1 bg-primary mb-6" />
            
            {/* Description */}
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              We story-tell through creative concepts and provide all kinds of signs for the most recognized brands across the UK.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 15 years of experience in design, manufacture & installation, signAds has established itself as a <span className="text-foreground font-medium underline underline-offset-4">hand-crafted signage</span> studio delivering high-quality indoor & outdoor signage solutions.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-8 mb-8">
              {/* Certified Studio */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Certified Studio</h4>
                  <p className="text-muted-foreground text-sm">Verified professionals<br />For 15+ years!</p>
                </div>
              </div>

              {/* Award */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Award Winning</h4>
                  <p className="text-muted-foreground text-sm">Recognized for best sign<br />and graphic work</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/about">
              <Button variant="default" size="lg" className="uppercase tracking-wide font-semibold">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
