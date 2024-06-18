export default function Icon({ name, px = 24, weight = 400 }) {
  return (
    <span
      className={`material-symbols-outlined`}
      style={{
        fontSize: `${px}px`, // lassNameで指定するとCSSが適用されないことがあるためstyleで指定する
        fontVariationSettings: `"FILL" 0, "wght" ${weight}, "GRAD" 0, "opsz" 24`,
      }}
    >
      {name}
    </span>
  );
}
