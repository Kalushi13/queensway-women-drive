import Letterhead from "./Letterhead";
import Footer from "./Footer";
import logo from "@/assets/m2-logo.png";

const CompanyProfile = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Print styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .profile-page { break-after: page; }
          @page { margin: 10mm; size: A4; }
        }
        .profile-page {
          max-width: 210mm;
          margin: 0 auto;
          font-family: 'Barlow', sans-serif;
        }
      `}</style>

      {/* Page 1 */}
      <div className="profile-page bg-white shadow-lg mb-8">
        {/* Letterhead - Logo RIGHT, Info LEFT */}
        <header className="px-10 pt-8 pb-6 border-b-4" style={{ borderColor: 'hsl(330, 65%, 38%)' }}>
          <div className="flex items-center justify-between gap-8">
            <div className="font-body space-y-1" style={{ color: 'hsl(220, 20%, 10%)' }}>
              <p className="font-bold text-lg" style={{ color: 'hsl(220, 25%, 15%)' }}>Ntobeko Mhlana (PTY) Ltd</p>
              <p className="font-semibold text-sm" style={{ color: 'hsl(330, 65%, 38%)' }}>t/a M² Queensway Freight & Logistics</p>
              <p className="text-sm">225 Wagtail Street, Birdwood Estate, North West</p>
              <p className="text-sm font-medium">Reg: 2023/788800/07</p>
              <p className="text-xs mt-1" style={{ color: 'hsl(330, 65%, 38%)' }}>100% Black Women-Owned | Level 1 B-BBEE EME</p>
            </div>
            <img 
              src={logo} 
              alt="M² Queensway Freight & Logistics" 
              className="h-40 w-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </header>

        <main className="px-10 py-6 space-y-5 text-sm" style={{ color: 'hsl(220, 20%, 10%)' }}>
          {/* Title */}
          <div className="text-center py-3">
            <h1 className="text-2xl font-bold uppercase tracking-widest" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(220, 25%, 15%)' }}>
              Company Profile
            </h1>
            <div className="w-24 h-1 mx-auto mt-2" style={{ background: 'linear-gradient(90deg, hsl(330, 65%, 38%), hsl(38, 80%, 50%))' }} />
            <p className="text-xs mt-2" style={{ color: 'hsl(220, 15%, 40%)' }}>February 2026</p>
          </div>

          {/* Company Overview */}
          <section>
            <SectionTitle icon="🔷" title="Company Overview" />
            <p className="text-xs leading-relaxed" style={{ color: 'hsl(220, 20%, 25%)' }}>
              M² Queensway Freight & Logistics (Pty) Ltd is a 100% Black Women-Owned, governance-driven long-haul transport operator delivering safe, compliant and technology-enabled freight solutions across South Africa's major corridors. Our operations are built on disciplined operational systems, advanced fleet visibility, strong ESG performance, and professionalised financial oversight.
            </p>
            <p className="text-xs leading-relaxed mt-2" style={{ color: 'hsl(220, 20%, 25%)' }}>
              With headquarters in the North West and operational reach spanning all major national routes (N1, N3, N4, R21, R511/R512), the company provides high-reliability long-haul services backed by AI-enabled telematics, strict SHEQ governance, and a dual oversight management structure.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-lg border-l-4" style={{ borderColor: 'hsl(330, 65%, 38%)', backgroundColor: 'hsl(330, 65%, 38%, 0.06)' }}>
              <h3 className="font-bold text-sm mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(330, 65%, 38%)' }}>🎯 Mission Statement</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'hsl(220, 20%, 25%)' }}>
                To operate a safety-centred, governance-driven, and technology-enabled long-haul logistics business that delivers consistent, compliant, and reliable freight solutions while contributing to South Africa's economic transformation through women's leadership, job creation, and responsible industrial development.
              </p>
            </div>
            <div className="p-3 rounded-lg border-l-4" style={{ borderColor: 'hsl(38, 80%, 50%)', backgroundColor: 'hsl(38, 80%, 50%, 0.06)' }}>
              <h3 className="font-bold text-sm mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(220, 25%, 15%)' }}>👁️ Vision Statement</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'hsl(220, 20%, 25%)' }}>
                To become a sustainable, scalable, and well-governed logistics operator that sets the benchmark for safety, compliance, visibility, women's empowerment, and operational excellence across South Africa and regional SADC trade corridors.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <SectionTitle icon="💎" title="Strengthened Core Values" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <ValueRow title="Governance & Integrity" desc="Disciplined internal controls, transparent decision-making, dual financial oversight, and compliance with national regulatory requirements." />
              <ValueRow title="Safety & SHEQ Excellence" desc="AI-enabled telematics, driver wellness systems, preventative maintenance, and strict SHEQ adherence." />
              <ValueRow title="Operational Excellence" desc="Structured, predictable, KPI-driven transport services supported by SOPs, route-risk controls, and geofencing." />
              <ValueRow title="Reliability & Accountability" desc="On-time, in-full delivery with full operational visibility and audit-ready documentation." />
              <ValueRow title="Empowerment & Transformation" desc="Advancing women and youth participation through the Women Driver Development Programme." />
              <ValueRow title="Innovation & Technology" desc="Advanced telematics, data-driven insights, AI safety systems and real-time reporting." />
              <ValueRow title="Sustainability & ESG" desc="Environmental stewardship, fair labour practices, ethical leadership aligned with ESG principles." />
            </div>
          </section>

          {/* Services */}
          <section>
            <SectionTitle icon="🚛" title="Services Offered" />
            <div className="grid grid-cols-2 gap-2 text-xs">
              <ServiceItem title="Road Freight Transport" desc="Long-haul & regional across N1, N3, N4, R511, R512." />
              <ServiceItem title="Manganese Transport (Bulk & Bagged)" desc="Run-of-mine, processed ore, bagged concentrates, exports to rail sidings & port corridors." />
              <ServiceItem title="Cross-Border Transport (SADC)" desc="Mozambique, Botswana, Namibia, Zimbabwe, Zambia." />
              <ServiceItem title="FMCG, Retail & Manufacturing" desc="Palletised goods, industrial inputs, commercial cargo." />
              <ServiceItem title="High-Value / Controlled Loads" desc="Sensitive cargo requiring strict governance and risk control." />
              <ServiceItem title="Logistics Planning & Dispatch" desc="Technology-enabled control tower for route optimisation." />
              <ServiceItem title="End-to-End Transport Management" desc="SLA management, POD workflows, telematics analytics, ESG & compliance reporting." />
            </div>
          </section>
        </main>

        {/* Page 1 Footer */}
        <div className="px-10 py-2 text-center">
          <p className="text-[10px]" style={{ color: 'hsl(220, 15%, 50%)' }}>Page 1 of 2</p>
        </div>
      </div>

      {/* Page 2 */}
      <div className="profile-page bg-white shadow-lg mb-8">
        {/* Mini Header */}
        <header className="px-10 pt-6 pb-3 border-b-2 flex items-center justify-between" style={{ borderColor: 'hsl(330, 65%, 38%)' }}>
          <div>
            <p className="font-bold text-sm" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(220, 25%, 15%)' }}>M² Queensway Freight & Logistics</p>
            <p className="text-[10px]" style={{ color: 'hsl(330, 65%, 38%)' }}>Company Profile — February 2026</p>
          </div>
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
        </header>

        <main className="px-10 py-6 space-y-5 text-sm" style={{ color: 'hsl(220, 20%, 10%)' }}>
          {/* Leadership */}
          <section>
            <SectionTitle icon="👩‍💼" title="Leadership Profiles" />
            <div className="grid grid-cols-2 gap-4">
              <LeaderCard
                name="Puleng Mkhatshwa"
                role="Co-Founder & Director"
                subtitle="Strategic Operations, Compliance & SHEQ Lead"
                bio="Governance and operations specialist with 20+ years across UNDP, UN Women, HIVOS, and Oxfam GB. Leads SHEQ systems, operational governance, compliance structures, and driver management framework."
                qualification="Master's Degree in Development Studies"
                strengths={["Transport governance & SHEQ oversight", "Operational systems design", "Contract & SLA management", "Risk assessment & mitigation", "Driver standards & safety protocols", "Gender empowerment leadership"]}
              />
              <LeaderCard
                name="Simangele Mhlana-Maliwa"
                role="Co-Founder & Director"
                subtitle="Chief Financial & Risk Officer"
                bio="Financial governance and risk specialist with deep experience from UNDP, FHI360, US Embassy and AIHA. Leads financial controls, cost modelling, capital planning, insurance, procurement and asset-management frameworks."
                qualification="Master of Business Administration"
                strengths={["Fleet finance & asset lifecycle planning", "Financial governance & audit control", "Cost modelling & pricing strategy", "Insurance, GIT & risk management", "Cash-flow planning & forecasting", "Procurement & supplier negotiation"]}
              />
            </div>
          </section>

          {/* Competitive Advantages */}
          <section>
            <SectionTitle icon="🏆" title="Competitive Advantages" />
            <div className="space-y-2 text-xs">
              <AdvantageItem num="1" title="Advanced AI-Enabled Telematics Ecosystem" desc="Multi-camera AI driver monitoring, real-time tracking, geofencing, fuel analytics and behaviour scoring." />
              <AdvantageItem num="2" title="Strong Governance & Compliance Culture" desc="Governance-embedded operating model with SOPs, compliance registers, dual-control finance processes aligned to NRTA, OHSA." />
              <AdvantageItem num="3" title="SHEQ-Led Operational Discipline" desc="Safety management, incident reporting, preventative maintenance, and structured driver wellness." />
              <AdvantageItem num="4" title="100% Black Women Ownership (Level 1 EME)" desc="135% procurement recognition, strengthening ESD and transformation scoring." />
              <AdvantageItem num="5" title="Strong Financial Controls & Risk Management" desc="Cost-realistic modelling, disciplined budgeting, and transparent reporting ensuring lender trust." />
            </div>
          </section>

          {/* Strategic Corridor */}
          <section className="p-4 rounded-lg border" style={{ borderColor: 'hsl(330, 65%, 38%, 0.3)', background: 'linear-gradient(135deg, hsl(220, 25%, 15%, 0.03), hsl(330, 65%, 38%, 0.05))' }}>
            <h3 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(220, 25%, 15%)' }}>
              📍 Strategic Corridor Positioning
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'hsl(220, 20%, 25%)' }}>
              Based in the North West near the N4, N1, R511 & R512, the company minimises dead mileage and provides rapid access to major national and SADC corridors.
            </p>
          </section>

          {/* Scalable Model */}
          <section className="p-4 rounded-lg border" style={{ borderColor: 'hsl(38, 80%, 50%, 0.3)', background: 'linear-gradient(135deg, hsl(38, 80%, 50%, 0.04), hsl(220, 25%, 15%, 0.03))' }}>
            <h3 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(220, 25%, 15%)' }}>
              📈 Scalable Operational Model
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: 'hsl(220, 20%, 25%)' }}>
              The organisational and governance structure has been designed to scale responsibly—from 3 to 10+ trucks—without compromising safety or compliance.
            </p>
          </section>

          {/* Closing */}
          <section className="text-center py-3 border-t-2" style={{ borderColor: 'hsl(330, 65%, 38%, 0.2)' }}>
            <p className="text-xs italic leading-relaxed max-w-xl mx-auto" style={{ color: 'hsl(220, 20%, 30%)' }}>
              M² Queensway Freight & Logistics offers the perfect blend of strong governance, financial discipline, operational excellence, and industry-aligned capability. We are committed to building a world-class fleet, empowering women in transport, and delivering freight solutions that clients can trust.
            </p>
            <div className="mt-3 flex items-center justify-center gap-4 text-[10px]" style={{ color: 'hsl(220, 15%, 50%)' }}>
              <span>📧 info@m2queensway.co.za</span>
              <span>📞 +27 76 977 7235 / +27 6 333 2383</span>
              <span>🌐 www.m2queensway.co.za</span>
            </div>
          </section>
        </main>

        {/* Page 2 Footer */}
        <div className="py-3" style={{ background: 'linear-gradient(90deg, hsl(220, 25%, 15%), hsl(330, 65%, 38%))' }}>
          <p className="text-center text-[10px] text-white italic" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Driven by Women. Delivered with Excellence.
          </p>
        </div>
      </div>

      {/* Print Button */}
      <div className="no-print text-center pb-10">
        <button
          onClick={() => window.print()}
          className="px-8 py-3 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition"
          style={{ background: 'linear-gradient(90deg, hsl(220, 25%, 15%), hsl(330, 65%, 38%))' }}
        >
          📄 Download / Print as PDF
        </button>
      </div>
    </div>
  );
};

/* Sub-components */
const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-2 mb-2">
    <span>{icon}</span>
    <h3 className="font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(220, 25%, 15%)' }}>{title}</h3>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, hsl(330, 65%, 38%, 0.4), transparent)' }} />
  </div>
);

const ValueRow = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start gap-1.5">
    <span style={{ color: 'hsl(38, 80%, 50%)' }}>⭐</span>
    <div>
      <span className="font-semibold" style={{ color: 'hsl(220, 25%, 15%)' }}>{title}</span>
      <span style={{ color: 'hsl(220, 20%, 30%)' }}> – {desc}</span>
    </div>
  </div>
);

const ServiceItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-2 rounded border-l-3" style={{ borderColor: 'hsl(330, 65%, 38%)', backgroundColor: 'hsl(220, 25%, 15%, 0.03)' }}>
    <p className="font-semibold" style={{ color: 'hsl(220, 25%, 15%)' }}>{title}</p>
    <p style={{ color: 'hsl(220, 20%, 35%)' }}>{desc}</p>
  </div>
);

const LeaderCard = ({ name, role, subtitle, bio, qualification, strengths }: {
  name: string; role: string; subtitle: string; bio: string; qualification: string; strengths: string[];
}) => (
  <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'hsl(220, 15%, 85%)' }}>
    <div className="px-3 py-2" style={{ backgroundColor: 'hsl(220, 25%, 15%)' }}>
      <p className="font-bold text-sm text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>{name}</p>
      <p className="text-[10px]" style={{ color: 'hsl(38, 80%, 50%)' }}>{role}</p>
      <p className="text-[10px] italic text-white/60">{subtitle}</p>
    </div>
    <div className="px-3 py-2 space-y-1.5">
      <p className="text-[11px] leading-relaxed" style={{ color: 'hsl(220, 20%, 25%)' }}>{bio}</p>
      <p className="text-[11px]">
        <span className="font-semibold" style={{ color: 'hsl(220, 25%, 15%)' }}>Qualification: </span>
        <span style={{ color: 'hsl(220, 20%, 30%)' }}>{qualification}</span>
      </p>
      <div>
        <p className="text-[10px] font-semibold mb-1" style={{ color: 'hsl(330, 65%, 38%)' }}>Key Strengths:</p>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[10px]" style={{ color: 'hsl(220, 20%, 30%)' }}>
          {strengths.map((s, i) => (
            <li key={i} className="flex items-start gap-1">
              <span style={{ color: 'hsl(38, 80%, 50%)' }}>•</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const AdvantageItem = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div className="flex items-start gap-2">
    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: 'hsl(330, 65%, 38%)' }}>{num}</span>
    <div>
      <span className="font-semibold" style={{ color: 'hsl(220, 25%, 15%)' }}>{title}</span>
      <span style={{ color: 'hsl(220, 20%, 35%)' }}> — {desc}</span>
    </div>
  </div>
);

export default CompanyProfile;
