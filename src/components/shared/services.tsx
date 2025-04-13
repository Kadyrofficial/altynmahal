import { cn } from '@/lib/utils';
import { Section } from './section';
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface Props {
    className?: string;
}

export const Services: React.FC<Props> = ({ className }) => {
    const t = useTranslations("Services")
    
    const services = [
        {
            'image': '/frontend.webp',
            'title': 'cfwefew'
        },
        {
            'image': '/backend.webp',
            'title': 'cfwefew'
        },
        {
            'image': '/design.webp',
            'title': 'cfwefew'
        },
        {
            'image': '/mobile.webp',
            'title': 'cfwefew'
        }
    ]
    
    return (
        <Section id={'services'} name={'Services'}>
            <div className={cn('flex flex-wrap *:w-full sm:*:w-1/2 *:relative *:aspect-5/3', className)}>
                {services.map((item, index) => (
                    <div key={index} className={cn('relative', className)}>
                        <p className={cn('absolute z-10 w-full h-3/8 text-center text-2xl font-bold text-background items-center flex justify-center', className)}>
                            {item.title}
                        </p>
                        <Image src={item.image} className={cn('p-1 xl:p-2 rounded-xl object-cover', className)} fill alt={item.title} />
                    </div>
                ))}
            </div>
        </Section>
    );
};
