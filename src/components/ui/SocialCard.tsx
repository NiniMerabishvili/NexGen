import type { ReactNode } from 'react';

interface SocialCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

const SocialCard = ({ icon, title, description, href }: SocialCardProps) => {
  return (
    <a
      href={href}
      className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between hover:border border-primary/50 transition-all duration-300"
    >
      <div className="flex justify-between items-start pb-6">
        <div className="bg-[#1F1F1F] border border-[#333333] rounded-lg flex items-center justify-center text-primary p-3">
          {icon}
        </div>
        <button className="w-8 h-8 bg-[#1F1F1F] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-primary transition-colors duration-200">
          <svg
            className="w-4 h-4 text-[#E7BEB1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold text-white uppercase mb-2">{title}</h3>
        <p className="text-sm text-[#81807E] leading-relaxed">{description}</p>
      </div>
    </a>
  );
};

export default SocialCard;

