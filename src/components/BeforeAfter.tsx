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
import windowBefore from "@/assets/before-after/window-before.jpg";
import windowAfter from "@/assets/before-after/window-after.jpg";
import digitalBefore from "@/assets/before-after/digital-before.jpg";
import digitalAfter from "@/assets/before-after/digital-after.jpg";
import exhibitionBefore from "@/assets/before-after/exhibition-before.jpg";
import exhibitionAfter from "@/assets/before-after/exhibition-after.jpg";
import lightboxBefore from "@/assets/before-after/lightbox-before.jpg";
import lightboxAfter from "@/assets/before-after/lightbox-after.jpg";
import neonBefore from "@/assets/before-after/neon-before.jpg";
import neonAfter from "@/assets/before-after/neon-after.jpg";

const BeforeAfter = () => {
  const [activeSlider, setActiveSlider] = useState<number | null>(null);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50,
    8: 50,
  });

  const comparisons = [
    {
      title: "Retail Storefront",
      before: storefrontBefore,
      after: storefrontAfter,
      category: "Exterior Signage",
      description: "Illuminated fascia signage transforms visibility",
    },
    {
      title: "Corporate Reception",
      before: receptionBefore,
      after: receptionAfter,
      category: "Interior Signage",
      description: "Blank walls become powerful brand statements",
    },
    {
      title: "Vehicle Wrap",
      before: vehicleBefore,
      after: vehicleAfter,
      category: "Vehicle Graphics",
      description: "Transform your fleet into mobile billboards",
    },
    {
      title: "Restaurant Ambiance",
      before: restaurantBefore,
      after: restaurantAfter,
      category: "Interior Signage",
      description: "Custom neon creates memorable experiences",
    },
    {
      title: "Window Graphics",
      before: windowBefore,
      after: windowAfter,
      category: "Print Signage",
      description: "Turn blank glass into eye-catching displays",
    },
    {
      title: "Digital Signage",
      before: digitalBefore,
      after: digitalAfter,
      category: "Digital Display",
      description: "Dynamic content captures attention 24/7",
    },
    {
      title: "Exhibition Display",
      before: exhibitionBefore,
      after: exhibitionAfter,
      category: "Exhibition",
      description: "Stand out at trade shows with custom booths",
    },
    {
      title: "Light Box Signage",
      before: lightboxBefore,
      after: lightboxAfter,
      category: "Illuminated Signs",
      description: "Glowing signage creates stunning night impact",
    },
    {
      title: "Neon Signs",
      before: neonBefore,
      after: neonAfter,
      category: "Interior Signage",
      description: "LED neon adds character and atmosphere",
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

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden shadow-premium hover:shadow-glow transition-smooth"
            >
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-premium">
                      <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-foreground">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                    After
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-accent text-xs font-semibold mb-2 block">
                  {comparison.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {comparison.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {comparison.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
