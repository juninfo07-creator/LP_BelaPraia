import {
  CookingPot,
  Flame,
  Lightbulb,
  Microwave,
  MirrorRectangular,
  PanelTop,
  Shirt,
  Table2,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { property, type IncludedItemStatus } from "../../data/property";

const iconMap: Record<string, LucideIcon> = {
  wardrobe: Shirt,
  cooktop: Flame,
  ac: Wind,
  light: Lightbulb,
  mirror: MirrorRectangular,
  curtain: PanelTop,
  table: Table2,
  stove: CookingPot,
  oven: Microwave,
  induction: Zap,
};

const statusLabel: Record<IncludedItemStatus, string> = {
  incluido: "Incluído",
  nao_incluido: "Não incluído",
  negociavel: "Negociável",
};

const statusClasses: Record<IncludedItemStatus, string> = {
  incluido: "bg-gold/15 text-graphite",
  nao_incluido: "bg-black/5 text-muted",
  negociavel: "bg-beige text-graphite",
};

export default function IncludedItems() {
  const items = property.includedItems.filter((item) => item.confirmed);

  if (items.length === 0) return null;

  return (
    <section id="itens" className="scroll-mt-20 bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-label">TUDO O QUE FICA NO APARTAMENTO</span>
          <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Itens inclusos na negociação.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            O apartamento será vendido com diversos itens inclusos, proporcionando mais
            praticidade e economia para você.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? Table2;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-7 text-center shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-graphite">
                  <Icon size={20} className="text-gold" strokeWidth={1.5} />
                </span>
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                {item.description && (
                  <p className="text-xs text-muted">{item.description}</p>
                )}
                {item.status !== "incluido" && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusClasses[item.status]}`}
                  >
                    {statusLabel[item.status]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
