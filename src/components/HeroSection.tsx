import heroImg from "@/assets/hero-trucks.jpg";
import logo from "@/assets/m2-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="M² Queensway freight fleet"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl space-y-6">
          <img src={logo} alt="M² Queensway" className="h-44 md:h-56 w-auto mb-4 drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight">
            Driven by Women.
            <br />
            <span className="text-accent">Delivered with Excellence.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-xl leading-relaxed">
            100% Black Women-Owned, governance-driven long-haul transport — delivering safe, compliant and technology-enabled freight solutions across South Africa's major corridors.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#services"
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-display text-sm tracking-widest px-8 py-4 uppercase transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-display text-sm tracking-widest px-8 py-4 uppercase transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Black Women-Owned" },
            { value: "SADC", label: "Cross-Border" },
            { value: "AI", label: "Telematics-Enabled" },
            { value: "Level 1", label: "B-BBEE EME" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs tracking-widest uppercase text-primary-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
