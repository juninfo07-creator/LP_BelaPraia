import { MessageCircle } from "lucide-react";
import { getWhatsappUrl, isWhatsappConfigured } from "../../utils/whatsapp";

export default function WhatsAppFloat() {
  const url = getWhatsappUrl("default");

  if (!isWhatsappConfigured) return null;

  return (
    <a
      href={url!}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:hidden"
    >
      <MessageCircle size={26} className="fill-white/15" />
    </a>
  );
}
