import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryPhotos, roomLabels, type GalleryPhoto, type Room } from "../../data/gallery";

interface LightboxProps {
  initialPhotoId: string;
  onClose: () => void;
}

const availableRooms = Array.from(new Set(galleryPhotos.map((p) => p.room))) as Room[];

export default function Lightbox({ initialPhotoId, onClose }: LightboxProps) {
  const [room, setRoom] = useState<Room | "todos">("todos");

  const filtered: GalleryPhoto[] = useMemo(
    () => (room === "todos" ? galleryPhotos : galleryPhotos.filter((p) => p.room === room)),
    [room],
  );

  const [index, setIndex] = useState(() => {
    const i = filtered.findIndex((p) => p.id === initialPhotoId);
    return i >= 0 ? i : 0;
  });

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(filtered.length - 1, 0)));
  }, [filtered.length]);

  const goNext = () => setIndex((i) => (i + 1) % filtered.length);
  const goPrev = () => setIndex((i) => (i - 1 + filtered.length) % filtered.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered.length]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    if (delta < -50) goNext();
    touchStartX.current = null;
  };

  const current = filtered[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos do apartamento"
      className="animate-fade-in fixed inset-0 z-[100] flex flex-col bg-graphite/98 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setRoom("todos")}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              room === "todos" ? "bg-gold text-graphite" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Todos
          </button>
          {availableRooms.map((r) => (
            <button
              key={r}
              onClick={() => setRoom(r)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                room === r ? "bg-gold text-graphite" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {roomLabels[r]}
            </button>
          ))}
        </div>

        <button
          aria-label="Fechar galeria"
          onClick={onClose}
          className="shrink-0 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
        >
          <X size={22} />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-2 pb-6 sm:px-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          aria-label="Foto anterior"
          onClick={goPrev}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-4 sm:block sm:p-3"
        >
          <ChevronLeft size={24} />
        </button>

        <figure className="flex max-h-full max-w-full flex-col items-center gap-3">
          <img
            key={current.id}
            src={current.src}
            alt={current.alt}
            className="animate-fade-in max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[78vh]"
          />
          {current.caption && (
            <figcaption className="text-center text-sm text-white/80">{current.caption}</figcaption>
          )}
        </figure>

        <button
          aria-label="Próxima foto"
          onClick={goNext}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-4 sm:block sm:p-3"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-6 pb-6 sm:hidden">
        <button
          aria-label="Foto anterior"
          onClick={goPrev}
          className="rounded-full bg-white/10 p-3 text-white"
        >
          <ChevronLeft size={22} />
        </button>
        <span className="text-sm font-medium text-white/80">
          {index + 1} / {filtered.length}
        </span>
        <button
          aria-label="Próxima foto"
          onClick={goNext}
          className="rounded-full bg-white/10 p-3 text-white"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <p className="hidden pb-5 text-center text-sm font-medium text-white/60 sm:block">
        {index + 1} / {filtered.length}
      </p>
    </div>
  );
}
