import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Signad - Premium Business Signage & Vehicle Branding Solutions"
        description="Professional signage solutions, vehicle branding, and large format printing for ambitious businesses. Quality craftsmanship with express service across the UK."
      />
      <Navigation />
      <main>
        <Hero />
        <WhyChooseUs />
        <AboutSection />
        <Services />
        <BeforeAfter />
        <Industries />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
