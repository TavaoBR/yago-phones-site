import { Meta, Reveal, Stars, Watermark } from "./ui";
import { IMAGES, STORE, TESTIMONIALS, WA } from "../lib/data";
import { cn } from "../utils/cn";

/* ================================================================== */
/* 06 — CATEGORIAS                                                     */
/* ================================================================== */
function CatBlock({
  id,
  title,
  text,
  image,
  index,
  className,
  imgClass,
}: {
  id?: string;
  title: string;
  text: string;
  image: string;
  index: string;
  className?: string;
  imgClass?: string;
}) {
  return (
    <a
      id={id}
      href={WA.general}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "group relative block overflow-hidden bg-black scroll-mt-24",
        className,
      )}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06] group-hover:opacity-100",
          imgClass,
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <span className="label text-white/50">YAGO / {index}</span>
        <div>
          <h3 className="display text-[clamp(30px,5.5vw,60px)] text-white">{title}</h3>
          <p className="mt-2 max-w-[30ch] text-[14px] text-white/60">{text}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-white">
            Ver opções
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export function Categories() {
  return (
    <section id="smartphones" className="relative overflow-hidden bg-graphite py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Meta className="text-white/40">YAGO / 05 — Categorias</Meta>
          <h2 className="display mt-6 text-[clamp(38px,8vw,96px)] text-white">
            Mais opções para você.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-[280px_240px] lg:grid-rows-[340px_280px]">
          <Reveal className="md:col-span-5 md:row-span-2">
            <CatBlock
              title="iPhones"
              text="Os modelos que você procura."
              image={IMAGES.catIphones}
              index="A1"
              className="h-[300px] sm:h-[380px] md:h-full"
              imgClass="object-cover object-[50%_42%]"
            />
          </Reveal>
          <Reveal delay={90} className="md:col-span-7">
            <CatBlock
              id="smartphones-bloco"
              title="Smartphones"
              text="Mais marcas. Mais possibilidades."
              image={IMAGES.catSmartphones}
              index="A2"
              className="h-[240px] sm:h-[300px] md:h-full"
              imgClass="object-cover object-[50%_55%]"
            />
          </Reveal>
          <Reveal delay={150} className="md:col-span-4">
            <CatBlock
              id="acessorios"
              title="Acessórios"
              text="Complete sua experiência."
              image={IMAGES.catAcessorios}
              index="A3"
              className="h-[220px] sm:h-[280px] md:h-full"
              imgClass="object-cover object-center"
            />
          </Reveal>
          <Reveal delay={210} className="md:col-span-3">
            <CatBlock
              id="ofertas"
              title="Ofertas"
              text="Boas oportunidades, sem complicação."
              image={IMAGES.catOfertas}
              index="A4"
              className="h-[220px] sm:h-[280px] md:h-full"
              imgClass="object-cover object-[50%_35%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Seção 07 — Seminovos foi movida para ./Seminovos.tsx (vitrine com fotos reais) */

/* ================================================================== */
/* 08 — POR QUE YAGO                                                   */
/* ================================================================== */
export function WhyYago() {
  const items = [
    {
      n: "01",
      title: "Procedência",
      text: "Produtos selecionados para você comprar com confiança.",
    },
    { n: "02", title: "Preço justo", text: "Valores competitivos para você fazer um bom negócio." },
    { n: "03", title: "Atendimento", text: "Atendimento próximo, transparente e personalizado." },
    {
      n: "04",
      title: "Compra flexível",
      text: "Compre na loja, retire ou receba onde estiver.",
    },
    {
      n: "05",
      title: "Confiança",
      text: "Uma loja local construída através da experiência de seus clientes.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 text-black md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Meta className="text-black/45">YAGO / 07 — Diferenciais</Meta>
          <h2 className="display mt-6 max-w-3xl text-[clamp(38px,8vw,96px)]">
            Por que comprar na Yago?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul>
              {items.map((it, i) => (
                <Reveal as="li" key={it.n} delay={i * 70}>
                  <div className="group flex gap-6 border-t border-black/12 py-7 last:border-b">
                    <span className="display w-14 shrink-0 text-[13px] tracking-[0.28em] text-black/30 transition-colors group-hover:text-black">
                      {it.n}
                    </span>
                    <div>
                      <h3 className="display text-[clamp(26px,4.2vw,44px)]">{it.title}</h3>
                      <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-black/58">
                        {it.text}
                      </p>
                    </div>
                    <span className="ml-auto hidden self-center text-[22px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block md:-translate-x-3">
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={120} className="md:col-span-5">
            <div className="relative mt-2 h-full min-h-[280px] overflow-hidden bg-black sm:min-h-[360px] md:mt-0 md:min-h-[420px]">
              <img
                src={IMAGES.why}
                alt="Interior da loja Yago iPhones em Aracaju"
                loading="lazy"
                className="h-full w-full object-cover object-[50%_40%] opacity-90 transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="label text-white/50">Aracaju / SE</p>
                <p className="display mt-3 text-[26px] text-white md:text-[34px]">
                  Loja de verdade,
                  <br />
                  gente de verdade.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 09 — PROVA SOCIAL                                                   */
/* ================================================================== */
export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-32">
      <Watermark className="-right-16 top-4 text-white/[0.035]" text="5.0" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Meta className="text-white/40">YAGO / 08 — Avaliações</Meta>
            <h2 className="display mt-6 text-[clamp(38px,8vw,96px)]">Quem compra, recomenda.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-end gap-4 sm:gap-5">
              <span className="display text-[52px] leading-none sm:text-[64px] md:text-[92px]">
                {STORE.rating}
              </span>
              <div className="pb-3">
                <Stars className="text-white" />
                <p className="label mt-2 text-white/50">
                  {STORE.reviews} avaliações · Google
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="rail no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:mt-14 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className={cn(
                "w-[82vw] max-w-[360px] shrink-0 snap-start md:w-auto md:max-w-none",
                i < 2 ? "md:col-span-3" : "md:col-span-2",
              )}
            >
              <figure className="flex h-full flex-col justify-between border border-white/12 bg-surface p-7 transition-colors duration-500 hover:border-white/35 hover:bg-graphite md:p-9">
                <div>
                  <Stars className="text-white/80" />
                  <blockquote
                    className={cn(
                      "display mt-6 leading-[1.15]",
                      i < 2 ? "text-[clamp(22px,3vw,34px)]" : "text-[20px]",
                    )}
                  >
                    “{t.text}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-9 w-9 items-center justify-center border border-white/20 font-display text-[13px] font-extrabold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-[13px] font-bold">{t.name}</span>
                    <span className="label block text-white/35">{t.date}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 10 — MÉTRICAS DE CONFIANÇA                                          */
/* ================================================================== */
export function Metrics() {
  const stats = [
    { big: "5.0 ★", small: "Google" },
    { big: "7+", small: "Avaliações" },
    { big: "Loja física", small: "Aracaju" },
    { big: "Entrega", small: "Disponível" },
    { big: "Retirada", small: "Na loja" },
  ];
  return (
    <section className="border-y border-white/10 bg-deep">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/10 md:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal
            key={s.big}
            delay={i * 60}
            className={cn(
              "bg-deep px-4 py-7 text-white transition-colors duration-500 hover:bg-graphite sm:px-5 sm:py-9 md:px-8 md:py-14",
              i === 4 && "col-span-2 md:col-span-1",
            )}
          >
            <p className="display text-[clamp(24px,3.4vw,40px)] whitespace-nowrap">{s.big}</p>
            <p className="label mt-3 text-white/40">{s.small}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
