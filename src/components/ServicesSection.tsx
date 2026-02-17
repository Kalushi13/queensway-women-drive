import { Truck, Globe, Package, Shield, BarChart3, Clock } from "lucide-react";
import servicesImg from "@/assets/services-warehouse.jpg";

const services = [
  { icon: Truck, title: "Road Freight Transport", desc: "Long haul and regional freight across South Africa" },
  { icon: Globe, title: "Cross Border Solutions", desc: "SADC-wide freight logistics and border management" },
  { icon: Package, title: "Contract Deliveries", desc: "Commercial and contract-based delivery services" },
  { icon: BarChart3, title: "Logistics Planning", desc: "End-to-end logistics coordination and planning" },
  { icon: Shield, title: "High Value Loads", desc: "Controlled and high-value cargo handling" },
  { icon: Clock, title: "Transport Management", desc: "Full transport lifecycle management" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-accent uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 p-6 hover:bg-secondary/20 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Full width image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={servicesImg} alt="Warehouse operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
