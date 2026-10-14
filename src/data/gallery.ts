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
    alt: "Sala de jantar integrada à cozinha, com bancada e vista para a varanda",
    room: "sala",
    caption: "Sala de jantar integrada",
    featured: true,
  },
  {
    id: "sala-2",
    src: "/images/sala-ampla.jpg",
    alt: "Sala de estar ampla com sofá e mesa de jantar ao fundo",
    room: "sala",
    caption: "Sala de estar",
  },
  {
    id: "sala-3",
    src: "/images/sala-sofa-quadros.jpg",
    alt: "Sala de estar com sofá e quadros decorativos",
    room: "sala",
    caption: "Sala de estar",
  },
  {
    id: "sala-4",
    src: "/images/sala-jantar-mesa-redonda.jpg",
    alt: "Sala de jantar com mesa redonda",
    room: "sala",
    caption: "Sala de jantar",
  },
  {
    id: "sala-5",
    src: "/images/sala-jantar-detalhe.jpg",
    alt: "Detalhe da sala de jantar com cadeiras de madeira",
    room: "sala",
    caption: "Sala de jantar",
  },
  {
    id: "sala-6",
    src: "/images/sala-jantar-espelho.jpg",
    alt: "Sala de jantar com parede espelhada ampliando o ambiente",
    room: "sala",
    caption: "Sala de jantar",
  },

  // Cozinha
  {
    id: "cozinha-1",
    src: "/images/cozinha-geladeira-2.jpg",
    alt: "Cozinha planejada com geladeira e bancada",
    room: "cozinha",
    caption: "Cozinha planejada",
    featured: true,
  },
  {
    id: "cozinha-2",
    src: "/images/cozinha-corredor-2.jpg",
    alt: "Corredor da cozinha com armários planejados",
    room: "cozinha",
    caption: "Armários planejados",
  },
  {
    id: "cozinha-3",
    src: "/images/cozinha-relogio.jpg",
    alt: "Cozinha com acabamento em subway tile",
    room: "cozinha",
    caption: "Cozinha",
  },
  {
    id: "cozinha-4",
    src: "/images/cozinha-bancada-vinhos.jpg",
    alt: "Bancada da cozinha americana integrada à sala de jantar",
    room: "cozinha",
    caption: "Cozinha americana",
  },

  // Varanda
  {
    id: "varanda-1",
    src: "/images/varanda-mesa-cidade.jpg",
    alt: "Varanda com mesa, cadeiras e vista para a cidade",
    room: "varanda",
    caption: "Varanda com vista para a cidade",
    featured: true,
  },
  {
    id: "varanda-2",
    src: "/images/varanda-gourmet-adega.jpg",
    alt: "Varanda gourmet com cooktop e adega",
    room: "varanda",
    caption: "Varanda gourmet",
  },

  // Quartos
  {
    id: "quarto-1",
    src: "/images/quarto-suite-cabeceira.jpg",
    alt: "Suíte principal com cabeceira estofada e luminárias pendentes",
    room: "quarto",
    caption: "Suíte principal",
    featured: true,
  },
  {
    id: "quarto-2",
    src: "/images/quarto-suite-janela.jpg",
    alt: "Suíte principal com janela e armários planejados",
    room: "quarto",
    caption: "Suíte principal",
  },
  {
    id: "quarto-3",
    src: "/images/quarto-suite-cama.jpg",
    alt: "Suíte principal, vista da cama",
    room: "quarto",
    caption: "Suíte principal",
  },
  {
    id: "quarto-4",
    src: "/images/quarto-suite-espelho.jpg",
    alt: "Suíte principal com armário espelhado",
    room: "quarto",
    caption: "Suíte principal",
  },
  {
    id: "quarto-5",
    src: "/images/quarto-suite-janela-2.jpg",
    alt: "Suíte principal, cantinho junto à janela",
    room: "quarto",
    caption: "Suíte principal",
  },
  {
    id: "quarto-6",
    src: "/images/quarto-2-tv-armario.jpg",
    alt: "Segundo quarto com TV e armários planejados",
    room: "quarto",
    caption: "Quarto 2",
  },
  {
    id: "quarto-7",
    src: "/images/quarto-2-tv.jpg",
    alt: "Segundo quarto com ar-condicionado",
    room: "quarto",
    caption: "Quarto 2",
  },
  {
    id: "quarto-8",
    src: "/images/quarto-infantil-dinossauro.jpg",
    alt: "Quarto infantil com cama temática de dinossauros",
    room: "quarto",
    caption: "Quarto infantil",
  },
  {
    id: "quarto-9",
    src: "/images/quarto-infantil-brinquedos.jpg",
    alt: "Quarto infantil com armários e cantinho de brincar",
    room: "quarto",
    caption: "Quarto infantil",
  },
  {
    id: "quarto-10",
    src: "/images/quarto-bebe.jpg",
    alt: "Quarto do bebê com cômoda e prateleiras",
    room: "quarto",
    caption: "Quarto do bebê",
  },

  // Banheiros
  {
    id: "banheiro-1",
    src: "/images/banheiro-suite-box.jpg",
    alt: "Banheiro da suíte com box de vidro",
    room: "banheiro",
    caption: "Banheiro da suíte",
  },
  {
    id: "banheiro-2",
    src: "/images/banheiro-suite-bancada.jpg",
    alt: "Banheiro da suíte, bancada e cuba de vidro",
    room: "banheiro",
    caption: "Banheiro da suíte",
  },
  {
    id: "banheiro-3",
    src: "/images/banheiro-social-box.jpg",
    alt: "Banheiro social com box e piso amadeirado",
    room: "banheiro",
    caption: "Banheiro social",
  },
  {
    id: "banheiro-4",
    src: "/images/banheiro-social-bancada.jpg",
    alt: "Banheiro social, cuba de vidro",
    room: "banheiro",
    caption: "Banheiro social",
  },

  // Outros
  {
    id: "outro-1",
    src: "/images/area-servico-lavanderia.jpg",
    alt: "Área de serviço com máquina de lavar e secar",
    room: "outro",
    caption: "Área de serviço",
  },
  {
    id: "outro-2",
    src: "/images/varanda-servico-canto.jpg",
    alt: "Cantinho da área de serviço na varanda",
    room: "outro",
    caption: "Área de serviço",
  },
];
