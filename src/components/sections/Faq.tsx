import { useState } from 'react';
import { useFAQ } from '../../hooks/useFAQ';
import ClickButton from '../ui/Click';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h4 className="text-[white] font-light flex-1 pr-4 text-sm">
          {question}
        </h4>
        <button className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#2A2A2A] transition-colors duration-200">
          {isOpen ? (
            <span className="text-[#E7BEB1] text-xl font-bold">−</span>
          ) : (
            <span className="text-[#E7BEB1] text-xl font-bold">+</span>
          )}
        </button>
      </div>
      {isOpen && (
        <p className="text-[#81807E] text-sm mt-4 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faq = () => {
  const faqs = useFAQ();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-16 ">
      <div className="w-[95%] mx-auto bg-[#0F0F0F] rounded-xl p-4">
        <div className="bg-[#1A1A1A] rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <a
              href="#view-all"
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-[#1F1F1F] border border-[#E7BEB1] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#E7BEB1]"
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
              <span className="text-sm uppercase text-white font-medium">
                VIEW ALL
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#1A1A1A] rounded-xl p-10 min-h-full">
              <h3 className="text-xl font-medium text-white uppercase mb-8">
                ASK YOUR QUESTION
              </h3>

              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase text-white font-medium">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-[#111111] rounded-lg p-3 text-xs text-white placeholder:text-[#81807E] focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs p-3 uppercase text-white font-medium">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#111111] rounded-lg p-3 text-xs text-white placeholder:text-[#81807E] focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase text-white font-medium">
                    YOUR QUESTION
                  </label>
                  <textarea
                    placeholder="Enter Your Question Here ....."
                    rows={4}
                    className="bg-[#111111] rounded-lg p-3 text-xs text-white placeholder:text-[#81807E] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <ClickButton text="SEND YOUR MESSAGE" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
