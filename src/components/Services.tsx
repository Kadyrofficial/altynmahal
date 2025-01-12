import React, { useState, useEffect, useRef } from "react";
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';

const AnimatedBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <section className='w-full p-[20px] flex flex-row justify-center flex-wrap'>
        <Service1 />
        <Service2 />
        <Service3 />
      </section>

  );
};

export default AnimatedBox;