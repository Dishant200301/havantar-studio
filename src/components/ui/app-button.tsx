import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "filled" | "light" | "glass";

const base =
  "btn-textup inline-flex items-center justify-center rounded-full uppercase font-inter font-normal px-6 py-3 text-[13px] leading-[16px] tracking-[0.02em] transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap";

const styles: Record<Variant, string> = {
  filled: "bg-[#504843] text-[#F0EBE6] hover:bg-[#3f3835]",
  light: "bg-[#F0EBE6] text-[#4F4742] hover:bg-[#e6dfd6]",
  glass:
    "bg-white/10 text-[#F0EBE6] border border-white/25 backdrop-blur-md hover:bg-white/20",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function Button({
  variant = "filled",
  children,
  icon,
  className,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, styles[variant], className)} {...rest}>
      {/* Hidden placeholder to size the button */}
      <span className="flex items-center gap-2 opacity-0 pointer-events-none" aria-hidden>
        {children}
        {icon}
      </span>
      <span className="lbl orig absolute inset-0 flex items-center justify-center gap-2">
        {children}
        {icon}
      </span>
      <span className="lbl copy absolute inset-0 flex items-center justify-center gap-2" aria-hidden>
        {children}
        {icon}
      </span>
    </button>
  );
}

export function LinkButton({
  variant = "filled",
  children,
  icon,
  className,
  to,
  ...rest
}: CommonProps & Omit<LinkProps, "children">) {
  return (
    <Link to={to} className={cn(base, styles[variant], className)} {...rest}>
      {/* Hidden placeholder to size the button */}
      <span className="flex items-center gap-2 opacity-0 pointer-events-none" aria-hidden>
        {children}
        {icon}
      </span>
      <span className="lbl orig absolute inset-0 flex items-center justify-center gap-2">
        {children}
        {icon}
      </span>
      <span className="lbl copy absolute inset-0 flex items-center justify-center gap-2" aria-hidden>
        {children}
        {icon}
      </span>
    </Link>
  );
}

export default Button;
