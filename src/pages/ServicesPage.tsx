import { Truck, Users, BarChart3, Shield, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Domestic Long-Haul Freight",
    tag: "Year 1",
    desc: "Dedicated and scheduled long-haul transport on key national corridors. We prioritise safe delivery, consistent documentation, and real-time visibility.",
  },
  {
    icon: Users,
    title: "Dedicated Fleet Allocation",
    tag: "Contract Logistics",
    desc: "For clients requiring stability, we provide dedicated fleet allocation models with agreed KPIs, reporting cadence, and visibility tools — reducing uncertainty for client supply chains.",
  },
  {
    icon: BarChart3,
    title: "Technology-Enabled Visibility & Reporting",
    tag: "Analytics",
    desc: "Real-time tracking, geofencing, driver behaviour analytics, and fuel variance monitoring. These tools strengthen safety performance and enable timely exception management.",
  },
  {
    icon: Shield,
    title: "Compliance-Led Operations (SHEQ)",
    tag: "Safety",
    desc: "Our SHEQ model integrates pre-trip inspections, driver wellness checks, incident reporting and corrective action processes — reducing compliance breaches and strengthening client confidence.",
  },
  {
    icon: Globe,
    title: "Cross-Border Freight",
    tag: "Year 2–3",
    desc: "Cross-border operations will be introduced after domestic stability and completion of SADC transporter permits, customs readiness and route-risk profiling steps.",
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Our Services</h1>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-xl border border-border p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
                <div className="bg-muted rounded-lg p-4 flex-shrink-0">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                    <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">{service.tag}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
