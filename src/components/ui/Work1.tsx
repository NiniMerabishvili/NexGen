import type { ReactNode } from 'react';
import CallToAction from './CallToAction';

interface ProjectDetailCardProps {
  title: string;
  category: string;
  timeTaken: string;
  description: string;
  icon: ReactNode;
}

const ProjectDetailCard = ({ title, category, timeTaken, description, icon }: ProjectDetailCardProps) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-10 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#242424] rounded-xl flex items-center justify-center text-[#CE7D63]">
            {icon}
          </div>
          <h3 className="text-sm font-normal text-white uppercase">
            {title}
          </h3>
        </div>

        <CallToAction text="DETAILS" />
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="bg-[#242424] rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-xs text-neutral-400">Category</span>
          <span className="text-xs text-neutral-400">•</span>
          <span className="text-xs text-white">{category}</span>
        </div>

        <div className="bg-[#242424] rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-xs text-neutral-400">Time Taken</span>
          <span className="text-xs text-neutral-400">•</span>
          <span className="text-xs text-white">{timeTaken}</span>
        </div>
      </div>

      <p className="text-xs text-[#81807E] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProjectDetailCard;