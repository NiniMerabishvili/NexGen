import type { ReactNode } from 'react';
import CallToAction from './CallToAction';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, price, icon }: ServiceCardProps) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-10 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <Button icon={icon} title={title} />
        <CallToAction />
      </div>

      <p className="text-xs text-[#81807E] mb-8">
        {description}
      </p>

      <div className="text-right">
        <p className="text-xl font-light text-white">
          STARTS FROM {price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;