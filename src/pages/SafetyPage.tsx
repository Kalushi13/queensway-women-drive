import { Shield, FileCheck, Leaf, CheckCircle } from "lucide-react";

const onboardingDocs = [
  "Fleet compliance documentation (COFs, licences, permits)",
  "Driver compliance files (PDPs, medicals, training)",
  "Insurance schedules (fleet + goods-in-transit as required)",
  "Incident reporting and corrective-action process overview",
  "ESG Fact Sheet and ESG registers (where required)",
];

const SafetyPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Safety & Governance</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Safety, Compliance & ESG</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            M² Queensway operates a SHEQ-driven model that integrates safety, driver wellness, environmental responsibility and quality control into daily operations. Our compliance environment includes documented SOPs, audit-ready records, and telematics monitoring to reduce incident risk and increase transparency for clients.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Safety</h3>
              <p className="text-sm text-muted-foreground">Pre-trip inspections, fatigue management, incident escalation</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <FileCheck className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">Compliance</h3>
              <p className="text-sm text-muted-foreground">Documented SOPs, audit-ready records, corrective actions</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <Leaf className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">ESG</h3>
              <p className="text-sm text-muted-foreground">Environmental responsibility, social governance, quality controls</p>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            What We Provide During Onboarding
          </h2>
          <div className="space-y-3">
            {onboardingDocs.map((doc) => (
              <div key={doc} className="flex items-start gap-3 bg-card rounded-lg border border-border p-4">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;
