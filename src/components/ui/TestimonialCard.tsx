interface TestimonialCardProps {
  title: string;
  text: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const TestimonialCard = ({ title, text, author }: TestimonialCardProps) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-8 flex flex-col gap-3 flex-grow">
        <h3 className="text-sm font-normal text-white uppercase">
          {title}
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {text}
        </p>
      </div>

      <div className="bg-[#1F1F1F] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xs text-white font-medium">
              {author.name}
            </span>
            <span className="text-[10px] text-neutral-400">
              {author.role}
            </span>
          </div>
        </div>

        <button className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center hover:bg-[#2A2A2A] transition-colors duration-200">
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;

