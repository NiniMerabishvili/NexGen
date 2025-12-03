interface TechnologiesCardProps {
  technologies?: string[];
}

const TechnologiesCard = ({ technologies = ['React Native', 'Firebase', 'Redux', 'REST API', 'MongoDB'] }: TechnologiesCardProps) => {
  const techList = technologies;

  return (
    <div className="bg-[#1A1A1A] rounded-3xl p-8 flex flex-col gap-6">
      <h3 className="text-xl font-bold text-white uppercase">
        TECHNOLOGIES USED
      </h3>

      <div className="flex flex-wrap gap-4">
        {techList.map((tech, index) => (
          <span
            key={index}
            className="bg-[#242424] rounded-full px-6 py-3 text-white font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesCard;