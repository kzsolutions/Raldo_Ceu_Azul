import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  external?: never;
}

interface AnchorProps extends BaseProps {
  href: string;
  external?: boolean;
  to?: never;
}

type ButtonProps = LinkProps | AnchorProps;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white shadow-soft hover:bg-brand-blue-dark hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-navy-deep hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border border-brand-navy/25 text-brand-navy bg-white hover:border-brand-navy hover:bg-brand-navy hover:text-white hover:-translate-y-0.5",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
  light:
    "bg-white/95 text-brand-navy hover:bg-white hover:-translate-y-0.5 shadow-soft",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "", icon, iconRight } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">{iconRight}</span>
      )}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  const { href, external } = props as AnchorProps;
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
