import { useTranslations } from "next-intl";
import { Section } from "./section";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";


interface Props {
  className?: string;
  servicesData: ServicesData[];
}

interface ServicesData {
  title_1: string
  title_2: string
  description: string
  icon: ReactNode;
}

export const Services: React.FC<Props> = ({ className, servicesData }) => {
  const t = useTranslations("Home")

  return (
    <Section id={'services'} name={t('services')}>
      <div className={cn('flex flex-wrap *:w-full *:sm:w-1/2 *:xl:w-1/3 *:py-1 *:sm:px-1', className)}>
        {servicesData.map((item, index) => (
          <div key={index} className={cn('*:aspect-3/2 *:rounded-2xl *:bg-zinc-50 *:border-2 *:border-zinc-100 *:p-8', className)}>
            <div>
              <div className={cn('h-1/2', className)}>
                <div className={cn('flex justify-between items-center', className)}>
                  <p className={cn('text-2xl font-semibold', className)}>
                    {item.title_1}
                    <br />
                    {item.title_2}
                  </p>
                  <div>
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className={cn('h-1/2 font-medium overflow-hidden', className)}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
