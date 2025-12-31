import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-[hsl(220,13%,18%)] rounded-3xl py-16 px-8 md:py-20 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Elevate Your Brand Visibility
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Create memorable experiences with professionally designed signage solutions.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
