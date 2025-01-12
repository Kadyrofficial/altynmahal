import { useTranslation } from 'react-i18next';
import China from './China';
import Malaysiya from './Malaysiya';
import Vyetnam from './Vyetnam';
import Thailand from './Thailand';

const Countries = () => {
    const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center justify-center bg-lightgray">
        <div className='w-full px-[30px] sm:px-[50px] text-[30px] lg:text-[35px] font-medium pt-[40px]'>{t('coutryserve')}</div>
        <div className="py-[30px] px-[15px] flex flex-wrap justify-center w-full  ">
        <China />
        <Malaysiya />
        <Vyetnam />
        <Thailand />
        </div>
    </section>
  );
};

export default Countries;