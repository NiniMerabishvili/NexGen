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

      <button
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-200 cursor-pointer group"
        aria-label="Learn more about our services"
      >
        <div className="w-12 h-12 bg-[#0F0F0F] rounded-full flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors duration-200">
          <svg
            className="w-6 h-6 text-[#E7BEB1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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
      </button>
    </div>
  );
};

export default ReasonCard;
