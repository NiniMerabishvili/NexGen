import type { ReactNode } from 'react';

interface ButtonProps {
  icon: ReactNode;
  title: string;
}

const Button = ({ icon, title }: ButtonProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 bg-[#1F1F1F] border border-[#2A2A2A] rounded-xl flex items-center justify-center text-[#CE7D63]">
        {icon}
      </div>
      <h3 className="text-xl font-light text-white uppercase">
        {title}
      </h3>
    </div>
  );
};

export default Button;

