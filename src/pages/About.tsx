import { Award, Users, Target, Zap, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Premium materials, expert craftsmanship, and meticulous attention to detail in every project."
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Fast turnaround times without sacrificing quality. We understand your business needs timely solutions."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent delivery, clear communication, and support that extends beyond installation. We're here for the long term."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success. Dedicated account managers and personalized service for every project."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by yours. Every solution is designed to drive business outcomes and ROI."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Decades of combined experience across design, manufacturing, and installation. Industry-leading expertise you can trust."
    },
  ];

  const stats = [
    { number: "6+", label: "Years in Business" },
    { number: "30+", label: "Years Industry Experience" },
    { number: "1000+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "10+", label: "Team Members" },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We start by understanding your needs, goals, and challenges. Free site surveys and expert advice."
    },
    {
      step: "02",
      title: "Design & Quote",
      description: "Our design team creates solutions tailored to your brand. Transparent pricing with no hidden costs."
    },
    {
      step: "03",
      title: "Production",
      description: "State-of-the-art manufacturing with quality checks at every stage. Premium materials and finishes."
    },
    {
      step: "04",
      title: "Installation",
      description: "Professional installation by certified technicians. Minimal disruption, maximum impact."
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing support, maintenance services, and warranty protection. We're with you for the long run."
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Signad - 30+ Years of Industry Experience"
        description="Discover Signad's story of quality craftsmanship, expert installation, and dedicated service. Trusted by 1000+ businesses across the UK for premium signage solutions."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-accent">Signad</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Since 2020, we've been helping businesses across the UK make powerful first impressions 
              with premium signage solutions. With over 30 years of combined industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Founded in 2020, Signad began with a simple mission: to provide businesses with signage 
                solutions that don't just look good, but drive real results. With over 30 years of combined 
                industry experience, our team brings unmatched expertise to every project.
              </p>
              <p>
                We've built our reputation on three pillars: uncompromising quality, exceptional service, 
                and a deep understanding of how effective signage contributes to business success. Every 
                project, whether it's a single shop sign or a complete corporate rebrand, receives the same 
                level of attention and expertise.
              </p>
              <p>
                Today, we're proud to serve clients across retail, corporate, healthcare, education, and 
                hospitality sectors from our base in Liverpool. Our facility combines traditional craftsmanship with 
                cutting-edge technology, enabling us to deliver projects of any scale and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every decision and drive our commitment to excellence.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border p-8 rounded-2xl hover:shadow-premium transition-smooth"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-primary-foreground/80">
              A proven approach that ensures exceptional results, every time.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 rounded-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to elevate your brand with premium signage? Get in touch today.
            </p>
            <Link to="/contact">
              <Button variant="premium" size="xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
