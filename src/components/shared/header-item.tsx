import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";


interface HeaderItemProps {
  className?: string;
  children: React.ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
  
export const HeaderItem: React.FC<HeaderItemProps> = ({
  className,
  children,
  link = null,
  onClick
}) => {
  return (
    <div className={cn('h-full px-2 flex items-center', className)} onClick={onClick}>
      {link ?
        <Link href={link}>{children}</Link>
        : 
        <>{children}</>
      }
    </div>
  )
}
  