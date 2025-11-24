import { useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import storefrontBefore from "@/assets/before-after/storefront-before.jpg";
import storefrontAfter from "@/assets/before-after/storefront-after.jpg";
import receptionBefore from "@/assets/before-after/reception-before.jpg";
import receptionAfter from "@/assets/before-after/reception-after.jpg";
import vehicleBefore from "@/assets/before-after/vehicle-before.jpg";
import vehicleAfter from "@/assets/before-after/vehicle-after.jpg";
import restaurantBefore from "@/assets/before-after/restaurant-before.jpg";
import restaurantAfter from "@/assets/before-after/restaurant-after.jpg";

const BeforeAfter = () => {
  const [activeSlider, setActiveSlider] = useState<number | null>(null);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({
    0: 50,
    1: 50,
    2: 50,
    3: 50,
  });

  const comparisons = [
    {
      title: "Retail Storefront Transformation",
      before: storefrontBefore,
      after: storefrontAfter,
      category: "Exterior Signage",
      description: "From invisible to unmissable with illuminated fascia signage",
    },
    {
      title: "Corporate Reception Upgrade",
      before: receptionBefore,
      after: receptionAfter,
      category: "Interior Signage",
      description: "Transforming blank walls into powerful brand statements",
    },
    {
      title: "Vehicle Wrap Impact",
      before: vehicleBefore,
      after: vehicleAfter,
      category: "Vehicle Graphics",
      description: "Turn your fleet into mobile billboards generating thousands of daily impressions",
    },
    {
      title: "Restaurant Ambiance Enhancement",
      before: restaurantBefore,
      after: restaurantAfter,
      category: "Interior Signage",
      description: "Creating memorable dining experiences with custom neon signage",
    },
  ];

  const handleSliderMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPositions((prev) => ({
      ...prev,
      [index]: Math.max(0, Math.min(100, percentage)),
    }));
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Transformation Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See The <span className="text-accent">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the dramatic impact of professional signage. Move the slider to compare before and after transformations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl overflow-hidden shadow-premium hover:shadow-glow transition-smooth"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before/After Slider */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <div
                    className="absolute inset-0 cursor-ew-resize"
                    onMouseMove={(e) => handleSliderMove(index, e)}
                    onMouseDown={() => setActiveSlider(index)}
                    onMouseUp={() => setActiveSlider(null)}
                    onMouseLeave={() => setActiveSlider(null)}
                  >
                    {/* After Image (background) */}
                    <img
                      src={comparison.after}
                      alt={`${comparison.title} - After`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Before Image (with clip path) */}
                    <div
                      className="absolute inset-0 overflow-hidden transition-all duration-100"
                      style={{
                        clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                      }}
                    >
                      <img
                        src={comparison.before}
                        alt={`${comparison.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Slider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-accent shadow-glow cursor-ew-resize z-10"
                      style={{ left: `${sliderPositions[index]}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-premium">
                        <ArrowLeftRight className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-foreground">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-foreground">
                      After
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-accent text-sm font-semibold mb-3">
                    {comparison.category}
                  </span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {comparison.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {comparison.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/#contact">
                      <Button variant="default" size="lg">
                        Get Your Quote
                      </Button>
                    </Link>
                    <Link to="/portfolio">
                      <Button variant="outline" size="lg">
                        View More Projects
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary text-primary-foreground p-12 rounded-2xl animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let our expert team help you create signage that makes a lasting impact on your business.
          </p>
          <Link to="/#contact">
            <Button variant="hero" size="xl">
              Start Your Transformation Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
