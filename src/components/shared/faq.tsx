import React from "react";
import {cn} from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui";
import { useTranslations } from 'next-intl';
import { Section } from "./section";


interface FAQItem {
    id: number;
    title: string;
    content: string;
};

const FAQData: FAQItem[] = [
    {
        'id': 1,
        'title': 'Esasy sahypa',
        'content': 'Esasy sahypa',
    },
    {
        'id': 2,
        'title': 'Esasy sahypa',
        'content': 'Esasy sahypa',
    }
]

interface Props {
    className?: string
}

export const FAQ: React.FC<Props> = ({className}) => {
    const t = useTranslations('Home');

    return (
        <Section id={'faq'} name={'FAQ'}>
            <Accordion type="single" className={cn('px-2', className)} collapsible>
                {FAQData.map((item) => (
                    <AccordionItem key={item.id} value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Section>
    )
}
