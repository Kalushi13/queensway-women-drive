const LeadershipSection = () => {
  const leaders = [
    {
      name: "Puleng Mkhatshwa",
      role: "Co-Founder & Director",
      subtitle: "Strategic Operations, Compliance & SHEQ Lead",
      bio: "Puleng is a governance and operations specialist with 20+ years of experience in programme management, compliance, and institutional strengthening across global organisations including UNDP, UN Women, HIVOS, and Oxfam GB. She leads the company's SHEQ systems, operational governance, compliance structures, and driver management framework.",
      qualification: "Master's Degree in Development Studies",
      skills: ["Transport governance & SHEQ oversight", "Operational systems design", "Contract & SLA management", "Risk assessment & mitigation", "Driver standards & safety protocols", "Gender empowerment leadership"],
    },
    {
      name: "Simangele Mhlana-Maliwa",
      role: "Co-Founder & Director",
      subtitle: "Chief Financial & Risk Officer",
      bio: "Simangele is a financial governance and risk specialist with deep experience gained from UNDP, FHI360, the US Embassy and AIHA. She leads the company's financial controls, cost modelling, capital planning, insurance, procurement and asset-management frameworks.",
      qualification: "Master of Business Administration",
      skills: ["Fleet finance & asset lifecycle planning", "Financial governance & audit control", "Cost modelling & pricing strategy", "Insurance, GIT & risk management", "Cash-flow planning & forecasting", "Procurement & supplier negotiation"],
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-secondary uppercase mb-3">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
            Women-Led <span className="text-secondary">Leadership</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-card border border-border overflow-hidden group">
              <div className="bg-primary p-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{leader.name}</h3>
                <p className="text-accent font-display text-sm tracking-wider mt-1">{leader.role}</p>
                <p className="text-primary-foreground/60 text-xs italic mt-1">{leader.subtitle}</p>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{leader.bio}</p>
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Qualification</p>
                  <p className="font-display text-sm font-bold text-foreground">{leader.qualification}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Strengths</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-muted text-muted-foreground text-xs px-3 py-1 border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
