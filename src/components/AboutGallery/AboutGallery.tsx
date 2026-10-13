import { Images } from "lucide-react";
import { useState } from "react";
import { galleryPhotos } from "../../data/gallery";
import { property } from "../../data/property";
import Lightbox from "../Lightbox/Lightbox";
import SectionLabel from "../ui/SectionLabel";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function AboutGallery() {
  const [lightboxPhotoId, setLightboxPhotoId] = useState<string | null>(null);

  const featured = galleryPhotos.filter((p) => p.featured);
  const [main, ...rest] = featured;
  const small = rest.slice(0, 3);

  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="animate-fade-up">
          <SectionLabel>{property.about.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            {property.about.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            {property.about.description}
          </p>
          <div className="mt-8">
            <WhatsAppButton messageKey="visit">Agendar uma visita pelo WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div id="fotos" className="scroll-mt-24">
          <div className="grid h-[28rem] grid-cols-2 grid-rows-1 gap-3 sm:h-[32rem]">
            {main && (
              <button
                onClick={() => setLightboxPhotoId(main.id)}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={main.src}
                  alt={main.alt}
                  loading="lazy"
                  style={{ objectPosition: main.focal ?? "center" }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            )}

            <div className="grid grid-rows-3 gap-3">
              {small.map((photo, i) => {
                const isLast = i === small.length - 1;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setLightboxPhotoId(photo.id)}
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      style={{ objectPosition: photo.focal ?? "center" }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {isLast && (
                      <span className="absolute inset-0 flex items-center justify-center gap-2 bg-graphite/60 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <Images size={16} />
                        Ver todas as fotos
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setLightboxPhotoId(galleryPhotos[0].id)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-graphite/15 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <Images size={16} />
            Ver todas as fotos ({galleryPhotos.length})
          </button>
        </div>
      </div>

      {lightboxPhotoId && (
        <Lightbox initialPhotoId={lightboxPhotoId} onClose={() => setLightboxPhotoId(null)} />
      )}
    </section>
  );
}
