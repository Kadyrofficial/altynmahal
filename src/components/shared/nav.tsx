import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { JSX } from 'react';


interface MenuData {
  title: string;
  link: string
}

interface Props {
  className?: string;
  isOnUse: boolean;
  isOpen: boolean;
  logo: JSX.Element;
  onToggle: () => void;
  data: MenuData[]
}

export const Nav: React.FC<Props> = ({
  className,
  isOnUse,
  isOpen,
  logo,
  onToggle,
  data
}) => {
  const t = useTranslations("Home")

  return (
    <>
      {isOnUse && (
        <>
          <nav className={cn(`
            z-90 fixed top-0 right-0 w-64 h-full transform translate-x-64 bg-white
            ${isOpen ? 'animate-move-in' : 'animate-move-out'}`, className)}>
            <div className={cn('h-12 flex justify-between border-b', className)}>
              <div className={cn('h-full flex items-center px-2 font-medium text-lg', className)}>
                {logo}
              </div>
              <div className={cn('h-full aspect-square flex items-center justify-center')} onClick={onToggle}>
                <X size={24} />
              </div>
            </div>
            <div className={cn('')}>
              <div>
                <div className={cn('text-center text-lg font-medium py-2', className)}>
                  {t('title')}
                </div>
                <div className={cn('px-4 *:px-4 *:bg-zinc-50 *:my-1 *:py-2 *:rounded-lg *:flex *:justify-between *:items-center font-medium', className)}>
                  {data.map((item, index) => (
                    <Link key={index} href={item.link} onClick={onToggle}>
                      {item.title}
                      <ChevronRight size={20} />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                dsadqfqw
              </div>
            </div>
          </nav>
          <div className={cn(`
            fixed w-full h-full bg-zinc-600/85 backdrop-blur-xl z-80
            ${isOpen ? 'animate-opacity-in' : 'animate-opacity-out'}`, className)} onClick={onToggle}>
          </div>
        </>
      )}
    </>
  )
}
