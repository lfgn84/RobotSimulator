type Props = {
  radius: number;
  onRadius: (n: number) => void;
};

export default function CircleFields({ radius, onRadius }: Props) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-600">Radius</span>
      <input
        data-testid="radius"
        type="number"
        min={1}
        value={radius}
        onChange={(e) => onRadius(parseInt(e.target.value || "0", 10))}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
      />
    </label>
  );
}
