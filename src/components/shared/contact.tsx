import { cn } from "@/lib/utils";
import React from "react";
import { Section } from "./section";
import { ContactBoxContainer } from "./contact-box-container";
import { FacebookIcon, Instagram, InstagramIcon } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./contact-form";


interface Props {
    className?: string
}



export const Contact: React.FC<Props> = ({ className }) => {
    const followData = [
        {
            'link': '',
            'icon': (<FacebookIcon className={cn('fill-blue-900 stroke-none', className)} />)
        },
        {
            'link': '',
            'icon': (<InstagramIcon className={cn('stroke-blue-900', className)} />)
        },
        {
            'link': '',
            'icon': (<FacebookIcon />)
        },
        {
            'link': '',
            'icon': (<FacebookIcon />)
        },
        {
            'link': '',
            'icon': (<FacebookIcon />)
        },
        {
            'link': '',
            'icon': (<FacebookIcon />)
        },
    ]

    return (
       <Section id={"contact"} name={'Contact'}>
            <div className={cn('flex flex-wrap *:w-full sm:*:w-1/2', className)}>
                <ContactBoxContainer title={"Send me mail"}>
                    <ContactForm />
                </ContactBoxContainer>
                <div className={cn('flex flex-col', className)}>
                    <ContactBoxContainer title={"Follow me"}>
                        <div className="px-2 flex gap-2 *:p-2 *:rounded-full *:bg-blue-50 *:hover:bg-blue-100/80">
                            {followData.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </ContactBoxContainer>
                    <ContactBoxContainer title={"Contact"}>
                        <div>
                            ghe
                        </div>
                    </ContactBoxContainer>
                </div>
            </div>
       </Section>
    )
}
