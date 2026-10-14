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
  quarto: "Quarto",
  banheiro: "Banheiro",
  varanda: "Varanda",
  outro: "Outros",
};

export const galleryPhotos: GalleryPhoto[] = [
  // Cozinha
  {
    id: "cozinha-1",
    src: "/images/cozinha-cooktop.png",
    alt: "Cozinha planejada com cooktop, bancada e armários",
    room: "cozinha",
    caption: "Cozinha planejada",
    featured: true,
  },

  // Sala
  {
    id: "sala-1",
    src: "/images/sala-jantar-cozinha.png",
    alt: "Sala integrada à cozinha, com mesa e vista para a janela",
    room: "sala",
    caption: "Sala integrada à cozinha",
    featured: true,
  },
  {
    id: "sala-2",
    src: "/images/sala-estar-tv-janela.png",
    alt: "Rack com painel ripado e janela",
    room: "sala",
    caption: "Rack com painel ripado",
  },
  {
    id: "sala-3",
    src: "/images/sala-janela-tv.png",
    alt: "Sala com janela e rack com painel ripado",
    room: "sala",
    caption: "Sala de estar",
  },
  {
    id: "sala-4",
    src: "/images/sala-estante-cristaleira.png",
    alt: "Adega com cristaleira iluminada em LED",
    room: "sala",
    caption: "Adega com cristaleira em LED",
  },
  {
    id: "sala-5",
    src: "/images/sala-mesa-bancada.png",
    alt: "Mesa para 4 lugares integrada à cozinha",
    room: "sala",
    caption: "Mesa para 4 lugares",
  },

  // Quarto
  {
    id: "quarto-1",
    src: "/images/quarto-vazio-armario.png",
    alt: "Quarto (suíte) com espaço para cabeceira e guarda-roupa espelhado",
    room: "quarto",
    caption: "Suíte",
    featured: true,
  },
  {
    id: "quarto-2",
    src: "/images/quarto-janela-vista.png",
    alt: "Quarto (suíte) com janela e vista para a cidade",
    room: "quarto",
    caption: "Suíte",
  },
  {
    id: "quarto-3",
    src: "/images/quarto-armario-espelho.png",
    alt: "Guarda-roupa embutido espelhado e acesso ao banheiro",
    room: "quarto",
    caption: "Guarda-roupa embutido",
  },

  // Banheiro
  {
    id: "banheiro-1",
    src: "/images/banheiro-box-1.png",
    alt: "Banheiro da suíte com box de vidro e porcelanato classe A acetinado",
    room: "banheiro",
    caption: "Banheiro da suíte",
    featured: true,
  },
  {
    id: "banheiro-2",
    src: "/images/banheiro-box-2.png",
    alt: "Banheiro da suíte, bancada em mármore Mont Blanc",
    room: "banheiro",
    caption: "Bancada em mármore Mont Blanc",
  },
];
