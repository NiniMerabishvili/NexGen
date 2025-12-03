interface ClickButtonProps {
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ClickButton = ({ 
  text = 'BOOK A CALL', 
  onClick, 
  type = 'button',
  disabled = false 
}: ClickButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (type === 'button') {
      // Scroll to contact section (footer)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="w-full bg-[#CE7D63] hover:bg-[#B86A52] text-black font-medium uppercase text-sm py-3 px-8 rounded-xl transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ClickButton;