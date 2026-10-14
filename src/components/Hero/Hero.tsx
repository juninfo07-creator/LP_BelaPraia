import { Car, Home, LayoutGrid, MapPin, Play } from "lucide-react";
import { useState } from "react";
import { currencyFormatter, property } from "../../data/property";
import VideoModal from "../VideoModal/VideoModal";
import WhatsAppButton from "../ui/WhatsAppButton";

const HERO_IMAGE = "/images/sala-jantar-cozinha.jpg";

const stats = [
  {
    icon: Home,
    label: "Área privativa",
    value: `${property.details.area} m²`,
  },
  {
    icon: LayoutGrid,
    label: `Quartos${property.details.suites ? ` (${property.details.suites} suíte)` : ""}`,
    value: `${property.details.bedrooms}`,
  },
  {
    icon: Car,
    label: "Vagas de garagem",
    value: `${property.details.parkingSpots}`,
  },
  {
    icon: Home,
    label: property.details.floorView,
    value: `${property.details.floor}º andar`,
  },
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const scrollToGallery = () => {
    document.getElementById("fotos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-graphite">
      <img
        src={HERO_IMAGE}
        alt="Sala de jantar integrada à cozinha e à varanda, com luz natural"
        width={1448}
        height={1086}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/60 to-graphite/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pt-24">
        <div className="animate-fade-up max-w-xl">
          <span className="section-label">{property.hero.label}</span>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
            {property.hero.title}
          </h1>

          <p className="mt-4 flex items-center gap-2 text-sm text-beige/90">
            <MapPin size={16} className="text-gold" />
            {property.hero.neighborhood}, {property.hero.city} - {property.hero.state}
          </p>

          <p className="mt-3 text-3xl font-extrabold text-gold sm:text-4xl">
            {currencyFormatter.format(property.price)}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-2.5">
                <stat.icon size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.75} />
                <div>
                  <p className="text-base font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton messageKey="visit">Agendar uma visita</WhatsAppButton>
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ver fotos do apartamento
              <span aria-hidden>›</span>
            </button>
          </div>
        </div>

        {property.videoUrl && (
          <button
            onClick={() => setVideoOpen(true)}
            className="group absolute bottom-24 right-6 hidden items-center gap-3 lg:flex xl:right-12"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/40 transition-transform group-hover:scale-105">
              <Play size={20} className="ml-0.5 fill-white text-white" />
            </span>
            <span className="max-w-[9rem] text-left text-sm font-medium text-white">
              Assista ao vídeo do apartamento
            </span>
          </button>
        )}
      </div>

      {videoOpen && property.videoUrl && (
        <VideoModal videoUrl={property.videoUrl} onClose={() => setVideoOpen(false)} />
      )}
    </section>
  );
}
