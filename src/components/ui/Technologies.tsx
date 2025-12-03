interface TechnologiesCardProps {
  technologies?: string[];
}

const TechnologiesCard = ({ technologies = ['React Native', 'Firebase', 'Redux', 'REST API', 'MongoDB'] }: TechnologiesCardProps) => {
  const techList = technologies;

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col gap-6">
      <h3 className="text-xs font-normal text-white uppercase">
        TECHNOLOGIES USED
      </h3>

      <div className="flex flex-wrap gap-2">
        {techList.map((tech) => (
          <span
            key={tech}
            className="bg-[#1F1F1F] rounded-full px-4 py-2 text-white font-mono font-light text-[10px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesCard;