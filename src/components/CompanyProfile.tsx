import Letterhead from "./Letterhead";
import SectionHeader from "./SectionHeader";
import ValueItem from "./ValueItem";
import LeadershipCard from "./LeadershipCard";
import ServiceBadge from "./ServiceBadge";
import Footer from "./Footer";

const services = [
  "Road Freight Transport (long haul & regional)",
  "Cross Border Freight Solutions (SADC)",
  "Commercial & Contract Deliveries",
  "Logistics Planning & Coordination",
  "High Value / Controlled Load Handling",
  "End to End Transport Management",
];

const values = [
  { title: "Excellence", description: "We deliver world-class transport solutions that meet and exceed client expectations." },
  { title: "Integrity", description: "Governance, transparency, and ethical conduct form the backbone of our operations." },
  { title: "Empowerment", description: "We are committed to advancing women in transport and logistics." },
  { title: "Innovation", description: "We adopt modern fleet technologies and data-driven systems." },
  { title: "Reliability", description: "Safe, consistent, and dependable service delivery." },
];

const pulengCompetencies = [
  "Transport governance & SHEQ leadership",
  "Operational systems design",
  "Contract & client service delivery",
  "Risk assessment & mitigation",
  "Gender mainstreaming initiatives",
  "Stakeholder management",
];

const simangeleCompetencies = [
  "Fleet finance & asset planning",
  "Financial governance & audit control",
  "Transport cost modelling",
  "Capital planning & forecasting",
  "Supplier negotiation",
  "Regulatory compliance",
];

const advantages = [
  "Women-led governance and operational excellence",
  "Strong financial controls and risk management",
  "Modern fleet readiness with OEM safety technology",
  "High accountability and client-centric execution",
  "Proven ability to manage high-risk, time-sensitive deliveries",
];

const CompanyProfile = () => {
  return (
    <div className="a4-page flex flex-col">
      <Letterhead />
      
      <main className="flex-1 px-8 py-4 space-y-4 text-sm font-body">
        {/* Company Overview */}
        <section>
          <SectionHeader icon="🔷" title="Company Overview" />
          <p className="text-xs leading-relaxed text-foreground/85">
            M² Queensway Freight & Logistics is a proudly women-owned transport and logistics company based in Pretoria, South Africa. We specialise in safe, efficient, and compliant freight solutions for domestic and cross-border markets. Our operations are built on disciplined governance, world-class operational systems, and an unwavering commitment to reliability and customer satisfaction. As a company led by two seasoned governance, financial, and operational specialists, M² Queensway is uniquely positioned to deliver high-performance trucking operations rooted in accountability, strategic execution, and long-term sustainability.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-primary">
            <h3 className="font-display font-bold text-primary text-sm mb-1">🎯 Mission Statement</h3>
            <p className="text-xs text-foreground/80 leading-relaxed">
              To deliver reliable, efficient, and innovative freight and logistics services powered by women-led excellence, operational discipline, and a strong commitment to client satisfaction—ensuring safe, timely, and seamless delivery every time.
            </p>
          </div>
          <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-secondary">
            <h3 className="font-display font-bold text-secondary text-sm mb-1">👁️ Vision Statement</h3>
            <p className="text-xs text-foreground/80 leading-relaxed">
              To become Africa's leading women-owned logistics powerhouse—setting new standards of service excellence, advancing women's participation in the transport sector, and driving meaningful economic transformation across the logistics value chain.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <SectionHeader icon="💎" title="Core Values" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
            {values.map((value, index) => (
              <ValueItem key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <SectionHeader icon="🚛" title="Services Offered" />
          <div className="flex flex-wrap gap-1">
            {services.map((service, index) => (
              <ServiceBadge key={index}>{service}</ServiceBadge>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <SectionHeader icon="👩‍💼" title="Leadership Profiles" />
          <div className="grid grid-cols-2 gap-3">
            <LeadershipCard
              name="Puleng Mkhatshwa"
              title="Co-Founder & Director"
              subtitle="Strategic Operations & Compliance Lead"
              description="A dynamic governance and operations leader with over 20 years of high-level programme and organisational management experience gained through global institutions including UNDP, UN Women, HIVOS, and Oxfam GB."
              qualifications="Master's Degree in Development Studies"
              competencies={pulengCompetencies}
            />
            <LeadershipCard
              name="Simangele Mhlana Maliwa"
              title="Co-Founder & Director"
              subtitle="Chief Financial & Risk Officer"
              description="A highly accomplished financial specialist with deep experience in financial governance, auditing, donor compliance, and risk management across UNDP, FHI360, the US Embassy, and AIHA."
              qualifications="Master of Business Administration"
              competencies={simangeleCompetencies}
            />
          </div>
        </section>

        {/* Competitive Advantages */}
        <section>
          <SectionHeader icon="🏆" title="Competitive Advantages" />
          <div className="grid grid-cols-2 gap-2 text-xs">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span className="text-foreground/85">{advantage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bank/OEM Ready */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/5 p-3 rounded-lg border border-primary/20">
          <h3 className="font-display font-bold text-primary text-sm mb-2 flex items-center gap-2">
            🏦 Bank Ready / OEM Ready
          </h3>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="font-semibold text-secondary mb-1">Corporate Structure</p>
              <ul className="space-y-0.5 text-foreground/80">
                <li>• 100% women-owned</li>
                <li>• SARS, CIPC, UIF, COIDA compliant</li>
                <li>• Strong governance systems</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-secondary mb-1">Operational Strengths</p>
              <ul className="space-y-0.5 text-foreground/80">
                <li>• Scalable fleet management</li>
                <li>• Integrated telematics & AI</li>
                <li>• Structured safety systems</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-secondary mb-1">Financial Strengths</p>
              <ul className="space-y-0.5 text-foreground/80">
                <li>• Strong financial oversight</li>
                <li>• Robust cost tracking</li>
                <li>• Transparent reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center py-2">
          <p className="text-xs text-foreground/80 italic leading-relaxed max-w-3xl mx-auto">
            M² Queensway Freight & Logistics offers the perfect blend of strong governance, financial discipline, operational excellence, and industry-aligned capability. We are committed to building a world-class fleet, empowering women in transport, and delivering freight solutions that clients can trust.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyProfile;
