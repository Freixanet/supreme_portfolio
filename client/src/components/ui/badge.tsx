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
          "border-transparent text-minimal-white backdrop-blur bg-white/5 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] [background:linear-gradient(transparent,transparent)_padding-box,conic-gradient(from_140deg,rgba(56,189,248,.9),rgba(59,130,246,.9),rgba(125,211,252,.9))_border-box] transition-all duration-300 leading-none",
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

function Badge({
  className,
  variant,
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: BadgeProps) {
  const isGlass = variant === "glass";

  // detect if consumer already injected glass layers to avoid duplicates
  const hasOwnGlassLayers = React.useMemo(() => {
    const arr = React.Children.toArray(children);
    return arr.some(
      (c) =>
        React.isValidElement(c) &&
        typeof c.props?.className === "string" &&
        (c.props.className.includes("glass-filter") ||
          c.props.className.includes("glass-overlay") ||
          c.props.className.includes("glass-specular") ||
          c.props.className.includes("glass-content"))
    );
  }, [children]);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isGlass) {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    }
    onMouseMove?.(e);
  };
  const handleLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isGlass) {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--x", `50%`);
      el.style.setProperty("--y", `50%`);
    }
    onMouseLeave?.(e);
  };

  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        isGlass && "relative overflow-hidden glass-button glass-preserve-color [--x:50%] [--y:50%]",
        className
      )}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {isGlass && !hasOwnGlassLayers && (
        <>
          <span className="glass-filter rounded-[inherit]" aria-hidden />
          <span className="glass-overlay rounded-[inherit]" aria-hidden />
          <span className="glass-specular rounded-[inherit]" aria-hidden />
        </>
      )}
      {isGlass && !hasOwnGlassLayers ? (
        <span className="glass-content relative z-[4]">{children}</span>
      ) : (
        children
      )}
    </div>
  );
}

export { Badge, badgeVariants };
