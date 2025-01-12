import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return (
    <>
        <header className='fixed z-50 w-full h-[70px] bg-white flex justify-between items-center drop-shadow-shad px-[5px] lg:px-[20px]'>
            <a href="/" className='flex items-center'>
                <img src="/logo.png" alt="Altyn Mahal" className='w-[70px] p-[13px] cursor-pointer' />
                <span className='font-medium text-[22px] px-[10px] text-black'>{t('title')}</span>
            </a>
            <span className='hidden md:block'>
                <a href="/steps" className='px-[15px] font-medium text-[18px] text-black hover:text-gray transition-all'>{t('steps')}</a>
                <a href="/about" className='px-[15px] font-medium text-[18px] text-black hover:text-gray transition-all'>{t('about')}</a>
                <a href="/contact" className='px-[15px] font-medium text-[18px] text-black hover:text-gray transition-all'>{t('contact')}</a>
            </span>
        </header>
        <div className='h-[80px]'></div>
    </>
  )
}

export default Header
