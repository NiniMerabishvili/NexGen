interface CallToActionProps {
  text?: string;
}

const CallToAction = ({ text = 'BOOK A CALL' }: CallToActionProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#1F1F1F] border border-[#2A2A2A] rounded-full flex items-center justify-center">
        <svg
          className="w-5 h-5 text-[#E7BEB1]"
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
      <span className="text-xs uppercase tracking-wide text-[#B3B3B2]">
        {text}
      </span>
    </div>
  );
};

export default CallToAction;