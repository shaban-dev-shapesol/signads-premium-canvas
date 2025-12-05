import { Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import vehicleCar from "@/assets/gallery/vehicle-car-wrap-1.jpg";
import vehicleVan from "@/assets/gallery/vehicle-van-wrap-1.jpg";
import vehicleTruck from "@/assets/gallery/vehicle-truck-wrap-1.jpg";
import vehicleFoodTruck from "@/assets/gallery/vehicle-food-truck-1.jpg";
import vehicleLorry from "@/assets/gallery/vehicle-lorry-wrap-1.jpg";
import vehicleBus from "@/assets/gallery/vehicle-bus-wrap-1.jpg";

const VehicleGraphics = () => {
  const services = [
    {
      title: "Car Wrap",
      description: "Transform your vehicle into a mobile billboard.",
      image: vehicleCar,
      link: "/services/vehicle-graphics/car-wrap",
    },
    {
      title: "Van Wrap",
      description: "Full and partial wrap options for commercial vans.",
      image: vehicleVan,
      link: "/services/vehicle-graphics/van-wrap",
    },
    {
      title: "Truck Wrap",
      description: "Large-format wraps for trucks and commercial vehicles.",
      image: vehicleTruck,
      link: "/services/vehicle-graphics/truck-wrap",
    },
    {
      title: "Food Truck Wrap",
      description: "Eye-catching designs that attract customers.",
      image: vehicleFoodTruck,
      link: "/services/vehicle-graphics/food-truck-wrap",
    },
    {
      title: "Lorry & HGV Wrap",
      description: "Heavy goods vehicle wraps for maximum exposure.",
      image: vehicleLorry,
      link: "/services/vehicle-graphics/lorry-hgv-wrap",
    },
    {
      title: "Bus Wrap",
      description: "Full bus wraps for transit and tour operators.",
      image: vehicleBus,
      link: "/services/vehicle-graphics/bus-wrap",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vehicle Graphics - Car, Van, Truck & Fleet Wraps"
        description="Professional vehicle wraps for cars, vans, trucks, and fleets. Premium 3M and Avery vinyl with 5-7 year durability. Mobile advertising that works."
      />
      <Navigation />
      
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vehicle <span className="text-accent">Graphics</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Transform your fleet into mobile billboards that generate thousands of impressions daily.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="xl">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-premium transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 bg-primary text-primary-foreground p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Turn Your Fleet into Marketing Assets</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Professional vehicle wraps that protect your investment while promoting your brand.
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleGraphics;
