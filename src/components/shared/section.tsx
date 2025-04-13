import { cn } from "@/lib/utils";
import { ReactNode } from "react";


interface Props {
  className?: string;
  children: ReactNode;
  id?: string | null;
  name?: string | null;
}

export const Section: React.FC<Props> = ({ className, children, id, name }) => {
  return (
    <section id={id ?? undefined} className={cn('flex flex-col items-center p-2 sm:p-4 lg:p-6', className)}>
      <div className={cn('w-full max-w-7xl', className)}>
        {name && (
          <div className={cn('py-2', className)}>
            <span className={cn(`px-4 py-1 rounded-full bg-blue-50 font-medium text-primary text-sm md:text-base cursor-pointer`, className)}>
              {name}
            </span>
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
