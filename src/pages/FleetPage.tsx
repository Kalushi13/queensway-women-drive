import { Cpu, MapPin, Fuel, Radio } from "lucide-react";

const FleetPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Our Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Fleet & Technology</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            Our fleet management approach is built for high-visibility logistics. Each vehicle is equipped with modern telematics to monitor location, route adherence, driver behaviour and safety events. These tools allow proactive intervention, reduce fuel inefficiencies, and support accurate ETA communication.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-card rounded-xl border border-border p-7">
              <Cpu className="w-9 h-9 text-secondary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">AI Telematics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advanced AI-powered telematics for driver behaviour analysis, proactive coaching, and predictive incident prevention.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-7">
              <MapPin className="w-9 h-9 text-secondary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Geofencing & Route Tracking</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real-time geofencing and route compliance monitoring with automated alerts for deviations and ETA updates.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-7">
              <Fuel className="w-9 h-9 text-secondary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Fuel Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fuel variance monitoring and cost analytics to reduce inefficiencies and support better cost control.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-7">
              <Radio className="w-9 h-9 text-secondary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Support Vehicle</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A dedicated support vehicle for operational continuity, document delivery, and incident response coordination on key corridors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;
