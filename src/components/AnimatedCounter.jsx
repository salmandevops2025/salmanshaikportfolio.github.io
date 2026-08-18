import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ value, duration = 2, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value);
    const steps = 60 * duration;
    const increment = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-heading font-bold">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
