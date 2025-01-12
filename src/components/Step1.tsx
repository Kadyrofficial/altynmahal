import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const Step1 = () => {
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
            <div ref={boxRef} className={`w-full aspect-country overflow-hidden bg-lightgray max-w-[1200px] p-[10px] transform transition-transform duration-[1s] ease-in-out ${isVisible ?  "-translate-x-0 2xl:-translate-x-[12%]" : "-translate-x-[25%]"}`}>
                <div className="w-full h-full bg-white flex flex-row justify-between ">
                    <span className="mt-[2%] ml-[3%] lg:text-[40px] flex flex-col items-center justify-center">
                        <p className="text-[23px] py-[5px] font-medium w-full sm:text-[27px] lg:text-[35px] xl:text-[40px]">{t('1steptitle')}</p>
                        <p className="text-[20px] py-[5px] font-[400] w-full sm:text-[25px] lg:text-[30px]  xl:text-[35px]">{t('1stepcontent')}</p>
                    </span>
                    <img src="/search.svg" className="h-full aspect-den right-0" alt="" />
                </div>
            </div>
        </>
  );
};

export default Step1;