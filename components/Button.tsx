import * as React from "react";

import { cn } from "@/lib/utils";

export interface TitleProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, TitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-7 py-4 bg-accent rounded-full font-semibold text-[#252032] flex items-center justify-center sm:w-full text-nowrap",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Input";

export { Button };
