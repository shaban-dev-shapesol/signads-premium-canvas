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

      {/* Business Hours Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business <span className="text-accent">Hours</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us during our opening hours or schedule an appointment
            </p>
          </div>
          <div className="max-w-md mx-auto bg-card rounded-2xl border border-border p-8 shadow-lg">
            <div className="space-y-4">
              {[
                { day: "Monday", hours: "9:00 AM - 6:00 PM" },
                { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
                { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
                { day: "Friday", hours: "9:00 AM - 6:00 PM" },
                { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="font-medium">{item.day}</span>
                  <span className={item.hours === "Closed" ? "text-destructive" : "text-accent"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find <span className="text-accent">Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our showroom to see our signage solutions in person
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5424813697714!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1699900000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="signAds Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
