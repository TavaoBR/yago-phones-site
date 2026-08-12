import { useState } from "react";
import { Btn, Logo, Marquee, Meta, Reveal, WhatsIcon, Watermark, YagoMark } from "./ui";
import { FAQS, IMAGES, INSTAGRAM_FEED, STORE, WA } from "../lib/data";
import { cn } from "../utils/cn";

/* ================================================================== */
/* 11 — ENTREGA / RETIRADA                                             */
/* ================================================================== */
export function Delivery() {
  const options = [
    {
      n: "01",
      title: "Comprar na loja",
      text: "Venha conhecer nossos aparelhos pessoalmente.",
    },
    { n: "02", title: "Retirar", text: "Compre e retire seu produto na loja." },
    { n: "03", title: "Receber", text: "Escolha seu aparelho e receba onde estiver." },
  ];
  return (
    <section className="relative overflow-hidden bg-off py-16 text-black md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Meta className="text-black/45">YAGO / 09 — Como comprar</Meta>
            <h2 className="display mt-6 text-[clamp(40px,9vw,110px)]">Do seu jeito.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-3 font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-black/50">
              <span>Escolha</span>
              <span className="h-px w-8 bg-black/25" />
              <span>Confirme</span>
              <span className="h-px w-8 bg-black/25" />
              <span className="text-black">Receba</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-black/12 md:grid-cols-3">
          {options.map((o, i) => (
            <Reveal
              key={o.n}
              delay={i * 90}
              className="group relative bg-off p-7 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <span className="display text-[12px] tracking-[0.3em] text-black/30">{o.n}</span>
              <h3 className="display mt-10 text-[clamp(26px,3.6vw,42px)]">{o.title}</h3>
              <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-black/58">{o.text}</p>
              <YagoMark className="mt-10 h-6 w-6 opacity-15 transition-opacity duration-500 group-hover:opacity-60" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[15px] leading-relaxed text-black/60">
              Combine tudo em uma conversa: modelo, condição, pagamento e a melhor forma de receber.
            </p>
            <Btn href={WA.delivery} variant="dark" external>
              Falar com a Yago
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 12 — INSTAGRAM                                                      */
/* ================================================================== */
export function Instagram() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Meta className="text-white/40">YAGO / 10 — Social</Meta>
            <h2 className="display mt-6 text-[clamp(38px,8vw,96px)]">Acompanhe a Yago.</h2>
            <p className="mt-4 font-display text-[13px] font-bold uppercase tracking-[0.24em] text-white/50">
              @{STORE.instagram}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Btn href={STORE.instagramUrl} variant="ghostLight" external>
              Seguir no Instagram
            </Btn>
          </Reveal>
        </div>
      </div>

      <div className="marquee-pause mt-12 overflow-hidden">
        <div className="marquee-track fast gap-3 px-1.5">
          {[...INSTAGRAM_FEED, ...INSTAGRAM_FEED].map((item, i) => (
            <a
              key={i}
              href={STORE.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative mx-1.5 block h-[160px] w-[160px] shrink-0 overflow-hidden bg-graphite sm:h-[190px] sm:w-[190px] md:h-[260px] md:w-[260px]"
            >
              <img
                src={item.src}
                alt="Publicação da Yago iPhones no Instagram"
                loading="lazy"
                className={cn(
                  "h-full w-full opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0",
                  item.cutout
                    ? "object-contain object-center p-5"
                    : "object-cover object-center",
                )}
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <YagoMark className="h-7 w-7 text-white drop-shadow" />
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 border-y border-white/10 py-3 text-white/70">
        <Marquee items={["@yagoiphoness", "Novidades", "Ofertas", "Bastidores"]} fast separator="•" />
      </div>
    </section>
  );
}

/* ================================================================== */
/* 13 — LOCALIZAÇÃO                                                    */
/* ================================================================== */
export function Location() {
  return (
    <section className="relative overflow-hidden bg-lightgray py-16 text-black md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Meta className="text-black/45">YAGO / 11 — Localização</Meta>
          <h2 className="display mt-6 text-[clamp(38px,8vw,96px)]">Estamos em Aracaju.</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={IMAGES.store}
                alt="Interior de loja de smartphones com aparelhos em exposição"
                loading="lazy"
                className="h-full w-full object-cover object-[50%_45%] transition-transform duration-[1400ms] hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-6 bottom-5">
                <p className="label text-white/60">Yago iPhones / Loja física</p>
                <p className="display mt-2 text-[24px] text-white md:text-[32px]">
                  R. Dom Bôsco, 1104 — Suíça
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90} className="md:col-span-5">
            <div className="flex h-full flex-col justify-between bg-black p-7 text-white md:p-9">
              <div>
                <p className="label text-white/40">Endereço</p>
                <address className="display mt-4 text-[22px] not-italic leading-tight md:text-[26px]">
                  {STORE.address.street}
                  <br />
                  {STORE.address.district}
                  <br />
                  {STORE.address.city} — {STORE.address.state}
                  <br />
                  {STORE.address.zip}
                </address>

                <dl className="mt-9 space-y-4 border-t border-white/12 pt-6 text-[14px]">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="label text-white/40">Horário</dt>
                    <dd className="text-right font-display font-bold">
                      Seg — Sex · 09h às 18h
                      <br />
                      Sáb · 09h às 13h
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="label text-white/40">Telefone</dt>
                    <dd className="font-display font-bold">{STORE.phoneDisplay}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="label text-white/40">WhatsApp</dt>
                    <dd className="font-display font-bold">{STORE.phoneDisplay}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-9 flex flex-col gap-3">
                <Btn href={STORE.mapsUrl} variant="light" external>
                  Como chegar
                </Btn>
                <Btn href={WA.store} variant="ghostLight" external>
                  Falar com a loja
                </Btn>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="md:col-span-12">
            <div className="h-[220px] overflow-hidden border border-black/12 sm:h-[280px] md:h-[360px]">
              <iframe
                title="Mapa — Yago iPhones em Aracaju"
                src={STORE.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale contrast-125"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 14 — FAQ                                                            */
/* ================================================================== */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-white py-16 text-black md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Reveal>
            <Meta className="text-black/45">YAGO / 12 — Dúvidas</Meta>
            <h2 className="display mt-6 text-[clamp(34px,6vw,64px)]">
              Perguntas
              <br />
              frequentes.
            </h2>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-black/60">
              Não encontrou sua dúvida? Chame a gente no WhatsApp, respondemos rapidinho.
            </p>
            <Btn href={WA.general} variant="dark" external className="mt-7">
              Tirar dúvida
            </Btn>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <ul className="border-t border-black/12">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal as="li" key={f.q} delay={i * 40} className="border-b border-black/12">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-3 py-4 text-left sm:gap-6 sm:py-5"
                    >
                      <span
                        className={cn(
                          "font-display text-[15px] font-extrabold tracking-tight transition-colors sm:text-[16px] md:text-[20px]",
                          isOpen ? "text-black" : "text-black/70 group-hover:text-black",
                        )}
                      >
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "relative flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300",
                          isOpen ? "rotate-45 border-black bg-black text-white" : "border-black/20",
                        )}
                        aria-hidden="true"
                      >
                        <span className="absolute h-px w-3 bg-current" />
                        <span className="absolute h-3 w-px bg-current" />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-5 pr-2 text-[14.5px] leading-relaxed text-black/60 sm:pb-6 sm:pr-10 sm:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 15 — CTA FINAL                                                      */
/* ================================================================== */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 text-white md:pt-36">
      <div
        aria-hidden="true"
        className="ambient pointer-events-none absolute left-1/3 top-10 h-[55vh] w-[55vh] rounded-full bg-white/[0.07] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[18vw] bottom-[-14vw] aspect-square w-[52vw] rounded-full border border-white/10"
      />
      <div className="relative mx-auto grid max-w-[1400px] items-end gap-10 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <Reveal>
            <Logo size="lg" className="opacity-95" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-10 text-[clamp(42px,9vw,116px)]">
              Escolha melhor.
              <br />
              <span className="silver-text">Compre Yago.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-white/60 md:text-[17px]">
              Seu próximo smartphone está a uma conversa de distância.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 pb-8 sm:flex-row md:mt-9 md:pb-28">
              <Btn href={WA.general} variant="wa" external className="w-full sm:w-auto">
                Falar no WhatsApp
              </Btn>
              <Btn href="#iphones" variant="ghostLight" className="w-full sm:w-auto">
                Ver aparelhos
              </Btn>
            </div>
          </Reveal>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative mx-auto -mb-6 h-[260px] w-[88%] sm:h-[320px] md:-mr-10 md:mb-0 md:ml-auto md:h-[560px] md:w-[125%]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[18%] top-[42%] h-[55%] w-[55%] -translate-y-1/2 rounded-full bg-white/[0.08] blur-[70px]"
            />
            <img
              src={IMAGES.finalCta}
              alt="Smartphone premium em composição editorial"
              loading="lazy"
              className="relative z-[1] h-full w-full object-contain object-right-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* 16 — FOOTER                                                         */
/* ================================================================== */
export function Footer() {
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "iPhones", href: "#iphones" },
    { label: "Smartphones", href: "#smartphones" },
    { label: "Acessórios", href: "#acessorios" },
    { label: "Ofertas", href: "#ofertas" },
    { label: "Sobre", href: "#sobre" },
    { label: "Instagram", href: STORE.instagramUrl, ext: true },
    { label: "WhatsApp", href: WA.general, ext: true },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-14 text-white">
      <Watermark className="-bottom-[6vw] left-1/2 -translate-x-1/2 text-white/[0.035]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="md" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-white/50">
              Tecnologia premium, preço justo e atendimento de verdade. iPhones e smartphones em
              Aracaju — SE.
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Rodapé">
            <p className="label text-white/35">Navegação</p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.ext ? "_blank" : undefined}
                    rel={l.ext ? "noreferrer noopener" : undefined}
                    className="font-display text-[14px] font-bold text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-white/35">Contato</p>
            <div className="mt-6 space-y-3">
              <a
                href={`tel:+${STORE.phoneRaw}`}
                className="display block text-[22px] transition-opacity hover:opacity-70"
              >
                {STORE.phoneDisplay}
              </a>
              <p className="text-[14px] text-white/55">
                {STORE.address.street} — {STORE.address.district}
              </p>
              <p className="label text-white/35">Aracaju — SE</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-7 pb-24 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:pb-7">
          <p>© 2026 Yago iPhones. Todos os direitos reservados.</p>
          <p className="label">Aracaju / SE — Brasil</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhats() {
  return (
    <a
      href={WA.general}
      target="_blank"
      rel="noreferrer noopener"
      className="float-in fixed right-4 z-40 inline-flex items-center gap-2.5 border border-black/10 bg-white px-4 py-3.5 font-display text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_10px_40px_rgba(0,0,0,.45)] transition-transform duration-300 hover:scale-[1.03] active:scale-95 md:right-8 md:px-5 md:py-4 md:text-[12px]"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-label="Falar no WhatsApp com a Yago iPhones"
    >
      <WhatsIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}