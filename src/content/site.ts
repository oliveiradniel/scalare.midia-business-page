import { SITE_URL } from './site-url';

export { SITE_URL };

// ---------------------------------------------------------------------------
// Marca, contato e redes
// ---------------------------------------------------------------------------

export const brand = {
  name: 'Scalare Mídia',
  description:
    'A Scalare Mídia é uma agência focada em crescimento digital, especializada em posicionar marcas e atrair clientes por meio de estratégias inteligentes de marketing. Com uma abordagem orientada a resultados, ajuda empresas a ganharem visibilidade, aumentarem sua presença online e escalarem suas vendas de forma consistente.',
  logo: '/logo-scalare-512.png',
  legalName: 'Scalare Mídia',
  taxId: '69.561.449/0001-25',
  foundingDate: '2023',
  address: {
    locality: 'Brodowski',
    region: 'SP',
    country: 'BR',
  },
};

export const contact = {
  /** E.164 sem o "+" (formato do wa.me). */
  phone: '5516994045245',
  phoneDisplay: '+55 (16) 99404-5245',
  email: 'scalaremidia@gmail.com',
  instagram: 'scalaremidia',
};

export const links = {
  whatsapp: `https://wa.me/${contact.phone}`,
  email: `mailto:${contact.email}`,
  instagram: `https://www.instagram.com/${contact.instagram}/`,
  youtube: 'https://www.youtube.com/@scalaremidia',
  // Perfil do Google Meu Negócio pelo CID (estável, sem parâmetros de sessão).
  googleBusiness: 'https://maps.google.com/?cid=6439795331260920939',
  checkout: 'https://pay.kiwify.com.br/KHqkip8',
};

/** Perfis oficiais da marca (JSON-LD sameAs). */
export const sameAs = [links.instagram, links.youtube, links.googleBusiness];

export function whatsapp(text: string) {
  return `${links.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Mensagens pré-preenchidas de cada CTA de WhatsApp. */
export const messages = {
  hero: 'Olá! Sou tatuador e vi a página do Método Inktensity. Pode me explicar melhor como funciona?',
  faq: 'Olá! Tenho uma dúvida sobre o Método Inktensity que não encontrei no FAQ. Pode me ajudar?',
  floating:
    'Olá! Vi a página do Método Inktensity e gostaria de entender melhor como o método pode me ajudar.',
  footer: 'Olá! Queria saber mais sobre a Scalare Mídia e seus serviços.',
  notFound:
    'Olá! Tentei acessar uma página do site do Método Inktensity e não encontrei. Pode me ajudar?',
};

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const seo = {
  title: 'Método Inktensity | Curso de marketing para tatuadores - Scalare Mídia',
  description:
    'Conheça o Método Inktensity e aprenda como tatuadores estão lotando a agenda com Instagram, anúncios e técnicas de fechamento, mesmo começando do zero.',
  locale: 'pt_BR',
  language: 'pt-BR',
  themeColor: '#010409',
  ogImage: {
    // Versione o nome ao trocar a imagem (cache do WhatsApp/Facebook).
    src: '/og-rafael-souza-v1.jpg',
    width: 1200,
    height: 630,
    alt: 'Rafael Souza, estrategista de tráfego, criador do Método Inktensity',
  },
};

// ---------------------------------------------------------------------------
// Pessoa e curso
// ---------------------------------------------------------------------------

export const person = {
  name: 'Rafael Souza',
  jobTitle: 'Gestor de tráfego',
  image: 'rafael-souza-estrategista-trafego' as const,
  knowsAbout: [
    'Tráfego pago',
    'Marketing digital',
    'Anúncios no Instagram',
    'Marketing para tatuadores',
  ],
};

export const course = {
  name: 'Método Inktensity',
  description:
    'Curso online para tatuadores aprenderem a se posicionar no Instagram, criar anúncios simples e eficientes e fechar mais vendas no Direct e no WhatsApp.',
  price: '297.00',
  priceCurrency: 'BRL',
  priceDisplay: 'R$ 297,00',
  oldPriceDisplay: 'R$ 497,00',
  installmentsDisplay: 'R$ 30,72',
  guaranteeDays: 7,
};

// ---------------------------------------------------------------------------
// Navegação
// ---------------------------------------------------------------------------

// Com "/" na frente para funcionarem também fora da home (ex.: página 404).
// Na home, o navegador só rola até a âncora, sem recarregar.
export const nav = [
  { label: 'Início', href: '/#home' },
  { label: 'Módulos', href: '/#modules' },
  { label: 'Sobre mim', href: '/#about-me' },
  { label: 'Depoimentos', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
];

// ---------------------------------------------------------------------------
// Seções
// ---------------------------------------------------------------------------

export const challenges = [
  'Semanas com agenda cheia e outras vazias',
  'Depender apenas de indicação',
  'Postar no Instagram e não aparecer cliente',
  'Clientes que acham caro ou pedem desconto o tempo todo',
  'Muitos tatuadores na cidade disputando os mesmos clientes',
  'Ter um bom trabalho mas pouca autoridade online',
  'Receber muitas mensagens, mas poucas virarem agendamento',
  'Não ter tempo ou estratégia para divulgar o trabalho',
  'Entre outros...',
];

export const badges = ['Vendas', 'Faturamento', 'Clientes'];

export const pillars = [
  {
    title: 'Posicionamento no Instagram',
    text: 'Transforme seu perfil em um portfólio que atrai clientes.',
    icon: 'instagram',
  },
  {
    title: 'Criar anúncios simples e eficientes',
    text: 'Anúncios que geram pedidos de orçamento, mesmo com pouco orçamento.',
    icon: 'ads',
  },
  {
    title: 'Fechar vendas',
    text: 'Transforme pedidos de orçamento em tatuagens agendadas.',
    icon: 'sales',
  },
] as const;

export type Illustration =
  | 'intro'
  | 'positioning'
  | 'ads'
  | 'sales'
  | 'pricing'
  | 'growth';

type Lesson = { title: string; bonus?: boolean };

export const modules: {
  number: string;
  title: string;
  headline: string;
  lessons: Lesson[];
  illustration: Illustration;
}[] = [
  {
    number: '00',
    title: 'Introdução ao curso',
    headline:
      'Comece do jeito certo para aproveitar o método e chegar aos resultados mais rápido.',
    lessons: [
      { title: 'Como tirar o melhor proveito do curso e ter resultados' },
    ],
    illustration: 'intro',
  },
  {
    number: '01',
    title: 'Como se posicionar no Instagram',
    headline:
      'Aprenda como transformar seu perfil em um portfólio que atrai clientes.',
    lessons: [
      { title: 'O erro que te mantém invisível' },
      { title: 'Definição de cliente ideal (avatar aplicado à tattoo)' },
      { title: 'Bio magnética (estrutura pronta)' },
      { title: 'Destaques que geram confiança' },
      { title: 'Feed com padrão profissional' },
      { title: 'Conteúdo que posiciona (sem depender de viral)' },
      { title: 'Autoridade local (como dominar sua cidade)' },
    ],
    illustration: 'positioning',
  },
  {
    number: '02',
    title: 'Criando anúncios simples e eficientes',
    headline: 'Aprenda a criar anúncios que geram pedidos de orçamento.',
    lessons: [
      { title: 'O problema da dependência de indicação' },
      { title: 'Estrutura simples de anúncios' },
      { title: 'Campanha para seguidores vs campanha de lead' },
      { title: 'Criativos que chamam atenção local' },
      { title: 'Segmentação básica (sem complicação)' },
      { title: 'Como rodar com baixo orçamento' },
      { title: 'Como manter fluxo constante de leads' },
      { title: 'Escala simples de anúncios', bonus: true },
    ],
    illustration: 'ads',
  },
  {
    number: '03',
    title: 'Fechando vendas',
    headline: 'Aprenda como transformar pedidos de orçamento em clientes.',
    lessons: [
      { title: 'O erro ao responder orçamento' },
      { title: 'Script de direct' },
      { title: 'Script de WhatsApp' },
      { title: 'Como conduzir sem perder autoridade' },
      { title: 'Quebra de objeções (preço, tempo, confiança)' },
      { title: 'Posicionamento premium na conversa' },
      { title: 'Fechamento sem pressão' },
    ],
    illustration: 'sales',
  },
];

export const bonuses: {
  number: number;
  title: string;
  lessons: string[];
  illustration: Illustration;
}[] = [
  {
    number: 1,
    title: 'Como cobrar mais e virar referência na sua cidade',
    lessons: [
      'Como aumentar preço sem perder demanda',
      'Ajuste fino de posicionamento',
      'Aumentando ticket médio',
      'Refinando anúncios',
      'Tornando-se referência local',
    ],
    illustration: 'pricing',
  },
  {
    number: 2,
    title: 'Como manter seus resultados e continuar crescendo',
    lessons: [
      'Como medir seu crescimento',
      'Como manter consistência',
      'Como não regredir',
      'Compartilhando resultados',
    ],
    illustration: 'growth',
  },
];

export const courseStats = {
  modules: modules.length,
  lessons: modules.reduce((total, m) => total + m.lessons.length, 0),
  bonuses: bonuses.length,
};

/** Itens repetidos na faixa animada (marquee). */
export const marqueeItems = [
  'Método Inktensity',
  'Posicionamento no Instagram',
  'Anúncios simples',
  'Fechamento de vendas',
  'Agenda cheia',
  'Scalare Mídia',
];

export const advantages = [
  'Curso completo passo a passo',
  'Estratégias específicas para tatuadores',
  'Atualizações futuras incluídas',
  'Acesso imediato após a compra',
];

export const testimonials = [
  {
    image: 'depoimento-01',
    alt: 'Conversa no WhatsApp: tatuador conta que o cliente vindo do anúncio patrocinado fechou um trabalho de R$ 4.300 à vista, o primeiro que converteu.',
  },
  {
    image: 'depoimento-02',
    alt: 'Conversa no WhatsApp: tatuador confirma que fechou duas tatuagens de R$ 1.200 cada pela estratégia e que outros clientes ainda vão dar retorno.',
  },
  {
    image: 'depoimento-03',
    alt: 'Conversa no WhatsApp: tatuador responde que fechou um trabalho de R$ 400 e confirma que o cliente também veio pelo anúncio.',
  },
  {
    image: 'depoimento-04',
    alt: 'Conversa no WhatsApp: tatuador lista três clientes fechados, de R$ 1.000, R$ 600 e R$ 500, entre trabalhos old school e tatuagens de leão.',
  },
  {
    image: 'depoimento-05',
    alt: 'Conversa no WhatsApp: tatuador conta que a venda que veio pela estratégia foi um fechamento de ombro de R$ 990 no cartão.',
  },
  {
    image: 'depoimento-06',
    alt: 'Conversa no WhatsApp: tatuador avisa que acabou de fechar mais um cliente, no valor de R$ 500.',
  },
  {
    image: 'depoimento-07',
    alt: 'Conversa no WhatsApp: tatuador confirma que o cliente que veio pelos anúncios naquele dia fechou por R$ 600 e diz que está melhorando.',
  },
  {
    image: 'depoimento-08',
    alt: 'Conversa no WhatsApp: tatuador confirma que fechou mais um cliente, no valor de R$ 1.000.',
  },
  {
    image: 'depoimento-09',
    alt: 'Conversa no WhatsApp: tatuador confirma que a tatuagem de R$ 1.200 à vista veio pelo anúncio com o criativo do leão.',
  },
];

export const faq = [
  {
    question: 'Preciso entender de marketing para aplicar o método?',
    answer:
      'Não. O Método Inktensity foi criado justamente para tatuadores que não têm experiência com marketing ou anúncios. Tudo é explicado de forma simples e prática para você aplicar no seu estúdio.',
  },
  {
    question: 'Funciona mesmo se eu tiver poucos seguidores?',
    answer:
      'Sim. As estratégias ensinadas no treinamento mostram como atrair pessoas novas para o seu perfil e gerar pedidos de orçamento, mesmo que você tenha poucos seguidores.',
  },
  {
    question: 'Preciso investir em anúncios?',
    answer:
      'Os anúncios ajudam a acelerar muito os resultados, mas o método também mostra como melhorar seu Instagram para atrair clientes organicamente. Você decide quando e quanto investir.',
  },
  {
    question: 'Em quanto tempo vou ver resultados?',
    answer:
      'Isso pode variar de tatuador para tatuador. Alguns alunos começam a receber mais pedidos de orçamento rapidamente após aplicar as estratégias, mas o resultado depende da implementação do que é ensinado no treinamento.',
  },
  {
    question: 'Como vou acessar o curso?',
    answer:
      'Após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à plataforma do curso. O acesso é imediato.',
  },
  {
    question: 'E se eu não gostar do treinamento?',
    answer:
      'Você tem 7 dias de garantia incondicional. Se dentro desse prazo você achar que o treinamento não é para você, basta solicitar o reembolso e receberá 100% do valor pago.',
  },
  {
    question: 'Posso assistir pelo celular?',
    answer:
      'Sim. O curso pode ser acessado pelo celular, tablet ou computador, de onde você preferir.',
  },
];
