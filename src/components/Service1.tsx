import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const Service1 = () => {
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
        <>
        <div className={`w-full md:w-1/2 xl:w-1/3 p-[15px] `}>
          <div ref={boxRef} className={`w-full h-full bg-white overflow-hidden flex flex-col drop-shadow-lightshad hover:drop-shadow-lightshadhov p-[30px] transform transition-transform duration-[1s] ease-in-out ${isVisible ?  "translate-x-0 opacity-100" : "-translate-x-[15%]"}`}>
            <img src="/search.png" className="w-full object-contain aspect-square" alt="" />
            <span className='font-medium text-[35px]'>{t('service1title')}</span>
            <span className='font-[400] text-[20px] sm:text-[24px]'>{t('service1content')}</span>
          </div>
        </div>

        </>
  );
};

export default Service1;