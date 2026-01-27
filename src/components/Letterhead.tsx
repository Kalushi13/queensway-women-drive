import logo from "@/assets/m2-logo.png";

const Letterhead = () => {
  return (
    <header className="px-10 pt-10 pb-8 border-b-3 border-primary/30">
      <div className="flex items-center justify-between gap-8">
        <img 
          src={logo} 
          alt="M² Queensway Freight & Logistics" 
          className="h-52 w-auto object-contain"
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="text-right font-body text-foreground/90 space-y-1">
          <p className="font-bold text-base text-primary tracking-wide">Ntobeko Mhlana (PTY) Ltd</p>
          <p className="text-secondary font-semibold text-sm">t/a M² Queensway Freight & Logistics</p>
          <p className="text-sm">225 Wagtail Street, Birdwood Estate, North West</p>
          <p className="text-sm font-medium">Reg: 2023/788800/07</p>
        </div>
      </div>
    </header>
  );
};

export default Letterhead;
