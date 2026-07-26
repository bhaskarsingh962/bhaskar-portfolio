import services from "../../../data/services";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;