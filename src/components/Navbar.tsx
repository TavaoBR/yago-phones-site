import { useEffect, useState } from "react";
import { Logo, WhatsIcon } from "./ui";
import { cn } from "../utils/cn";
import { WA } from "../lib/data";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Novos", href: "#novos" },
  { label: "Seminovos", href: "#seminovos" },
  { label: "iPhones", href: "#iphones" },
  { label: "Smartphones", href: "#smartphones" },
  { label: "Sobre", href: "#sobre" },
];

const MENU = [
  ...LINKS,
  { label: "Acessórios", href: "#acessorios" },
  { label: "Ofertas", href: "#ofertas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 safe-t transition-all duration-500",
          scrolled || open
            ? "border-b border-white/10 bg-black/85 backdrop-blur-xl supports-[backdrop-filter]:bg-black/65"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a
            href="#inicio"
            className={cn(
              "flex items-center text-white transition-all duration-500",
              scrolled ? "py-3" : "py-4 sm:py-5",
            )}
          >
            <Logo size="sm" />
          </a>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Navegação principal">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white xl:text-[12px] xl:tracking-[0.18em]"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA.general}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-shine hidden items-center gap-2 overflow-hidden bg-white px-5 py-3 font-display text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-lightgray md:inline-flex"
            >
              <WhatsIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-white/20 text-white transition-colors hover:border-white/60 lg:hidden"
            >
              <span
                className={cn(
                  "block h-px w-5 bg-current transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-current transition-transform duration-300",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-black transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="grain absolute inset-0 opacity-60" aria-hidden="true" />
        <nav
          className="relative mt-24 flex flex-1 flex-col justify-center overflow-y-auto px-6 pb-10"
          aria-label="Menu"
        >
          {MENU.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-b border-white/10 py-3.5 text-white sm:py-4"
              style={{
                transitionDelay: `${i * 40}ms`,
                transform: open ? "none" : "translateY(14px)",
                opacity: open ? 1 : 0,
                transition: "transform .5s cubic-bezier(.16,1,.3,1), opacity .5s",
              }}
            >
              <span className="display text-[28px] sm:text-[34px]">{l.label}</span>
              <span className="label text-white/35">0{i + 1}</span>
            </a>
          ))}
          <a
            href={WA.general}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-5 font-display text-[13px] font-extrabold uppercase tracking-[0.16em] text-black"
          >
            <WhatsIcon className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <p className="label mt-8 text-white/35">Yago / Aracaju — SE</p>
        </nav>
      </div>
    </>
  );
}
