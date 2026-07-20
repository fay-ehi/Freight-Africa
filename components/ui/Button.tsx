import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl text-[15px] font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-emerald-500 text-white shadow-glow hover:bg-emerald-600 active:bg-emerald-700",
  secondary:
    "bg-white text-navy-900 border border-navy-200 hover:border-navy-300 hover:bg-navy-50 shadow-soft",
  ghost: "text-navy-700 hover:bg-navy-100/60",
  accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-glow",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5",
  lg: "h-[3.25rem] px-7 text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
LinkButton.displayName = "LinkButton";
