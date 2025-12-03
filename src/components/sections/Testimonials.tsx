import TestimonialCard from '../ui/TestimonialCard';
import { useTestimonials } from '../../hooks/useTestimonials';

const Testimonials = () => {
  const testimonials = useTestimonials();

  return (
    <section className="pt-16">
      <div className="w-[95%] mx-auto bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-xl p-4">
        <div className="bg-[#1A1A1A] rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="bg-[#1A1A1A] rounded-xl p-6 uppercase">
                <h3>Testimonials</h3>
            </div>
            <a
              href="#all-testimonials"
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-8 h-8 bg-[#1F1F1F] border border-[#E7BEB1] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#E7BEB1]"
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
              <span className="text-xs uppercase text-white font-medium">
                ALL TESTIMONIALS
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              title={testimonial.title}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
