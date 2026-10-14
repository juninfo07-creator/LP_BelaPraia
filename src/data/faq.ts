/**
 * PERGUNTAS FREQUENTES (FAQ)
 * ----------------------------
 * Edite, adicione, remova ou reordene as perguntas abaixo — a ordem da lista
 * é a ordem de exibição no site. Mantenha os `id` únicos e estáveis.
 *
 * As respostas sobre condomínio/IPTU puxam os valores diretamente de
 * `property.ts` — não duplique os números aqui.
 */

import { currencyFormatter, property } from "./property";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "financiamento",
    question: "O apartamento aceita financiamento bancário?",
    answer:
      "Sim, o apartamento aceita financiamento bancário. As condições finais dependem da análise da instituição financeira escolhida — entre em contato pelo WhatsApp para mais detalhes.",
  },
  {
    id: "documentacao",
    question: "A documentação do imóvel está regularizada?",
    answer: "Sim, a documentação do imóvel está 100% regularizada.",
  },
  {
    id: "negociacao",
    question: "O valor anunciado é negociável?",
    answer:
      "O valor pode ser negociado. Envie sua proposta diretamente ao proprietário pelo WhatsApp — ela será avaliada individualmente.",
  },
  {
    id: "itens-inclusos",
    question: "O que está incluído na venda do apartamento?",
    answer:
      "O apartamento é vendido com móveis planejados, cooktop e forno embutidos, cortinas e persianas, além de ar-condicionado. Consulte o proprietário para confirmar a relação completa dos itens inclusos.",
  },
  {
    id: "condominio-iptu",
    question: "Qual é o valor do condomínio e do IPTU?",
    answer: `O condomínio custa ${currencyFormatter.format(property.condoFee)} por mês e o IPTU é de ${currencyFormatter.format(property.iptu)} por ${property.iptuPeriod}.`,
  },
  {
    id: "agendar-visita",
    question: "Como faço para agendar uma visita?",
    answer:
      "As visitas são realizadas somente com acompanhamento de corretor. Entre em contato pelo WhatsApp para combinar uma data e um horário.",
  },
  {
    id: "data-mudanca",
    question: "Quando posso me mudar para o apartamento?",
    answer: "A entrega das chaves ocorre em até 30 dias após a finalização da venda.",
  },
  {
    id: "proposta",
    question: "Como faço uma proposta de compra?",
    answer:
      "Entre em contato pelo WhatsApp, informe seu interesse e apresente sua proposta. O proprietário poderá avaliar as condições de pagamento e os demais termos da negociação.",
  },
  {
    id: "permuta",
    question: "O apartamento aceita permuta por outro imóvel?",
    answer: "Não. O interesse do proprietário é apenas na venda do imóvel, sem permuta.",
  },
];
