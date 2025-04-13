import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


interface Props {
    className?: string;
    title: string;
    children: ReactNode
}

export const ContactBoxContainer: React.FC<Props> = ({ className, children, title }) => {

    return (
        <div className={cn('p-1 h-full', className)}>
            <div className={cn('bg-background h-full rounded-lg p-4 md:p-6 lg:p-8 bg-zinc-50', className)}>
                <p className={cn('font-medium px-2 pb-2 md:pb-3 text-lg md:text-xl ', className)}>
                    {title}
                </p>
                {children}
            </div>
        </div>
    )
}