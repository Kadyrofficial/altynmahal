import { About, Banner, Contact, FAQ, Footer, Header, Hero, Services } from "@/components/shared";
import { MailIcon, PhoneIcon, Search, ShoppingCart, Truck } from "lucide-react";
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

  const contactData = [
    {
      "title": "+36707800974",
      "icon": <PhoneIcon />,
      "link": "call"
    },
    {
      "title": "h.agayev@altynmahal.com",
      "icon": <MailIcon />,
      "link": "call"
    },
  ]

  const socialData = [
    {
      "icon": <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 512 512"><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fillRule="evenodd"/></svg>,
      "link": "call"
    },
    {
      "icon": <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fillRule="evenodd"/></svg>,
      "link": "call"
    },
    {
      "icon": <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>,
      "link": "call"
    },
    {
      "icon": <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" viewBox="0 0 512 512"><path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"/></svg>,
      "link": "call"
    }
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
      <Footer menuData={menuData} contactData={contactData} socialData={socialData} />
    </>
  );
}
