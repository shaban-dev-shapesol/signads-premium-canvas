import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <BeforeAfter />
        <Industries />
        <Gallery />
        <Testimonials />
      <section id="contact">
        <ContactForm />
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
