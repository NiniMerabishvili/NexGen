import ServiceCard from '../ui/ServiceCard';
import { useServices } from '../../hooks/useServices';

const Services = () => {
  const servicesData = useServices();

  return (
    <section id="services" className="pt-16">
      <div className="w-[95%] mx-auto bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-xl p-4">
        <div className="bg-[#1A1A1A] rounded-xl p-6 uppercase">
          <h3>Our Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d={service.iconPath} />
                </svg>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;