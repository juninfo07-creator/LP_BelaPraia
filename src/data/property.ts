/**
 * CONFIGURAÇÃO CENTRAL DO IMÓVEL
 * -------------------------------
 * Edite este arquivo para personalizar todos os textos, valores e links do site.
 * Todos os dados abaixo são DEMONSTRATIVOS e devem ser conferidos/substituídos
 * pelos dados reais do imóvel antes da publicação.
 */

export type IncludedItemStatus = "incluido" | "nao_incluido" | "negociavel";

export interface IncludedItem {
  id: string;
  name: string;
  description?: string;
  icon: "wardrobe" | "cooktop" | "ac" | "light" | "mirror" | "curtain" | "table" | "stove" | "oven" | "induction";
  status: IncludedItemStatus;
  /** Só é exibido no site quando confirmed = true */
  confirmed: boolean;
}

export type AmenityIcon =
  | "pool"
  | "gym"
  | "party"
  | "gourmet"
  | "concierge"
  | "sauna"
  | "bbq"
  | "coworking"
  | "beauty"
  | "games"
  | "laundry"
  | "market"
  | "gas";

export interface Amenity {
  id: string;
  name: string;
  icon: AmenityIcon;
  /** Preenchido só para as comodidades com foto/ilustração em destaque na grade visual */
  image?: string;
  /** Só é exibido no site quando confirmed = true */
  confirmed: boolean;
}

export const whatsapp = {
  /** Número no formato internacional, somente dígitos. Ex: "5562999998888". Deixe vazio para ocultar o contato real. */
  number: "",
  messages: {
    default: "Olá! Vi o site do apartamento e gostaria de receber mais informações.",
    visit: "Olá! Gostaria de agendar uma visita ao apartamento.",
    doubts: "Olá! Tenho interesse no apartamento e gostaria de tirar algumas dúvidas.",
    faq: "Olá! Estou visitando o site do apartamento e gostaria de tirar algumas dúvidas.",
  },
};

export const property = {
  developmentName: "Residencial My Life Style",

  seo: {
    title: "Residencial My Life Style | Apartamento à venda em Águas Claras, Brasília",
    description:
      "Apartamento de 62m², 2 quartos (1 suíte) e 1 vaga, em Águas Claras - DF, a poucos passos da Estação de Metrô Águas Claras.",
  },

  hero: {
    label: "APARTAMENTO À VENDA",
    title: "Conforto, praticidade e qualidade de vida em um só lugar.",
    neighborhood: "Águas Claras",
    city: "Brasília",
    state: "DF",
  },

  price: 680000,

  /** Status comercial exibido na ficha técnica. Ex: "Pronto para morar", "Em construção", "Disponível para visitas" */
  status: "Pronto para morar",

  details: {
    area: 62.02,
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 1,
    floor: 13,
    floorView: "Vista livre",
    sunPosition: "Perpendicular",
    elevators: "4 elevadores",
  },

  condoFee: 800,
  iptu: 1200,
  iptuPeriod: "ano" as const,

  about: {
    label: "SOBRE O APARTAMENTO",
    title: "Um espaço pensado para a sua família viver grandes momentos.",
    description:
      "Apartamento de 2 quartos (sendo 1 suíte) com sala em 2 ambientes, cozinha e varanda gourmet, todos com armários planejados. Localizado no 13º andar, com vista livre e posição perpendicular ao sol, em condomínio construído em 2015 a poucos passos da Estação de Metrô Águas Claras.",
  },

  differentials: [
    { id: "d1", icon: "gem", text: "Apartamento completo e moderno" },
    { id: "d2", icon: "map-pin", text: "Localização privilegiada" },
    { id: "d3", icon: "shield", text: "Condomínio com lazer completo" },
    { id: "d4", icon: "sofa", text: "Móveis planejados e acabamentos de alto padrão" },
    { id: "d5", icon: "file-check", text: "Pronto para morar ou investir" },
  ],

  includedItems: [
    {
      id: "i1",
      name: "Armários planejados",
      description: "Cozinha, os 2 quartos e varanda gourmet",
      icon: "wardrobe",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i2",
      name: "Fogão embutido",
      icon: "stove",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i3",
      name: "Forno embutido",
      icon: "oven",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i4",
      name: "Fogão de indução",
      description: "Na varanda gourmet",
      icon: "induction",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i5",
      name: "Cortinas e persianas",
      icon: "curtain",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i6",
      name: "Ar-condicionado",
      icon: "ac",
      status: "incluido",
      confirmed: true,
    },
  ] as IncludedItem[],

  condominium: {
    label: "CONDOMÍNIO",
    title: "Lazer completo para toda a família.",
    description:
      "Condomínio construído em 2015, com 4 elevadores, portaria 24h e uma estrutura completa de lazer e serviços para o dia a dia.",
  },

  amenities: [
    {
      id: "a1",
      name: "Piscina",
      icon: "pool",
      image: "/images/amenity-piscina.jpg",
      confirmed: true,
    },
    {
      id: "a2",
      name: "Academia",
      icon: "gym",
      image: "/images/amenity-academia.jpg",
      confirmed: true,
    },
    {
      id: "a3",
      name: "Salão de festas",
      icon: "party",
      image: "/images/amenity-salao.jpg",
      confirmed: true,
    },
    {
      id: "a4",
      name: "Espaço gourmet",
      icon: "gourmet",
      image: "/images/amenity-gourmet.jpg",
      confirmed: true,
    },
    { id: "a5", name: "Portaria 24h", icon: "concierge", confirmed: true },
    { id: "a6", name: "Sauna", icon: "sauna", confirmed: true },
    { id: "a7", name: "Churrasqueiras", icon: "bbq", confirmed: true },
    { id: "a8", name: "Coworking", icon: "coworking", confirmed: true },
    { id: "a9", name: "Espaço de beleza", icon: "beauty", confirmed: true },
    { id: "a10", name: "Sala de jogos", icon: "games", confirmed: true },
    { id: "a11", name: "Lavanderia", icon: "laundry", confirmed: true },
    { id: "a12", name: "Mini mercado", icon: "market", confirmed: true },
    { id: "a13", name: "Gás encanado", icon: "gas", confirmed: true },
  ] satisfies Amenity[],

  location: {
    label: "LOCALIZAÇÃO",
    title: "A poucos passos do metrô, em Águas Claras.",
    description:
      "Próximo à Estação de Metrô Águas Claras, em uma das regiões mais valorizadas do Distrito Federal.",
    /** Endereço resumido exibido no site. Deixe vazio para ocultar. */
    addressLabel: "R. 25 Norte, 14 - Águas Claras, Brasília - DF",
    /** URL completa do Google Maps (botão "Ver no Google Maps"). Deixe vazio para ocultar o mapa/botão até o endereço real ser confirmado. */
    googleMapsUrl:
      "https://www.google.com/maps/place/Residencial+My+Life+Style/@-15.839432,-48.0298075,1055m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935a326f6bc4f92b:0x55ea18cdfc75b8ca!8m2!3d-15.839432!4d-48.0298075!16s%2Fg%2F11b866mrc9?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
    /** Coordenadas usadas para incorporar o mapa (iframe). Deixe como null para ocultar o mapa incorporado. */
    coordinates: { lat: -15.839432, lng: -48.0298075 },
  },

  /** URL de vídeo (YouTube/Vimeo embed ou mp4 direto). Deixe vazio para ocultar o botão de vídeo. */
  videoUrl: "",

  footer: {
    disclaimer:
      "Informações, valores e disponibilidade devem ser confirmados diretamente com o proprietário.",
  },
};

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export const areaFormatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
