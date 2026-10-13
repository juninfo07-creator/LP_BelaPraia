import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { getWhatsappUrl, isWhatsappConfigured, type WhatsappMessageKey } from "../../utils/whatsapp";

interface WhatsAppButtonProps {
  messageKey?: WhatsappMessageKey;
  children: ReactNode;
  variant?: "solid-gold" | "solid-green" | "outline";
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  "solid-gold":
    "bg-gold text-graphite hover:bg-gold-light focus-visible:outline-gold",
  "solid-green":
    "bg-[#25D366] text-white hover:bg-[#1fb857] focus-visible:outline-[#25D366]",
  outline:
    "border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white",
};

export default function WhatsAppButton({
  messageKey = "default",
  children,
  variant = "solid-gold",
  className = "",
  icon,
}: WhatsAppButtonProps) {
  const url = getWhatsappUrl(messageKey);

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  if (!isWhatsappConfigured) {
    return (
      <span
        title="Configure o número de WhatsApp em src/data/property.ts"
        className={`${baseClasses} ${variantClasses[variant]} cursor-not-allowed opacity-50 ${className}`}
      >
        {icon ?? <MessageCircle size={18} />}
        {children}
      </span>
    );
  }

  return (
    <a
      href={url!}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon ?? <MessageCircle size={18} />}
      {children}
    </a>
  );
}
