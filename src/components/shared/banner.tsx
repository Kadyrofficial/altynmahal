'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import React from "react"
import { cn } from '@/lib/utils';
import { Section } from './section';


interface Props {
  className?: string;
  bannerData: BannerData[]
}

interface BannerData {
  image: string
}

export const Banner: React.FC<Props> = ({ className, bannerData }) => {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <Section>
      <div className={cn('max-w-7xl', className)}>
        <Carousel opts={{align: "start", loop: true}} plugins={[plugin.current]} className="rounded-xl overflow-hidden border-1">
          <CarouselContent>
            {bannerData.map((item, index) => (
              <CarouselItem key={index}>
                <Image src={item.image} width={1500} height={0} className='w-full aspect-2/1 md:aspect-3/1 object-cover rounded-xl overflow-hidden' alt="image" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};
