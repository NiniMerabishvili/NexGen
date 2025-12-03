interface ClickButtonProps {
  text?: string;
  onClick?: () => void;
}

const ClickButton = ({ text = 'BOOK A CALL', onClick }: ClickButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#CE7D63] hover:bg-[#B86A52] text-black font-medium uppercase text-sm py-3 px-8 rounded-xl transition-all duration-300 hover:opacity-90"
    >
      {text}
    </button>
  );
};

export default ClickButton;