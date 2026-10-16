import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white hover:text-brand-deep btn-fill border border-brand",
  secondary:
    "bg-transparent text-brand border border-brand/30 hover:border-brand btn-fill",
  ghost: "bg-transparent text-brand border border-transparent hover:border-brand/20",
  light:
    "bg-white text-brand hover:text-brand-deep btn-fill border border-white",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: Props) {
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel"));
  const classes = `group inline-flex items-center gap-3 rounded-sm px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
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
