import { Link } from "react-router-dom";
import { Shield, Truck, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-trucks.jpg";

const stats = [
  { value: "100%", label: "Black Women-Owned" },
  { value: "Level 1", label: "EME B-BBEE" },
  { value: "24/7", label: "Operations" },
  { value: "SHEQ", label: "Driven Safety" },
];

const whyCards = [
  {
    icon: Shield,
    title: "Governance-Embedded Operations",
    desc: "Documented SOPs, clear decision rights, and auditable controls — every trip managed transparently and predictably.",
  },
  {
    icon: CheckCircle,
    title: "SHEQ-Driven Safety Culture",
    desc: "Pre-trip inspections, fatigue management, incident reporting and corrective actions integrated into daily operations.",
  },
  {
    icon: BarChart3,
    title: "Technology-Enabled Fleet",
    desc: "AI telematics, geofencing, route tracking and fuel analytics for real-time visibility and proactive coaching.",
  },
  {
    icon: Truck,
    title: "Procurement-Ready Transformation",
    desc: "Level 1 EME, 100% Black Women-Owned — strengthening corporate procurement and supplier-diversity outcomes.",
  },
];

const howWeWork = [
  { step: "01", title: "Onboard & Verify", desc: "Compliance pack, insurance, safety file, SOP alignment" },
  { step: "02", title: "Plan & Dispatch", desc: "Route plan, risk check, pre-trip inspection, document pack" },
  { step: "03", title: "Track & Communicate", desc: "Live tracking, ETA updates, exception alerts" },
  { step: "04", title: "Deliver & Report", desc: "POD turnaround, KPI report, incident log" },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[600px] h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="M² Queensway freight fleet" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl space-y-6">
            <p className="text-secondary font-display text-sm font-semibold tracking-wide">
              100% Black Women-Owned Transport Operator
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight">
              Compliance-Led Freight.
              <br />
              <span className="text-secondary">Delivered with Precision.</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body max-w-xl leading-relaxed">
              Safe, compliant, technology-enabled long-haul services across South Africa, with audit-ready systems designed for corporate procurement and development finance expectations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Request a Proposal
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-display text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-secondary">{stat.value}</p>
              <p className="text-xs tracking-wide text-primary-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why M² Queensway */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Professional SME with Big-Company Governance
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-card rounded-xl border border-border p-7 hover:shadow-md transition-shadow">
                <card.icon className="w-9 h-9 text-secondary mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">How We Work</h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {howWeWork.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Receive */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              What Clients Receive From Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Audit-ready documentation packs",
                "Telematics visibility and route compliance reporting",
                "SHEQ-aligned operational discipline",
                "Clear escalation and incident response protocols",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card rounded-lg border border-border p-4">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-display text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="bg-primary py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            M² Queensway Freight & Logistics | 100% Black Women-Owned | Level 1 EME
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Hartebees, North West | info@m2queensway.co.za | 079 977 7235
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
