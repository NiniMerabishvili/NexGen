import RecordCard from '../ui/RecordCard';
import { useRecords } from '../../hooks/useRecords';

const Records = () => {
  const recordsData = useRecords();

  return (
    <section id="home-records" className="py-2 md:pt-6">
      <div className="w-[95%] mx-auto">
        <div className="bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-3xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recordsData.map((record, index) => (
              <RecordCard key={index} label={record.label} value={record.value} />
            ))}

            <div className="bg-[#1A1A1A] rounded-xl p-8 flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0F0F0F] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#E7BeB1]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>
              <p className="text-sm uppercase text-neutral-400 font-medium">
                KNOW MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;

