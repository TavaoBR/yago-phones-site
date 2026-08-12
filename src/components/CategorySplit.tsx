import { Reveal, Meta, Watermark } from "./ui";
import { IMAGES } from "../lib/data";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Bloco individual — usado para cada categoria                         */
/* ------------------------------------------------------------------ */
function CategoryBlock({
  href,
  label,
  index,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  tags,
  variant = "light",
}: {
  href: string;
  label: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "card-lift group relative flex flex-col overflow-hidden scroll-mt-24 transition-colors duration-500",
        dark
          ? "border border-white/10 bg-black text-white hover:border-white/35"
          : "border border-black/10 bg-white text-black hover:border-black/35",
        "md:col-span-6",
      )}
    >
      {/* imagem de topo */}
      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/8]">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover opacity-85 transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05] group-hover:opacity-100"
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-t",
            dark
              ? "from-black via-black/30 to-transparent"
              : "from-white via-white/20 to-transparent",
          )}
        />
        {/* label editorial */}
        <span
          className={cn(
            "label absolute left-4 top-4 z-[2] border px-2.5 py-1 backdrop-blur-sm",
            dark
              ? "border-white/25 text-white/80"
              : "border-black/15 text-black/70",
          )}
        >
          {label} · {index}
        </span>

        {/* título sobre a imagem */}
        <div className="absolute inset-x-4 bottom-4 z-[2] sm:inset-x-6 sm:bottom-5">
          <p className={cn("label", dark ? "text-white/45" : "text-black/40")}>
            {subtitle}
          </p>
          <h3
            className={cn(
              "display mt-2 leading-none text-[clamp(28px,5vw,48px)]",
              dark ? "text-white" : "text-black",
            )}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* corpo do card */}
      <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 md:p-7">
        <p
          className={cn(
            "max-w-[42ch] text-[14.5px] leading-relaxed sm:text-[15.5px]",
            dark ? "text-white/55" : "text-black/55",
          )}
        >
          {description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className={cn(
                "label border px-2.5 py-1",
                dark
                  ? "border-white/15 text-white/55"
                  : "border-black/12 text-black/50",
              )}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "mt-1 flex items-center gap-2 border-b pb-1 font-display text-[11px] font-extrabold uppercase tracking-[0.16em] transition-colors sm:text-[12px]",
            dark
              ? "w-fit border-white/30 text-white/70 group-hover:border-white"
              : "w-fit border-black/25 text-black/60 group-hover:border-black",
          )}
        >
          Ver aparelhos
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
}

/* ================================================================== */
/* Section — CATÁLOGO DE IPHONES                                       */
/* ================================================================== */
export function CategorySplit() {
  return (
    <section
      id="catalogo"
      className="relative overflow-hidden bg-graphite py-16 text-white md:py-28"
    >
      <Watermark className="-right-8 top-0 text-white/[0.035]" text="YAGO" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        {/* header */}
        <Reveal>
          <Meta className="text-white/45">YAGO / 03A — Catálogo</Meta>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(34px,7.5vw,88px)]">
            Novo ou seminovo?
            <br />
            <span className="silver-text">A escolha é sua.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55 md:text-[16.5px]">
            Do iPhone mais recente ao modelo ideal com economia — a Yago iPhones tem a versão certa
            para cada momento.
          </p>
        </Reveal>

        {/* grid — dois blocos lado a lado no desktop, empilhados no mobile */}
        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12 md:gap-5">
          <Reveal delay={80} className="md:col-span-6">
            <CategoryBlock
              href="#novos"
              label="Aparelhos novos"
              index="01"
              title="Novos."
              subtitle="Direto da Apple"
              description="iPhones novos e lacrados — garantia Apple, nota fiscal e preços honestos em Aracaju. Para quem quer o aparelho mais recente com toda a segurança."
              image={IMAGES.catIphones}
              imageAlt="iPhone novo em composição editorial premium"
              variant="dark"
              tags={["Lacrado", "Garantia Apple", "Nota fiscal"]}
            />
          </Reveal>

          <Reveal delay={140} className="md:col-span-6">
            <CategoryBlock
              href="#seminovos"
              label="Aparelhos seminovos"
              index="02"
              title="Seminovos."
              subtitle="Avaliados pela Yago"
              description="Aparelhos selecionados, avaliados e com garantia da loja. Bateria informada, procedência verificada e preço justo — para quem quer iPhone sem pagar caro."
              image={IMAGES.seminovos}
              imageAlt="iPhone seminovo avaliado pela Yago iPhones"
              variant="light"
              tags={["Avaliado", "Bateria informada", "Garantia da loja"]}
            />
          </Reveal>
        </div>

        {/* faixa de confiança inferior */}
        <Reveal delay={180}>
          <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              ["Procedência", "Verificada"],
              ["Pagamento", "Flexível"],
              ["Retirada", "Na loja"],
              ["Entrega", "Disponível"],
            ].map(([k, v]) => (
              <div key={k} className="bg-graphite px-4 py-5 sm:px-5 sm:py-6">
                <p className="label text-white/35">{k}</p>
                <p className="display mt-2 text-[17px] sm:text-[19px]">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
