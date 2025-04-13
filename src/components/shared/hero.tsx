'use client'

import { cn } from "@/lib/utils";
import Image from 'next/image';
import { Button } from "../ui";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";


interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  const t = useTranslations("Home")
  const images = ['/hero-bg.jpg', '/hero-bg-2.jpg', '/hero-bg-3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cn('relative w-full overflow-hidden flex flex-col items-center z-0', className)}>
      <div className="absolute inset-0 bg-black/30 z-10" />
        {images.map((src, index) => (
          <Image key={src} src={src} alt={`Hero Background ${index}`} fill priority className={cn(
            'absolute inset-0 object-cover transition-opacity duration-500 ease-in-out',
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0')} />
        ))}
      <div className={cn('w-full flex flex-col items-center my-6 py-20 lg:py-10 relative z-20 px-6 max-w-7xl', className)}>
        <div className={cn('my-4 *:my-1 *:md:my-3 lg:py-15 text-center', className)}>
          <p className={cn('text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl', className)}>{t('title')}</p>
          <p className={cn('text-white lg:text-xl xl:text-2xl', className)}>{t('subtitle')}</p>
          <div className={cn('flex gap-2 justify-center py-2 lg:hidden', className)}>
            <Link href={"#services"}>
              <Button variant={'outline'}>{t('services')}</Button>
            </Link>
            <Link href={"#contact"}>
              <Button>{t('contact')}</Button>
            </Link>
          </div>
        </div>
        <div className={cn('w-full hidden lg:flex h-55 *:h-full *:p-1 flex-wrap', className)}>
          <div className={cn('w-3/5 *:h-full', className)}>
            <div className={cn('bg-white/75 backdrop-blur-sm rounded-lg p-4 flex', className)}>
              <div className={cn('pr-10 py-2 flex flex-col justify-between', className)}>
                <p className={cn('font-medium text-xl xl:text-2xl', className)}>We have all kind of solutions to deliver your goods</p>
                <Link href={"#services"} className={cn('', className)}>
                  <Button variant={'link'} className={cn('text-zinc-900 hover:text-blue-900 cursor-pointer font-semibold', className)}>{t('our_services')}<ArrowUpRight /></Button>
                </Link>
              </div>
              <div className={cn('', className)}>
                <iframe
                  className={cn('h-full aspect-video rounded-lg', className)}
                  src="https://www.youtube.com/embed/VcTzyIgWfb4?autoplay=0&rel=0"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className={cn('w-2/5 *:h-full', className)}>
            <div className={cn('bg-white/75 backdrop-blur-sm rounded-lg p-4', className)}>
              <div className={cn('flex items-center px-2', className)}>
                <Link href={"#contact"} className={cn('w-2/5', className)}>
                  <Button className={cn('cursor-pointer px-6', className)}>{t('contact')}</Button>
                </Link>
                <p className={cn('w-3/5 text-lg font-medium', className)}>"Mahal” H.J 2021-nji ýyldan bäri Hytaý, Malaziýa, Türkiýe</p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
