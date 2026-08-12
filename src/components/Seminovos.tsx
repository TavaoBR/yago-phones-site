import { useState } from "react";
import { Btn, Meta, Reveal, Watermark, WhatsIcon, YagoMark } from "./ui";
import { SEMINOVOS, WA, type Seminovo } from "../lib/data";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Card com foto real do aparelho (fallback caso a foto não exista)     */
/* ------------------------------------------------------------------ */
function DeviceCard({ item, className }: { item: Seminovo; className?: string }) {
  const [failed, setFailed] = useState(false);
  const href = WA.seminovo(item.model, item.storage, item.price);

  return (
    <article
      className={cn(
        "card-lift group relative flex h-full min-w-0 flex-col overflow-hidden bg-black text-white",
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="relative block aspect-[9/16] w-full overflow-hidden"
        aria-label={`Falar sobre ${item.model} ${item.storage} por ${item.price}`}
      >
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_50%_35%,#1f1f1f,#000_70%)] px-6 text-center">
            <YagoMark className="h-8 w-8 opacity-40" />
            <p className="display text-[22px] leading-tight">{item.model}</p>
            <p className="label text-white/40">{item.storage}</p>
          </div>
        ) : (
          <img
            src={item.image}
            alt={`${item.model} ${item.storage} ${item.color} disponível na Yago iPhones`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

        {item.highlight && (
          <span className="label absolute right-3 top-3 z-[2] border border-white/25 bg-black/45 px-2.5 py-1 text-white/90 backdrop-blur-sm">
            {item.highlight}
          </span>
        )}
      </a>

      <div className="flex items-end justify-between gap-3 border-t border-white/10 px-4 py-4">
        <div className="min-w-0">
          <p className="label truncate text-white/45">
            {item.model} · {item.storage}
          </p>
          {item.priceFrom && <p className="label mt-1 text-white/40">A partir de</p>}
          <p className="display mt-1 text-[22px] md:text-[25px]">{item.price}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 items-center gap-2 bg-white px-3 py-2 font-display text-[10px] font-extrabold uppercase tracking-[0.14em] text-black transition-colors hover:bg-white/90"
        >
          <WhatsIcon className="h-3.5 w-3.5 text-[#25D366]" />
          WhatsApp
        </a>
      </div>
    </article>
  );
}

/* ================================================================== */
/* 07 — SEMINOVOS                                                      */
/* ================================================================== */
export function Seminovos() {
  return (
    <section id="seminovos" className="relative overflow-hidden bg-lightgray py-16 text-black md:py-32">
      <Watermark className="-left-8 bottom-0 text-black/[0.04]" text="SEMI" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Meta className="text-black/45">YAGO / 06 — Seminovos</Meta>
            <h2 className="display mt-6 text-[clamp(36px,7vw,76px)]">
              Seu iPhone,
              <br />
              do jeito certo.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-black/60 md:text-[17px]">
              Aparelhos selecionados e avaliados para você comprar com mais segurança. Fotos reais
              do estoque da loja em Aracaju.
            </p>
          </Reveal>

          <Reveal delay={100} className="md:col-span-5">
            <dl className="grid grid-cols-2 gap-px border border-black/12 bg-black/12">
              {[
                ["Estado", "Avaliado"],
                ["Bateria", "Informada"],
                ["Garantia", "Da loja"],
                ["Procedência", "Verificada"],
              ].map(([k, v]) => (
                <div key={k} className="bg-lightgray px-4 py-5">
                  <dt className="label text-black/40">{k}</dt>
                  <dd className="display mt-2 text-[18px] md:text-[21px]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* desktop — grid estável */}
        <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SEMINOVOS.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 70} className="min-w-0">
              <DeviceCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* mobile — scroll horizontal com largura fixa */}
        <div className="rail no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:hidden">
          {SEMINOVOS.map((item) => (
            <DeviceCard
              key={item.id}
              item={item}
              className="w-[72vw] max-w-[280px] shrink-0 snap-start"
            />
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-start gap-5 border-t border-black/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[13.5px] leading-relaxed text-black/55">
              Valores à vista e sujeitos à disponibilidade. Consulte porcentagem de bateria,
              acessórios e condições de parcelamento.
            </p>
            <Btn href={WA.seminovos} variant="dark" external>
              Ver disponíveis
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
