/**
 * CONFIGURAÇÃO CENTRAL DO IMÓVEL
 * -------------------------------
 * Edite este arquivo para personalizar todos os textos, valores e links do site.
 * Campos marcados com "A CONFIRMAR" ainda precisam da informação real do proprietário.
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
  /** Número no formato internacional, somente dígitos. Ex: "5561999998888". Deixe vazio para ocultar o contato real. */
  number: "556133783039",
  messages: {
    default: "Olá! Vi o site do apartamento no Residencial Bela Praia e gostaria de receber mais informações.",
    visit: "Olá! Gostaria de agendar uma visita ao apartamento no Residencial Bela Praia.",
    doubts: "Olá! Tenho interesse no apartamento do Residencial Bela Praia e gostaria de tirar algumas dúvidas.",
    faq: "Olá! Estou visitando o site do apartamento no Residencial Bela Praia e gostaria de tirar algumas dúvidas.",
  },
};

export const property = {
  developmentName: "Residencial Bela Praia",

  seo: {
    title: "Residencial Bela Praia | Apartamento à venda em Samambaia Sul, Brasília",
    description:
      "Apartamento de 33m², 1 quarto, pronto para morar e com móveis planejados, no Residencial Bela Praia em Samambaia Sul - DF.",
  },

  hero: {
    label: "APARTAMENTO À VENDA",
    title: "Seu novo lar em Samambaia com móveis planejados e localização privilegiada",
    neighborhood: "Samambaia Sul",
    city: "Brasília",
    state: "DF",
  },

  price: 265000,

  /** Status comercial exibido na ficha técnica. Ex: "Pronto para morar", "Em construção", "Disponível para visitas" */
  status: "Pronto para morar",

  details: {
    area: 33,
    bedrooms: 1,
    suites: 1,
    bathrooms: 1,
    parkingSpots: 1,
    floor: 2,
    floorView: "",
    sunPosition: "Nascente",
    elevators: "Sim",
  },

  condoFee: 0, // valor não informado - oculto na ficha técnica
  iptu: 0, // valor não informado - oculto na ficha técnica
  iptuPeriod: "ano" as const,

  about: {
    label: "SOBRE O APARTAMENTO",
    title: "Um apartamento moderno, bem cuidado e pronto para morar.",
    description:
      "Apartamento de 1 suíte, posição nascente, no 2º andar, com vaga de garagem coberta. Piso em porcelanato acetinado classe A premium e paredes em porcelanato. Teto rebaixado em gesso, com cortineiros e iluminação em LED. Cozinha planejada em madeira premium, com bancada em mármore preto escovado, adega com cristaleira iluminada em LED, torre para forno e micro-ondas, espaço para embutir a geladeira, rack com painel ripado e mesa para 4 lugares. Banheiro com acabamento em mármore Mont Blanc e porcelanato classe A acetinado. Quarto com guarda-roupa embutido e cabeceira planejada. Pronto para morar, no Residencial Bela Praia, em Samambaia Sul.",
  },

  differentials: [
    { id: "d1", icon: "gem", text: "Pronto para morar, com móveis planejados" },
    { id: "d2", icon: "map-pin", text: "Localização privilegiada em Samambaia" },
    { id: "d3", icon: "shield", text: "Condomínio com área de lazer completa" },
    { id: "d4", icon: "sofa", text: "Acabamento moderno e iluminação em LED" },
    { id: "d5", icon: "file-check", text: "Aceita financiamento bancário" },
  ],

  includedItems: [
    {
      id: "i1",
      name: "Guarda-roupa embutido",
      description: "Com cabeceira, no quarto",
      icon: "wardrobe",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i2",
      name: "Armários planejados",
      description: "Madeira premium, com bancada em mármore preto escovado",
      icon: "wardrobe",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i3",
      name: "Cooktop",
      icon: "cooktop",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i4",
      name: "Mesa para 4 lugares",
      icon: "table",
      status: "incluido",
      confirmed: true,
    },
    {
      id: "i5",
      name: "Iluminação em LED",
      description: "Teto rebaixado em gesso com cortineiros",
      icon: "light",
      status: "incluido",
      confirmed: true,
    },
  ] as IncludedItem[],

  condominium: {
    label: "CONDOMÍNIO",
    title: "Área de lazer completa e muita praticidade no dia a dia.",
    description:
      "Residencial com piscina, salão de festas, churrasqueira e lojas no próprio condomínio, em uma região de fácil acesso a comércio e serviços — lotérica, Na Hora e muito mais nas proximidades.",
  },

  amenities: [
    { id: "a1", name: "Piscina", icon: "pool", confirmed: true },
    { id: "a2", name: "Salão de festas", icon: "party", confirmed: true },
    { id: "a3", name: "Churrasqueira", icon: "bbq", confirmed: true },
    { id: "a4", name: "Lojas no residencial", icon: "market", confirmed: true },
  ] as Amenity[],

  location: {
    label: "LOCALIZAÇÃO",
    title: "Localização privilegiada em Samambaia Sul.",
    description:
      "Região com muita praticidade no dia a dia: lojas no próprio residencial, academia, lotérica, Na Hora e fácil acesso a comércio e serviços.",
    /** Endereço resumido exibido no site. Deixe vazio para ocultar. */
    addressLabel: "Praia Bela Residence & Mall, Samambaia Sul - Brasília - DF",
    /** URL completa do Google Maps (botão "Ver no Google Maps"). Deixe vazio para ocultar o mapa/botão até o endereço real ser confirmado. */
    googleMapsUrl:
      "https://www.google.com/maps/place/Praia+Bela+Residence+%26+Mall/@-15.8645622,-48.0583594,264m/data=!3m1!1e3!4m14!1m7!3m6!1s0x935a2d66e0f24f11:0x36f3d4d8f9a69c0c!2sPraia+Bela+Residence+%26+Mall!8m2!3d-15.8645898!4d-48.0574893!16s%2Fg%2F11f_kmyh3v!3m5!1s0x935a2d66e0f24f11:0x36f3d4d8f9a69c0c!8m2!3d-15.8645898!4d-48.0574893!16s%2Fg%2F11f_kmyh3v?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D",
    /** Coordenadas usadas para incorporar o mapa (iframe). Deixe como null para ocultar o mapa incorporado. */
    coordinates: { lat: -15.8645898, lng: -48.0574893 } as { lat: number; lng: number } | null,
  },

  /** URL de vídeo (YouTube/Vimeo embed ou mp4 direto). Deixe vazio para ocultar o botão de vídeo. */
  videoUrl: "",

  footer: {
    disclaimer:
      "Informações, valores e disponibilidade devem ser confirmados diretamente com o corretor.",
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
