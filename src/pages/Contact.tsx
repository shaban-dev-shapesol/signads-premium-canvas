import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your brand visibility? Contact our team for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
