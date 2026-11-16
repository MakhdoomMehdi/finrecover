import Link from "next/link";
import { type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "outline-white" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  Icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-orange text-white font-semibold hover:bg-amber hover:text-navy border-2 border-orange hover:border-amber shadow-md hover:shadow-lg",
  secondary:
    "bg-transparent text-navy font-semibold border-2 border-navy hover:bg-navy hover:text-white",
  "outline-white":
    "bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-navy",
  ghost:
    "bg-transparent text-sky-mid font-semibold hover:bg-sky-light/20",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md gap-1.5",
  md: "px-6 py-3 text-base rounded-lg gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  Icon,
  iconPosition = "right",
  className = "",
  external = false,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center transition-all duration-200 active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
