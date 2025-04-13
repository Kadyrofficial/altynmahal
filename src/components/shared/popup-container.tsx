import { cn } from "@/lib/utils";
import { X } from "lucide-react";


interface Props {
    className?: string;
    children: React.ReactNode;
    title: string;
    isOnUse: boolean;
    isOpen: boolean;
    onToggle: () => void;
  }

export const PopupContainer: React.FC<Props> = ({
  className,
  children,
  title,
  isOnUse,
  isOpen,
  onToggle
}) => {
 
  return (
    <>
      {isOnUse && (
        <>
          <div className={cn(`
            bg-white rounded-lg p-3 shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-90
            ${isOpen ? 'animate-scale-in' : 'animate-scale-out'}`, className)}>
            <div className={cn('flex justify-end cursor-pointer', className)} onClick={onToggle}>
              <X size={16} />
            </div>
            <div className={cn('flex flex-col px-4', className)}>
              <div className={cn('font-medium text-center py-2', className)}>
                {title}
              </div>
              {children}
            </div>
          </div>
          <div className={cn(`
            fixed w-full h-full bg-zinc-100/85 backdrop-blur-xl z-80
            ${isOpen ? 'animate-opacity-in' : 'animate-opacity-out'}`, className)} onClick={onToggle}>
          </div>
        </>
      )}
    </>
  )
}
