import aboutImg from "@/assets/about-convoy.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="M² Queensway convoy on African highway"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary p-6 hidden md:block">
              <p className="font-display text-3xl font-bold text-secondary-foreground">100%</p>
              <p className="text-xs uppercase tracking-widest text-secondary-foreground/80">Black Women-Owned</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="font-display text-sm tracking-[0.3em] text-secondary uppercase">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Governance-Driven.
              <br />
              <span className="text-secondary">Technology-Enabled.</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground leading-relaxed">
              M² Queensway Freight & Logistics (Pty) Ltd is a 100% Black Women-Owned, governance-driven long-haul transport operator delivering safe, compliant and technology-enabled freight solutions across South Africa's major corridors. Our operations are built on disciplined operational systems, advanced fleet visibility, strong ESG performance, and professionalised financial oversight.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With headquarters in the North West and operational reach spanning all major national routes (N1, N3, N4, R21, R511/R512), we provide high-reliability long-haul services backed by AI-enabled telematics, strict SHEQ governance, and a dual oversight management structure — positioning M² Queensway as a low-risk, high-performance logistics partner.
            </p>

            {/* Manganese Highlight */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-secondary/20 via-secondary/10 to-accent/20 border border-secondary/30 p-5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-secondary">Mn</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold tracking-wide text-foreground uppercase">Now Transporting Manganese</p>
                  <p className="text-sm text-muted-foreground mt-1">Bulk & bagged manganese ore — run-of-mine, processed ore, concentrates, and exports to rail sidings & port corridors.</p>
                </div>
              </div>
            </div>

            {/* Mission / Vision */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To operate a safety-centred, governance-driven, and technology-enabled long-haul logistics business that delivers consistent, compliant, and reliable freight solutions.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become a sustainable, scalable, and well-governed logistics operator that sets the benchmark for safety, compliance, and women's empowerment across South Africa and SADC corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
