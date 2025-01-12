import { useTranslation } from 'react-i18next';
import './navigation.css';

function Navigation() {
    const { t } = useTranslation();
    return (
    <>
            <input type="checkbox" id="burger-toggle" className='block md:hidden' />
            <label htmlFor="burger-toggle" className="burger-menu block md:hidden" >
            <div className="line block md:hidden"></div>
            <div className="line block md:hidden"></div>
            <div className="line block md:hidden"></div>
            </label>
            <div className="menu flex flex-col justify-center items-center">
                    <div className="title text-center">
                        <p className='titu'>{t('title')}</p>
                    </div>
                    <div className='menus py-[50px] max-w-[350px] w-full'>
                        <div className="title py-[5px]">
                            <p className='name'>
                                <a href="/">{t('home')}</a>
                            </p>
                        </div>
                        <div className="title py-[5px]">
                            <p className='name'>
                                <a href="/steps">{t('steps')}</a>
                            </p>
                        </div>
                        <div className="title py-[5px]">
                            <p className='name'>
                                <a href="/contact">{t('contact')}</a>
                            </p>
                        </div>
                        <div className="title py-[5px]">
                            <p className='name'>
                                <a href="/about">{t('about')}</a>
                            </p>
                        </div>
                    </div>
            </div>
        </>
  )
}

export default Navigation
