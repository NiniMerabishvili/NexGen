import WorkList from '../ui/WorkList';

const Works = () => {
  return (
    <section id="projects" className="pt-16">
      <div className="bg-[#1A1A1A] rounded-xl p-6 uppercase w-[95%] mx-auto mb-3">
        <h3>Our Works</h3>
      </div>
      
      <div className="w-[95%] mx-auto flex flex-col gap-4">
        <div className="bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-xl p-3">
          <WorkList index={0} />
        </div>
        
        <div className="bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-xl p-3">
          <WorkList index={1} />
        </div>
      </div>
    </section>
  );
};

export default Works;