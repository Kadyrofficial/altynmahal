import { useTranslations } from "next-intl";
import { Section } from "./section";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui";


interface Props {
  className?: string;
  faqData: FAQData[];
}

interface FAQData {
  value: string;
  title: string;
  content: string;
}

export const FAQ: React.FC<Props> = ({ className, faqData }) => {
  const t = useTranslations("Home")

  return (
    <Section id={'faq'} name={t('faq')}>
      <div className={cn('flex flex-wrap *:w-full *:md:w-1/2 *:px-2 *:py-1', className)}>
        <p className={cn('text-2xl font-medium line-clamp-1 truncate', className)}>
          {t('frequently-asked-questions')}
        </p>
        <div>
          <Accordion type="single" collapsible>
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  )
}
