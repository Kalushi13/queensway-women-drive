import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-display text-sm font-semibold tracking-wide mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Let's move your freight with compliance, visibility and discipline. Tell us your lane, frequency and load profile and we will respond with a structured proposal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-6">Request a Proposal</h2>
              <form className="space-y-4" action="https://formsubmit.co/info@m2queensway.co.za" method="POST">
                <input type="hidden" name="_subject" value="New Proposal Request - M² Queensway" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  />
                </div>
                <select
                  name="service"
                  className="w-full bg-muted border border-border text-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                >
                  <option value="">Service Needed</option>
                  <option>Domestic Long Haul</option>
                  <option>Dedicated Fleet Allocation</option>
                  <option>Visibility & Reporting</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  name="route"
                  placeholder="Route / Lane"
                  className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40"
                />
                <textarea
                  name="message"
                  placeholder="Estimated volumes, frequency, and any compliance requirements (SHEQ/insurance/telematics)..."
                  rows={4}
                  className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display text-sm font-semibold py-3.5 rounded-lg transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">Hartebees, North West</p>
                  <p className="text-xs text-muted-foreground mt-1">Corridor access to Gauteng routes</p>
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">079 977 7235 / 076 333 2383</p>
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@m2queensway.co.za</p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-6 border border-border">
                <p className="font-display text-sm font-bold text-foreground mb-2">Registered Details</p>
                <p className="text-sm text-muted-foreground">Ntobeko Mhlana (PTY) Ltd</p>
                <p className="text-sm text-muted-foreground">t/a M² Queensway Freight & Logistics</p>
                <p className="text-sm text-muted-foreground">Reg: 2023/788800/07</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
