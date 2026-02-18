import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-secondary uppercase mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Ready to <span className="text-secondary">Move?</span>
              </h2>
              <div className="section-divider mt-4" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need domestic freight, cross-border logistics, or a complete transport management solution — we're ready to deliver.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">Hartebees, North West</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">079 977 7235 / 076 333 2383</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@m2queensway.co.za</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 border-l-4 border-accent">
              <p className="font-display text-sm font-bold text-foreground mb-1">Registered Details</p>
              <p className="text-sm text-muted-foreground">Ntobeko Mhlana (PTY) Ltd</p>
              <p className="text-sm text-muted-foreground">t/a M² Queensway Freight & Logistics</p>
              <p className="text-sm text-muted-foreground">Reg: 2023/788800/07</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-primary p-8">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Request a Quote</h3>
            <form className="space-y-4" action="https://formsubmit.co/info@m2queensway.co.za" method="POST">
              <input type="hidden" name="_subject" value="New Quote Request - M² Queensway" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 font-body text-sm focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 font-body text-sm focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <select name="service" className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/60 px-4 py-3 font-body text-sm focus:outline-none focus:border-accent appearance-none">
                  <option value="">Select Service</option>
                  <option>Road Freight Transport</option>
                  <option>Cross Border Solutions</option>
                  <option>Contract Deliveries</option>
                  <option>Logistics Planning</option>
                  <option>High Value Loads</option>
                  <option>Transport Management</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your freight needs..."
                  rows={4}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 font-body text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-display text-sm tracking-widest py-4 uppercase transition-colors"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
