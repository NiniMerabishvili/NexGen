interface CallToActionProps {
  text?: string;
}

const CallToAction = ({ text = 'BOOK A CALL' }: CallToActionProps) => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 cursor-pointer group"
      aria-label="Book a call with us"
    >
      <div className="w-10 h-10 bg-[#1F1F1F] border border-[#2A2A2A] rounded-full flex items-center justify-center group-hover:border-[#E7BEB1] transition-colors duration-200">
        <svg
          className="w-5 h-5 text-[#E7BEB1]"
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
      <span className="text-xs uppercase tracking-wide text-[#B3B3B2] group-hover:text-[#E7BEB1] transition-colors duration-200">
        {text}
      </span>
    </button>
  );
};

export default CallToAction;