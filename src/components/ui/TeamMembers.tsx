import { useTeamMembers } from '../../hooks/useTeamMembers';

interface TeamMembersCardProps {
  members?: Array<{
    id: number;
    photoUrl: string;
    name: string;
  }>;
}

const TeamMembersCard = ({ members }: TeamMembersCardProps) => {
  const defaultTeam = useTeamMembers();
  const team = members || defaultTeam;

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-4 flex justify-between items-center">
      <h3 className="text-xs font-normal text-white uppercase">
        TEAM MEMBERS
      </h3>

      <div className="flex gap-4">
        {team.map((member, index) => (
          <div
            key={member.id}
            className={`w-10 h-10 rounded-full border-4 border-[#1A1A1A] bg-[#E7BEB1] overflow-hidden ${
              index > 0 ? '-ml-4' : ''
            }`}
          >
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersCard;