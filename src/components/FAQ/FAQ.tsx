import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { faqItems } from "../../data/faq";
import SectionLabel from "../ui/SectionLabel";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[880px] px-5 sm:px-8">
        <div className="animate-fade-up text-center">
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <h2
            id="faq-heading"
            className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl"
          >
            Tudo o que você precisa saber antes de comprar.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Reunimos as principais informações para ajudar você a conhecer melhor o apartamento e
            avançar com segurança na sua decisão.
          </p>
        </div>

        <div className="mt-10 border-t border-divider sm:mt-14">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-question-${item.id}`;
            const panelId = `faq-answer-${item.id}`;

            return (
              <div key={item.id} className="border-b border-divider">
                <h3 className="text-base">
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={`flex min-h-[44px] w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:text-lg ${
                      isOpen ? "text-gold-dark" : "text-ink hover:text-gold-dark"
                    }`}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      size={20}
                      className={`shrink-0 text-gold transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-muted sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-up mt-12 flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-surface px-6 py-10 text-center sm:mt-16 sm:px-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-beige">
            <MessageCircle size={20} className="text-gold-dark" strokeWidth={1.75} />
          </span>
          <h3 className="text-xl font-extrabold text-ink">Ainda tem alguma dúvida?</h3>
          <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Fale diretamente com o proprietário para receber mais informações sobre o apartamento.
          </p>
          <WhatsAppButton messageKey="faq" variant="solid-green" className="mt-2 w-full sm:w-auto">
            Falar pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
