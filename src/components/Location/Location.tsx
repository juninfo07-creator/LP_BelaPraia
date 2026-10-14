import { ExternalLink, MapPin } from "lucide-react";
import { property } from "../../data/property";
import SectionLabel from "../ui/SectionLabel";

export default function Location() {
  const { location, developmentName } = property;
  const hasMapLink = location.googleMapsUrl.trim().length > 0;
  const coords = location.coordinates;
  const mapQuery = encodeURIComponent(`${developmentName}, ${location.addressLabel}`);

  return (
    <div className="animate-fade-up">
      <SectionLabel>{location.label}</SectionLabel>
      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
        {location.title}
      </h3>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
        {location.description}
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-black/5 bg-white">
        {coords ? (
          <iframe
            title="Localização do imóvel no Google Maps"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            className="aspect-[4/3] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center bg-[radial-gradient(circle_at_center,_#f1d2a7_0%,_#f8f7f4_70%)]">
            {location.addressLabel && (
              <div className="flex flex-col items-center gap-1 px-6 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-graphite">
                  <MapPin size={18} className="text-gold" />
                </span>
                <p className="mt-2 text-sm font-semibold text-ink">{location.addressLabel}</p>
                <p className="mt-1 text-xs text-muted">
                  Mapa disponível em breve — endereço exato a confirmar com o corretor.
                </p>
              </div>
            )}
          </div>
        )}

        {hasMapLink && (
          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-black/5 py-3.5 text-sm font-semibold text-ink transition-colors hover:text-gold"
          >
            <ExternalLink size={16} />
            Ver no Google Maps
          </a>
        )}
      </div>
    </div>
  );
}
