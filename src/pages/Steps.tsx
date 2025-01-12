import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";

import { useTranslation } from 'react-i18next';
function Steps() {
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <Header />
      <LanguageSelector />
      <section className="w-full flex flex-col items-center justify-center bg-lightgray">
        <div className='w-full px-[30px] sm:px-[50px] text-[30px] max-w-[1150px] lg:text-[35px] font-medium pt-[40px]'>{t('steps')}</div>
        <div className="py-[30px] px-[15px] flex flex-col items-center justify-center w-full">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
        </div>
        </section>
      <Footer />
    </>
  )
}

export default Steps
