'use client'

import { cn } from "@/lib/utils";
import Image from 'next/image';
import { Button } from "../ui";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";


interface Props {
  className?: string;
}


const ContactLink: React.FC<Props> = () => {
  const t = useTranslations("Home")

  return (
    <Link href={"#contact"}>
      <Button variant={'outline'}>{t('contact')}</Button>
    </Link>
  );
};


const AboutLink: React.FC<Props> = () => {
  const t = useTranslations("Home")

  return (
    <Link href={"#about"}>
      <Button>{t('about')}</Button>
    </Link>
  );
};


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
      <div className={cn('w-full flex flex-col items-center my-6 py-20 xl:py-30 relative z-20 px-6 max-w-5xl', className)}>
        <div className={cn('my-4 *:my-1 *:md:my-3 text-center', className)}>
          <p className={cn('text-white font-bold text-2xl md:text-3xl xl:text-4xl', className)}>{t('title')}</p>
          <p className={cn('text-white lg:text-lg', className)}>{t('subtitle')}</p>
          <div className={cn('flex gap-2 justify-center py-2 md:hidden', className)}>
            <AboutLink />
            <ContactLink />
          </div>
        </div>
        <div className={cn('w-full hidden md:flex *:w-1/2 *:p-1 flex-wrap', className)}>
          <div>
            <div className={cn('bg-white/65 aspect-3/1 backdrop-blur-md rounded-lg p-4 flex', className)}>
              <div>
                <p className={cn('font-medium', className)}>We have all kind of solutions to deliver your goods</p>
                <Link href={"#about"}>
                  <Button>{t('about')}</Button>
                </Link>
              </div>
              <div className={cn('', className)}>
                <Image src={"/hero-bg-2.jpg"} fill alt={""} className={cn('rounded-lg w-4/1 aspect-square', className)} />
              </div>
            </div>
          </div>
          <div>
            <div className={cn('bg-white/65 aspect-3/1 backdrop-blur-md rounded-lg p-4', className)}>
              <p>We have all kind of solutions to deliver your goods</p>
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
