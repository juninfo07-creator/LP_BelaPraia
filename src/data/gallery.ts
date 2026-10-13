/**
 * GALERIA DE FOTOS
 * -----------------
 * Fotos reais do apartamento, organizadas por ambiente. Os arquivos ficam em
 * /public/images/. Para adicionar, trocar ou remover fotos, edite a lista abaixo
 * (campo `src` aponta para o arquivo em /public/images/).
 */

export type Room = "sala" | "cozinha" | "quarto" | "banheiro" | "varanda" | "outro";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  room: Room;
  caption?: string;
  /** Usada no hero e nas prévias da seção "Sobre" */
  featured?: boolean;
  /** Ponto focal CSS (object-position) para recortes em miniaturas "cover". Padrão: "center". */
  focal?: string;
}

export const roomLabels: Record<Room, string> = {
  sala: "Sala",
  cozinha: "Cozinha",
  quarto: "Quartos",
  banheiro: "Banheiros",
  varanda: "Varanda",
  outro: "Outros",
};

export const galleryPhotos: GalleryPhoto[] = [
  // Sala
  {
    id: "sala-1",
    src: "/images/sala-jantar-cozinha.jpg",
    alt: "Sala de jantar integrada à cozinha e à varanda",
    room: "sala",
    caption: "Sala de jantar integrada",
    featured: true,
    focal: "center 72%",
  },
  {
    id: "sala-2",
    src: "/images/sala-sofa-varanda.jpg",
    alt: "Sala de estar com sofá e vista para a varanda",
    room: "sala",
    caption: "Sala de estar",
  },
  {
    id: "sala-3",
    src: "/images/sala-tv.jpg",
    alt: "Sala de estar com sofá e painel de TV",
    room: "sala",
    caption: "Sala de estar",
  },
  {
    id: "sala-4",
    src: "/images/sala-quadros.jpg",
    alt: "Sala de estar com sofá e quadros decorativos",
    room: "sala",
    caption: "Sala de estar",
  },
  {
    id: "sala-5",
    src: "/images/sala-detalhe-sofa.jpg",
    alt: "Detalhe do sofá da sala de estar",
    room: "sala",
    caption: "Detalhe do sofá",
  },
  {
    id: "sala-6",
    src: "/images/hall-entrada.jpg",
    alt: "Hall de entrada com mesa de jantar ao fundo",
    room: "sala",
    caption: "Hall de entrada",
  },

  // Cozinha
  {
    id: "cozinha-1",
    src: "/images/cozinha-geladeira.jpg",
    alt: "Cozinha planejada com geladeira e bancada",
    room: "cozinha",
    caption: "Cozinha planejada",
    featured: true,
  },
  {
    id: "cozinha-2",
    src: "/images/cozinha-cooktop-pia.jpg",
    alt: "Cooktop e pia da cozinha com revestimento subway",
    room: "cozinha",
    caption: "Cooktop e pia",
  },
  {
    id: "cozinha-3",
    src: "/images/cozinha-corredor.jpg",
    alt: "Corredor da cozinha com armários planejados",
    room: "cozinha",
    caption: "Armários planejados",
  },
  {
    id: "cozinha-4",
    src: "/images/cozinha-cantinho-cafe.jpg",
    alt: "Cantinho do café na cozinha",
    room: "cozinha",
    caption: "Cantinho do café",
  },

  // Varanda
  {
    id: "varanda-1",
    src: "/images/varanda-vista-cidade.jpg",
    alt: "Varanda com mesa, cadeiras e vista para a cidade",
    room: "varanda",
    caption: "Varanda com vista para a cidade",
    featured: true,
  },
  {
    id: "varanda-2",
    src: "/images/varanda-gourmet.jpg",
    alt: "Varanda gourmet com bancada e cuba",
    room: "varanda",
    caption: "Varanda gourmet",
  },
  {
    id: "varanda-3",
    src: "/images/varanda-gourmet-integrada.jpg",
    alt: "Varanda gourmet integrada à sala",
    room: "varanda",
    caption: "Varanda gourmet integrada",
  },
  {
    id: "varanda-4",
    src: "/images/varanda-panoramica.jpg",
    alt: "Vista panorâmica da cidade a partir da varanda",
    room: "varanda",
    caption: "Vista panorâmica",
  },
  {
    id: "varanda-5",
    src: "/images/varanda-sala.jpg",
    alt: "Varanda vista a partir da sala",
    room: "varanda",
    caption: "Varanda",
  },

  // Quartos
  {
    id: "quarto-1",
    src: "/images/quarto-suite-principal.jpg",
    alt: "Suíte principal com cabeceira estofada",
    room: "quarto",
    caption: "Suíte principal",
    featured: true,
  },
  {
    id: "quarto-2",
    src: "/images/quarto-suite-cantinho.jpg",
    alt: "Cantinho de apoio da suíte principal, com janela",
    room: "quarto",
    caption: "Suíte principal",
  },
  {
    id: "quarto-3",
    src: "/images/quarto-tv-ar-condicionado.jpg",
    alt: "Quarto com TV e ar-condicionado",
    room: "quarto",
    caption: "Quarto com ar-condicionado",
  },
  {
    id: "quarto-4",
    src: "/images/quarto-infantil.jpg",
    alt: "Quarto infantil",
    room: "quarto",
    caption: "Quarto infantil",
  },
  {
    id: "quarto-5",
    src: "/images/quarto-infantil-estudo.jpg",
    alt: "Quarto infantil com área de estudo",
    room: "quarto",
    caption: "Quarto infantil",
  },

  // Banheiros
  {
    id: "banheiro-1",
    src: "/images/banheiro-box-vidro.jpg",
    alt: "Banheiro com box de vidro e piso amadeirado",
    room: "banheiro",
    caption: "Banheiro com box de vidro",
  },
  {
    id: "banheiro-2",
    src: "/images/banheiro-social.jpg",
    alt: "Banheiro social com cuba de vidro",
    room: "banheiro",
    caption: "Banheiro social",
  },

  // Outros
  {
    id: "outro-1",
    src: "/images/area-servico.jpg",
    alt: "Área de serviço com máquina de lavar e secar",
    room: "outro",
    caption: "Área de serviço",
  },
  {
    id: "outro-2",
    src: "/images/area-servico-varanda.jpg",
    alt: "Varanda da área de serviço",
    room: "outro",
    caption: "Varanda de serviço",
  },
  {
    id: "outro-3",
    src: "/images/area-servico-vista.jpg",
    alt: "Área de serviço com vista para a cidade",
    room: "outro",
    caption: "Área de serviço",
  },
];
