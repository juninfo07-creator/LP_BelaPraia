import {
  Dumbbell,
  Fuel,
  Gamepad2,
  Laptop,
  PartyPopper,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Thermometer,
  UtensilsCrossed,
  Waves,
  WashingMachine,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { property } from "../../data/property";
import SectionLabel from "../ui/SectionLabel";

const iconMap: Record<string, LucideIcon> = {
  pool: Waves,
  gym: Dumbbell,
  party: PartyPopper,
  gourmet: UtensilsCrossed,
  concierge: ShieldCheck,
  sauna: Thermometer,
  bbq: Flame,
  coworking: Laptop,
  beauty: Sparkles,
  games: Gamepad2,
  laundry: WashingMachine,
  market: ShoppingBasket,
  gas: Fuel,
};

export default function Condominium() {
  const confirmed = property.amenities.filter((a) => a.confirmed);
  const withPhoto = confirmed.filter((a) => a.image);
  const rest = confirmed.filter((a) => !a.image);

  return (
    <div className="animate-fade-up">
      <SectionLabel>{property.condominium.label}</SectionLabel>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
        {property.condominium.title}
      </h2>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        {property.condominium.description}
      </p>

      {withPhoto.length > 0 && (
        <div className="mt-8 grid grid-cols-2 gap-3">
          {withPhoto.map((amenity, i) => {
            const Icon = iconMap[amenity.icon] ?? Waves;
            const isLast = i === withPhoto.length - 1 && withPhoto.length % 2 !== 0;
            return (
              <div
                key={amenity.id}
                className={`group relative h-40 overflow-hidden rounded-2xl ${
                  isLast ? "col-span-2" : ""
                }`}
              >
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm font-semibold text-white">
                  <Icon size={15} className="text-gold" />
                  {amenity.name}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
          {rest.map((amenity) => {
            const Icon = iconMap[amenity.icon] ?? Waves;
            return (
              <div key={amenity.id} className="flex items-center gap-2 text-sm text-ink">
                <Icon size={16} className="shrink-0 text-gold" strokeWidth={1.75} />
                {amenity.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
