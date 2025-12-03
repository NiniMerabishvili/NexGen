import { useEffect, useRef } from 'react';

const SocMedia = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = marqueeRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const marqueeText = 'FOLLOW US ON SOCIAL MEDIA';

  return (
    <section id="cta" className="py-10">
      <div className="w-[95%] mx-auto flex flex-col gap-6">
        <div className="bg-[#CE7D63] rounded-xl p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-medium text-[#111111] uppercase leading-tight">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </h2>
            <p className="text-[#111111] font-light mt-4 leading-relaxed max-w-2xl text-sm">
              Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[#111111] text-sm text-white font-medium uppercase px-4 py-3 rounded-xl hover:bg-[#0F0F0F] transition-colors duration-200 flex items-center gap-3">
              <span>GET IN TOUCH</span>
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-xl py-4 overflow-hidden">
          <div className="flex whitespace-nowrap" ref={marqueeRef}>
            {[...Array(10)].map((_, index) => (
              <span key={index} className="flex items-center">
                <span className="text-medium text-[#81807E] uppercase px-4">
                  {marqueeText}
                </span>
                <span className="text-[#CE7D63] text-xl px-2">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocMedia;
