import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, MapPin, Palette } from "lucide-react";

// Import images from gallery
import signImage1 from "@/assets/gallery/interior-reception-1.jpg";
import signImage2 from "@/assets/gallery/vehicle-van-wrap-1.jpg";

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
                    alt="Modern reception signage installation"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                {/* Stats Badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-3xl font-bold">1000+</p>
                  <p className="text-sm opacity-90">Projects Completed</p>
                </div>
              </div>
              
              {/* Second Image - Upper Right */}
              <div className="w-[50%] -mt-4">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={signImage2} 
                    alt="Professional vehicle wrap graphics"
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
              Crafting Visual Identity Since 2020
            </h2>
            
            {/* Orange Accent Line */}
            <div className="w-12 h-1 bg-primary mb-6" />
            
            {/* Description */}
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              From concept to installation, we handle every step of your signage journey. Our end-to-end process ensures seamless delivery of <span className="text-foreground font-medium underline underline-offset-4">custom-crafted signs</span> that elevate your brand.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Design. Manufacture. Install. With 50+ brand partnerships and a dedicated in-house team, we transform spaces across the UK with precision and creativity.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-6 mb-8">
              {/* 24/7 Support */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">24/7 Support</h4>
                  <p className="text-muted-foreground text-sm">Always here when<br />you need us</p>
                </div>
              </div>

              {/* UK-Wide Installation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">UK-Wide</h4>
                  <p className="text-muted-foreground text-sm">Installation services<br />across Britain</p>
                </div>
              </div>

              {/* Free Design Consultation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Free Consultation</h4>
                  <p className="text-muted-foreground text-sm">Expert design advice<br />at no cost</p>
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
