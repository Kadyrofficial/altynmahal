import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import { useTranslation } from 'react-i18next';

const AnimatedBox = () => {
  const { t } = useTranslation();

  return (

    <section className='w-full px-[10px] pb-[50px] flex flex-col justify-center items-center'>
      <div className='w-full px-[30px] text-[30px] lg:text-[35px] py-[30px] font-medium '>{t('services')} </div>
        <div className='w-full flex flex-row justify-center flex-wrap'>
          
          <Service1 />
          <Service2 />
          <Service3 />
        </div>
      </section>

  );
};

export default AnimatedBox;