import logo from "@/assets/m2-logo.png";

const WebsiteFooter = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="M² Queensway" className="h-24 w-auto mb-4 drop-shadow-lg" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Proudly women-owned. Delivering freight excellence across Southern Africa.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-wider text-accent mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Leadership", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-wider text-accent mb-4">Compliance</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>SARS Compliant</li>
              <li>CIPC Registered</li>
              <li>UIF & COIDA Compliant</li>
              <li>B-BBEE Certified</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} M² Queensway Freight & Logistics. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 italic font-display tracking-wider">
            Driven by Women. Delivered with Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
