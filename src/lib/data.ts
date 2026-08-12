export const STORE = {
  name: "Yago iPhones",
  phoneDisplay: "(79) 98887-2096",
  phoneRaw: "5579988872096",
  instagram: "yagoiphoness",
  instagramUrl: "https://www.instagram.com/yagoiphoness/",
  address: {
    street: "R. Dom Bôsco, 1104",
    district: "Suíça",
    city: "Aracaju",
    state: "SE",
    zip: "49050-220",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Dom+B%C3%B4sco%2C+1104+-+Su%C3%AD%C3%A7a%2C+Aracaju+-+SE%2C+49050-220",
  mapEmbed:
    "https://www.google.com/maps?q=R.%20Dom%20B%C3%B4sco%2C%201104%20-%20Su%C3%AD%C3%A7a%2C%20Aracaju%20-%20SE%2C%2049050-220&output=embed",
  rating: "5.0",
  reviews: "7",
};

export const wa = (message: string) =>
  `https://wa.me/${STORE.phoneRaw}?text=${encodeURIComponent(message)}`;

export const WA = {
  general: wa("Olá, Yago! Vim pelo site e gostaria de saber mais sobre os aparelhos disponíveis."),
  iphones: wa("Olá, Yago! Quero ver os iPhones disponíveis hoje."),
  seminovos: wa("Olá, Yago! Tenho interesse nos seminovos disponíveis. Pode me passar as opções?"),
  delivery: wa("Olá, Yago! Gostaria de saber sobre entrega e retirada na loja."),
  store: wa("Olá, Yago! Gostaria de falar com a loja em Aracaju."),
  product: (model: string, storage: string) =>
    wa(`Olá, Yago! Tenho interesse no ${model} ${storage}. Ele está disponível?`),
  seminovo: (model: string, storage: string, price: string) =>
    wa(
      `Olá, Yago! Vi no site o ${model} ${storage} por ${price}. Ainda está disponível? Gostaria de saber mais sobre bateria e garantia.`,
    ),
  novo: (model: string, storage: string, price: string) =>
    wa(
      `Olá, Yago! Tenho interesse no ${model} ${storage} novo/lacrado (${price}). Ainda está disponível? Quais condições de pagamento?`,
    ),
  novos: wa("Olá, Yago! Quero ver os aparelhos NOVOS/lacrados disponíveis."),
};

export type Product = {
  id: string;
  brand: string;
  model: string;
  storage: string;
  condition: "Novo" | "Seminovo" | "Lacrado";
  price: string;
  note: string;
  image: string;
  featured?: boolean;
  cutout?: boolean;
};

/** Estrutura pronta para ser populada por API/backend futuramente. */
export const PRODUCTS: Product[] = [
  {
    id: "ip17pro",
    brand: "Apple",
    model: "iPhone 17 Pro",
    storage: "256GB",
    condition: "Novo",
    price: "R$ 6.650,00",
    note: "Garantia Apple · Lacrado",
    image: "/images/novos/iphone-17-pro.png",
    featured: true,
    cutout: true,
  },
  {
    id: "ip17promax",
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    storage: "256GB",
    condition: "Novo",
    price: "R$ 7.200,00",
    note: "Top de linha · Lacrado",
    image: "/images/novos/iphone-17-pro-max.png",
    cutout: true,
  },
  {
    id: "ip17",
    brand: "Apple",
    model: "iPhone 17",
    storage: "256GB",
    condition: "Novo",
    price: "R$ 5.300,00",
    note: "Novidade · Lacrado",
    image: "/images/novos/iphone-17.png",
    cutout: true,
  },
  {
    id: "ip16",
    brand: "Apple",
    model: "iPhone 16",
    storage: "128GB",
    condition: "Novo",
    price: "R$ 4.450,00",
    note: "Lacrado · Nota fiscal",
    image: "/images/novos/iphone-16.png",
    cutout: true,
  },
  {
    id: "ip15",
    brand: "Apple",
    model: "iPhone 15",
    storage: "128GB",
    condition: "Novo",
    price: "R$ 3.950,00",
    note: "Lacrado · Nota fiscal",
    image: "/images/novos/iphone-15.png",
    cutout: true,
  },
  {
    id: "android",
    brand: "Android",
    model: "Smartphones Android",
    storage: "64GB — 512GB",
    condition: "Novo",
    price: "Consulte o valor",
    note: "Xiaomi, Samsung, Motorola e mais",
    image: "/images/products/android.png",
    cutout: true,
  },
];

export type Novo = {
  id: string;
  model: string;
  storage: string;
  price: string;
  image: string;
  tag?: string;
  featured?: boolean;
};

/**
 * Catálogo de APARELHOS NOVOS / LACRADOS — Yago iPhones.
 * Imagens em: public/images/novos/*.png
 */
export const NOVOS: Novo[] = [
  {
    id: "novo-iphone-15",
    model: "iPhone 15",
    storage: "128GB",
    price: "R$ 3.950,00",
    image: "/images/novos/iphone-15.png",
  },
  {
    id: "novo-iphone-16",
    model: "iPhone 16",
    storage: "128GB",
    price: "R$ 4.450,00",
    image: "/images/novos/iphone-16.png",
  },
  {
    id: "novo-iphone-17",
    model: "iPhone 17",
    storage: "256GB",
    price: "R$ 5.300,00",
    image: "/images/novos/iphone-17.png",
    tag: "Novidade",
  },
  {
    id: "novo-iphone-17-pro",
    model: "iPhone 17 Pro",
    storage: "256GB",
    price: "R$ 6.650,00",
    image: "/images/novos/iphone-17-pro.png",
    tag: "Linha Pro",
  },
  {
    id: "novo-iphone-17-pro-max",
    model: "iPhone 17 Pro Max",
    storage: "256GB",
    price: "R$ 7.200,00",
    image: "/images/novos/iphone-17-pro-max.png",
    tag: "Top de linha",
    featured: true,
  },
];

export type Seminovo = {
  id: string;
  model: string;
  storage: string;
  color: string;
  price: string;
  priceFrom?: boolean;
  highlight?: string;
  image: string;
};

/**
 * Catálogo de seminovos — fotos reais do estoque (public/images/seminovos/<id>.jpg).
 * Nome, armazenamento, cor e preço seguem o texto das fotos da loja.
 */
export const SEMINOVOS: Seminovo[] = [
  {
    id: "iphone-17-pro-256",
    model: "iPhone 17 Pro",
    storage: "256GB",
    color: "Laranja",
    price: "R$ 6.199,99",
    highlight: "Garantia Apple até Nov/2026",
    image: "/images/seminovos/iphone-17-pro-256.jpg",
  },
  {
    id: "iphone-16-pro-max-256",
    model: "iPhone 16 Pro Max",
    storage: "256GB",
    color: "Titânio Deserto",
    price: "R$ 5.149,99",
    highlight: "Com caixa",
    image: "/images/seminovos/iphone-16-pro-max-256.jpg",
  },
  {
    id: "iphone-16-pro-128",
    model: "iPhone 16 Pro",
    storage: "128GB",
    color: "Titânio Branco",
    price: "R$ 4.199,99",
    image: "/images/seminovos/iphone-16-pro-128.jpg",
  },
  {
    id: "iphone-15-pro-max-256",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    color: "Titânio Natural / Branco",
    price: "R$ 4.099,99",
    priceFrom: true,
    highlight: "Mais de uma unidade",
    image: "/images/seminovos/iphone-15-pro-max-256.jpg",
  },
  {
    id: "iphone-16-128",
    model: "iPhone 16",
    storage: "128GB",
    color: "Verde-azulado / Ultramarino",
    price: "R$ 3.499,99",
    image: "/images/seminovos/iphone-16-128.jpg",
  },
  {
    id: "iphone-14-pro-256",
    model: "iPhone 14 Pro",
    storage: "256GB",
    color: "Prateado",
    price: "R$ 3.099,99",
    highlight: "Mais de uma unidade",
    image: "/images/seminovos/iphone-14-pro-256.jpg",
  },
  {
    id: "iphone-13-pro-max-128",
    model: "iPhone 13 Pro Max",
    storage: "128GB",
    color: "Azul Sierra",
    price: "R$ 2.599,99",
    image: "/images/seminovos/iphone-13-pro-max-128.jpg",
  },
  {
    id: "iphone-14-plus-128",
    model: "iPhone 14 Plus",
    storage: "128GB",
    color: "Roxo",
    price: "R$ 2.349,99",
    highlight: "Bateria 86%",
    image: "/images/seminovos/iphone-14-plus-128.jpg",
  },
  {
    id: "iphone-14-128",
    model: "iPhone 14",
    storage: "128GB",
    color: "Estelar",
    price: "R$ 2.149,99",
    highlight: "Bateria 86%",
    image: "/images/seminovos/iphone-14-128.jpg",
  },
  {
    id: "iphone-13-128",
    model: "iPhone 13",
    storage: "128GB",
    color: "Branco / Rosa",
    price: "R$ 1.899,99",
    highlight: "Bateria 86%",
    image: "/images/seminovos/iphone-13-128.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Cliente Google",
    initials: "C",
    date: "Avaliação verificada",
    text: "Atendimento sem igual, aparelhos de procedência e valores justos.",
  },
  {
    name: "Cliente Google",
    initials: "R",
    date: "Avaliação verificada",
    text: "Melhores preços de Realme em Sergipe.",
  },
  {
    name: "Cliente Google",
    initials: "A",
    date: "Avaliação verificada",
    text: "Ótima qualidade e fui atendida muito bem.",
  },
  {
    name: "Cliente Google",
    initials: "T",
    date: "Avaliação verificada",
    text: "Top, recomendo!",
  },
  {
    name: "Cliente Google",
    initials: "M",
    date: "Avaliação verificada",
    text: "O melhor.",
  },
];

export const FAQS = [
  {
    q: "Quais iPhones estão disponíveis?",
    a: "Trabalhamos com os modelos mais procurados — do iPhone 11 às linhas Pro e Pro Max mais recentes, em versões novas e seminovas. Como o estoque gira rápido, o ideal é confirmar a disponibilidade do modelo desejado pelo WhatsApp.",
  },
  {
    q: "Vocês trabalham com outras marcas?",
    a: "Sim. Além dos iPhones, temos smartphones Android de várias marcas e faixas de preço, para você escolher o aparelho certo para o seu momento.",
  },
  {
    q: "Vocês trabalham com Realme?",
    a: "Sim. Realme é uma das nossas especialidades e nossos clientes destacam os preços como os melhores de Sergipe. Fale com a gente para ver os modelos disponíveis.",
  },
  {
    q: "Os aparelhos possuem garantia?",
    a: "Sim. Aparelhos novos seguem a garantia do fabricante e os seminovos são avaliados e vendidos com garantia da loja. As condições são informadas com clareza antes da compra.",
  },
  {
    q: "Os produtos são novos ou seminovos?",
    a: "Os dois. Temos aparelhos novos/lacrados e seminovos selecionados, sempre com o estado, bateria e procedência informados de forma transparente.",
  },
  {
    q: "Vocês fazem entrega?",
    a: "Sim. Realizamos entrega em Aracaju e região. Combine o endereço e a forma de envio direto com a nossa equipe pelo WhatsApp.",
  },
  {
    q: "Posso retirar na loja?",
    a: "Pode. Você escolhe o aparelho, confirma com a gente e retira na nossa loja na R. Dom Bôsco, 1104 — Suíça, Aracaju/SE.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos Pix, dinheiro, cartões de débito e crédito, com opções de parcelamento. Fale com a equipe para conferir as condições do modelo escolhido.",
  },
  {
    q: "Onde fica a Yago iPhones?",
    a: "Estamos na R. Dom Bôsco, 1104 — Suíça, Aracaju/SE, CEP 49050-220. Toque em “Como chegar” e abrimos a rota no mapa para você.",
  },
  {
    q: "Como posso falar com a equipe?",
    a: "O caminho mais rápido é o WhatsApp (79) 98887-2096. Você também pode acompanhar novidades e falar com a gente pelo Instagram @yagoiphoness.",
  },
];

export const INSTAGRAM_FEED = [
  { src: "/images/editorial-iphone.jpg", cutout: false },
  { src: "/images/lifestyle.jpg", cutout: false },
  { src: "/images/store.jpg", cutout: false },
  { src: "/images/products/iphone-16-pro.png", cutout: true },
  { src: "/images/products/iphone-15.png", cutout: true },
  { src: "https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&w=1200", cutout: false },
  { src: "/images/products/iphone-14-promax.png", cutout: true },
  { src: "https://images.pexels.com/photos/13570132/pexels-photo-13570132.jpeg?auto=compress&cs=tinysrgb&w=1200", cutout: false },
  { src: "/images/hero-phone.png", cutout: true },
  { src: "https://images.pexels.com/photos/10885669/pexels-photo-10885669.jpeg?auto=compress&cs=tinysrgb&w=1200", cutout: false },
];

export const IMAGES = {
  hero: "/images/hero-phone.png",
  catIphones: "/images/editorial-iphone.jpg",
  catSmartphones:
    "https://images.pexels.com/photos/12969242/pexels-photo-12969242.jpeg?auto=compress&cs=tinysrgb&w=1800",
  catAcessorios:
    "https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&w=1600",
  catOfertas:
    "https://images.pexels.com/photos/13570132/pexels-photo-13570132.jpeg?auto=compress&cs=tinysrgb&w=1400",
  seminovos: "/images/lifestyle.jpg",
  why: "/images/store.jpg",
  store: "/images/store.jpg",
  lifestyle: "/images/lifestyle.jpg",
  finalCta: "/images/hero-phone.png",
};
