import { CalendarCheck, HelpCircle, UserCheck } from "lucide-react";
import WhatsAppButton from "../ui/WhatsAppButton";

const CTA_IMAGE = "/images/varanda-mesa-cidade.jpg";

const benefits = [
  { icon: UserCheck, text: "Contato direto com o proprietário" },
  { icon: HelpCircle, text: "Tire suas dúvidas" },
  { icon: CalendarCheck, text: "Agende uma visita" },
];

export default function ContactCTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 sm:py-28">
      <img
        src={CTA_IMAGE}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-graphite/85" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <span className="section-label">VAMOS CONVERSAR?</span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Quer saber mais ou agendar uma visita?
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
          Tire suas dúvidas e agende uma visita para conhecer o apartamento pessoalmente. Será um
          prazer te atender!
        </p>

        <div className="mt-8">
          <WhatsAppButton variant="solid-green" messageKey="doubts" className="!px-8 !py-3.5 !text-base">
            Falar agora no WhatsApp
          </WhatsAppButton>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {benefits.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm text-white/80">
              <b.icon size={17} className="text-gold" />
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
