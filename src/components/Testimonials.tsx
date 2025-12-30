import { useState, useRef, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const testimonials = [
    {
      quote: "signAds transformed our brand presence with stunning exterior signage. The quality and attention to detail exceeded our expectations. Our foot traffic increased by 40% within the first month.",
      author: "Sarah Mitchell",
      timeAgo: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "The vehicle wrap campaign they executed for our fleet was outstanding. Professional service from concept to installation, and the results speak for themselves with increased brand awareness.",
      author: "James Peterson",
      timeAgo: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "Working with signAds on our office interior signage was seamless. Their dedicated account manager made the entire process effortless, delivering results that perfectly matched our vision.",
      author: "Emily Chen",
      timeAgo: "3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "Exceptional quality and service! The neon signs they created for our restaurant have become a landmark. Customers constantly compliment the atmosphere they create.",
      author: "David Roberts",
      timeAgo: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      quote: "From design consultation to final installation, the signAds team was professional and creative. Our exhibition stand was the talk of the trade show. Highly recommend!",
      author: "Lisa Thompson",
      timeAgo: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const updateScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollProgress);
      updateScrollProgress();
      return () => container.removeEventListener("scroll", updateScrollProgress);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left Side - Title & Navigation */}
          <div className="lg:sticky lg:top-32">
            {/* Large Quote Icon */}
            <Quote className="w-16 h-16 text-primary mb-6 fill-primary" />
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              What our clients are saying
            </h2>
            
            {/* Navigation Slider */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex-1 h-0.5 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-foreground rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(10, scrollProgress)}%` }}
                />
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Scrollable Testimonials */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[350px] bg-card p-8 rounded-2xl shadow-sm snap-start"
              >
                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed text-base">
                  {testimonial.quote}
                </p>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.timeAgo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
