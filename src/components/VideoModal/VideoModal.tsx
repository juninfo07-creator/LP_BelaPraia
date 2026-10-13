import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

function toEmbedUrl(url: string): string {
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`;

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;

  return url;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isDirectVideo = /\.(mp4|webm|ogg)$/i.test(videoUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vídeo do apartamento"
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        aria-label="Fechar vídeo"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <X size={24} />
      </button>

      <div
        className="aspect-video w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {isDirectVideo ? (
          <video src={videoUrl} controls autoPlay className="h-full w-full" />
        ) : (
          <iframe
            src={toEmbedUrl(videoUrl)}
            title="Vídeo do apartamento"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        )}
      </div>
    </div>
  );
}
