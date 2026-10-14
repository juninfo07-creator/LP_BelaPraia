import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { property } from "../../data/property";
import WhatsAppButton from "../ui/WhatsAppButton";

const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre o apartamento" },
  { id: "fotos", label: "Fotos" },
  { id: "condominio", label: "Condomínio" },
  { id: "localizacao", label: "Localização" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-graphite shadow-md" : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("inicio");
          }}
          className="flex items-center gap-2.5 text-white"
        >
          <span className="flex h-9 shrink-0 items-center rounded-lg bg-white px-1.5">
            <img src="/logo-santana-imoveis.png" alt="Santana Imóveis" className="h-6 w-auto" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.25em] text-beige/80">
              Residencial
            </span>
            <span className="text-sm font-bold tracking-wide sm:text-base">
              {property.developmentName.replace("Residencial ", "")}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton messageKey="default" className="!py-2.5 !text-xs">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>

        <button
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-md p-2 text-white lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-graphite px-5 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="rounded-lg px-3 py-3 text-left text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2">
            <WhatsAppButton className="w-full">Falar no WhatsApp</WhatsAppButton>
          </div>
        </nav>
      )}
    </header>
  );
}
