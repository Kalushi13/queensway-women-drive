const leaders = [
  {
    name: "Puleng Mkhatshwa",
    role: "Co-Founder | Director: Operations, Compliance & SHEQ",
    bio: "Puleng leads the end-to-end operational delivery of M² Queensway. She is responsible for dispatch governance, route planning, driver management, compliance systems and SHEQ performance. Her role ensures that every trip is executed safely and in line with regulatory requirements, client site rules and documented SOPs. She also oversees telematics-based monitoring, incident escalation and corrective actions to maintain predictable service performance and continuous improvement.",
    responsibilities: [
      "Operational planning and dispatch control",
      "Compliance registers (COF, permits, driver credentials)",
      "Safety and fatigue management",
      "SLA delivery",
      "Audit-ready documentation integrity",
    ],
  },
  {
    name: "Simangele Mhlana-Maliwa",
    role: "Co-Founder | Director: Finance, Risk & Asset Management",
    bio: "Simangele leads the financial governance, risk management and asset lifecycle planning of the business. She is responsible for pricing discipline, budgeting, cashflow oversight, lender reporting readiness, insurance structuring (fleet, GIT, liability), and procurement/supplier negotiations. Her work ensures financial sustainability in a cost-volatile transport environment through robust controls, transparent reporting and disciplined cost management.",
    responsibilities: [
      "Financial controls and management accounts",
      "Asset finance governance",
      "Insurance and claims readiness",
      "Cost modelling (fuel/tolls/tyres/maintenance)",
      "Audit-readiness for funders and corporates",
    ],
  },
];

const LeadershipPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Leadership</h1>
        </div>
      </section>

      {/* Leaders */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="bg-primary p-6">
                <h2 className="font-display text-2xl font-bold text-primary-foreground">{leader.name}</h2>
                <p className="text-secondary font-display text-sm font-semibold mt-1">{leader.role}</p>
              </div>
              <div className="p-8 space-y-5">
                <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                <div>
                  <h3 className="font-display text-sm font-bold text-foreground mb-3">Core Responsibilities</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {leader.responsibilities.map((r) => (
                      <div key={r} className="flex items-start gap-2 text-sm">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span className="text-muted-foreground">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
