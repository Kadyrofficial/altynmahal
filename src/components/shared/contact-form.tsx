"use client"

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Textarea } from "../ui";

interface Props {
    className?: string
}

export const ContactForm: React.FC<Props> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isNarrow, setisNarrow] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setisNarrow(containerRef.current.offsetWidth < 400)
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className={cn('flex flex-col', className)}>
            {isNarrow !== undefined && (
                <>
                    <div className={cn('flex flex-row flex-wrap *:p-1', className)}>
                        <div className={`${isNarrow ? 'w-full' : 'w-1/2'}`}>
                            <Input type="text" placeholder="First name" />
                        </div>
                        <div className={`${isNarrow ? 'w-full' : 'w-1/2'}`}>
                            <Input type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div className={cn('flex flex-row flex-wrap *:p-1', className)}>
                        <div className={`${isNarrow ? 'w-full' : 'w-1/2'}`}>
                            <Input type="email" placeholder="Email" />
                        </div>
                        <div className={`${isNarrow ? 'w-full' : 'w-1/2'}`}>
                            <Input type="tel" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className={cn('p-1', className)}>
                        <Textarea name="Message" id="" placeholder="Message"></Textarea>
                    </div>
                    <div className={cn('p-1', className)}>
                        <Button type="submit" className={cn('cursor-pointer px-6', className)}>Submit</Button>
                    </div>
                </>
            )}
        </div>
    )
}
