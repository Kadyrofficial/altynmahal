"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui';
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import Image from 'next/image';


interface BannerData {
    image: string
}

interface Props {
    className?: string;
    data: BannerData[]
}

export const BannerContent: React.FC<Props> = ({ className, data }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    return (
        <Carousel opts={{align: "start", loop: true}} plugins={[plugin.current]} className="w-full rounded-xl overflow-hidden">
            <CarouselContent>
                {data.map((item: any) => (
                    <CarouselItem key={item.id}>
                       <Image src={item.image} width={1500} height={0} className='w-full aspect-2/1 md:aspect-3/1 object-cover rounded-xl overflow-hidden' alt="image" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex' />
            <CarouselNext className='hidden md:flex' />
        </Carousel>
    );
}
