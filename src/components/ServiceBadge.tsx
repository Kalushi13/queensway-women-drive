interface ServiceBadgeProps {
  children: React.ReactNode;
}

const ServiceBadge = ({ children }: ServiceBadgeProps) => {
  return (
    <span className="service-badge">{children}</span>
  );
};

export default ServiceBadge;
