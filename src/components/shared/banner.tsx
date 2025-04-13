import { Section } from './section';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import React from "react"


interface Props {
  className?: string;
}

export const Banner: React.FC<Props> = async ({ className }) => {

  const data = [
    {
      "image": "/banners/banner1.jpg"
    },
    {
      "image": "/banners/banner2.jpg"
    },
    {
      "image": "/banners/banner3.jpg"
    },
    {
      "image": "/banners/banner4.jpg"
    },
    {
      "image": "/banners/banner5.jpg"
    },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <Section id={'home'}>
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
    </Section>
  );
};
