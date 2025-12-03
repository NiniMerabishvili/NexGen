import ReasonCard from '../ui/ReasonCard';
import { useReasons } from '../../hooks/useReasons';

const Reasons = () => {
  const reasonsData = useReasons();

  return (
    <section className="pt-16">
      <div className="w-[95%] mx-auto bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-xl p-4">
      <div className="bg-[#1A1A1A] rounded-xl p-6 uppercase">
            <h3>Reasons to Choose NexGen for Your Digital Journey</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {reasonsData.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;