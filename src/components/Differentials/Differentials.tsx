import { FileCheck, Gem, MapPin, Shield, Sofa, type LucideIcon } from "lucide-react";
import { property } from "../../data/property";

const iconMap: Record<string, LucideIcon> = {
  gem: Gem,
  "map-pin": MapPin,
  shield: Shield,
  sofa: Sofa,
  "file-check": FileCheck,
};

export default function Differentials() {
  return (
    <section className="border-y border-black/5 bg-white py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {property.differentials.map((item) => {
            const Icon = iconMap[item.icon] ?? Gem;
            return (
              <div key={item.id} className="flex items-center gap-3">
                <Icon size={22} className="shrink-0 text-gold" strokeWidth={1.5} />
                <p className="text-sm font-medium text-ink">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
