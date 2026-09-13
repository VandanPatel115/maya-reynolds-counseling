import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3.5",
        "font-body text-[0.78rem] font-medium uppercase tracking-[0.16em]",
        "transition-colors duration-200",
        variant === "solid" &&
          "bg-sage text-cream hover:bg-sage-deep",
        variant === "outline" &&
          "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
        className
      )}
    >
      {children}
    </Link>
  );
}