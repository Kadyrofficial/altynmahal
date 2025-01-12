import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const Vyetnam = () => {
    const { t } = useTranslation();
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
    <div ref={boxRef} className={`w-full aspect-country bg-lightgray md:w-1/2 p-[10px] transform transition-opacity duration-[1.5s] ease-in-out ${isVisible ?  "opacity-1" : "opacity-0"}`}>
        <div className="w-full h-full bg-white ">
            <span className="text-[30px] font-medium absolute mt-[2%] ml-[3%] lg:text-[40px]">{t('vyetnam')}</span>
            <img src="/Vietnam.png" className="w-full h-full" alt="" />
        </div>
    </div>
  );
};

export default Vyetnam;