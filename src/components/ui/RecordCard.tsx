import { useState, useEffect, useRef } from 'react';

interface RecordCardProps {
  label: string;
  value: string;
}

const RecordCard = ({ label, value }: RecordCardProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    const numMatch = val.match(/[\d.]+/);
    const suffix = val.replace(/[\d.]+/, '');
    const number = numMatch ? parseFloat(numMatch[0]) : 0;
    return { number, suffix };
  };

  const { number: targetNumber, suffix } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      
      // Check if already visible on mount
      if (currentRef.getBoundingClientRect().top < window.innerHeight) {
        setHasAnimated(true);
      }
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || targetNumber === 0) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (targetNumber - startValue) * easeOutQuart;
      
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated, targetNumber]);

  const formatDisplayValue = (num: number, suffix: string) => {
    if (suffix.includes('K')) {
      return `${Math.round(num)}${suffix}`;
    }
    if (suffix.includes('%')) {
      return `${Math.round(num)}${suffix}`;
    }
    return `${Math.round(num)}${suffix}`;
  };

  return (
    <div
      ref={cardRef}
      className="bg-[#1A1A1A] rounded-xl flex flex-col items-center justify-center py-4 md:py-4"
    >
      <p className="text-xs uppercase text-neutral-400 mb-2 text-center leading-none">
        {label}
      </p>
      <p className="text-4xl font-bold text-[#DA9E8B] leading-none">
        {formatDisplayValue(count, suffix)}
      </p>
    </div>
  );
};

export default RecordCard;

