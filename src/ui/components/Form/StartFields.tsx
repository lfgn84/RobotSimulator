type Props = {
  x: number;
  y: number;
  onX: (n: number) => void;
  onY: (n: number) => void;
};

export default function StartFields({ x, y, onX, onY }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-1">
        <span className="text-sm text-slate-600">Start X</span>
        <input
          data-testid="start-x"
          type="number"
          value={x}
          onChange={(e) => onX(parseInt(e.target.value || "0", 10))}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm text-slate-600">Start Y</span>
        <input
          data-testid="start-y"
          type="number"
          value={y}
          onChange={(e) => onY(parseInt(e.target.value || "0", 10))}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </label>
    </div>
  );
}
