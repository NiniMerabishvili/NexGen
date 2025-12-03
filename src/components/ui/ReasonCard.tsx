interface ReasonCardProps {
  title: string;
  description: string;
}

const ReasonCard = ({ title, description }: ReasonCardProps) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col ">
      <h3 className="text-xl font-light text-white uppercase mb-4">
        {title}
      </h3>
      
      <p className="text-xs text-[#81807E] mb-6 flex-grow">
        {description}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#0F0F0F] rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#E7BEB1]"
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
        </div>
        <span className="text-sm text-white">Learn More</span>
      </div>
    </div>
  );
};

export default ReasonCard;
