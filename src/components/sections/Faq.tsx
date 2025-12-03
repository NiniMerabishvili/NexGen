import { useState } from 'react';
import type { FormEvent } from 'react';
import { useFAQ } from '../../hooks/useFAQ';
import ClickButton from '../ui/Click';
import { MIN_QUESTION_LENGTH } from '../../constants';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: number;
}

const AccordionItem = ({ question, answer, isOpen, onToggle, id }: AccordionItemProps) => {
  const accordionId = `accordion-${id}`;
  const contentId = `content-${id}`;

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-4">
      <button
        type="button"
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={accordionId}
      >
        <h4 className="text-white font-light flex-1 pr-4 text-sm text-left">
          {question}
        </h4>
        <span className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#2A2A2A] transition-colors duration-200" aria-hidden="true">
          {isOpen ? (
            <span className="text-[#E7BEB1] text-xl font-bold">−</span>
          ) : (
            <span className="text-[#E7BEB1] text-xl font-bold">+</span>
          )}
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={accordionId}
        className={isOpen ? 'block' : 'hidden'}
      >
        {isOpen && (
          <p className="text-[#81807E] text-sm mt-4 leading-relaxed">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

interface FormErrors {
  name?: string;
  email?: string;
  question?: string;
}

const Faq = () => {
  const faqs = useFAQ();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.question.trim()) {
      newErrors.question = 'Question is required';
    } else if (formData.question.trim().length < MIN_QUESTION_LENGTH) {
      newErrors.question = `Question must be at least ${MIN_QUESTION_LENGTH} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', question: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="faq" className="pt-16">
      <div className="w-[95%] mx-auto bg-[#0F0F0F] rounded-xl p-4">
        <div className="bg-[#1A1A1A] rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <a
              href="#view-all"
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              aria-label="View all frequently asked questions"
            >
              <div className="w-10 h-10 bg-[#1F1F1F] border border-[#E7BEB1] rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#E7BEB1]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                id={faq.id}
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

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                  <p className="text-sm text-green-400">
                    Thank you! Your question has been submitted successfully.
                  </p>
                </div>
              )}

              <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-2">
                  <label htmlFor="faq-name" className="text-xs uppercase text-white font-medium">
                    NAME
                  </label>
                  <input
                    id="faq-name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-[#111111] rounded-lg p-3 text-xs text-white placeholder:text-[#81807E] focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="faq-email" className="text-xs uppercase text-white font-medium">
                    EMAIL
                  </label>
                  <input
                    id="faq-email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-[#111111] rounded-lg p-3 text-xs text-white placeholder:text-[#81807E] focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="faq-question" className="text-xs uppercase text-white font-medium">
                    YOUR QUESTION
                  </label>
                  <textarea
                    id="faq-question"
                    placeholder="Enter Your Question Here ....."
                    rows={4}
                    value={formData.question}
                    onChange={(e) => handleChange('question', e.target.value)}
                    className="bg-[#111111] rounded-lg p-3 text-xs text-white placeholder:text-[#81807E] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    aria-invalid={errors.question ? 'true' : 'false'}
                    aria-describedby={errors.question ? 'question-error' : undefined}
                  />
                  {errors.question && (
                    <p id="question-error" className="text-xs text-red-400" role="alert">
                      {errors.question}
                    </p>
                  )}
                </div>

                <ClickButton 
                  text={isSubmitting ? 'SENDING...' : 'SEND YOUR MESSAGE'} 
                  type="submit"
                  disabled={isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
