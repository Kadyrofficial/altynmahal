import React, { useState, useRef, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/lang/en.svg';
import tmFlag from '../assets/lang/tm.svg';
import ruFlag from '../assets/lang/ru.svg';

const LanguageSelector: React.FC = () => {
    const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('Türkmen');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const changeLanguage = (lang: string, languageName: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(languageName);
    setIsOpen(false);
  };
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}  className="fixed bottom-4 right-4 z-50">
      <div className="relative inline-block text-left">
        <button onClick={toggleDropdown} className="flex items-center space-x-2 px-4 py-2 bg-blue text-white font-semibold rounded-lg hover:bg-lightblue transition">
          <FaGlobe className="text-lg" />
          <span>{selectedLanguage}</span> 
        </button>
        {isOpen && (
          <div className="absolute right-0 bottom-0 mb-12 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <button onClick={() => changeLanguage('tm', 'Türkmen')} className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full">
              <img src={tmFlag} alt="Turkmen" className="w-5 h-4 mr-2 rounded-sm" />
              {t('tm')}
            </button>
            <button onClick={() => changeLanguage('ru', 'Русский')} className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full rounded-tl-lg rounded-tr-lg">
              <img src={ruFlag} alt="Russian" className="w-5 h-4 mr-2 rounded-sm" />
              {t('ru')}
            </button>
            <button onClick={() => changeLanguage('en', 'English')} className="flex items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full">
              <img src={enFlag} alt="English" className="w-5 h-4 mr-2 rounded-sm" />
              {t('en')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
