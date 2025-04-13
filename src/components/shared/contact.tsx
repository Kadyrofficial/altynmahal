import { useTranslations } from "next-intl";
import { Section } from "./section";
import { cn } from "@/lib/utils";
import Image from 'next/image'
import { Button } from "../ui";


interface Props {
  className?: string;
}

export const Contact: React.FC<Props> = ({ className }) => {
  const t = useTranslations("Home")

  return (
    <Section id={'contact'}>
      <div className={cn('flex flex-wrap *:w-full *:sm:w-1/2 shadow-[0px_-2px_15px_rgba(100,100,100,0.1)] bg-white rounded-2xl relative z-10', className)}>
        <div className={cn('p-4', className)}>
          <div className={cn('pt-2 pb-4', className)}>
            <span className={cn(`px-4 py-1 rounded-full bg-blue-50 font-medium text-primary text-sm md:text-base cursor-pointer`, className)}>
              {t('contact')}
            </span>
          </div>
          <div className={cn('flex flex-col gap-2 *:border *:rounded-lg *:p-2', className)}>
            <input type="text" placeholder={t('enter_name')} />
            <input type="email" placeholder={t('enter_email')} />
            <textarea className={cn('h-40', className)} placeholder={t('message')} />
          </div>
          <div className={cn('pt-4', className)}>
            <Button className={cn('px-6', className)}>{t('submit')} </Button>
          </div>
        </div>
        <div className={cn('hidden sm:block p-3', className)}>
          <div className={cn('relative h-full rounded-xl overflow-hidden border-1 border-zinc-100', className)}>
            <Image src={"/contact.jpg"} alt={"Contact"} fill className={cn('object-cover', className)} />
          </div>
        </div>
      </div>
    </Section>
  )
}
