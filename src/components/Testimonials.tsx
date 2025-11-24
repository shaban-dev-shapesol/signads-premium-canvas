import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "signAds transformed our brand presence with stunning exterior signage. The quality and attention to detail exceeded our expectations. Our foot traffic increased by 40% within the first month.",
      author: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechFlow Solutions",
    },
    {
      quote: "The vehicle wrap campaign they executed for our fleet was outstanding. Professional service from concept to installation, and the results speak for themselves with increased brand awareness.",
      author: "James Peterson",
      role: "Operations Manager",
      company: "Swift Logistics",
    },
    {
      quote: "Working with signAds on our office interior signage was seamless. Their dedicated account manager made the entire process effortless, delivering results that perfectly matched our vision.",
      author: "Emily Chen",
      role: "Facilities Director",
      company: "Global Finance Corp",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-premium hover:shadow-glow transition-smooth relative"
            >
              <Quote className="w-12 h-12 text-accent/20 mb-6" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-accent font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
