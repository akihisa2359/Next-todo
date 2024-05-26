export default function Icon({ name, px = 24, weight = 400 }) {
  const fontSize = `text-[${px}px]`;
  return (
    <span
      className={`material-symbols-outlined ${fontSize}`}
      style={{
        fontVariationSettings: `"FILL" 0, "wght" ${weight}, "GRAD" 0, "opsz" 24`,
      }}
    >
      {name}
    </span>
  );
}
