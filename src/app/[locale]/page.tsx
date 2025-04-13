import { About, Banner, Contact, FAQ, Footer, Header, Hero, Services } from "@/components/shared";
import { cn } from "@/lib/utils";
import { Search, ShoppingCart, Truck } from "lucide-react";
import { getTranslations } from 'next-intl/server'
import React from "react";


export default async function Home() {
  const t = await getTranslations('Home')

  const menuData = [
    {
      'title': t('about'),
      'link': '#about'
    },
    {
      'title': t('services'),
      'link': '#services'
    },
    {
      'title': t('faq'),
      'link': '#faq'
    },
    {
      'title': t('contact'),
      'link': '#contact'
    }
  ]

  const bannerData = [
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

  const languageData = [
    {
      'title': 'Türkmen dili',
      'locale': 'tm'
    },
    {
      'title': 'Русский Язык',
      'locale': 'ru'
    },
    {
      'title': 'English',
      'locale': 'en'
    }
  ]

  const faqData = [
    {
      "value": "item-1",
      "title": "Is it accessible?",
      "content": "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "value": "item-2",
      "title": "Is it accessible?",
      "content": "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "value": "item-3",
      "title": "Is it accessible?",
      "content": "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "value": "item-4",
      "title": "Is it accessible?",
      "content": "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "value": "item-5",
      "title": "Is it accessible?",
      "content": "Yes. It adheres to the WAI-ARIA design pattern."
    }
  ]
  
  const servicesData = [
    {
      "title_1": t('service-1-title-1'),
      "title_2": t('service-1-title-2'),
      "description": t('service-1-description'),
      "icon": <Search size={45} className='stroke-primary' />
    },
    {
      "title_1": t('service-2-title-1'),
      "title_2": t('service-2-title-2'),
      "description": t('service-2-description'),
      "icon": <ShoppingCart size={45} className='stroke-primary' />
    },
    {
      "title_1": t('service-3-title-1'),
      "title_2": t('service-3-title-2'),
      "description": t('service-3-description'),
      "icon": <Truck size={45} className='stroke-primary' />
    },
  ]

  return (
    <>
      <Header menuData={menuData} languageData={languageData} />
      <Hero />
      <About />
      <Banner bannerData={bannerData} />
      <Services servicesData={servicesData} />
      <FAQ faqData={faqData} />
      <Contact />
      <Footer menuData={menuData} />
    </>
  );
}
