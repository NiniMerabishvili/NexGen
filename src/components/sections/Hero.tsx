import { useEffect, useRef } from 'react';
import HeroImage from '../../assets/images/heroimage.png';
import ArrowIcon from '../../assets/icons/arrow.svg';
import RightArrowIcon from '../../assets/icons/right-arrow.svg';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
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

  const services = [
    'MARKETING',
    'WEBSITE DESIGN',
    'BRANDING',
    'WEBSITE DEVELOPMENT',
    'MOBILE APP DEVELOPMENT',
    'DIGITAL',
  ];

  return (
    <section className="pt-24">
      <div className="w-[95%] mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-[#1A1A1A] rounded-2xl w-full flex flex-col overflow-hidden">
            <div className="px-10  pb-[10px] flex flex-col justify-center flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-5xl font-bold text-white leading-none tracking-tight">
                  DIGITAL SOLUTIONS
                </h1>
                <a
                  href="#contact"
                  className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={RightArrowIcon}
                    alt="Arrow"
                    className="w-16 h-16"
                  />
                  <span className="text-primary text-base font-medium uppercase tracking-wide whitespace-nowrap">
                    START A PROJECT
                  </span>
                </a>
              </div>

              <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
                THAT DRIVE SUCCESS
              </h2>

              <p className="text-sm text-[#81807E] mt-6 max-w-[650px] leading-relaxed mb-8">
                At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
              </p>

              <div className="-mx-7 bg-[#0F0F0F] rounded-xl py-4 overflow-hidden">
                <div className="flex whitespace-nowrap px-10" ref={scrollRef}>
                  {[...services, ...services, ...services, ...services].map((service, index) => (
                    <span key={index} className="flex items-center">
                      <span className="text-sm text-[#676665] uppercase font-normal px-3">
                        {service}
                      </span>
                      <span className="text-primary text-sm px-2">•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 relative rounded-[20px] overflow-hidden bg-[#1A1A1A] flex flex-col">
            <div className="relative flex-1 overflow-hidden">
              <img
                src={HeroImage}
                alt="Estatein Real Estate"
                className="w-full h-full object-cover"
              />

              <a
                href="#works"
                className="absolute top-4 right-4 z-10 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={ArrowIcon}
                  alt="Explore"
                  className="w-20 h-20"
                />
              </a>
            </div>

            <div className="p-4 bg-[#1A1A1A]">
              <h3 className="text-white text-base font-medium uppercase">
                ESTATEIN REAL ESTATE
              </h3>
              <p className="text-[#81807E] text-xs mt-1">Web Development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

