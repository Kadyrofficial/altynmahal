import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from 'next/image'


interface Props {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  const t = useTranslations("Home")

  return (
    <section id="about" className={cn('bg-white transform -translate-y-6 rounded-t-3xl py-10 flex flex-col items-center p-2 sm:p-4 lg:p-6', className)}>
      <div className={cn('max-w-7xl', className)}>
        <div className={cn('py-2', className)}>
          <span className={cn(`px-4 py-1 rounded-full bg-blue-50 font-medium text-primary text-sm md:text-base cursor-pointer`, className)}>
            {t('about')}
          </span>
        </div>
        <div className={cn('flex flex-wrap *:w-full sm:*:w-1/2', className)}>
          <div className={cn('text-center py-4 md:py-10 lg:py-15 px-4 md:px-10 lg:px-15 xl:px-20', className)}>
            <div className={cn('py-2 lg:py-4', className)}>
              <p className={cn('text-4xl md:text-5xl font-semibold')}>{t('mahal')}</p>
              <p className={cn('text-lg md:text-xl font-medium')}>{t('hj')}</p>
            </div>
            <p className={cn('md:text-lg py-1 lg:py-4', className)}>{t('about_content')}</p>
          </div>
          <div>
            <div className={cn('relative h-full aspect-3/2 sm:aspect-auto rounded-xl overflow-hidden', className)}>
              <Image src={"/about.jpg"} alt={""} fill className={cn('object-cover', className)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
