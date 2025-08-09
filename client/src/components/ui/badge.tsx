import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        glass:
          "border-transparent text-minimal-white backdrop-blur bg-white/5 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] [background:linear-gradient(transparent,transparent)_padding-box,conic-gradient(from_140deg,rgba(56,189,248,.9),rgba(59,130,246,.9),rgba(125,211,252,.9))_border-box] transition-all duration-300 hover:shadow-[inset_0_0_0_1px_rgba(56,189,248,.5),0_0_18px_rgba(56,189,248,.25)] motion-safe:hover:scale-[1.02)] leading-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
