'use client'

import { cn } from "@/lib/utils";
import { LanguagesIcon, MenuIcon } from "lucide-react";
import Image from 'next/image'
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PopupContainer } from "./popup-container";
import { MouseEventHandler, useState } from "react";
import { Nav } from "./nav";


interface Props {
  className?: string;
  menuData: MenuData[];
  languageData: LanguageData[];
}

interface MenuData {
  title: string;
  link: string;
}

interface LanguageData {
  title: string;
  locale: string;
}

export const Header: React.FC<Props> = ({ className, menuData, languageData }) => {
  const t = useTranslations('Home')

  const [isLanguagePopupInUse, setIsLanguagePopupInUse] = useState(false);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);

  const handleLanguageToggle = () => {
    setIsLanguagePopupInUse(true);
    setIsLanguagePopupOpen((prev) => !prev);
  };

  const [isNavInUse, setIsNavInUse] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavInUse(true);
    setIsNavOpen((prev) => !prev);
  };

  const logo = <Image src={'/logo.png'} alt={"Altyn Mahal"} width={35} height={35} />

  const locale = useLocale()

  return (
    <>
      <PopupContainer title={t('select_language')} isOpen={isLanguagePopupOpen} onToggle={handleLanguageToggle} isOnUse={isLanguagePopupInUse}>
        {languageData.map((item, index) => (
          <Link key={index} href={"/"} className={cn(`
          bg-zinc-100 py-2 text-center rounded-lg my-1 px-6 whitespace-nowrap hover:bg-zinc-200 transition-all
          ${locale == item.locale && 'bg-primary text-white'}`, className)} locale={item.locale}>
            {item.title}
          </Link>
        ))}
      </PopupContainer>
      <Nav isOnUse={isNavInUse} isOpen={isNavOpen} onToggle={handleNavToggle} logo={logo} data={menuData}></Nav>
      <header className={cn('fixed z-70 w-full flex flex-col items-center h-12 px-1 bg-zinc-100/75 backdrop-blur-md', className)}>
        <div className={cn('flex justify-between h-full w-full max-w-7xl', className)}>
          <HeaderItem link={"#home"}>
            {logo}
          </HeaderItem>
          <HeaderItem className={cn('hidden sm:flex *:mx-2 *:px-1 *:font-medium *:h-full *:flex *:items-center', className)}>
            {menuData.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            ))}
          </HeaderItem>
          <HeaderItem>
            <HeaderItem className={cn('cursor-pointer', className)} onClick={handleLanguageToggle}>
              <LanguagesIcon strokeWidth={1.5} />
            </HeaderItem>
            <HeaderItem className={cn('cursor-pointer sm:hidden', className)} onClick={handleNavToggle}>
              <MenuIcon strokeWidth={1.5} />
            </HeaderItem>
          </HeaderItem>
        </div>
      </header>
    </>
  )
}


interface HeaderItemProps {
  className?: string;
  children: React.ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
  className,
  children,
  link = null,
  onClick
}) => {
  return (
    <div className={cn('h-full px-2 flex items-center', className)} onClick={onClick}>
      {link ?
        <Link href={link}>{children}</Link>
       : 
        <>{children}</>
      }
    </div>
  )
}
