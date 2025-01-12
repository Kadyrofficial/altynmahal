import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

const Intro = () => {
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
        <section className="flex flex-col justify-center py-[20px] items-center">
            <div className="w-full py-[10px] sm:py-[20px]">
                <div ref={boxRef} className={`text-[26px] font-medium sm:text-[30px] md:text-[36px] lg:text-[46px] tracking-[1px] transform transition-transform duration-[1.5s] ease-in-out text-center ${isVisible ?  "-translate-x-0" : "-translate-x-[5%]"}`}>{t('heading1')}</div>
                <div ref={boxRef} className={`text-[26px] font-medium sm:text-[30px] md:text-[36px] lg:text-[46px] tracking-[1px] transform transition-transform duration-[1.5s] ease-in-out text-center ${isVisible ?  "translate-x-0" : "translate-x-[5%]"}`}>{t('heading2')}</div>
            </div>
            <div className="w-full pb-[10px] lg:pb-[30px] pt-[10px] flex flex-row justify-center">
                <a href="/about" ref={boxRef} className={`py-[6px] px-[16px] sm:py-[8px] sm:px-[20px] rounded-full font-medium bg-lightblue text-white text-[18px] mx-[5px] sm:text-[24px] lg:text-[26px]  transform transition-opacity duration-[1.5s] block ease-in-out text-center ${isVisible ?  "opacity-1" : "opacity-0"}`}>{t('about')}</a>
                <a href="/contact" ref={boxRef} className={`py-[6px] px-[16px] sm:py-[8px] sm:px-[20px] rounded-full font-medium border-[1.5px] border-lightblue text-lightblue text-[18px] mx-[5px] sm:text-[24px] lg:text-[26px] transform transition-opacity duration-[1.5s] ease-in-out text-center ${isVisible ?  "opacity-1" : "opacity-0"}`}>{t('contact')}</a>
            </div>

        </section>
  );
};

export default Intro;