interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem = ({ title, description }: ValueItemProps) => {
  return (
    <div className="value-item">
      <span className="value-icon">★</span>
      <div>
        <span className="font-semibold text-primary">{title}</span>
        <span className="text-foreground/80"> – {description}</span>
      </div>
    </div>
  );
};

export default ValueItem;
