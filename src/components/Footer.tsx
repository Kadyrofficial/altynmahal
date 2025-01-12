import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    const { t } = useTranslation();
    return (
    <footer className='bg-lightgray'>
        <div className='flex flex-col items-center p-[25px]'>
            <span className='p-[20px] font-medium text-[26px]'>{t('title')}</span>
            <ul className='p-[10px] flex flex-row flex-wrap justify-center font-[400] text-[17px]'>
                <li className='px-[15px] py-[5px]'>
                    <a href="/">{t('home')}</a>
                </li>
                <li className='px-[15px] py-[5px]'>
                    <a href="/steps">{t('steps')}</a>
                </li>
                <li className='px-[15px] py-[5px]'>
                    <a href="/contact">{t('contact')}</a>
                </li>
                <li className='px-[15px] py-[5px]'>
                    <a href="/about">{t('about')}</a>
                </li>
            </ul>
            <div className='flex flex-row '>
                <a href="" className='p-[10px] m-[2px]'><FaWhatsapp className="w-[26px] h-[26px]" /></a>
                <a href="https://www.facebook.com/share/1XWWTMJqb2/?mibextid=wwXIfr" className='p-[10px] m-[2px]'><FaFacebook className="w-[26px] h-[26px]" /></a>
                <a href="https://www.instagram.com/mahal_hj/profilecard/?igsh=MWg4dXY3aGUxajJpeg==" className='p-[10px] m-[2px]'><FaInstagram className="w-[26px] h-[26px]" /></a>
                <a href="http://www.tiktok.com/@mahal_hj" className='p-[10px] m-[2px]'><FaTiktok className="w-[26px] h-[26px]" /></a>
            </div>
        </div>
        <div className='bg-softgray p-[15px] text-white text-center font-[400]'>Copyright © 2021-2025 All rights Reserved</div>
    </footer>
  )
}

export default Footer
