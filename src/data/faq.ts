/**
 * PERGUNTAS FREQUENTES (FAQ)
 * ----------------------------
 * Edite, adicione, remova ou reordene as perguntas abaixo — a ordem da lista
 * é a ordem de exibição no site. Mantenha os `id` únicos e estáveis.
 */

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
    answer: "Sim, a documentação do imóvel está regularizada.",
  },
  {
    id: "negociacao",
    question: "O valor anunciado é negociável?",
    answer:
      "O valor pode ser negociado. Envie sua proposta ao corretor pelo WhatsApp — ela será avaliada individualmente.",
  },
  {
    id: "itens-inclusos",
    question: "O que está incluído na venda do apartamento?",
    answer:
      "O apartamento é vendido pronto para morar, com guarda-roupa embutido com cabeceira, armários planejados na cozinha, cooktop, mesa para 4 lugares e iluminação em LED. Consulte o corretor para confirmar a relação completa dos itens inclusos.",
  },
  {
    id: "agendar-visita",
    question: "Como faço para agendar uma visita?",
    answer:
      "As visitas são realizadas somente com acompanhamento de corretor. Entre em contato pelo WhatsApp para combinar uma data e um horário.",
  },
  {
    id: "proposta",
    question: "Como faço uma proposta de compra?",
    answer:
      "Entre em contato pelo WhatsApp, informe seu interesse e apresente sua proposta ao corretor. Ele encaminhará ao proprietário para avaliação das condições de pagamento e dos demais termos da negociação.",
  },
  {
    id: "permuta",
    question: "O apartamento aceita permuta por outro imóvel?",
    answer: "Não. O interesse do proprietário é apenas na venda do imóvel, sem permuta.",
  },
];
