/**
 * PERGUNTAS FREQUENTES (FAQ)
 * ----------------------------
 * Edite, adicione, remova ou reordene as perguntas abaixo — a ordem da lista
 * é a ordem de exibição no site. Mantenha os `id` únicos e estáveis.
 *
 * As respostas abaixo são genéricas de propósito: evite declarar que a
 * documentação está regularizada, que existe financiamento aprovado ou
 * qualquer condição comercial específica sem confirmação do proprietário.
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
      "A possibilidade de financiamento depende da documentação do imóvel e da análise da instituição financeira. Entre em contato para confirmar as condições disponíveis.",
  },
  {
    id: "documentacao",
    question: "A documentação do imóvel está regularizada?",
    answer:
      "A situação documental deve ser confirmada antes da negociação. Entre em contato diretamente para obter informações sobre a documentação disponível.",
  },
  {
    id: "negociacao",
    question: "O valor anunciado é negociável?",
    answer:
      "Propostas podem ser apresentadas diretamente ao proprietário pelo WhatsApp e serão avaliadas individualmente.",
  },
  {
    id: "itens-inclusos",
    question: "O que está incluído na venda do apartamento?",
    answer:
      "Os móveis planejados, equipamentos e demais itens incluídos serão informados na negociação. Consulte o proprietário para confirmar a relação definitiva dos itens que permanecerão no imóvel.",
  },
  {
    id: "condominio-iptu",
    question: "Qual é o valor do condomínio e do IPTU?",
    answer:
      "Os valores atualizados do condomínio e do IPTU podem ser consultados diretamente com o proprietário. Confirme também a existência de eventuais cobranças extraordinárias.",
  },
  {
    id: "agendar-visita",
    question: "Como faço para agendar uma visita?",
    answer:
      "É simples: entre em contato pelo WhatsApp para combinar uma data e um horário. Assim, você poderá conhecer os ambientes e avaliar os detalhes do apartamento pessoalmente.",
  },
  {
    id: "data-mudanca",
    question: "Quando posso me mudar para o apartamento?",
    answer:
      "A disponibilidade para ocupação e a entrega das chaves deverão ser acordadas com o proprietário, considerando as condições da negociação.",
  },
  {
    id: "proposta",
    question: "Como faço uma proposta de compra?",
    answer:
      "Entre em contato pelo WhatsApp, informe seu interesse e apresente sua proposta. O proprietário poderá avaliar as condições de pagamento e os demais termos da negociação.",
  },
];
