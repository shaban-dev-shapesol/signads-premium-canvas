import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="signAds - Premium Business Signage & Vehicle Wrapping Solutions"
        description="Masterful signage solutions, vehicle wraps, and large format printing for ambitious businesses. Quality craftsmanship with express service across the UK."
      />
      <Navigation />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <BeforeAfter />
        <Industries />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
