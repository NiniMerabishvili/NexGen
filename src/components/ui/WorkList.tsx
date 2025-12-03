import ProjectDetailCard from './Work1';
import Work2 from './Work2';
import TechnologiesCard from './Technologies';
import TeamMembersCard from './TeamMembers';
import ClickButton from './Click';
import { projectsData, technologiesData, teamMembersData, workImagesData } from '../../data/MockData';

interface WorkListProps {
  index: number;
}

const WorkList = ({ index }: WorkListProps) => {
  const project = projectsData[index];
  const technologies = technologiesData[index];
  const team = teamMembersData[index];
  const workImage = workImagesData[index];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectDetailCard
        title={project.title}
        category={project.category}
        timeTaken={project.timeTaken}
        description={project.description}
        icon={
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d={project.iconPath} />
          </svg>
        }
      />
      
      <Work2 image={workImage} />
      
      <div className="flex flex-col gap-4">
        <TechnologiesCard technologies={technologies} />
        <TeamMembersCard members={team} />
        <ClickButton text="BOOK A CALL" />
      </div>
    </div>
  );
};

export default WorkList;