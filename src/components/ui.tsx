import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

export function useIsMobile(query = "(max-width: 767px)") {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [query]);
  return mobile;
}

export function useParallax(factor = 0.05, max = 40) {
  const [y, setY] = useState(0);
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile();

  useEffect(() => {
    if (reduced || mobile) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setY(Math.min(window.scrollY * factor, max));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [factor, max, reduced, mobile]);

  return y;
}

export function YagoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.05 12.54c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.85 1.42-2.92-.03-.01-2.72-1.04-2.75-4.12z" />
      <path d="M14.6 4.9c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.58 3.03-1.44z" />
    </svg>
  );
}

export function Logo({
  className,
  size = "md",
  stacked = true,
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  stacked?: boolean;
}) {
  const sizes: Record<string, string> = {
    sm: "text-[18px] sm:text-[19px]",
    md: "text-[24px] sm:text-[26px]",
    lg: "text-[40px] sm:text-[54px]",
    xl: "text-[clamp(48px,14vw,190px)]",
  };
  return (
    <span
      className={cn("inline-flex select-none flex-col leading-none", className)}
      aria-label="Yago iPhones"
    >
      <span className={cn("display inline-flex items-center leading-none", sizes[size])}>
        <span>YAG</span>
        <YagoMark className="ml-[0.06em] h-[0.86em] w-[0.86em]" />
      </span>
      {stacked && (
        <span
          className="mt-[0.32em] font-display font-medium uppercase leading-none opacity-80"
          style={{ fontSize: "0.31em", letterSpacing: "0.44em" }}
        >
          iPhones
        </span>
      )}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span" | "section" | "article" | "header";
  variant?: "up" | "left" | "scale";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const mobile = useIsMobile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as never}
      className={cn(
        "reveal",
        variant === "left" && "reveal-left",
        variant === "scale" && "reveal-scale",
        visible && "is-visible",
        className,
      )}
      style={{ transitionDelay: `${mobile ? Math.min(delay, 90) : delay}ms` }}
    >
      {children}
    </Comp>
  );
}

export function Meta({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("label inline-flex items-center gap-2", className)}>
      <span className="inline-block h-px w-6 bg-current opacity-50" />
      {children}
    </span>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark" | "ghostLight" | "ghostDark" | "wa";
  className?: string;
  external?: boolean;
};

export function Btn({ href, children, variant = "light", className, external }: BtnProps) {
  const base =
    "btn-shine group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden px-5 py-3.5 font-display text-[11.5px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300 active:scale-[0.98] sm:min-h-0 sm:px-7 sm:py-4 sm:text-[12.5px] sm:tracking-[0.16em]";
  const styles: Record<string, string> = {
    light: "bg-white text-black hover:bg-lightgray",
    dark: "bg-black text-white hover:bg-graphite",
    ghostLight: "border border-white/25 text-white hover:border-white hover:bg-white hover:text-black",
    ghostDark: "border border-black/20 text-black hover:border-black hover:bg-black hover:text-white",
    wa: "bg-white text-black hover:bg-lightgray",
  };
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(base, styles[variant], className)}
    >
      {variant === "wa" && <WhatsIcon className="h-4 w-4" />}
      <span className="relative">{children}</span>
      <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.9 9.9 0 0 0 4.83 1.24h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 19.07 4.9 9.9 9.9 0 0 0 12.04 2zm0 1.82c2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.66 8.15-8.16 8.15a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.09.81.83-3.01-.2-.31a8.11 8.11 0 0 1-1.25-4.33c0-4.5 3.66-8.15 8.16-8.15zm-3.2 4.2c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.55 2.02.8 2.43.64 2.87.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.3-.74-1.78-.19-.46-.39-.4-.53-.4l-.45-.01z" />
    </svg>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M12 2.6l2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.44l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95L12 2.6z" />
        </svg>
      ))}
    </span>
  );
}

export function Marquee({
  items,
  className,
  fast,
  separator = "/",
}: {
  items: string[];
  className?: string;
  fast?: boolean;
  separator?: string;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="display whitespace-nowrap px-5 text-[clamp(22px,5vw,64px)] uppercase sm:px-6">
            {t}
          </span>
          <span className="text-[clamp(18px,3vw,40px)] opacity-30">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={cn("marquee-pause overflow-hidden", className)}>
      <div className={cn("marquee-track", fast && "fast")}>
        {row}
        {row}
      </div>
    </div>
  );
}

export function Watermark({ className, text = "YAGO" }: { className?: string; text?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute display select-none text-[min(22vw,180px)] leading-none",
        className,
      )}
    >
      {text}
    </span>
  );
}
