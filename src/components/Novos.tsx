import { Btn, Meta, Reveal, Watermark, YagoMark } from "./ui";
import { NOVOS, WA, type Novo } from "../lib/data";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Card                                                                 */
/* ------------------------------------------------------------------ */
function NovoCard({
  item,
  index,
  featured,
  className,
}: {
  item: Novo;
  index: number;
  featured?: boolean;
  className?: string;
}) {
  return (
    <a
      href={WA.novo(item.model, item.storage, item.price)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Falar sobre ${item.model} ${item.storage} novo por ${item.price}`}
      className={cn(
        "card-lift group relative flex w-[78vw] max-w-[320px] shrink-0 snap-start flex-col overflow-hidden border border-white/10 bg-black text-white transition-colors duration-500 hover:border-white/40 sm:w-auto sm:max-w-none",
        className,
      )}
    >
      {/* imagem do aparelho — PNG transparente sobre fundo do card */}
      <div className={cn("relative overflow-hidden bg-black", featured ? "aspect-[5/6]" : "aspect-[4/5]")}>
        <img
          src={item.image}
          alt={`${item.model} ${item.storage} novo, lacrado`}
          loading="lazy"
          className="relative z-[1] h-full w-full object-contain object-center px-4 pb-28 pt-12 transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] sm:px-6"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* selos */}
        <span className="label absolute left-3 top-3 z-[3] border border-white/25 bg-black/45 px-2.5 py-1 text-white/90 backdrop-blur-sm">
          Novo · Lacrado
        </span>
        {item.tag && (
          <span className="label absolute right-3 top-3 z-[3] border border-white/25 bg-white text-black px-2.5 py-1">
            {item.tag}
          </span>
        )}

        {/* número editorial */}
        <span className="display absolute right-4 bottom-[92px] z-[3] text-[11px] tracking-[0.3em] text-white/40">
          0{index + 1}
        </span>

        <div className="absolute inset-x-4 bottom-4 z-[3]">
          <p className="label text-white/50">Apple · {item.storage}</p>
          <h3 className={cn("display mt-2 leading-none", featured ? "text-[30px] md:text-[38px]" : "text-[24px] md:text-[28px]")}>
            {item.model}
          </h3>
        </div>
      </div>

      {/* preço */}
      <div className="flex items-end justify-between gap-3 border-t border-white/10 px-4 py-5">
        <div>
          <p className="label text-white/40">À vista</p>
          <p className={cn("display mt-2", featured ? "text-[28px] md:text-[32px]" : "text-[22px] md:text-[26px]")}>
            {item.price}
          </p>
        </div>
        <span className="group/btn inline-flex shrink-0 items-center gap-2 border-b border-white/40 pb-1 font-display text-[10.5px] font-extrabold uppercase tracking-[0.16em] transition-colors group-hover:border-white">
          Ver aparelho
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}

/* ================================================================== */
/* Section — APARELHOS NOVOS                                           */
/* ================================================================== */
export function Novos() {
  const featured = NOVOS.find((n) => n.featured) ?? NOVOS[NOVOS.length - 1];
  const rest = NOVOS.filter((n) => n.id !== featured.id);

  return (
    <section
      id="novos"
      className="relative overflow-hidden bg-black py-16 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="ambient pointer-events-none absolute -right-40 top-16 h-[55vh] w-[55vh] rounded-full bg-white/[0.06] blur-[130px]"
      />
      <Watermark className="-left-6 -top-4 text-white/[0.035]" text="NOVO" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        {/* header */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Meta className="text-white/45">YAGO / 05B — Aparelhos novos</Meta>
            <h2 className="display mt-6 text-[clamp(38px,8vw,96px)]">
              Novos.
              <br />
              <span className="silver-text">Lacrados.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60 md:text-[17px]">
              Aparelhos novos, direto da Yago iPhones — com garantia Apple, nota fiscal e preços
              honestos em Aracaju.
            </p>
          </Reveal>

          <Reveal delay={100} className="md:col-span-5">
            <ul className="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
              {[
                ["Lacrado", "100%"],
                ["Garantia", "Apple"],
                ["Nota fiscal", "Sempre"],
              ].map(([k, v]) => (
                <li key={k} className="bg-black px-4 py-5">
                  <p className="label text-white/40">{k}</p>
                  <p className="display mt-2 text-[16px] md:text-[19px]">{v}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* grid editorial — destaque + 4 no desktop, scroll no mobile */}
        <div className="mt-14 hidden gap-4 lg:grid lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <NovoCard item={featured} index={NOVOS.indexOf(featured)} featured className="h-full" />
          </Reveal>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <NovoCard item={item} index={NOVOS.indexOf(item)} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* mobile: scroll horizontal */}
        <div className="rail no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 lg:hidden">
          {NOVOS.map((item, i) => (
            <NovoCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* rodapé */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-start gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <YagoMark className="h-6 w-6 opacity-60" />
              <p className="max-w-md text-[13.5px] leading-relaxed text-white/55">
                Valores à vista. Parcelamento no cartão sob consulta. Cores e capacidades
                adicionais disponíveis mediante encomenda.
              </p>
            </div>
            <Btn href={WA.novos} variant="light" external>
              Consultar novos
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
