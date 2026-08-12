import { Btn, Logo, Marquee, Meta, Reveal, Stars, Watermark, YagoMark, useParallax } from "./ui";
import { IMAGES, PRODUCTS, STORE, WA } from "../lib/data";
import { cn } from "../utils/cn";

/* ================================================================== */
/* 02 — HERO                                                           */
/* ================================================================== */
export function Hero() {
  const y = useParallax(0.05, 40);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-black pt-[5.75rem] md:min-h-[100svh] md:pt-24"
    >
      {/* ambient */}
      <div
        aria-hidden="true"
        className="ambient pointer-events-none absolute -right-40 top-0 h-[70vh] w-[70vh] rounded-full bg-white/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[45vh] w-[45vh] rounded-full bg-white/[0.04] blur-[110px]"
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      {/* thin circular outline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-18vw] top-[8vh] hidden aspect-square w-[58vw] rounded-full border border-white/10 md:block"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-6 px-5 pb-10 md:grid-cols-12 md:gap-8 md:px-10 md:pb-24">
        <div className="md:col-span-7 lg:col-span-6">
          <p className="label enter text-white/50" style={{ animationDelay: "80ms" }}>
            YAGO / ARACAJU — SE
          </p>

          <h1
            className="display enter mt-5 text-white text-[clamp(36px,11vw,116px)] md:mt-6"
            style={{ animationDelay: "160ms" }}
          >
            Seu próximo
            <br />
            <span className="silver-text">iPhone</span> está
            <br />
            aqui.
          </h1>

          <p
            className="enter mt-5 max-w-md text-[14.5px] leading-relaxed text-white/60 md:mt-7 md:text-[17px]"
            style={{ animationDelay: "260ms" }}
          >
            Aparelhos de qualidade, procedência e preços justos em Aracaju.
          </p>

          {/* produto no fluxo mobile: Headline → Product → CTA */}
          <div className="enter-scale relative mx-auto mt-6 flex h-[min(46vh,360px)] w-full max-w-[320px] items-center justify-center md:hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[46%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.10] blur-[60px]"
            />
            <img
              src={IMAGES.hero}
              alt="iPhone premium em composição de campanha"
              className="relative z-[1] h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
              loading="eager"
            />
          </div>

          <div
            className="enter mt-7 flex flex-col gap-3 sm:flex-row md:mt-9"
            style={{ animationDelay: "380ms" }}
          >
            <Btn href="#novos" variant="light" className="w-full sm:w-auto">
              Ver iPhones
            </Btn>
            <Btn href={WA.general} variant="ghostLight" external className="w-full sm:w-auto">
              Falar no WhatsApp
            </Btn>
          </div>

          <ul
            className="enter mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 md:mt-10 md:gap-x-7 md:pt-6"
            style={{ animationDelay: "480ms" }}
          >
            {["Compra na loja", "Retirada", "Entrega"].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 font-display text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/65 sm:text-[11px] sm:tracking-[0.18em]"
              >
                <span className="text-white">✓</span>
                {t}
              </li>
            ))}
          </ul>

          <div
            className="enter mt-5 flex items-center gap-3 text-white/70 md:mt-6"
            style={{ animationDelay: "560ms" }}
          >
            <Stars className="text-white" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.14em] sm:text-[12px] sm:tracking-[0.16em]">
              {STORE.rating} · {STORE.reviews} avaliações no Google
            </span>
          </div>
        </div>

        <div className="relative hidden md:col-span-5 md:block lg:col-span-6">
          <div
            className="enter-scale relative mx-auto flex aspect-[4/5] w-full max-w-[560px] items-center justify-center"
            style={{ animationDelay: "200ms" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[46%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.10] blur-[70px]"
            />
            <img
              src={IMAGES.hero}
              alt="iPhone premium em composição de campanha"
              className="relative z-[1] h-full w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              style={{ transform: `translate3d(0, ${y}px, 0)` }}
              loading="eager"
            />
          </div>

          <div className="absolute -left-1 bottom-6 hidden flex-col gap-1 md:flex">
            <span className="label text-white/40">YAGO / 01</span>
            <span className="label text-white/40">IPHONES / SMARTPHONES</span>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-white/10 py-4 text-white/85">
        <Marquee
          items={["iPhones", "Smartphones", "Realme", "Acessórios", "Aracaju — SE", "Preço justo"]}
        />
      </div>
    </section>
  );
}

/* ================================================================== */
/* 03 — BRAND STATEMENT                                                */
/* ================================================================== */
export function Statement() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-24 text-black md:py-40">
      <Watermark className="-right-10 top-1/2 -translate-y-1/2 text-black/[0.035]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Meta className="text-black/45">YAGO / 02 — Manifesto</Meta>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-8 max-w-5xl text-[clamp(32px,6.4vw,86px)]">
            Tecnologia boa é tecnologia que faz sentido para você.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-12">
          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <p className="text-[16px] leading-relaxed text-black/65 md:text-[18px]">
              Na Yago iPhones, você encontra aparelhos de qualidade, procedência e valores justos,
              com atendimento próximo e personalizado.
            </p>
          </Reveal>
          <Reveal delay={60} className="order-first md:order-none md:col-span-4">
            <div className="flex items-start gap-4">
              <YagoMark className="h-9 w-9 shrink-0" />
              <p className="font-display text-[13px] font-bold uppercase leading-relaxed tracking-[0.14em]">
                Tecnologia premium.
                <br />
                Preço justo.
                <br />
                Atendimento de verdade.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 04 — PRODUCT SHOWCASE                                               */
/* ================================================================== */
function ProductCard({
  p,
  className,
  ratio,
}: {
  p: (typeof PRODUCTS)[number];
  className?: string;
  ratio?: string;
}) {
  return (
    <article
      className={cn(
        "card-lift group relative flex w-[78vw] max-w-[320px] shrink-0 flex-col bg-black text-white sm:w-auto sm:max-w-none",
        className,
      )}
    >
      <div className={cn("relative aspect-[4/5] overflow-hidden bg-black", ratio)}>
        <img
          src={p.image}
          alt={`${p.model} ${p.storage}`}
          loading="lazy"
          className={cn(
            "relative z-[1] h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]",
            p.cutout
              ? "object-contain object-center px-4 pb-24 pt-6 sm:px-6"
              : "object-cover object-center",
          )}
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/25 to-transparent" />
        <span className="label absolute left-4 top-4 z-[3] border border-white/25 px-2.5 py-1 text-white/85 backdrop-blur-sm">
          {p.condition}
        </span>
        <div className="absolute inset-x-4 bottom-4 z-[3] flex items-end justify-between">
          <div>
            <p className="label text-white/50">{p.brand}</p>
            <h3 className="display mt-1.5 text-[26px] md:text-[30px]">{p.model}</h3>
            <p className="mt-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
              {p.storage}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4 border-t border-white/10 px-4 py-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{p.note}</p>
          <p className="display mt-2 text-[24px] md:text-[28px]">{p.price}</p>
        </div>
        <a
          href={WA.product(p.model, p.storage)}
          target="_blank"
          rel="noreferrer noopener"
          className="group/btn inline-flex shrink-0 items-center gap-2 border-b border-white/40 pb-1 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors hover:border-white hover:text-white"
        >
          Ver aparelho
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="iphones" className="relative overflow-hidden bg-off py-16 text-black md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Meta className="text-black/45">YAGO / 03 — Aparelhos</Meta>
            <h2 className="display mt-6 text-[clamp(40px,9vw,110px)]">Escolha o seu.</h2>
          </Reveal>
          <Reveal delay={120} className="max-w-xs">
            <p className="text-[15px] leading-relaxed text-black/60">
              Estoque atualizado semanalmente. Não achou o modelo? Fale com a gente que buscamos
              para você.
            </p>
          </Reveal>
        </div>

        {/* mobile: horizontal scroll — desktop: asymmetric grid */}
        <div className="rail no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible lg:px-0">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 70}
              className={cn(
                "snap-start",
                i === 0 && "lg:col-span-4",
                i === 1 && "lg:col-span-2",
                i === 2 && "lg:col-span-2",
                i === 3 && "lg:col-span-4",
                i > 3 && "lg:col-span-3",
              )}
            >
              <ProductCard
                p={p}
                ratio={
                  [
                    "lg:aspect-[16/11]",
                    "lg:aspect-[3/4]",
                    "lg:aspect-[3/4]",
                    "lg:aspect-[16/11]",
                    "lg:aspect-[4/3]",
                    "lg:aspect-[4/3]",
                  ][i]
                }
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-start gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-black/60">
              Modelos e valores sujeitos à disponibilidade de estoque.
            </p>
            <Btn href={WA.iphones} variant="dark" external>
              Consultar estoque
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 05 — PREÇO / VALOR                                                  */
/* ================================================================== */
export function ValueSection() {
  const pillars = [
    {
      n: "01",
      title: "Qualidade",
      text: "Aparelhos testados e revisados antes de chegarem até você.",
    },
    {
      n: "02",
      title: "Procedência",
      text: "Origem verificada, nota fiscal e transparência em cada venda.",
    },
    {
      n: "03",
      title: "Preço justo",
      text: "Valor honesto, sem inflar preço e sem parecer bom demais.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-32">
      <div
        aria-hidden="true"
        className="ambient pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="max-w-4xl">
          <Meta className="text-white/40">YAGO / 04 — Valor</Meta>
          <h2 className="display mt-7 text-[clamp(38px,8vw,100px)]">
            Tecnologia premium.
            <br />
            <span className="silver-text">Preço justo.</span>
          </h2>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-white/55 md:text-[17px]">
            Produtos selecionados para você encontrar o aparelho certo sem pagar mais do que
            precisa.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 100}
              className="group relative bg-black p-7 transition-colors duration-500 hover:bg-graphite md:p-10"
            >
              <span className="display text-[12px] tracking-[0.3em] text-white/35">{p.n}</span>
              <h3 className="display mt-8 text-[clamp(30px,5vw,54px)] uppercase">{p.title}</h3>
              <p className="mt-5 max-w-[30ch] text-[14.5px] leading-relaxed text-white/55">
                {p.text}
              </p>
              <span className="mt-10 block h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Bloco de logo grande reutilizável */
export function LogoBand() {
  return (
    <div className="flex items-center justify-center bg-black py-10 text-white">
      <Logo size="lg" className="opacity-90" />
    </div>
  );
}
