import TechnologiesCard from './Technologies';
import TeamMembersCard from './TeamMembers';
import ClickButton from './Click';

const Work3 = () => {
  return (
    <div className="flex flex-col gap-4">
      <TechnologiesCard />
      <TeamMembersCard />
      <ClickButton text="BOOK A CALL" />
    </div>
  );
};

export default Work3;