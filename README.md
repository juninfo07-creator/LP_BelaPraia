# Residencial Torres do Parque — Site de venda do apartamento

Landing page de página única para apresentação e venda de um apartamento, com galeria de
fotos, ficha técnica, informações do condomínio, localização e contato direto pelo WhatsApp.

Stack: **React + TypeScript + Vite + Tailwind CSS v4 + lucide-react**.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build   # gera a pasta dist/
npm run preview # testa a build de produção localmente
```

## O que editar para personalizar o site

Todo o conteúdo do site fica centralizado em **dois arquivos de dados** — não é necessário
mexer nos componentes para trocar textos, valores ou fotos.

| Arquivo | O que contém |
|---|---|
| `src/data/property.ts` | Nome do empreendimento, preço, endereço, m², quartos, vagas, condomínio, IPTU, diferenciais, itens inclusos na venda, comodidades do condomínio, número do WhatsApp, mensagens de contato, URL do Google Maps e URL do vídeo. |
| `src/data/gallery.ts` | Todas as fotos da galeria (sala, cozinha, quartos, banheiros, varanda, outros), com legendas e marcação de quais aparecem em destaque. |

### WhatsApp

Em `src/data/property.ts`, preencha:

```ts
export const whatsapp = {
  number: "5562999998888", // DDI + DDD + número, só dígitos
  messages: { ... }
};
```

Enquanto `number` estiver vazio, os botões de WhatsApp ficam visivelmente desabilitados
("pendente de configuração") em vez de simular um link falso.

### Localização / Google Maps

Preencha `location.googleMapsUrl` com o link real do Google Maps. Enquanto estiver vazio,
o mapa fica oculto (mostra apenas um aviso) para não exibir um endereço inventado.

### Vídeo do apartamento

Preencha `videoUrl` (link do YouTube, Vimeo ou arquivo `.mp4`) para exibir o botão "Assista
ao vídeo do apartamento" no Hero. Vazio = botão oculto.

### Fotos do apartamento

As fotos do apartamento em `public/images/` (sala, cozinha, quartos, banheiros, varanda e
área de serviço) já são **fotos reais** enviadas pelo proprietário, listadas em
`src/data/gallery.ts`. Para adicionar, trocar a ordem ou remover fotos, edite esse arquivo.

As fotos de **comodidades do condomínio** (`amenity-*.svg` em `public/images/`) ainda são
**placeholders ilustrativos** (ícones minimalistas), pois não foram enviadas fotos reais da
piscina, academia, salão de festas e playground. Para substituí-las:

1. Coloque os arquivos de foto em `public/images/` (ex: `public/images/piscina.jpg`).
2. Em `src/data/property.ts`, troque o campo `image` de cada item em `amenities` pelo caminho
   real (ex: `/images/piscina.jpg`).

Para trocar a foto do Hero ou da chamada final (CTA), edite as constantes `HERO_IMAGE` em
`src/components/Hero/Hero.tsx` e `CTA_IMAGE` em `src/components/ContactCTA/ContactCTA.tsx`.

### Itens inclusos / comodidades do condomínio

Cada item tem um campo `confirmed: boolean`. Só itens com `confirmed: true` aparecem no site
— assim nenhuma característica é exibida sem confirmação do proprietário.

### SEO / compartilhamento

Título, descrição e Open Graph ficam em `index.html`. Adicione uma imagem real em
`public/og-image.jpg` (1200×630px) para a prévia de compartilhamento em WhatsApp/redes sociais.

## Estrutura do projeto

```
src/
  components/      # um componente por seção da página
  data/
    property.ts    # configuração central (textos, valores, links)
    gallery.ts      # fotos da galeria
  utils/
    whatsapp.ts     # geração de links wa.me
public/
  images/           # fotos do apartamento (reais) + placeholders das comodidades do condomínio
  favicon.svg
```
