interface SectionLabelProps {
  children: string;
  light?: boolean;
}

export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-semibold tracking-[0.2em] uppercase ${
        light ? "text-beige" : "text-gold"
      }`}
    >
      {children}
    </span>
  );
}
