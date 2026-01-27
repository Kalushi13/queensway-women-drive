interface LeadershipCardProps {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  qualifications: string;
  competencies: string[];
}

const LeadershipCard = ({ 
  name, 
  title, 
  subtitle, 
  description, 
  qualifications, 
  competencies 
}: LeadershipCardProps) => {
  return (
    <div className="leadership-card rounded-r-lg">
      <h4 className="font-display text-base font-bold text-primary mb-0.5">{name}</h4>
      <p className="text-xs font-semibold text-secondary mb-0.5">{title}</p>
      <p className="text-xs italic text-gold-dark mb-2">{subtitle}</p>
      <p className="text-xs text-foreground/80 mb-2 leading-relaxed">{description}</p>
      <p className="text-xs mb-2">
        <span className="font-semibold text-primary">Qualifications:</span>{" "}
        <span className="text-foreground/80">{qualifications}</span>
      </p>
      <div>
        <span className="text-xs font-semibold text-primary">Key Competencies:</span>
        <ul className="text-xs text-foreground/80 mt-1 grid grid-cols-2 gap-x-2 gap-y-0.5">
          {competencies.map((item, index) => (
            <li key={index} className="flex items-start gap-1">
              <span className="text-gold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadershipCard;
