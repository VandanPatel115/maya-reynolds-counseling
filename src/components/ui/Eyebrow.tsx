import { cn } from "@/lib/utils";

export default function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-body text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sage",
        className
      )}
    >
      {children}
    </p>
  );
}