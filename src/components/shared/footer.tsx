import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";


interface Props {
  className?: string;
  menuData: MenuData[];
  contactData: ContactData[];
  socialData: SocialData[];
}

interface MenuData {
  title: string;
  link: string;
}

interface ContactData {
  title: string;
  icon: ReactNode;
  link: string;
}

interface SocialData {
  icon: ReactNode;
  link: string;
}

export const Footer: React.FC<Props> = async ({ className, menuData, contactData, socialData }) => {
  const t = await getTranslations("Home")

  return (
    <footer className={cn('absolute bg-zinc-800 w-full [clip-path:polygon(0_0,100%_20%,100%_100%,0%_100%)] transform -translate-y-70 px-4 flex flex-col items-center', className)}>
      <div className={cn('mt-75 text-white w-full max-w-7xl', className)}>
        <div className={cn('flex flex-wrap  py-5 *:md:w-1/4 *:p-3', className)}>
          <div className={cn('w-full', className)}>
            <p className={cn('text-xl lg:text-2xl font-medium', className)}>{t('title')}</p>
            <p className={cn('text-sm lg:text-base', className)}>{t('hj')}</p>
          </div>
          <div className={cn('w-1/2', className)}>
            <p className={cn('text-white text-xl pb-2 border-b mr-6', className)}>{t('links')}</p>
            <div className={cn('py-4 *:text-zinc-200 *:hover:text-white flex flex-col gap-2 transition-all', className)}>
              {menuData.map((item, index) => (
                <Link key={index} href={item.link}>{item.title}</Link>
              ))}
            </div>
          </div>
          <div className={cn('w-1/2', className)}>
            <p className={cn('text-white text-xl pb-2 border-b mr-6', className)}>{t('social-media')}</p>
            <div className={cn('flex flex-wrap gap-4 py-4', className)}>
              {socialData.map((item, index) => (
                <Link key={index} className={cn('w-7', className)} href={item.link}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className={cn('w-full', className)}>
            <p className={cn('text-white text-xl pb-2 border-b mr-6', className)}>{t('contact')}</p>
            <div className={cn('flex flex-col gap-3 py-4', className)}>
              {contactData.map((item, index) => (
                <Link key={index} className={cn('w-7 flex items-center gap-3', className)} href={item.link}>
                  <div>
                    {item.icon}
                  </div>
                  <div>
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={cn('border-t border-white py-3 text-zinc-300', className)}>
          {t('copyright')}
        </div>
      </div>
    </footer>
  )
}
