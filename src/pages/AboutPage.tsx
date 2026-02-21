import aboutImg from "@/assets/about-convoy.jpg";

const AboutPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src={aboutImg}
                alt="M² Queensway convoy"
                className="w-full h-[420px] object-cover rounded-xl"
              />
            </div>
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-foreground">
                A Governance-Led Logistics Company
              </h2>
              <div className="section-divider" />
              <p className="text-muted-foreground leading-relaxed">
                M² Queensway Freight & Logistics is a governance-led logistics company positioned to deliver safe, compliant and reliable road freight services across South Africa. We have intentionally built our operating model around the needs of corporate procurement and funder due diligence: transparent processes, auditable controls, disciplined safety systems and technology-enabled visibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Level 1 EME, 100% Black Women-Owned enterprise, we strengthen corporate procurement and supplier-diversity outcomes while delivering professional fleet performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <div className="section-divider mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                To deliver reliable, efficient, and innovative freight and logistics services powered by women-led excellence, operational discipline, and a strong commitment to client satisfaction — ensuring safe, timely, and seamless delivery every time.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <div className="section-divider mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                To become Africa's leading women-owned logistics powerhouse — setting new standards of service excellence, advancing women's participation in the transport sector, and driving meaningful economic transformation across the logistics value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplined Scaling */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Disciplined Scaling</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            We scale responsibly — stabilising domestic operations first, then expanding to cross-border corridors in Year 2–3 once systems and capacity are proven. This ensures compliant, safe expansion built on strong operational foundations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
