import { Link } from "react-router-dom";
import logo from "@/assets/m2-logo.png";

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <img src={logo} alt="M² Queensway" className="h-20 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              100% Black Women-Owned. Compliance-led freight, delivered with precision.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-secondary">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Leadership", to: "/leadership" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-secondary">Compliance</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>SARS Compliant</li>
              <li>CIPC Registered</li>
              <li>UIF & COIDA Compliant</li>
              <li>Level 1 EME B-BBEE</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-secondary">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Hartebees, North West</p>
              <p>079 977 7235 / 076 333 2383</p>
              <p>info@m2queensway.co.za</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} M² Queensway Freight & Logistics. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Ntobeko Mhlana (PTY) Ltd | Reg: 2023/788800/07
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
