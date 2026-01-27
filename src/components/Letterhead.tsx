import logo from "@/assets/m2-logo.png";

const Letterhead = () => {
  return (
    <header className="px-8 pt-6 pb-4 border-b-2 border-primary/20">
      <div className="flex items-center justify-between">
        <img 
          src={logo} 
          alt="M² Queensway Freight & Logistics" 
          className="h-20 w-auto"
        />
        <div className="text-right text-xs font-body text-foreground/80 space-y-0.5">
          <p className="font-semibold text-sm text-primary">Ntobeko Mhlana (PTY) Ltd</p>
          <p className="text-secondary font-medium">t/a M² Queensway Freight & Logistics</p>
          <p>225 Wagtail Street, Birdwood Estate, North West</p>
          <p>Reg: 2023/788800/07</p>
        </div>
      </div>
    </header>
  );
};

export default Letterhead;
