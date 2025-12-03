interface RecordCardProps {
  label: string;
  value: string;
}

const RecordCard = ({ label, value }: RecordCardProps) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center py-4 md:py-4">
      <p className="text-xs uppercase text-neutral-400 mb-2 text-center leading-none">
        {label}
      </p>
      <p className="text-4xl font-bold text-[#DA9E8B] leading-none">
        {value}
      </p>
    </div>
  );
};

export default RecordCard;

