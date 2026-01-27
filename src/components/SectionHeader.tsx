interface SectionHeaderProps {
  icon?: string;
  title: string;
}

const SectionHeader = ({ icon, title }: SectionHeaderProps) => {
  return (
    <div className="section-header flex items-center gap-2">
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </div>
  );
};

export default SectionHeader;
