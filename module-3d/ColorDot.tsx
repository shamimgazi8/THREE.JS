interface Props {
  color: string;
  selected: boolean;
}

export default function ColorDot({ color, selected }: Props) {
  return (
    <button
      className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
        selected ? "border-white scale-110" : "border-transparent"
      }`}
      style={{ backgroundColor: color }}
    />
  );
}
