import {
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Coins,
  FileText,
  Home,
  MoveVertical,
  Car as ParkingIcon,
  Receipt,
  Sun,
} from "lucide-react";
import { areaFormatter, currencyFormatter, property } from "../../data/property";

const d = property.details;

const technicalItems = [
  { icon: Home, label: "Área privativa", value: `${areaFormatter.format(d.area)} m²` },
  {
    icon: BedDouble,
    label: "Quartos e suítes",
    value: `${d.bedrooms} ${d.bedrooms === 1 ? "quarto" : "quartos"}${d.suites ? ` (${d.suites} suíte)` : ""}`,
  },
  {
    icon: Bath,
    label: "Banheiros",
    value: `${d.bathrooms} ${d.bathrooms === 1 ? "banheiro" : "banheiros"}`,
  },
  {
    icon: ParkingIcon,
    label: "Vagas de garagem",
    value: `${d.parkingSpots} ${d.parkingSpots === 1 ? "vaga" : "vagas"}`,
  },
  {
    icon: Building2,
    label: d.floorView ? "Andar e vista" : "Andar",
    value: d.floorView ? `${d.floor}º andar · ${d.floorView}` : `${d.floor}º andar`,
  },
  { icon: Sun, label: "Posição solar", value: d.sunPosition },
  { icon: MoveVertical, label: d.elevators, value: "Elevadores" },
];

const summaryItems = [
  { icon: Coins, label: "Valor", value: currencyFormatter.format(property.price) },
  ...(property.condoFee > 0
    ? [{ icon: Receipt, label: "Condomínio", value: `${currencyFormatter.format(property.condoFee)}/mês` }]
    : []),
  ...(property.iptu > 0
    ? [{ icon: FileText, label: "IPTU", value: `${currencyFormatter.format(property.iptu)}/${property.iptuPeriod}` }]
    : []),
  { icon: CheckCircle2, label: "Status", value: property.status },
];

export default function PropertyDetails() {
  return (
    <section id="detalhes" className="scroll-mt-20 bg-graphite py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="section-label">DETALHES DO APARTAMENTO</span>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-4">
          {technicalItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold text-white">{item.value}</p>
                <p className="text-xs text-white/55">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {summaryItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon size={22} className="shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/40">
          Dados demonstrativos. Valores e informações devem ser confirmados com o corretor.
        </p>
      </div>
    </section>
  );
}
