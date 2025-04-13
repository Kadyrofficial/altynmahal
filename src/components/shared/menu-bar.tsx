import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { RefObject } from "react";


interface Props {
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    buttonRef: RefObject<HTMLSpanElement | null>;
}

export const MenuBar: React.FC<Props> = ({ className, isOpen, setIsOpen, buttonRef }) => {
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    return (
        <span ref={buttonRef} onClick={handleClick} className={cn('relative flex items-center sm:hidden', className)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className={cn(`size-6 ${isOpen ? 'stroke-zinc-900' : 'stroke-zinc-700'}`, className)}>
                <motion.path d="M3.75 9 H20.25" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} />
                <motion.path d="M3.75 15.75 H20.25" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} />
            </svg>
        </span>
    )
}
