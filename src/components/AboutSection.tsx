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
              <p className="text-xs uppercase tracking-widest text-secondary-foreground/80">Women-Owned & Driven</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="font-display text-sm tracking-[0.3em] text-secondary uppercase">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Built on Governance.
              <br />
              Powered by <span className="text-secondary">Excellence.</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground leading-relaxed">
              M² Queensway Freight & Logistics is a proudly women-owned transport and logistics company based in Pretoria, South Africa. We specialise in safe, efficient, and compliant freight solutions for domestic and cross-border markets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our operations are built on disciplined governance, world-class operational systems, and an unwavering commitment to reliability and customer satisfaction. Led by two seasoned governance, financial, and operational specialists, we deliver high-performance trucking rooted in accountability and long-term sustainability.
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
                  <p className="text-sm text-muted-foreground mt-1">Specialised bulk haulage of manganese ore — handled with precision, compliance, and care.</p>
                </div>
              </div>
            </div>

            {/* Mission / Vision */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To deliver reliable, innovative freight services powered by women-led excellence and operational discipline.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become Africa's leading women-owned logistics powerhouse — setting new standards of service excellence.
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
