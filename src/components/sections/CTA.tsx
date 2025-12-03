interface CTAProps {
  title: string;
  text: string;
  buttonText: string;
}

const CTA = ({ title, text, buttonText }: CTAProps) => {
  return (
    <div className="w-full bg-primary rounded-3xl p-12 md:p-20 mb-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold text-[#111111] uppercase mb-6 leading-tight">
            {title}
          </h2>
          <p className="max-w-xl text-[#111111] font-medium mb-10 leading-relaxed">
            {text}
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-[#111111] text-white font-bold uppercase px-8 py-4 rounded-xl hover:bg-[#0F0F0F] transition-colors duration-200 flex items-center gap-3">
            <span>{buttonText}</span>
            <svg
              className="w-5 h-5"
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
      </div>
    </div>
  );
};

export default CTA;

