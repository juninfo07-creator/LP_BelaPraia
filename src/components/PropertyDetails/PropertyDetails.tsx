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
import { currencyFormatter, property } from "../../data/property";

const d = property.details;

const technicalItems = [
  { icon: Home, label: "Área privativa", value: `${d.area} m²` },
  {
    icon: BedDouble,
    label: "Quartos e suítes",
    value: `${d.bedrooms} quartos${d.suites ? ` (${d.suites} suíte)` : ""}`,
  },
  { icon: Bath, label: "Banheiros", value: `${d.bathrooms} banheiros` },
  { icon: ParkingIcon, label: "Vagas de garagem", value: `${d.parkingSpots} vagas` },
  { icon: Building2, label: "Andar e vista", value: `${d.floor}º andar · ${d.floorView}` },
  { icon: Sun, label: "Posição solar", value: d.sunPosition },
  { icon: MoveVertical, label: "Elevadores", value: d.elevators },
];

const summaryItems = [
  { icon: Coins, label: "Valor", value: currencyFormatter.format(property.price) },
  { icon: Receipt, label: "Condomínio", value: `${currencyFormatter.format(property.condoFee)}/mês` },
  { icon: FileText, label: "IPTU", value: `${currencyFormatter.format(property.iptu)}/${property.iptuPeriod}` },
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
          Dados demonstrativos. Valores e informações devem ser confirmados com o proprietário.
        </p>
      </div>
    </section>
  );
}
