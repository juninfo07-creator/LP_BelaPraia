import { Building2 } from "lucide-react";
import { property } from "../../data/property";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-graphite pt-14 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 shrink-0 items-center rounded-lg bg-white px-2">
              <img src="/logo-santana-imoveis.png" alt="Santana Imóveis" className="h-7 w-auto" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Santana Imóveis</p>
              <p className="text-xs text-white/50">CRECI C.J. 28.032</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2.5 text-white">
            <Building2 size={20} className="text-gold" strokeWidth={1.75} />
            <span className="text-base font-bold">{property.developmentName}</span>
          </div>
          <p className="mt-2 text-sm text-white/60">
            {property.hero.neighborhood}, {property.hero.city} - {property.hero.state}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-white/70 transition-colors hover:text-gold"
          >
            Voltar ao início
          </button>
          <WhatsAppButton className="!py-2.5 !text-xs">Falar no WhatsApp</WhatsAppButton>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 sm:px-8">
        <p className="text-xs leading-relaxed text-white/40">{property.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
